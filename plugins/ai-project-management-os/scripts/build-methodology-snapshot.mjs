#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OS_VERSION, PLUGIN_ROOT, now, writeJsonAtomic } from "./lib/runtime.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const defaultRepositoryRoot = path.resolve(scriptDirectory, "../../..");
const repositoryRoot = path.resolve(process.argv[2] ?? defaultRepositoryRoot);
const destination = path.join(PLUGIN_ROOT, "references", "os");
const manifestFile = path.join(PLUGIN_ROOT, "references", "os-snapshot.json");
const sources = [
  "VERSION",
  "core",
  "lifecycle",
  "business-analysis",
  "product",
  "project",
  "delivery",
  "architecture",
  "ai",
  "metrics",
  "playbooks",
  "examples",
  "templates",
  "tools"
];

function listFiles(root, relative = "") {
  const directory = path.join(root, relative);
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(root, child));
    else if (entry.isFile()) files.push(child);
  }
  return files;
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function distributedContent(relative, sourceFile) {
  const content = fs.readFileSync(sourceFile);
  if (!relative.endsWith(".md")) return content;
  return Buffer.from(
    content
      .toString("utf8")
      .replaceAll("../runtime/distribution-and-project-runtime.md", "../../runtime-contract.md")
  );
}

for (const source of sources) {
  if (!fs.existsSync(path.join(repositoryRoot, source))) {
    throw new Error(`Snapshot source is missing: ${source}`);
  }
}

fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });
for (const source of sources) {
  const sourcePath = path.join(repositoryRoot, source);
  if (fs.statSync(sourcePath).isDirectory()) {
    for (const relativeChild of listFiles(repositoryRoot, source)) {
      const destinationFile = path.join(destination, relativeChild);
      fs.mkdirSync(path.dirname(destinationFile), { recursive: true });
      fs.writeFileSync(
        destinationFile,
        distributedContent(relativeChild, path.join(repositoryRoot, relativeChild)),
        { flag: "wx" }
      );
    }
  } else {
    const destinationFile = path.join(destination, source);
    fs.mkdirSync(path.dirname(destinationFile), { recursive: true });
    fs.writeFileSync(destinationFile, distributedContent(source, sourcePath), { flag: "wx" });
  }
}

const files = listFiles(destination)
  .sort()
  .map((relative) => ({
    path: relative.split(path.sep).join("/"),
    sha256: sha256(path.join(destination, relative)),
    sourceSha256: sha256(path.join(repositoryRoot, relative))
  }));

writeJsonAtomic(manifestFile, {
  schemaVersion: "1.0.0",
  osVersion: OS_VERSION,
  generatedAt: now(),
  source: "repository canonical knowledge modules",
  files
});

process.stdout.write(`${JSON.stringify({
  ok: true,
  repositoryRoot,
  destination,
  files: files.length
}, null, 2)}\n`);
