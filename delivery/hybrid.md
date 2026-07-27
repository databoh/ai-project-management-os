---
title: Hybrid Delivery
type: delivery-operating-method
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - scrum.md
  - kanban.md
  - workflow-statuses.md
  - ceremonies.md
  - reporting.md
---

# Hybrid Delivery

## Purpose

Combine delivery and governance methods deliberately where different work types, uncertainty levels, service systems, or external controls require different cadences and evidence.

## When to use

Use when one coherent method cannot responsibly serve all work, for example:

- iterative product delivery inside contractual or regulatory stage gates;
- Scrum feature delivery alongside Kanban support or platform flow;
- fixed program milestones with rolling-wave team planning;
- discovery and validation operating ahead of delivery;
- vendor waterfall deliverables integrated with internal iterative work.

Do not use “hybrid” to avoid choosing explicit policies.

## Design principles

- one authoritative outcome, scope, requirement, decision, and forecast model;
- clear boundaries between work systems;
- explicit handoff and synchronization criteria;
- local optimization must not harm end-to-end flow;
- governance gates require evidence, not document volume;
- metrics retain their original boundaries and are not blended indiscriminately.

## Workflow

### 1. Identify the reason for hybridization

State the incompatible work characteristics or governance needs. If no material difference exists, choose the simpler method.

### 2. Define work systems

For each stream, define request types, owner, method, cadence, workflow, capacity, WIP, quality policy, and delivery point.

### 3. Define shared controls

Establish common outcomes, baselines, requirements, dependencies, risks, decisions, DoD, release plan, reporting vocabulary, and escalation.

### 4. Design interfaces

For every handoff, define provider, consumer, required output, acceptance evidence, need-by point, service expectation, and fallback.

### 5. Align planning horizons

Connect product roadmap, program milestones, release windows, Sprint or flow forecasts, and outcome checkpoints without forcing every layer into the same cadence.

### 6. Protect capacity

Separate planned iterative work, continuous service demand, expedite capacity, and governance work. Prevent support or approval queues from silently consuming feature forecasts.

### 7. Establish integrated review

Review end-to-end outcome, dependencies, path, release readiness, forecast, quality, and systemic impediments. Do not merely aggregate team status.

### 8. Inspect the operating model

Measure cross-boundary wait, rework, blocked time, forecast variance, and quality. Simplify or change the hybrid design when interfaces add more cost than control.

## Hybrid operating-model record

| Field | Definition |
|---|---|
| Hybrid rationale | Work or governance difference requiring multiple methods |
| Work systems and owners | Scrum, Kanban, stage-gate, vendor, operations, or other |
| Shared source of truth | Outcomes, scope, requirements, roadmap, and release |
| Local workflows and policies | Cadence, WIP, readiness, completion, and metrics |
| Handoffs and acceptance | Provider-consumer interfaces |
| Synchronization points | Decisions, milestones, integration, and releases |
| Capacity allocation | Planned, service, expedite, and governance demand |
| Integrated reporting | End-to-end forecast, flow, quality, and outcome |
| Escalation and change control | Cross-system authority |
| Review triggers | Evidence for simplification or redesign |

## Common patterns

### Scrum plus Kanban service

A stable team protects a Sprint Goal while a separately capacity-limited service lane handles production or operational work. Interrupt criteria and displaced capacity are explicit.

### Iterative delivery plus stage gates

Teams deliver increments iteratively; governance gates approve funding, compliance, architecture, or release using agreed evidence. Gate dates do not dictate hidden team scope.

### Rolling-wave program planning

Near-term work has detailed capacity and dependencies; distant work remains outcome- and milestone-level with lower confidence.

### Dual-track learning and delivery

Discovery reduces uncertainty ahead of delivery without becoming an unlimited upstream queue. Validated decisions, not documents, enter delivery.

## Decision rules

- Every method boundary needs a reason, owner, and acceptance contract.
- Do not mix Scrum and Kanban vocabulary while omitting both Sprint Goals and WIP limits.
- A governance gate does not authorize management to rewrite active team work silently.
- Team metrics remain local; program reporting uses compatible outcome, milestone, dependency, forecast, and quality measures.
- Cross-team synchronization should follow dependency and integration need, not a universal meeting calendar.
- Protect service capacity explicitly; do not pretend interrupts are estimation error.
- Simplify the model when control cost exceeds risk reduction.

## Outputs

- justified multi-method operating model;
- explicit work-system boundaries and shared controls;
- handoff, synchronization, capacity, reporting, and escalation rules;
- end-to-end inspection and adaptation cadence.

## Quality checks

- Hybridization solves a named operating problem.
- Each work system has coherent policies.
- Shared sources of truth prevent conflicting baselines.
- Handoffs include acceptance and timing.
- Capacity and metrics remain boundary-aware.
- Integrated review drives end-to-end decisions.

## Common mistakes

- calling ad hoc process “hybrid”;
- layering stage gates over every Sprint without decision value;
- running Scrum ceremonies while managing continuous push;
- combining incompatible metrics into one performance score;
- optimizing team completion while cross-team wait grows.

## Related modules

- [Scrum](scrum.md)
- [Kanban](kanban.md)
- [Workflow statuses](workflow-statuses.md)
- [Ceremonies](ceremonies.md)
- [Reporting](reporting.md)
