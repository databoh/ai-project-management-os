#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const includeHistory = process.argv.includes("--history");
const errors = [];

const rules = [
  ["AWS access key", new RegExp("(?:AK" + "IA|AS" + "IA)[0-9A-Z]{16}", "g")],
  ["GitHub token", new RegExp("(?:gh" + "[pousr]_[A-Za-z0-9_]{20,}|github_" + "pat_[A-Za-z0-9_]{20,})", "g")],
  ["OpenAI-style secret", new RegExp("sk" + "-[A-Za-z0-9_-]{20,}", "g")],
  ["Slack token", new RegExp("xox" + "[baprs]-[A-Za-z0-9-]{10,}", "g")],
  ["Google API key", new RegExp("AI" + "za[0-9A-Za-z_-]{30,}", "g")],
  ["Stripe live key", new RegExp("sk_" + "live_[0-9A-Za-z]{16,}", "g")],
  ["Private key", new RegExp("-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE " + "KEY-----", "g")],
  ["Credential in URL", /https?:\/\/[^\s/:]+:[^\s/@]+@/g],
  ["Personal Unix home path", new RegExp("/" + "Users/[^/\\s]+|/" + "home/[^/\\s]+", "g")],
  ["Personal Windows home path", new RegExp("[A-Za-z]:\\\\" + "Users\\\\[^\\\\\\s]+", "g")]
];

const sensitiveName = /(^|\/)(?:\.env(?:\..+)?|credentials(?:\..+)?|secrets?(?:\..+)?|id_(?:rsa|dsa|ecdsa|ed25519)(?:\.pub)?|.*\.(?:pem|p12|pfx|jks|keystore))$/i;
const allowedNames = new Set([".env.example"]);

function repositoryFiles() {
  return execFileSync("git", ["ls-files", "-z", "--cached", "--others", "--exclude-standard"], { cwd: root })
    .toString("utf8")
    .split("\0")
    .filter(Boolean);
}

function scanText(label, content) {
  if (content.includes("\0")) return;
  for (const [rule, pattern] of rules) {
    pattern.lastIndex = 0;
    if (pattern.test(content)) errors.push(`${label}: ${rule}`);
  }
}

for (const relative of repositoryFiles()) {
  const absolute = path.join(root, relative);
  if (sensitiveName.test(relative) && !allowedNames.has(path.basename(relative))) {
    errors.push(`${relative}: sensitive filename must not be tracked`);
  }
  const stat = fs.lstatSync(absolute);
  if (stat.isSymbolicLink()) {
    errors.push(`${relative}: tracked symbolic links are not allowed`);
    continue;
  }
  if (stat.size > 2 * 1024 * 1024) errors.push(`${relative}: tracked file exceeds 2 MiB`);
  scanText(relative, fs.readFileSync(absolute, "utf8"));
}

if (includeHistory) {
  const commits = execFileSync("git", ["rev-list", "HEAD"], { cwd: root })
    .toString("utf8")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  for (const commit of commits) {
    const files = execFileSync("git", ["ls-tree", "-r", "--name-only", "-z", commit], { cwd: root })
      .toString("utf8")
      .split("\0")
      .filter(Boolean);
    for (const relative of files) {
      if (sensitiveName.test(relative) && !allowedNames.has(path.basename(relative))) {
        errors.push(`${commit}:${relative}: sensitive filename in history`);
      }
      const content = execFileSync("git", ["show", `${commit}:${relative}`], {
        cwd: root,
        encoding: "utf8",
        maxBuffer: 4 * 1024 * 1024
      });
      scanText(`${commit}:${relative}`, content);
    }
  }
}

const uniqueErrors = [...new Set(errors)].sort();
process.stdout.write(`${JSON.stringify({
  valid: uniqueErrors.length === 0,
  filesChecked: repositoryFiles().length,
  historyChecked: includeHistory,
  errors: uniqueErrors
}, null, 2)}\n`);
if (uniqueErrors.length) process.exit(1);
