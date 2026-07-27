#!/usr/bin/env node

import path from "node:path";
import {
  GATE_STATUSES,
  STAGES,
  appendEvent,
  assertSafeProjectFile,
  now,
  readJson,
  resolveProjectRoot,
  stageDefinition,
  validateProject,
  writeJsonAtomic
} from "./lib/runtime.mjs";

function parseArguments(argv) {
  const result = {
    addArtifacts: [],
    removeArtifacts: [],
    addQuestions: [],
    resolveQuestions: [],
    addBlockingDecisions: [],
    resolveDecisions: []
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--project") result.project = argv[++index];
    else if (token === "--stage") result.stage = argv[++index];
    else if (token === "--gate") result.gate = argv[++index] === "none" ? null : argv[index];
    else if (token === "--gate-status") result.gateStatus = argv[++index];
    else if (token === "--complete-stage") result.completeStage = argv[++index];
    else if (token === "--next-skill") result.nextSkill = argv[++index];
    else if (token === "--next-objective") result.nextObjective = argv[++index];
    else if (token === "--add-artifact") result.addArtifacts.push(argv[++index]);
    else if (token === "--remove-artifact") result.removeArtifacts.push(argv[++index]);
    else if (token === "--add-question") result.addQuestions.push(argv[++index]);
    else if (token === "--resolve-question") result.resolveQuestions.push(argv[++index]);
    else if (token === "--add-blocking-decision") result.addBlockingDecisions.push(argv[++index]);
    else if (token === "--resolve-decision") result.resolveDecisions.push(argv[++index]);
    else throw new Error(`Unknown argument: ${token}`);
  }
  return result;
}

try {
  const options = parseArguments(process.argv.slice(2));
  const root = resolveProjectRoot(path.resolve(options.project ?? process.cwd()));
  const beforeValidation = validateProject(root);
  if (!beforeValidation.valid) throw new Error(`Project validation failed: ${beforeValidation.errors.join("; ")}`);
  const stateFile = path.join(root, ".ai-pm-os", "state.json");
  const state = readJson(stateFile);
  const previousDefinition = stageDefinition(state.currentStage);
  if (options.stage && !STAGES.includes(options.stage)) throw new Error(`Unknown stage ${options.stage}`);
  if (options.completeStage && !STAGES.includes(options.completeStage)) throw new Error(`Unknown completed stage ${options.completeStage}`);
  if (options.gateStatus && !GATE_STATUSES.includes(options.gateStatus)) throw new Error(`Unknown gate status ${options.gateStatus}`);
  if (["pass", "conditional-pass"].includes(options.gateStatus)) {
    throw new Error("Pass and conditional-pass require the interactive approve-gate.mjs command");
  }
  if ((options.nextSkill && !options.nextObjective) || (!options.nextSkill && options.nextObjective)) {
    throw new Error("--next-skill and --next-objective must be provided together");
  }

  const previous = {
    currentStage: state.currentStage,
    currentGate: state.currentGate,
    gateStatus: state.gateStatus
  };
  if (options.stage && options.stage !== state.currentStage) {
    if (options.stage !== previousDefinition.nextStage) {
      throw new Error(`Stage transition must follow lifecycle map: ${state.currentStage} -> ${previousDefinition.nextStage ?? "none"}`);
    }
    if (previousDefinition.gate && !["pass", "conditional-pass"].includes(state.gateStatus)) {
      throw new Error(`Stage ${state.currentStage} cannot advance before ${previousDefinition.gate} is approved`);
    }
    if (options.completeStage !== state.currentStage) {
      throw new Error(`--complete-stage ${state.currentStage} is required for this transition`);
    }
    const nextDefinition = stageDefinition(options.stage);
    const requestedGate = Object.hasOwn(options, "gate") ? options.gate : nextDefinition.gate;
    if (requestedGate !== nextDefinition.gate) {
      throw new Error(`Gate must be ${nextDefinition.gate ?? "none"} for ${options.stage}`);
    }
    const requiredStatus = nextDefinition.gate ? "pending" : "not-applicable";
    if (options.gateStatus && options.gateStatus !== requiredStatus) {
      throw new Error(`gateStatus must be ${requiredStatus} when entering ${options.stage}`);
    }
    options.gate = nextDefinition.gate;
    options.gateStatus = requiredStatus;
  } else {
    if (Object.hasOwn(options, "gate") && options.gate !== previousDefinition.gate) {
      throw new Error(`Gate must remain ${previousDefinition.gate ?? "none"} for ${state.currentStage}`);
    }
    if (options.completeStage) throw new Error("--complete-stage is only allowed during a stage transition");
    if (!previousDefinition.gate && options.gateStatus && options.gateStatus !== "not-applicable") {
      throw new Error(`gateStatus must remain not-applicable for ungated stage ${state.currentStage}`);
    }
  }
  if (options.stage) state.currentStage = options.stage;
  if (Object.hasOwn(options, "gate")) state.currentGate = options.gate;
  if (options.gateStatus) state.gateStatus = options.gateStatus;
  if (options.completeStage && !state.completedStages.includes(options.completeStage)) {
    state.completedStages.push(options.completeStage);
  }
  if (options.nextSkill) {
    state.nextAction = { skill: options.nextSkill, objective: options.nextObjective };
  }
  for (const artifact of options.addArtifacts) {
    assertSafeProjectFile(root, artifact);
    if (!state.activeArtifacts.includes(artifact)) state.activeArtifacts.push(artifact);
  }
  state.activeArtifacts = state.activeArtifacts.filter(
    (artifact) => !options.removeArtifacts.includes(artifact)
  );
  for (const question of options.addQuestions) {
    if (!state.openQuestions.includes(question)) state.openQuestions.push(question);
  }
  state.openQuestions = state.openQuestions.filter(
    (question) => !options.resolveQuestions.includes(question)
  );
  for (const decision of options.addBlockingDecisions) {
    if (!state.blockingDecisions.includes(decision)) state.blockingDecisions.push(decision);
  }
  state.blockingDecisions = state.blockingDecisions.filter(
    (decision) => !options.resolveDecisions.includes(decision)
  );
  state.updatedAt = now();
  writeJsonAtomic(stateFile, state);
  appendEvent(root, "state.updated", { previous, current: {
    currentStage: state.currentStage,
    currentGate: state.currentGate,
    gateStatus: state.gateStatus
  } });
  const validation = validateProject(root);
  if (!validation.valid) throw new Error(`Updated state is invalid: ${validation.errors.join("; ")}`);
  process.stdout.write(`${JSON.stringify({ ok: true, root, state }, null, 2)}\n`);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
}
