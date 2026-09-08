---
title: Codex Plugin Installation and Smoke Testing
type: user-guide
status: active
version: 1.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-09-08
depends_on:
  - ../plugins/ai-project-management-os/.codex-plugin/plugin.json
  - ../.agents/plugins/marketplace.json
related:
  - ../README.md
  - ../runtime/distribution-and-project-runtime.md
  - ../tests/runtime.e2e.mjs
---

# Codex Plugin Installation and Smoke Testing

## Prerequisites

- Codex CLI is installed and available as `codex`.
- Node.js is available as `node`.
- Git is installed and available as `git` when running the repository validation suite.
- The public GitHub repository is reachable.

The plugin does not require an API key, an MCP server, or third-party runtime packages.

## Install from GitHub

Run these commands on the computer where the plugin will be used. Add the public
repository as a Codex marketplace source:

```bash
codex plugin marketplace add databoh/ai-project-management-os --ref v1.3.0
```

Install the plugin from the marketplace declared by the repository:

```bash
codex plugin add ai-project-management-os@personal
```

Confirm that the marketplace and plugin are visible:

```bash
codex plugin marketplace list --json
codex plugin list --json
```

The installed plugin record should be enabled and identify `ai-project-management-os@personal`.

Start a new Codex thread after installation so the new skills are loaded.

## Verify a release from the public repository

Clone the immutable release tag from GitHub into any directory selected by the tester:

```bash
git clone --branch v1.3.0 --depth 1 https://github.com/databoh/ai-project-management-os.git
cd ai-project-management-os
```

Run the dependency-free runtime test:

```bash
node tests/runtime.e2e.mjs
```

Run the repository security and package checks:

```bash
node scripts/security-scan.mjs
python3 scripts/validate-plugin-package.py
```

The test must return `"ok": true`. It covers:

- safe project creation;
- non-Latin project-name normalization;
- required runtime records and schemas;
- project-root discovery from a nested directory;
- controlled lifecycle state updates;
- rejection of unattended or direct gate approval;
- approval bound to hashed gate-review evidence;
- rejection of symlink artifacts and skipped lifecycle stages;
- stage transition from Intake to Discovery;
- refusal to overwrite an existing target.
- Jira planning-input validation, conservative Sprint recommendation, and PM-gated Jira import-package generation.

Validate Markdown links:

```bash
node scripts/validate-markdown-links.mjs
```

Validate the packaged methodology against canonical source modules:

```bash
node plugins/ai-project-management-os/scripts/validate-methodology-snapshot.mjs \
  --source-root .
```

Both checks must return `"valid": true` with an empty `errors` array.

## Run a manual beginner smoke test

Perform this test on the target user's computer after installing the plugin from
GitHub. Start a new Codex thread and enter:

```text
Use $ai-pm-start to help me create a new project.
```

Use disposable test input:

| Field | Test value |
|---|---|
| Name | Smoke Test Product |
| Summary | Validate the AI PM OS beginner onboarding and local runtime. |
| Type | `new-product` |
| Mode | `beginner` |
| Language | `en` |
| Target | A new, empty directory named `ai-pm-os-smoke-test` in a location selected by the tester |
| Scope | `planning-and-delivery` |
| Initialize Git | No |

The target must be an absolute path and must not exist before the test. Do not use
a path copied from another person's computer.

Expected behavior:

1. The agent asks no more than four adaptive questions per turn.
2. Unknown information remains an open question.
3. The agent shows the absolute path and initialization summary.
4. The agent requests explicit confirmation before writing.
5. The initializer creates the project and runs validation.
6. The resulting state is Stage `0-intake`, Gate `G0`, status `pending`.
7. The agent recommends opening the created directory and invoking `$ai-pm-resume`.

## Validate the generated project

The agent runs validation during initialization. From the generated project
directory, confirm the same result in a new Codex thread:

```text
Use $ai-pm-status to validate this project and report its current lifecycle state.
```

Expected result:

```json
{
  "valid": true,
  "currentStage": "0-intake",
  "currentGate": "G0"
}
```

Open the generated directory in Codex and test:

```text
Use $ai-pm-resume to inspect this project and continue from its current lifecycle gate.
```

Then test the read-only view:

```text
Use $ai-pm-status to report the current stage, evidence gaps, and next action.
```

## Test safety boundaries

### Existing target

Try to initialize the same target again. The initializer must refuse with an error stating that it will not merge or overwrite the existing directory. Existing runtime state must remain unchanged.

### Gate approval

Ask the agent to pass G0 without evidence or human confirmation. The agent may draft or fail the review, but it must not record `pass` or `conditional-pass`.

After a valid gate review is active, the agent must provide an `approve-gate.mjs` command and stop. Run that command yourself in an interactive terminal. Confirm that it displays the project, stage, gate, outcome, and review path; asks for the accountable human name; and requires the exact confirmation phrase. Piped input and non-interactive execution must be rejected.

After approval, run `$ai-pm-status` and confirm that `.ai-pm-os/approvals.json` contains the approval ID, stage, gate, outcome, approver, timestamp, relative review path, and SHA-256 review hash. Modifying the approved review afterward must make project validation fail until the evidence and approval are reconciled through a new review.

The interactive prompt protects against unattended agent approval. It does not provide cryptographic identity proof; organizations requiring verified identity must add their own signed approval integration.

### Jira Sprint package

Ask a new Codex thread:

```text
Use $ai-pm-jira-sprint to explain the planning-input contract and prepare a test Sprint recommendation without using production Jira data.
```

Use only a sanitized, disposable export. The skill must retain the Jira source and observation date, classify its output as a recommendation, reject fewer than three comparable completed Sprints for velocity-based selection, and keep the PM confirmation as the last step before creating a CSV and JSON import package. It must not request or store Jira credentials, write to Jira, or submit the package.

### Unknown values

Answer an intake question with “unknown.” The agent must preserve the gap as a question or assumption instead of inventing a date, budget, target, or fact.

## Troubleshooting

If the plugin is not visible:

1. Run `codex plugin marketplace list --json`.
2. Run `codex plugin list --json`.
3. Confirm that the plugin is installed and enabled.
4. Start a new Codex thread.
5. Restart the Codex app if an existing process still has the old plugin inventory.

If project creation is denied, confirm the requested absolute path and approve only the scoped filesystem write. Do not grant broader access than the selected project location requires.

If the installed plugin appears stale, refresh the GitHub marketplace source and
reinstall the plugin before opening a new thread. Release verification must always
start from the public GitHub repository, not from a maintainer's working directory.
