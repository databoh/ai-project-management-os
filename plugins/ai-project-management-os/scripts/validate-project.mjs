#!/usr/bin/env node

import path from "node:path";
import { resolveProjectRoot, validateProject } from "./lib/runtime.mjs";

try {
  const requested = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
  const root = resolveProjectRoot(requested);
  const result = validateProject(root);
  process.stdout.write(`${JSON.stringify({
    valid: result.valid,
    root,
    errors: result.errors,
    projectId: result.project?.id ?? null,
    currentStage: result.state?.currentStage ?? null,
    currentGate: result.state?.currentGate ?? null
  }, null, 2)}\n`);
  if (!result.valid) process.exit(1);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
}
