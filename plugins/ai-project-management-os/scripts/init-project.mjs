#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  PLUGIN_ROOT,
  appendEvent,
  assertSafeNewTarget,
  createProjectRecords,
  projectAgents,
  projectBrief,
  projectReadme,
  readJson,
  validateInitializationInput,
  validateProject,
  writeJsonAtomic
} from "./lib/runtime.mjs";

function parseArguments(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--input") result.input = argv[++index];
    else if (token === "--target") result.target = argv[++index];
    else if (token === "--git") result.initializeGit = true;
    else if (token === "--help") result.help = true;
    else throw new Error(`Unknown argument: ${token}`);
  }
  return result;
}

function usage() {
  return `Usage: node init-project.mjs --input <answers.json> [--target <new-directory>] [--git]

The input must satisfy references/schemas/project-input.schema.json. The target must not exist.
`;
}

function copySchemas(target) {
  const source = path.join(PLUGIN_ROOT, "references", "schemas");
  const destination = path.join(target, ".ai-pm-os", "schemas");
  fs.mkdirSync(destination, { recursive: true });
  for (const name of [
    "project.schema.json",
    "state.schema.json",
    "assumptions.schema.json",
    "decisions.schema.json",
    "approvals.schema.json"
  ]) {
    fs.copyFileSync(path.join(source, name), path.join(destination, name));
  }
}

function initialize(input, overrideTarget, forceGit) {
  validateInitializationInput(input);
  const target = assertSafeNewTarget(overrideTarget ?? input.target);
  const { project, state } = createProjectRecords(input);
  let created = false;
  try {
    fs.mkdirSync(target, { recursive: false, mode: 0o700 });
    created = true;
    fs.mkdirSync(path.join(target, ".ai-pm-os"), { recursive: true });
    fs.mkdirSync(path.join(target, "docs", "00-intake"), { recursive: true });

    writeJsonAtomic(path.join(target, ".ai-pm-os", "project.json"), project);
    writeJsonAtomic(path.join(target, ".ai-pm-os", "state.json"), state);
    writeJsonAtomic(path.join(target, ".ai-pm-os", "assumptions.json"), {
      schemaVersion: "1.0.0",
      projectId: project.id,
      assumptions: []
    });
    writeJsonAtomic(path.join(target, ".ai-pm-os", "decisions.json"), {
      schemaVersion: "1.0.0",
      projectId: project.id,
      decisions: []
    });
    writeJsonAtomic(path.join(target, ".ai-pm-os", "approvals.json"), {
      schemaVersion: "1.0.0",
      projectId: project.id,
      approvals: []
    });
    fs.writeFileSync(path.join(target, "AGENTS.md"), projectAgents(project), { flag: "wx" });
    fs.writeFileSync(path.join(target, "README.md"), projectReadme(project), { flag: "wx" });
    fs.writeFileSync(
      path.join(target, ".gitignore"),
      ".DS_Store\n.env\n.env.*\n!.env.example\n*.pem\n*.key\n*.p12\n*.pfx\ncredentials.json\nsecrets.json\n*.log\nnode_modules/\ncoverage/\ndist/\nbuild/\n",
      { flag: "wx" }
    );
    fs.writeFileSync(
      path.join(target, "docs", "00-intake", "project-brief.md"),
      projectBrief(project),
      { flag: "wx" }
    );
    fs.writeFileSync(path.join(target, ".ai-pm-os", "events.jsonl"), "", { flag: "wx", mode: 0o600 });
    copySchemas(target);
    appendEvent(target, "project.initialized", {
      osVersion: project.osVersion,
      mode: project.mode,
      projectType: project.projectType
    });

    let gitInitialized = false;
    if (forceGit || input.initializeGit === true) {
      const git = spawnSync("git", ["init", target], { encoding: "utf8" });
      if (git.status !== 0) throw new Error(`git init failed: ${git.stderr.trim()}`);
      gitInitialized = true;
      appendEvent(target, "git.initialized");
    }

    const validation = validateProject(target);
    if (!validation.valid) throw new Error(`Generated project is invalid: ${validation.errors.join("; ")}`);
    return { ok: true, target, projectId: project.id, gitInitialized, currentStage: state.currentStage, currentGate: state.currentGate };
  } catch (error) {
    if (created && fs.existsSync(target) && !fs.lstatSync(target).isSymbolicLink()) {
      fs.rmSync(target, { recursive: true, force: true });
    }
    throw error;
  }
}

try {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    process.stdout.write(usage());
    process.exit(0);
  }
  if (!options.input) throw new Error("--input is required");
  const input = readJson(path.resolve(options.input));
  const result = initialize(input, options.target, options.initializeGit);
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
}
