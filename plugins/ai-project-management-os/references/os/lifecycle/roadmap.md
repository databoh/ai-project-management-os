---
title: Delivery Roadmap
type: lifecycle-planning-method
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - estimation.md
  - ../delivery/capacity-planning.md
  - ../delivery/dependency-management.md
  - ../project/critical-path.md
related:
  - ../product/product-roadmap.md
  - ../project/milestone-plan.md
  - ../delivery/release-management.md
  - ../core/quality-gates.md
  - delivery-setup.md
---

# Delivery Roadmap

## Purpose

Create a versioned, capacity- and dependency-aware forecast that connects approved product direction to deliverables, milestones, releases, decision gates, and confidence.

## When to use

Use for multi-team or multi-release delivery, external commitments, investment scenarios, or any initiative requiring a forecast beyond the active work horizon. A small team may use a release plan and milestone list instead.

## Inputs

- product roadmap, scope scenario, MVP, and priorities;
- requirement and decomposition baseline status;
- estimate ranges and maturity;
- capacity by role and period;
- dependency register and schedule network;
- critical and near-critical paths;
- milestone and release candidates;
- quality, review, security, compliance, migration, deployment, support, and outcome-measurement work.

## Workflow

### 1. Define the roadmap decision

State audience, planning horizon, scenario, required confidence, update cadence, and what the roadmap will authorize.

### 2. Select the baseline or scenario

Reference product outcomes, included scope, requirements, WBS or backlog version, and unresolved items. Do not combine multiple scenarios into one apparent commitment.

### 3. Build the delivery model

Sequence deliverables and workstreams using dependencies, role capacity, calendars, and acceptance boundaries. Include non-development work.

### 4. Integrate milestones and releases

Use [milestones](../project/milestone-plan.md) for achieved states and [release planning](../delivery/release-management.md) for deployable increments. Link outcome-measurement checkpoints after release.

### 5. Apply critical-path and scenario analysis

Identify controlling and near-critical paths. Compare scope, sequence, capacity, date, and risk options rather than forcing one plan.

### 6. Express time and confidence

Use relative periods when the start date is unknown. Distinguish:

- external constraint;
- approved target;
- current forecast;
- confidence interval or range;
- commitment.

### 7. Evaluate G4

Confirm decomposition, estimate maturity, capacity, dependencies, reviews, QA, release work, uncertainty reserve, critical path, approval, and change control. A roadmap can exist before G4; it cannot be called committed without sufficient evidence.

### 8. Baseline and maintain

Record version, scenario, approval, assumptions, and change triggers. Update actuals, forecasts, path, confidence, and decisions at the agreed cadence.

## Roadmap record

| Field | Definition |
|---|---|
| Roadmap ID, version, and scenario | Stable forecast identity |
| Planning horizon and time basis | Relative or calendar periods |
| Scope, requirements, and WBS baseline | Authoritative boundary |
| Estimate maturity and confidence | ROM, Planning, or Commitment |
| Team and capacity assumptions | Roles, allocations, calendars, and bottlenecks |
| Dependency and path model | Critical and near-critical references |
| Milestones and releases | Achieved states and controlled increments |
| Constraint, target, forecast, and commitment | Distinct schedule concepts |
| Uncertainty reserve and risks | Explicit rationale and owners |
| Decision gates and approvals | Authority and evidence |
| Update cadence and triggers | Forecast maintenance |

## Delivery roadmap

| Horizon or window | Outcome and deliverable | Milestone or release | Capacity and owner | Critical dependencies | Forecast range | Confidence | Decision gate |
|---|---|---|---|---|---|---|---|
| Not established | Not established | Not assigned | Not established | Not assessed | Not calculated | Not assessed | Not established |

## G4 plan commitment

| Criterion | Result | Evidence or gap | Owner | Resolution point |
|---|---|---|---|---|
| Scope and decomposition baseline | Not assessed | Not provided | Scope owner | Before commitment |
| Estimate maturity and reserve | Not assessed | Not provided | Estimate owner | Before commitment |
| Role capacity and calendars | Not assessed | Not provided | Delivery owner | Before commitment |
| Dependencies and critical path | Not assessed | Not provided | Dependency owner | Before commitment |
| QA, review, release, and support work | Not assessed | Not provided | Delivery owner | Before commitment |
| Risks, confidence, and change control | Not assessed | Not provided | Accountable approver | Before commitment |

**Gate outcome:** Not assessed
**Approved constraint or target:** Not established
**Current forecast:** Not calculated
**Commitment status:** Not approved

## Decision rules

- A delivery roadmap is a forecast model, not a promise by default.
- Product roadmap owns outcomes and product choices; delivery roadmap owns delivery sequence and forecast.
- Do not hide schedule pressure by reducing QA, security, migration, support, or release work.
- Capacity added after the bottleneck may not shorten the critical path.
- A fixed date requires explicit scope and risk options.
- Use a separate scenario for materially different scope, team, or date assumptions.
- Report forecast and confidence changes before a milestone is missed.
- Baseline changes require impact analysis and approval.

## Outputs

- versioned delivery roadmap and scenarios;
- sequence, capacity, dependencies, path, milestones, releases, and decision gates;
- target, forecast, confidence, reserve, and commitment status;
- G4 assessment and change triggers;
- inputs to delivery setup and execution control.

## Quality checks

- Product and delivery roadmap responsibilities are distinct.
- Scope and time basis are explicit.
- Forecast derives from estimates, capacity, dependencies, and calendars.
- Non-development and release work is included.
- Critical and near-critical paths are visible.
- G4 and commitment status are evidence-based.

## Related modules

- [Product roadmap](../product/product-roadmap.md)
- [Estimation](estimation.md)
- [Milestone plan](../project/milestone-plan.md)
- [Release planning](../delivery/release-management.md)
- [Delivery setup](delivery-setup.md)
