---
title: AI PM OS
type: repository-overview
status: active
version: 1.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-09-08
depends_on: []
related:
  - INDEX.md
  - AGENTS.md
  - lifecycle/intake.md
  - lifecycle/discovery.md
  - product/product-vision.md
  - product/product-outcomes.md
  - lifecycle/requirements.md
  - lifecycle/solution-outline.md
  - ai/ai-product-discovery.md
  - ai/evaluation.md
  - metrics/metric-dictionary.md
  - playbooks/idea-to-mvp.md
  - examples/ai-saas/case-study.md
  - lifecycle/decomposition.md
  - lifecycle/estimation.md
  - lifecycle/roadmap.md
  - lifecycle/delivery-setup.md
  - delivery/workflow-statuses.md
  - runtime/distribution-and-project-runtime.md
---

# AI PM OS

AI PM OS (Artificial Intelligence Product and Project Management Operating System) is a modular operating system for AI-assisted product and project management. It helps an AI agent turn an incomplete idea, business request, or existing-product problem into a traceable delivery system without disguising uncertainty as fact.

Version `1.3.0` adds a governed Jira Sprint Planning Exchange: normalized planning evidence, a capacity- and velocity-aware recommendation, and a PM-confirmed Jira import package for Epic, Story, Task, and Sub-task drafts. It retains the Phase 11 public-distribution safeguards, including interactive human-only gate approval, evidence hashes, project-path and symlink containment, prompt-injection boundaries, repository secret scanning, and immutable tagged installation.

## Install for Codex

Add this public repository as a plugin marketplace, then install the plugin:

```bash
codex plugin marketplace add databoh/ai-project-management-os --ref v1.3.0
codex plugin add ai-project-management-os@personal
```

Start a new Codex thread and ask:

```text
Use $ai-pm-start to help me create a new project.
```

The agent will collect the minimum inputs, show the absolute target path and initialization summary for confirmation, create a new local workspace, validate it, and hand off to `$ai-pm-resume`.

- Follow [Plugin Installation and Smoke Testing](docs/installation-and-smoke-testing.md) for installation from the public GitHub repository, release verification from a fresh clone, automated checks, and the beginner smoke test.
- See [Distribution and Project Runtime](runtime/distribution-and-project-runtime.md) for the complete operating and safety contract.
- Read the [Security Policy](SECURITY.md) before reporting a vulnerability or publishing sensitive project material.

## What the system optimizes for

- measurable outcomes before feature volume;
- discovery before scope, budget, or deadline commitments;
- evidence and explicit uncertainty before certainty;
- traceability from business goals to releases and metrics;
- realistic plans that include dependencies, capacity, review, QA, release work, and risk;
- clear human accountability for high-impact decisions;
- small, reusable modules with one primary responsibility.

## Start here

1. Read [AGENTS.md](AGENTS.md) for the repository working contract.
2. Use [INDEX.md](INDEX.md) to navigate the available system.
3. Start a request with the [workflow router](core/workflow-router.md).
4. Use the routed [operational playbook](INDEX.md#operational-playbooks) when one matches the requested outcome.
5. For a new request, run [project intake](lifecycle/intake.md), then the proportionate [discovery workflow](lifecycle/discovery.md).
6. Translate sufficient discovery into a [product vision](product/product-vision.md) and measurable [product outcomes](product/product-outcomes.md).
7. Define evidence-based users, jobs, journeys, scope, MVP, and priorities using [INDEX.md](INDEX.md).
8. Convert approved product direction into controlled [requirements](lifecycle/requirements.md) and [work decomposition](lifecycle/decomposition.md).
9. Develop and approve the proportionate [solution outline](lifecycle/solution-outline.md), supported by the architecture modules.
10. When models, agents, RAG, MCP, or AI automation are involved, apply [AI product discovery](ai/ai-product-discovery.md) and the proportionate AI delivery modules.
11. Build conditional [estimates](lifecycle/estimation.md), capacity and dependency models, then a [delivery roadmap](lifecycle/roadmap.md).
12. Establish the [delivery operating model](lifecycle/delivery-setup.md), canonical workflow, readiness, completion, ceremonies, reporting, and tools.
13. Define every reported or controlled measure through the [metric dictionary](metrics/metric-dictionary.md) and use the relevant Phase 9 method.
14. Apply the [lifecycle overview](lifecycle/overview.md) and relevant [quality gates](core/quality-gates.md) before presenting a commitment or handoff.
15. For a generated local project, persist and resume work through the [project runtime](runtime/distribution-and-project-runtime.md) rather than relying on chat memory.

## Supported operating modes

The foundation routes work into seven modes:

- idea to project;
- existing-project audit;
- feature planning;
- delivery management;
- incident response;
- product improvement;
- AI product delivery.

Modes can be combined, but one mode must be named as primary so that the expected output and quality checks remain clear.

## Information integrity

Material statements must be distinguishable as confirmed facts, assumptions, hypotheses, recommendations, open questions, constraints, dependencies, risks, or decisions. The authoritative definitions are in [terminology](core/terminology.md); evidence handling is defined in the [evidence policy](core/evidence-policy.md), and uncertain claims are governed by the [assumptions policy](core/assumptions-policy.md).

## Repository status

This repository has completed **Phase 11: Distribution and Project Runtime**. The canonical methodology covers Phases 1–10; Phase 11 packages it as an installable, file-backed Codex workflow for creating and running local projects.

## Contributing

Repository-level agent rules are defined in [AGENTS.md](AGENTS.md). Meaningful changes must preserve link integrity, avoid duplicate policy ownership, update version metadata where appropriate, and be recorded in [CHANGELOG.md](CHANGELOG.md).
