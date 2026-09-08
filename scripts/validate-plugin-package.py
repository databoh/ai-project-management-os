#!/usr/bin/env python3

import json
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
PLUGIN = ROOT / "plugins" / "ai-project-management-os"
errors = []


def load_json(path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as error:
        errors.append(f"{path.relative_to(ROOT)}: invalid JSON: {error}")
        return {}


version = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
manifest = load_json(PLUGIN / ".codex-plugin" / "plugin.json")
marketplace = load_json(ROOT / ".agents" / "plugins" / "marketplace.json")
lifecycle = load_json(PLUGIN / "references" / "lifecycle-map.json")

if manifest.get("name") != "ai-project-management-os":
    errors.append("plugin manifest name must be ai-project-management-os")
if manifest.get("version") != version:
    errors.append("plugin manifest version must match VERSION")
if manifest.get("skills") != "./skills/":
    errors.append("plugin manifest skills must be ./skills/")
if lifecycle.get("version") != version:
    errors.append("lifecycle-map version must match VERSION")

entries = [entry for entry in marketplace.get("plugins", []) if entry.get("name") == manifest.get("name")]
if len(entries) != 1:
    errors.append("marketplace must contain exactly one plugin entry")
elif entries[0].get("source", {}).get("path") != "./plugins/ai-project-management-os":
    errors.append("marketplace plugin source path is invalid")

skill_dirs = sorted(path for path in (PLUGIN / "skills").iterdir() if path.is_dir())
if len(skill_dirs) != 6:
    errors.append("plugin must contain exactly six runtime skills")
for skill_dir in skill_dirs:
    skill_file = skill_dir / "SKILL.md"
    agent_file = skill_dir / "agents" / "openai.yaml"
    if not skill_file.is_file():
        errors.append(f"{skill_dir.name}: missing SKILL.md")
        continue
    content = skill_file.read_text(encoding="utf-8")
    match = re.match(r"^---\nname:\s*([^\n]+)\ndescription:\s*([^\n]+)\n---\n", content)
    if not match or match.group(1).strip() != skill_dir.name:
        errors.append(f"{skill_dir.name}: invalid frontmatter name or description")
    if "[TODO" in content or "TODO:" in content:
        errors.append(f"{skill_dir.name}: scaffold placeholder found")
    if not agent_file.is_file():
        errors.append(f"{skill_dir.name}: missing agents/openai.yaml")

required_scripts = {
    "approve-gate.mjs",
    "init-project.mjs",
    "jira-sprint-planning.mjs",
    "project-status.mjs",
    "update-state.mjs",
    "validate-project.mjs",
}
present_scripts = {path.name for path in (PLUGIN / "scripts").glob("*.mjs")}
if not required_scripts.issubset(present_scripts):
    errors.append("plugin runtime scripts are incomplete")

required_schemas = {
    "approvals.schema.json",
    "assumptions.schema.json",
    "decisions.schema.json",
    "project-input.schema.json",
    "project.schema.json",
    "state.schema.json",
}
present_schemas = {path.name for path in (PLUGIN / "references" / "schemas").glob("*.json")}
if required_schemas != present_schemas:
    errors.append("plugin runtime schema set is incomplete or unexpected")

print(json.dumps({"valid": not errors, "version": version, "skills": len(skill_dirs), "errors": errors}, indent=2))
sys.exit(1 if errors else 0)
