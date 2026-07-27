---
title: Delivery Metrics
type: measurement-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
  - ../delivery/reporting.md
related:
  - flow-metrics.md
  - dora-metrics.md
  - ../lifecycle/roadmap.md
  - ../delivery/capacity-planning.md
  - ../delivery/dependency-management.md
---

# Delivery Metrics

## Purpose

Provide decision-ready evidence about outcome progress, scope, forecast, milestones, capacity, dependencies, quality, risk, and delivery-system health without confusing activity, target pressure, or reporting status with value.

## When to use

Use for team, project, program, release, portfolio, client, and governance control. Tailor by delivery model and decision horizon; use [flow metrics](flow-metrics.md) for work-system movement and [DORA metrics](dora-metrics.md) for software deployment performance.

## Inputs

- approved outcomes, scope, requirements, decomposition, roadmap, release, and milestones;
- estimate ranges, capacity, calendars, dependencies, critical and near-critical paths;
- workflow, readiness, completion, quality, defect, change, risk, issue, and decision records;
- actual start and completion evidence, current forecasts, prior forecasts, targets, and commitments;
- product, business, engineering, flow, support, and operational evidence.

## Workflow

### 1. Define the control decision

Name the audience and whether the decision concerns scope, sequence, capacity, dependency, milestone, release, quality, recovery, funding, or escalation.

### 2. Establish delivery boundaries

Define initiative, release, team or system, included work types, workflow start and end, completion evidence, calendar, baseline version, and reporting cut-off.

### 3. Select a balanced set

Represent:

- outcome and accepted-scope progress;
- current forecast, range, confidence, and prior-forecast movement;
- milestone and critical-path state;
- capacity, demand, WIP, bottlenecks, and dependencies;
- quality, rework, defects, risk, issues, and release readiness;
- decisions, corrective actions, and guardrails.

### 4. Preserve planning distinctions

Show actual, approved baseline, target, commitment, current forecast, and variance separately. A missed target and an inaccurate forecast are different control problems.

### 5. Measure scope honestly

Use approved requirement, deliverable, or release boundaries. Show added, removed, split, deferred, accepted, rejected, and unplanned work without treating point or item totals as interchangeable value.

### 6. Analyze forecast behavior

Record forecast range and confidence at each decision point, compare later actuals with the forecast known then, and assess bias, interval coverage, and reasons for movement rather than rewarding late forecast changes.

### 7. Analyze constraints

Connect flow, capacity, path, dependency, review, quality, environment, and decision delay to forecast and outcome impact. Avoid attributing system delay to individuals.

### 8. Decide and follow through

Record action, owner, decision date, expected effect, leading signal, guardrail, and follow-up point. Remove reporting that repeatedly produces no action.

## Delivery control map

| Area | Decision question | Evidence | Boundary |
|---|---|---|---|
| Outcome and scope | Is accepted delivery producing the intended result? | Outcome trend, accepted scope, release evidence, and exclusions | Outcome, baseline, acceptance, release, and horizon |
| Forecast | What is the current likely completion or release range? | Range, confidence, movement, assumptions, and path | Forecast date, cut-off, scenario, and completion state |
| Milestones | Which achieved states are at risk or complete? | Exit evidence, target, forecast, confidence, and dependencies | Milestone state and evidence |
| Capacity and demand | Can available roles absorb planned and unplanned work? | Availability, allocation, demand, buffer, bottleneck, and scenario | Role, calendar, period, and competing demand |
| Dependencies | Which provider-consumer relationships threaten outcomes? | Need-by, forecast, confidence, fallback, and escalation | Deliverable, owner, required point, and status |
| Quality and rework | Is completion durable and acceptable? | Defects, rejected work, reopen, rework, DoD and release evidence | Severity, detection stage, denominator, and period |
| Risk and decisions | What uncertainty or delayed authority changes the plan? | Exposure, trigger, decision age, action, and residual risk | Risk method, decision point, and authority |
| Delivery health | Is the system improving sustainably? | Flow distribution, predictability, blocked work, support load, and wellbeing guardrails | Work system, item classes, period, and population |

## Forecast review record

| Field | Required content |
|---|---|
| Forecast object | Deliverable, milestone, release, outcome, or cost boundary |
| Forecast as of | Evidence cut-off and model version |
| Range and confidence | Earliest, central or expected, latest, and confidence rationale |
| Target or commitment | Separate approved value and authority |
| Actual or current forecast | Result or newest evidence-based range |
| Movement and variance | Magnitude, direction, cause categories, and data changes |
| Decision | Scope, capacity, sequence, dependency, risk, or target action |

## Decision rules

- Status color summarizes a decision need; it is not a substitute for evidence.
- Percentage complete is invalid without a stable denominator and completion evidence.
- Story points and velocity are team-relative planning inputs, not cross-team output or productivity measures.
- On-time delivery requires a controlled target and achieved-state boundary; it does not prove value or quality.
- Forecast accuracy is assessed using the forecast available at the named historical point, not the latest revised forecast.
- Scope change and forecast movement remain visible rather than being normalized away.
- Metrics must not incentivize hidden work, oversized batches, weak estimates, or premature completion.

## Outputs

- delivery control map and canonical metric contracts;
- outcome, scope, forecast, milestone, capacity, dependency, quality, and risk evidence;
- historical forecast-performance and movement analysis;
- decisions, corrective actions, owners, and follow-up;
- governed inputs to reporting, roadmap, release, and improvement.

## Quality checks

- Metrics correspond to explicit delivery decisions.
- Scope, completion, time, forecast, and target boundaries are stable and versioned.
- Outcome, flow, quality, forecast, and risk are balanced.
- Unplanned work and scope movement are visible.
- Team comparisons account for context and do not rank individuals.
- Every escalation contains evidence and an actionable owner.

## Common mistakes

- reporting percent complete from subjective updates;
- using velocity as an executive target;
- calling target adherence forecast accuracy;
- hiding removed scope to preserve an on-time claim;
- measuring ticket closure without accepted outcomes or quality.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [Delivery reporting](../delivery/reporting.md)
- [Flow metrics](flow-metrics.md)
- [DORA metrics](dora-metrics.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
