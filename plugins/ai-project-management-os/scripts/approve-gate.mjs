#!/usr/bin/env node

import path from "node:path";
import process from "node:process";
import readline from "node:readline/promises";
import { applyGateApproval, resolveProjectRoot, validateProject } from "./lib/runtime.mjs";

function parseArguments(argv) {
  const result = { conditions: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--project") result.project = argv[++index];
    else if (token === "--outcome") result.outcome = argv[++index];
    else if (token === "--review") result.reviewArtifact = argv[++index];
    else if (token === "--condition") result.conditions.push(argv[++index]);
    else if (token === "--help") result.help = true;
    else throw new Error(`Unknown argument: ${token}`);
  }
  return result;
}

function usage() {
  return `Usage: node approve-gate.mjs --project <project> --outcome <pass|conditional-pass> --review <relative-review.md> [--condition <condition>]\n\nThis command must be run interactively by the accountable human. Agents must not execute or answer its confirmation prompts.\n`;
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    process.stdout.write(usage());
    return;
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error("Gate approval requires an interactive human terminal and cannot run unattended");
  }
  if (!options.project || !options.outcome || !options.reviewArtifact) throw new Error(usage().trim());
  const root = resolveProjectRoot(path.resolve(options.project));
  const validation = validateProject(root);
  if (!validation.valid) throw new Error(`Project validation failed: ${validation.errors.join("; ")}`);
  const expected = `APPROVE ${validation.state.currentGate} ${options.outcome}`;
  const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    process.stdout.write(`Project: ${validation.project.name}\nStage: ${validation.state.currentStage}\nGate: ${validation.state.currentGate}\nOutcome: ${options.outcome}\nReview: ${options.reviewArtifact}\n`);
    const approvedBy = (await prompt.question("Accountable human name: ")).trim();
    const confirmation = (await prompt.question(`Type \"${expected}\" to confirm: `)).trim();
    if (confirmation !== expected) throw new Error("Approval confirmation did not match");
    const result = applyGateApproval(root, {
      outcome: options.outcome,
      reviewArtifact: options.reviewArtifact,
      conditions: options.conditions,
      approvedBy
    });
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } finally {
    prompt.close();
  }
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
