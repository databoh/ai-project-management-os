#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const excluded = new Set([".git"]);
const markdownFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else if (entry.isFile() && entry.name.endsWith(".md")) markdownFiles.push(absolute);
  }
}

function anchorize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function anchorsFor(file) {
  const anchors = new Set();
  const counts = new Map();
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (!match) continue;
    const base = anchorize(match[1]);
    const count = counts.get(base) ?? 0;
    counts.set(base, count + 1);
    anchors.add(count === 0 ? base : `${base}-${count}`);
  }
  return anchors;
}

walk(root);
const anchorCache = new Map();
const errors = [];
const linkPattern = /(?<!!)\[[^\]]*]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(linkPattern)) {
    const raw = match[1].trim().replace(/^<|>$/g, "");
    if (!raw || /^(https?:|mailto:|codex:)/.test(raw)) continue;
    const [targetPart, anchor] = raw.split("#", 2);
    const target = path.resolve(path.dirname(file), decodeURIComponent(targetPart || path.basename(file)));
    if (!fs.existsSync(target)) {
      errors.push(`${path.relative(root, file)} -> missing ${raw}`);
      continue;
    }
    if (anchor && fs.statSync(target).isFile() && target.endsWith(".md")) {
      if (!anchorCache.has(target)) anchorCache.set(target, anchorsFor(target));
      if (!anchorCache.get(target).has(decodeURIComponent(anchor).toLowerCase())) {
        errors.push(`${path.relative(root, file)} -> missing anchor ${raw}`);
      }
    }
  }
}

process.stdout.write(`${JSON.stringify({
  valid: errors.length === 0,
  markdownFiles: markdownFiles.length,
  errors
}, null, 2)}\n`);
if (errors.length) process.exit(1);
