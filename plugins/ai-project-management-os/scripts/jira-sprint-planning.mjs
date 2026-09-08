#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import readline from "node:readline/promises";

const SCHEMA_VERSION = "1.0.0";
const ISSUE_TYPES = new Set(["Epic", "Story", "Task", "Bug", "Spike", "Sub-task"]);
const STATUS_CATEGORIES = new Set(["To Do", "In Progress", "Done"]);

function fail(message) {
  throw new Error(message);
}

function parseArguments(argv) {
  const [command, ...rest] = argv;
  if (!new Set(["import", "plan", "approve", "export"]).has(command)) {
    fail("Usage: jira-sprint-planning.mjs <import|plan|approve|export> --input <file> [options]");
  }
  const options = {};
  for (let index = 0; index < rest.length; index += 2) {
    const key = rest[index];
    const value = rest[index + 1];
    if (!key?.startsWith("--") || value === undefined || options[key]) {
      fail("Arguments must use unique --name value pairs");
    }
    options[key] = value;
  }
  return { command, options };
}

function required(options, key) {
  if (!options[key] || options[key].startsWith("--")) fail(`Missing ${key}`);
  return path.resolve(options[key]);
}

function assertRegularFile(file, label) {
  const stat = fs.lstatSync(file);
  if (!stat.isFile() || stat.isSymbolicLink()) fail(`${label} must be a regular file`);
}

function readJson(file, label) {
  assertRegularFile(file, label);
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(`Invalid ${label}: ${error.message}`);
  }
}

function writeJson(file, value) {
  const destination = path.resolve(file);
  if (fs.existsSync(destination)) fail(`Refusing to overwrite existing output: ${destination}`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx", mode: 0o600 });
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function string(value, label, { optional = false, maximum = 500 } = {}) {
  if (value === undefined && optional) return;
  if (typeof value !== "string" || !value.trim() || value.length > maximum || /[\0\r\n]/.test(value)) {
    fail(`${label} must be a non-empty single-line string of at most ${maximum} characters`);
  }
}

function finiteNonNegative(value, label, { optional = false, maximum = 1000000 } = {}) {
  if (value === undefined && optional) return;
  if (!Number.isFinite(value) || value < 0 || value > maximum) fail(`${label} must be a number from 0 to ${maximum}`);
}

function ratio(value, label, { optional = false } = {}) {
  if (value === undefined && optional) return;
  if (!Number.isFinite(value) || value < 0 || value > 1) fail(`${label} must be a number from 0 to 1`);
}

function assertIsoDate(value, label, { optional = false } = {}) {
  if (value === undefined && optional) return;
  string(value, label, { maximum: 64 });
  if (Number.isNaN(Date.parse(value))) fail(`${label} must be an ISO-8601 date or timestamp`);
}

function assertObject(value, label) {
  if (!value || Array.isArray(value) || typeof value !== "object") fail(`${label} must be an object`);
}

function assertKnownFields(value, allowed, label) {
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) fail(`${label} contains unsupported field: ${key}`);
  }
}

function validatePlanningInput(value, { snapshot = false } = {}) {
  assertObject(value, "Jira planning input");
  assertKnownFields(value, new Set([
    "schemaVersion", "source", "team", "sprintHistory", "backlog",
    ...(snapshot ? ["kind", "importedAt"] : [])
  ]), "Jira planning input");
  if (value.schemaVersion !== SCHEMA_VERSION) fail(`schemaVersion must be ${SCHEMA_VERSION}`);
  assertObject(value.source, "source");
  assertKnownFields(value.source, new Set(["system", "observedAt", "boardId", "projectKey", "queryReference"]), "source");
  if (value.source.system !== "Jira") fail("source.system must be Jira");
  assertIsoDate(value.source.observedAt, "source.observedAt");
  string(value.source.boardId, "source.boardId", { optional: true, maximum: 120 });
  string(value.source.projectKey, "source.projectKey", { optional: true, maximum: 120 });
  string(value.source.queryReference, "source.queryReference", { optional: true, maximum: 500 });

  assertObject(value.team, "team");
  assertKnownFields(value.team, new Set(["id", "members", "availabilityRatio", "knownNonDeliveryLoad", "operatingBuffer", "planningPointLimit", "capacityObservationAt"]), "team");
  string(value.team.id, "team.id", { maximum: 120 });
  if (!Array.isArray(value.team.members) || value.team.members.length === 0 || value.team.members.length > 100) {
    fail("team.members must contain 1 to 100 members");
  }
  const memberIds = new Set();
  for (const [index, member] of value.team.members.entries()) {
    assertObject(member, `team.members[${index}]`);
    assertKnownFields(member, new Set(["id", "role", "availabilityRatio"]), `team.members[${index}]`);
    string(member.id, `team.members[${index}].id`, { maximum: 120 });
    if (memberIds.has(member.id)) fail(`team.members[${index}].id is duplicated`);
    memberIds.add(member.id);
    string(member.role, `team.members[${index}].role`, { optional: true, maximum: 120 });
    ratio(member.availabilityRatio, `team.members[${index}].availabilityRatio`, { optional: true });
  }
  ratio(value.team.availabilityRatio, "team.availabilityRatio", { optional: true });
  ratio(value.team.knownNonDeliveryLoad, "team.knownNonDeliveryLoad", { optional: true });
  ratio(value.team.operatingBuffer, "team.operatingBuffer", { optional: true });
  finiteNonNegative(value.team.planningPointLimit, "team.planningPointLimit", { optional: true });
  assertIsoDate(value.team.capacityObservationAt, "team.capacityObservationAt", { optional: true });

  if (!Array.isArray(value.sprintHistory) || value.sprintHistory.length > 100) fail("sprintHistory must contain at most 100 records");
  const sprintIds = new Set();
  for (const [index, sprint] of value.sprintHistory.entries()) {
    assertObject(sprint, `sprintHistory[${index}]`);
    assertKnownFields(sprint, new Set(["id", "name", "completedAt", "committedPoints", "completedPoints", "teamComparable", "definitionOfDoneComparable", "scopeChangedPoints"]), `sprintHistory[${index}]`);
    string(sprint.id, `sprintHistory[${index}].id`, { maximum: 120 });
    if (sprintIds.has(sprint.id)) fail(`sprintHistory[${index}].id is duplicated`);
    sprintIds.add(sprint.id);
    string(sprint.name, `sprintHistory[${index}].name`, { optional: true, maximum: 250 });
    assertIsoDate(sprint.completedAt, `sprintHistory[${index}].completedAt`);
    finiteNonNegative(sprint.committedPoints, `sprintHistory[${index}].committedPoints`);
    finiteNonNegative(sprint.completedPoints, `sprintHistory[${index}].completedPoints`);
    finiteNonNegative(sprint.scopeChangedPoints, `sprintHistory[${index}].scopeChangedPoints`, { optional: true });
    if (typeof sprint.teamComparable !== "boolean" || typeof sprint.definitionOfDoneComparable !== "boolean") {
      fail(`sprintHistory[${index}] comparability flags must be boolean`);
    }
  }

  if (!Array.isArray(value.backlog) || value.backlog.length > 1000) fail("backlog must contain at most 1000 records");
  const workItemKeys = new Set();
  for (const [index, item] of value.backlog.entries()) {
    assertObject(item, `backlog[${index}]`);
    assertKnownFields(item, new Set(["key", "summary", "issueType", "statusCategory", "priorityRank", "estimatePoints", "ready", "blocked", "parentKey", "dependsOn"]), `backlog[${index}]`);
    string(item.key, `backlog[${index}].key`, { maximum: 120 });
    if (workItemKeys.has(item.key)) fail(`backlog[${index}].key is duplicated`);
    workItemKeys.add(item.key);
    string(item.summary, `backlog[${index}].summary`, { maximum: 500 });
    if (!ISSUE_TYPES.has(item.issueType)) fail(`backlog[${index}].issueType is unsupported`);
    if (!STATUS_CATEGORIES.has(item.statusCategory)) fail(`backlog[${index}].statusCategory is unsupported`);
    finiteNonNegative(item.priorityRank, `backlog[${index}].priorityRank`);
    finiteNonNegative(item.estimatePoints, `backlog[${index}].estimatePoints`, { optional: true });
    if (typeof item.ready !== "boolean" || typeof item.blocked !== "boolean") fail(`backlog[${index}] ready and blocked must be boolean`);
    string(item.parentKey, `backlog[${index}].parentKey`, { optional: true, maximum: 120 });
    if (item.dependsOn !== undefined && (!Array.isArray(item.dependsOn) || item.dependsOn.some((key) => typeof key !== "string" || !key.trim()))) {
      fail(`backlog[${index}].dependsOn must be an array of keys`);
    }
  }
}

function percentile(sorted, percentileValue) {
  if (sorted.length === 0) return null;
  const position = (sorted.length - 1) * percentileValue;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  return Number((sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower)).toFixed(2));
}

function calculateVelocity(snapshot) {
  const comparable = snapshot.sprintHistory
    .filter((sprint) => sprint.teamComparable && sprint.definitionOfDoneComparable)
    .sort((left, right) => Date.parse(left.completedAt) - Date.parse(right.completedAt));
  const values = comparable.map((sprint) => sprint.completedPoints).sort((left, right) => left - right);
  if (values.length < 3) {
    return {
      status: "insufficient-evidence",
      sampleSize: values.length,
      values,
      message: "At least three comparable completed sprints are required before velocity can bound a sprint recommendation."
    };
  }
  return {
    status: "observed",
    sampleSize: values.length,
    values,
    lower: percentile(values, 0.25),
    central: percentile(values, 0.5),
    upper: percentile(values, 0.75),
    sourceSprintIds: comparable.map((sprint) => sprint.id)
  };
}

function capacityLimit(team, velocity) {
  const factors = [team.availabilityRatio, team.knownNonDeliveryLoad, team.operatingBuffer];
  if (factors.some((factor) => factor === undefined)) {
    return { status: "incomplete", message: "Availability, known non-delivery load, and operating buffer are all required to adjust historical velocity." };
  }
  const availabilityFactor = team.availabilityRatio * (1 - team.knownNonDeliveryLoad) * (1 - team.operatingBuffer);
  const velocityBound = velocity.status === "observed" ? Number((velocity.lower * availabilityFactor).toFixed(2)) : null;
  const explicitLimit = team.planningPointLimit;
  const recommendedLimit = velocityBound === null
    ? null
    : [velocityBound, explicitLimit].filter((value) => value !== null && value !== undefined).sort((a, b) => a - b)[0];
  return {
    status: recommendedLimit === null ? "insufficient-evidence" : "observed",
    availabilityFactor: Number(availabilityFactor.toFixed(4)),
    velocityBound,
    explicitLimit: explicitLimit ?? null,
    recommendedLimit
  };
}

function isDependencySatisfied(item, lookup, selectedKeys) {
  for (const dependencyKey of item.dependsOn ?? []) {
    const dependency = lookup.get(dependencyKey);
    if (!dependency) return false;
    if (dependency.statusCategory === "Done" || selectedKeys.has(dependencyKey)) continue;
    return false;
  }
  return true;
}

function createRecommendation(snapshot) {
  const velocity = calculateVelocity(snapshot);
  const capacity = capacityLimit(snapshot.team, velocity);
  const lookup = new Map(snapshot.backlog.map((item) => [item.key, item]));
  const selected = [];
  const excluded = [];
  let selectedPoints = 0;
  const limit = capacity.recommendedLimit;
  const candidates = [...snapshot.backlog].sort((left, right) => left.priorityRank - right.priorityRank || left.key.localeCompare(right.key));
  for (const item of candidates) {
    if (item.statusCategory !== "To Do" || !item.ready || item.blocked || item.estimatePoints === undefined) {
      excluded.push({ key: item.key, reason: "not-ready, blocked, non-backlog, or unestimated" });
      continue;
    }
    if (!isDependencySatisfied(item, lookup, new Set(selected.map((entry) => entry.key)))) {
      excluded.push({ key: item.key, reason: "unresolved dependency" });
      continue;
    }
    if (limit === null) {
      excluded.push({ key: item.key, reason: "no evidence-based point limit is available" });
      continue;
    }
    if (selectedPoints + item.estimatePoints > limit) {
      excluded.push({ key: item.key, reason: "would exceed conservative planning limit" });
      continue;
    }
    selected.push(item);
    selectedPoints += item.estimatePoints;
  }
  return {
    schemaVersion: SCHEMA_VERSION,
    kind: "jira-sprint-recommendation",
    generatedAt: new Date().toISOString(),
    source: snapshot.source,
    classification: "recommendation",
    confidence: velocity.status === "observed" && capacity.status === "observed" ? "medium" : "low",
    velocity,
    capacity,
    selectedWork: selected,
    selectedPoints: Number(selectedPoints.toFixed(2)),
    excludedWork: excluded,
    requiredPMDecision: "Confirm or adapt the Sprint Goal, selected scope, dependencies, and export draft before any Jira import."
  };
}

function validateExportDraft(value) {
  assertObject(value, "Jira export draft");
  assertKnownFields(value, new Set(["schemaVersion", "kind", "projectKey", "issues"]), "Jira export draft");
  if (value.schemaVersion !== SCHEMA_VERSION || value.kind !== "jira-export-draft") fail("Export draft has an unsupported schemaVersion or kind");
  string(value.projectKey, "projectKey", { maximum: 120 });
  if (!Array.isArray(value.issues) || value.issues.length === 0 || value.issues.length > 200) fail("issues must contain 1 to 200 records");
  const ids = new Set();
  const byId = new Map();
  for (const [index, issue] of value.issues.entries()) {
    assertObject(issue, `issues[${index}]`);
    assertKnownFields(issue, new Set(["localId", "issueType", "summary", "description", "parentLocalId", "estimatePoints", "labels"]), `issues[${index}]`);
    string(issue.localId, `issues[${index}].localId`, { maximum: 120 });
    if (ids.has(issue.localId)) fail(`issues[${index}].localId is duplicated`);
    ids.add(issue.localId);
    byId.set(issue.localId, issue);
    if (!new Set(["Epic", "Story", "Task", "Sub-task"]).has(issue.issueType)) fail(`issues[${index}].issueType must be Epic, Story, Task, or Sub-task`);
    string(issue.summary, `issues[${index}].summary`, { maximum: 500 });
    if (issue.description !== undefined && (typeof issue.description !== "string" || issue.description.length > 8000 || issue.description.includes("\0"))) {
      fail(`issues[${index}].description must be at most 8000 characters without null bytes`);
    }
    string(issue.parentLocalId, `issues[${index}].parentLocalId`, { optional: true, maximum: 120 });
    finiteNonNegative(issue.estimatePoints, `issues[${index}].estimatePoints`, { optional: true });
    if (issue.labels !== undefined && (!Array.isArray(issue.labels) || issue.labels.length > 20 || issue.labels.some((label) => typeof label !== "string" || !/^[A-Za-z0-9_.-]{1,80}$/.test(label)))) {
      fail(`issues[${index}].labels must contain up to 20 safe labels`);
    }
  }
  for (const issue of value.issues) {
    if (issue.parentLocalId && !byId.has(issue.parentLocalId)) fail(`Issue ${issue.localId} names a missing parent`);
    const parent = issue.parentLocalId ? byId.get(issue.parentLocalId) : null;
    if (issue.issueType === "Sub-task" && (!parent || !new Set(["Story", "Task"]).has(parent.issueType))) {
      fail(`Sub-task ${issue.localId} must name a Story or Task parent`);
    }
    if (issue.issueType === "Story" && parent && parent.issueType !== "Epic") {
      fail(`Story ${issue.localId} may only name an Epic parent in this export contract`);
    }
    if (issue.issueType === "Epic" && issue.parentLocalId) fail(`Epic ${issue.localId} cannot have a parent`);
  }
}

function validateApproval(value) {
  assertObject(value, "Jira export approval");
  assertKnownFields(value, new Set(["schemaVersion", "kind", "status", "approvedBy", "approvedAt", "draftSha256", "boundary"]), "Jira export approval");
  if (value.schemaVersion !== SCHEMA_VERSION || value.kind !== "jira-export-approval" || value.status !== "approved") {
    fail("Approval record is not an approved Jira export approval");
  }
  string(value.approvedBy, "approval.approvedBy", { maximum: 160 });
  assertIsoDate(value.approvedAt, "approval.approvedAt");
  if (typeof value.draftSha256 !== "string" || !/^[0-9a-f]{64}$/.test(value.draftSha256)) fail("approval.draftSha256 must be a SHA-256 hash");
  string(value.boundary, "approval.boundary", { optional: true, maximum: 1000 });
}

async function approveDraft(input, output, approvedBy) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) fail("PM approval requires an interactive terminal");
  string(approvedBy, "--approved-by", { maximum: 160 });
  const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    const answer = await prompt.question("Enter APPROVE JIRA EXPORT to confirm this draft as PM: ");
    if (answer !== "APPROVE JIRA EXPORT") fail("Approval phrase did not match; no approval record was created");
  } finally {
    prompt.close();
  }
  writeJson(output, {
    schemaVersion: SCHEMA_VERSION,
    kind: "jira-export-approval",
    status: "approved",
    approvedBy: approvedBy.trim(),
    approvedAt: new Date().toISOString(),
    draftSha256: sha256(input),
    boundary: "This records human confirmation for package generation. The PM must still review and submit the package in Jira."
  });
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""').replaceAll("\r\n", "\n").replaceAll("\r", "\n")}"`;
}

function exportDraft(draft, draftFile, approval, output) {
  if (approval.schemaVersion !== SCHEMA_VERSION || approval.kind !== "jira-export-approval" || approval.status !== "approved") {
    fail("Approval record is not an approved Jira export approval");
  }
  if (approval.draftSha256 !== sha256(draftFile)) fail("Approval record does not match the export draft");
  const payload = {
    schemaVersion: SCHEMA_VERSION,
    kind: "jira-import-package",
    generatedAt: new Date().toISOString(),
    projectKey: draft.projectKey,
    approvedBy: approval.approvedBy,
    approvedAt: approval.approvedAt,
    draftSha256: approval.draftSha256,
    importInstructions: "Map Local ID to an external identifier field and Parent local ID to the Jira parent field during import. Review Jira's import preview before submission.",
    issues: draft.issues
  };
  writeJson(output, payload);
  const csvOutput = output.endsWith(".json") ? `${output.slice(0, -5)}.csv` : `${output}.csv`;
  const rows = [
    ["Project key", "Issue type", "Summary", "Description", "Local ID", "Parent local ID", "Estimate points", "Labels"],
    ...draft.issues.map((issue) => [draft.projectKey, issue.issueType, issue.summary, issue.description ?? "", issue.localId, issue.parentLocalId ?? "", issue.estimatePoints ?? "", (issue.labels ?? []).join(" ")])
  ];
  if (fs.existsSync(csvOutput)) fail(`Refusing to overwrite existing output: ${csvOutput}`);
  fs.writeFileSync(csvOutput, `${rows.map((row) => row.map(csvCell).join(",")).join("\n")}\n`, { flag: "wx", mode: 0o600 });
  return csvOutput;
}

async function main() {
  const { command, options } = parseArguments(process.argv.slice(2));
  const supportedOptions = command === "approve"
    ? new Set(["--input", "--output", "--approved-by"])
    : command === "export"
      ? new Set(["--input", "--output", "--approval"])
      : new Set(["--input", "--output"]);
  for (const option of Object.keys(options)) {
    if (!supportedOptions.has(option)) fail(`Unsupported option for ${command}: ${option}`);
  }
  const input = required(options, "--input");
  const output = required(options, "--output");
  if (command === "import") {
    const planningInput = readJson(input, "Jira planning input");
    validatePlanningInput(planningInput);
    writeJson(output, { ...planningInput, kind: "jira-planning-snapshot", importedAt: new Date().toISOString() });
    process.stdout.write(`${JSON.stringify({ ok: true, command, output }, null, 2)}\n`);
    return;
  }
  if (command === "plan") {
    const snapshot = readJson(input, "Jira planning snapshot");
    if (snapshot.kind !== "jira-planning-snapshot") fail("Input must be produced by the import command");
    validatePlanningInput(snapshot, { snapshot: true });
    writeJson(output, createRecommendation(snapshot));
    process.stdout.write(`${JSON.stringify({ ok: true, command, output }, null, 2)}\n`);
    return;
  }
  if (command === "approve") {
    const draft = readJson(input, "Jira export draft");
    validateExportDraft(draft);
    await approveDraft(input, output, options["--approved-by"]);
    process.stdout.write(`${JSON.stringify({ ok: true, command, output }, null, 2)}\n`);
    return;
  }
  const draft = readJson(input, "Jira export draft");
  validateExportDraft(draft);
  const approvalFile = required(options, "--approval");
  const approval = readJson(approvalFile, "Jira export approval");
  validateApproval(approval);
  const csvOutput = exportDraft(draft, input, approval, output);
  process.stdout.write(`${JSON.stringify({ ok: true, command, output, csvOutput }, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
