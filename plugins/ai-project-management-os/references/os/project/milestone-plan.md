---
title: Milestone Plan
type: project-planning-method
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - critical-path.md
  - ../lifecycle/estimation.md
related:
  - ../delivery/dependency-management.md
  - ../delivery/capacity-planning.md
  - ../lifecycle/roadmap.md
  - ../delivery/release-management.md
---

# Milestone Plan

## Purpose

Define meaningful, evidence-based control points for decisions, approved states, external obligations, releases, and outcomes without disguising task lists as milestones.

## When to use

Use when a plan requires governance, cross-team coordination, funding decisions, contractual checkpoints, release readiness, or outcome review. Small continuous-flow work may use fewer milestones.

## Inputs

- approved outcome and scope scenario;
- deliverables, WBS, requirements, acceptance evidence, and decision gates;
- estimate ranges, critical and near-critical paths;
- capacity, dependencies, external constraints, and release candidates;
- governance, contract, compliance, and reporting requirements.

## Milestone types

- decision or funding gate;
- approved product, requirement, or solution baseline;
- external approval or dependency acceptance;
- integrated deliverable or environment readiness;
- release readiness or production release;
- adoption, outcome, or benefit checkpoint;
- contractual or regulatory obligation.

## Workflow

1. Identify decisions and achieved states that require coordinated control.
2. Define observable entry and exit evidence for each milestone.
3. Assign accountable owner and approval authority.
4. Link required deliverables, requirements, dependencies, reviews, and path activities.
5. Forecast a target window from estimates, capacity, and critical path.
6. State confidence, assumptions, earliest responsible forecast, and constraint source.
7. Define warning thresholds, decision consequences, and recovery options.
8. Baseline approved milestones and control subsequent changes.
9. Close a milestone only when evidence and required approval exist.

## Milestone record

| Field | Definition |
|---|---|
| Milestone ID, title, and type | `MS-###` and control-point category |
| Achieved state or decision | Result represented; no duration |
| Entry conditions | Evidence required before review starts |
| Exit evidence | Deliverables, tests, approvals, or metrics proving achievement |
| Accountable owner and approver | Preparation and decision authority |
| Target window and constraint source | Relative or approved calendar timing |
| Forecast and confidence | Current expected timing and evidence rationale |
| Required predecessors | Work, dependency, capacity, and critical-path links |
| Warning thresholds | Signals that intervention is needed |
| Consequence and next decision | What achievement or miss changes |
| Status and change history | Proposed, Approved, At risk, Achieved, Missed, Cancelled, or Superseded |

## Milestone plan

| ID | Achieved state | Owner | Target window | Forecast | Confidence | Critical dependencies | Exit evidence | Status |
|---|---|---|---|---|---|---|---|---|
| MS-001 | Not established | Not assigned | Not established | Not established | Not assessed | Not assessed | Not established | Proposed |

## Decision rules

- A milestone has zero duration; schedule the work that creates its evidence.
- “Development complete” is insufficient without a defined boundary and acceptance evidence.
- Use relative windows such as `T+6 weeks` or `Sprint 4` when the start date is unknown.
- A requested date must identify source, flexibility, authority, and consequence.
- Do not mark a milestone green solely because its date has not passed; use forecast and evidence.
- Confidence can decline before the forecast changes and must be reported.
- Milestone changes that affect commitments require impact analysis and approval.
- Outcome milestones occur after release when measurement requires real behavior.

## Outputs

- milestone register and baseline;
- evidence, ownership, target windows, forecasts, and confidence;
- links to dependencies, critical path, releases, and outcomes;
- early warnings, consequences, and recovery decisions.

## Quality checks

- Every milestone represents an achieved state or decision.
- Entry, exit, owner, and approver are explicit.
- Forecast derives from the underlying network and capacity.
- Target windows distinguish constraint from forecast.
- Confidence and critical dependencies are visible.
- Achievement is supported by evidence.

## Common mistakes

- creating milestones for every activity;
- assigning duration to a milestone;
- reporting target dates as current forecasts;
- closing on verbal confidence without evidence;
- ending the plan at release without an outcome checkpoint.

## Related modules

- [Critical path](critical-path.md)
- [Dependency management](../delivery/dependency-management.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
- [Release planning](../delivery/release-management.md)
