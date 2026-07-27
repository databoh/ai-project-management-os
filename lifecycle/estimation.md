---
title: Estimation
type: lifecycle-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - decomposition.md
  - ../project/work-breakdown-structure.md
  - ../core/assumptions-policy.md
related:
  - solution-outline.md
  - ../delivery/capacity-planning.md
  - ../delivery/dependency-management.md
  - ../project/critical-path.md
  - roadmap.md
---

# Estimation

## Purpose

Produce transparent, conditional forecasts of effort, duration, cost, and confidence that reflect scope, solution maturity, capacity, dependencies, reviews, quality work, release work, and uncertainty.

## When to use

Use when comparing options, testing feasibility, planning capacity, building a roadmap, forecasting a release, or requesting a commitment. Match estimate precision to decision maturity and cost of error.

## Inputs

- approved scope boundary or named scenario;
- WBS, backlog, or deliverable decomposition without double counting;
- requirement and acceptance baseline status;
- solution assumptions and technical unknowns;
- roles, skills, calendars, capacity, and historical delivery evidence;
- dependencies, critical-path inputs, quality, review, release, and operational work;
- assumptions, risks, exclusions, and uncertainty drivers.

## Estimate maturity

| Level | Appropriate use | Minimum evidence | Output |
|---|---|---|---|
| ROM | Early option comparison or discovery | Coarse scope, analogous evidence, major assumptions | Broad range, low or medium confidence, validation plan |
| Planning | Roadmap, staffing, sequencing, or budget scenario | Decomposition, solution direction, role capacity, key dependencies | Work-package ranges, forecast scenarios, explicit reserve |
| Commitment | Approved baseline, external target, or funding authorization | Stable scope and solution, accountable team, calendars, critical path, reviews, QA, release work, approved risk | Baselined range or target with confidence, conditions, and change control |

Without a solution outline, only a conditional ROM estimate is normally responsible.

## Workflow

### 1. Define the estimate decision

State what is being estimated, for which scenario, decision, horizon, audience, and maturity level. Identify the accountable owner and required confidence.

### 2. Confirm the boundary

List included and excluded deliverables, environments, data, integrations, migration, quality, security, compliance, documentation, training, deployment, support, and management work. Reference the baseline or scenario version.

### 3. Select methods

Use one or more:

- analogous estimation from comparable completed work;
- parametric estimation using validated productivity or unit-cost data;
- bottom-up estimation from work packages;
- three-point estimation for meaningful uncertainty;
- expert judgment with documented rationale and independent review;
- historical throughput or cycle-time forecasting for comparable flow work.

Do not mix units or aggregate overlapping methods without explaining the reconciliation.

### 4. Estimate effort

Estimate role-specific labor effort. Keep elapsed duration separate: effort does not include waiting and cannot be converted to duration without capacity, sequence, and calendars.

### 5. Model uncertainty

For three-point estimates capture optimistic `O`, most likely `M`, and pessimistic `P` under stated conditions. If the distribution assumption is useful, PERT expected value may be calculated as:

`E = (O + 4M + P) / 6`

and indicative standard deviation as:

`SD = (P - O) / 6`

The formula does not create evidence; preserve the original range and uncertainty drivers.

### 6. Apply capacity and sequence

Use [capacity planning](../delivery/capacity-planning.md), dependency logic, calendars, reviews, handoffs, and [critical-path analysis](../project/critical-path.md) to forecast elapsed duration.

### 7. Add non-build work and reserve

Include discovery, coordination, design, reviews, QA, defect correction, security, compliance, deployment, migration, documentation, training, support readiness, and release preparation. Add an explicit uncertainty reserve tied to identified risks; do not hide it inside inflated task estimates.

### 8. Build scenarios

Provide optimistic, most likely, and pessimistic or constrained-scope scenarios. For fixed dates, show feasible scope and risk options rather than forcing the estimate to match the date.

### 9. Review and approve

Check assumptions with responsible roles and dependency owners. Record confidence, expiry, re-estimation triggers, approval status, and whether the output is an estimate or commitment.

## Estimate record

| Field | Definition |
|---|---|
| Estimate ID, version, and maturity | Stable record and ROM, Planning, or Commitment |
| Decision and scenario | Intended use and compared option |
| Scope baseline | Included version and unresolved scope |
| Method and reference data | Technique, source, sample, and limitations |
| Effort by role | Range and unit |
| Duration range | Calendar forecast after capacity and dependencies |
| Cost range | Authorized rates and non-labor costs; omit if inputs are unavailable |
| O, M, P or confidence interval | Uncertainty representation |
| Capacity and calendars | Team, allocation, availability, and working calendar |
| Dependencies and critical path | Linked records and assumptions |
| Reviews, QA, release, and reserve | Explicit included work |
| Assumptions, exclusions, and risks | Conditions that control validity |
| Confidence and rationale | Low, medium, or high with evidence |
| Owner, approval, expiry, and triggers | Governance and maintenance |

## Confidence assessment

Assess:

- scope and requirement stability;
- solution maturity;
- decomposition completeness;
- historical comparability;
- team and skill certainty;
- capacity and calendar certainty;
- dependency ownership;
- data, integration, and environment certainty;
- review, compliance, and release evidence;
- unresolved high-impact assumptions.

High confidence requires strong evidence across the factors that can materially change the forecast.

## Decision rules

- Never present a point estimate without its range, assumptions, inclusions, exclusions, and confidence.
- Story points are team-relative complexity, not hours or calendar time.
- Historical velocity is usable only for a sufficiently stable team, work type, and Definition of Done.
- Do not assume people are interchangeable or fully available.
- Cost uses approved rate and non-labor inputs; do not invent commercial rates.
- Contingency is not permission to omit known work.
- A target date is a constraint or decision input until supported and approved.
- Re-estimate when scope, solution, capacity, critical path, or a material assumption changes.

## Outputs

- versioned estimate with maturity and decision use;
- role effort, duration, and optional cost ranges;
- methods, scenarios, capacity, dependencies, and critical path;
- uncertainty reserve, confidence, expiry, and triggers;
- inputs to milestones, roadmaps, release plan, and G4.

## Quality checks

- Boundary and baseline version are explicit.
- Effort, duration, and cost are not conflated.
- Methods and source data are reproducible.
- Capacity, reviews, QA, release, and non-development work are included.
- Range and confidence reflect evidence quality.
- Gaps that prevent commitment remain visible.

## Related modules

- [Solution outline](solution-outline.md)
- [Capacity planning](../delivery/capacity-planning.md)
- [Dependency management](../delivery/dependency-management.md)
- [Critical path](../project/critical-path.md)
- [Delivery roadmap](roadmap.md)
