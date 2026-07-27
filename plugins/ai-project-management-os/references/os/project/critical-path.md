---
title: Critical Path
type: schedule-analysis-method
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../delivery/dependency-management.md
  - ../lifecycle/estimation.md
related:
  - ../delivery/capacity-planning.md
  - milestone-plan.md
  - ../lifecycle/roadmap.md
---

# Critical Path

## Purpose

Identify the dependency path that currently determines the earliest forecast completion and expose near-critical, resource-constrained, and externally constrained paths before commitments are made.

## When to use

Use for projects or releases with meaningful sequential dependencies, external dates, multiple workstreams, or limited schedule flexibility. A simple dependency list may be enough for small flow work without a target completion boundary.

## Inputs

- complete activity or work-package network for the planned boundary;
- duration ranges based on capacity and working calendars;
- finish-to-start, start-to-start, finish-to-finish, or start-to-finish relationships;
- justified leads and lags;
- milestones, external constraints, resource limits, and dependency confidence.

## Preconditions

- Durations are elapsed forecasts, not raw effort.
- Dependency relationships are confirmed or visibly assumed.
- Work calendars and milestone constraints are explicit.
- The network contains release, review, QA, approval, migration, and other non-build activities.

## Workflow

### 1. Build the network

Represent every schedule-relevant activity, duration, predecessor, relationship, and calendar. Avoid summary items that duplicate child duration.

### 2. Forward pass

Calculate earliest start and finish:

- `ES = maximum predecessor EF adjusted for relationship and lag`
- `EF = ES + duration`

Use the appropriate relationship formula where work does not follow finish-to-start.

### 3. Backward pass

Starting from the forecast finish or approved constraint, calculate latest finish and start:

- `LF = minimum successor LS adjusted for relationship and lag`
- `LS = LF - duration`

### 4. Calculate float

For simple finish-to-start networks:

- `Total float = LS - ES = LF - EF`

Activities with zero or negative total float are critical under the current model. Track free float where successor flexibility matters.

### 5. Validate resource feasibility

Critical Path Method assumes resource availability in the durations. Check role and environment conflicts with [capacity planning](../delivery/capacity-planning.md); resource leveling can create a different controlling path.

### 6. Analyze uncertainty

Identify near-critical paths, merge points, external approvals, long-lead dependencies, and activities whose range can change the controlling path. Use schedule simulation only when input distributions and model quality justify it.

### 7. Develop response options

Compare:

- scope reduction or alternate sequencing;
- dependency removal or earlier decision;
- fast tracking with explicit rework risk;
- crashing with feasible added cost or capacity;
- risk-reduction spike;
- milestone or date renegotiation.

### 8. Baseline and monitor

Record analysis date, schedule version, current path, near-critical paths, float, confidence, and change triggers. Recalculate after material progress, variance, dependency, duration, capacity, or scope change.

## Activity register

| Activity ID | Work package or deliverable | Duration range | Predecessors and relationship | Calendar or resource | ES | EF | LS | LF | Float | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| ACT-001 | Not established | Not assessed | None confirmed | Not established | Not calculated | Not calculated | Not calculated | Not calculated | Not calculated | Not assessed |

## Path summary

| Path | Activities | Forecast duration | Total float | Primary uncertainty | Response owner | Status |
|---|---|---|---|---|---|---|
| Current critical path | Not calculated | Not calculated | Not calculated | Not assessed | Not assigned | Draft |
| Near-critical path | Not identified | Not calculated | Not calculated | Not assessed | Not assigned | Draft |

## Decision rules

- Critical means schedule-controlling under the current model, not highest business priority.
- The critical path is dynamic and can change as actuals and forecasts change.
- Negative float exposes a conflict; it is not proof that the team should absorb the date.
- Do not shorten durations without changing scope, method, capacity, overlap, or risk.
- Fast tracking increases coordination and rework risk; crashing requires feasible resources and cost authority.
- Hidden approval, environment, or release work invalidates the path.
- A milestone has zero duration; the work required to reach it must appear in the network.
- Report near-critical paths when small variance can make them controlling.

## Outputs

- validated schedule network;
- current critical and near-critical paths;
- float, merge risk, constraints, and resource effects;
- recovery options and trade-offs;
- inputs to milestones, delivery roadmap, release forecast, and G4.

## Quality checks

- Activities cover the full planned boundary without double counting.
- Durations reflect capacity and calendars.
- Dependency types and lags have rationale.
- Resource conflicts and external constraints are included.
- Near-critical and low-confidence paths are visible.
- Response options state scope, cost, risk, and confidence effects.

## Related modules

- [Dependency management](../delivery/dependency-management.md)
- [Capacity planning](../delivery/capacity-planning.md)
- [Milestone plan](milestone-plan.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
