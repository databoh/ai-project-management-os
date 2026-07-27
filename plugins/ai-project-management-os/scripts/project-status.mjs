#!/usr/bin/env node

import path from "node:path";
import { resolveProjectRoot, validateProject } from "./lib/runtime.mjs";

try {
  const requested = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
  const root = resolveProjectRoot(requested);
  const result = validateProject(root);
  if (!result.valid) throw new Error(`Project validation failed: ${result.errors.join("; ")}`);
  const { project, state } = result;
  process.stdout.write(`${JSON.stringify({
    root,
    project: {
      id: project.id,
      name: project.name,
      mode: project.mode,
      projectType: project.projectType,
      implementationScope: project.implementationScope
    },
    lifecycle: {
      status: state.status,
      currentStage: state.currentStage,
      currentGate: state.currentGate,
      gateStatus: state.gateStatus,
      completedStages: state.completedStages
    },
    control: {
      activeArtifacts: state.activeArtifacts,
      openQuestions: state.openQuestions,
      blockingDecisions: state.blockingDecisions,
      nextAction: state.nextAction
    },
    updatedAt: state.updatedAt
  }, null, 2)}\n`);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
}
