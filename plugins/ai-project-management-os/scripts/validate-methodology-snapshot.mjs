#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { PLUGIN_ROOT, readJson } from "./lib/runtime.mjs";

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

const manifest = readJson(path.join(PLUGIN_ROOT, "references", "os-snapshot.json"));
const snapshotRoot = path.join(PLUGIN_ROOT, "references", "os");
const sourceIndex = process.argv.indexOf("--source-root");
const sourceRoot = sourceIndex >= 0 ? path.resolve(process.argv[sourceIndex + 1]) : null;
const errors = [];

for (const entry of manifest.files) {
  const snapshotFile = path.join(snapshotRoot, entry.path);
  if (!fs.existsSync(snapshotFile)) {
    errors.push(`Missing snapshot file: ${entry.path}`);
    continue;
  }
  const snapshotHash = sha256(snapshotFile);
  if (snapshotHash !== entry.sha256) errors.push(`Snapshot hash mismatch: ${entry.path}`);
  if (sourceRoot) {
    const sourceFile = path.join(sourceRoot, entry.path);
    if (!fs.existsSync(sourceFile)) errors.push(`Canonical source missing: ${entry.path}`);
    else if (sha256(sourceFile) !== entry.sourceSha256) errors.push(`Snapshot source is stale: ${entry.path}`);
  }
}

process.stdout.write(`${JSON.stringify({
  valid: errors.length === 0,
  osVersion: manifest.osVersion,
  files: manifest.files.length,
  sourceChecked: Boolean(sourceRoot),
  errors
}, null, 2)}\n`);
if (errors.length) process.exit(1);
