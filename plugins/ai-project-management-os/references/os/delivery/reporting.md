---
title: Delivery Reporting
type: delivery-control-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
  - ../lifecycle/roadmap.md
  - ../metrics/metric-dictionary.md
related:
  - ceremonies.md
  - workflow-statuses.md
  - dependency-management.md
  - release-management.md
  - ../metrics/delivery-metrics.md
  - ../metrics/flow-metrics.md
---

# Delivery Reporting

## Purpose

Provide concise, evidence-based information that enables decisions about outcomes, scope, forecast, flow, quality, dependencies, risk, releases, and recovery.

## When to use

Use for team, product, project, program, client, and governance reporting. Tailor audience and cadence without changing metric definitions or hiding conflicting evidence.

## Reporting principles

- lead with outcome and decisions, not activity volume;
- distinguish actual, baseline, target, forecast, commitment, and variance;
- show trend and confidence, not a color alone;
- use one authoritative source for each field;
- keep metrics population, boundary, period, and owner explicit;
- report uncertainty, scope change, and external dependency effects;
- do not rank individuals or reward metric gaming.

## Workflow

1. Define audience, decisions, cadence, and information latency.
2. Select the smallest measures needed for those decisions.
3. Select approved contracts from the [metric dictionary](../metrics/metric-dictionary.md); create or change a contract through its governance workflow.
4. Automate extraction where trustworthy; preserve manual commentary and approval ownership.
5. Compare current evidence with baseline, target, and prior forecast.
6. Explain material variance, confidence, impact, and recovery options.
7. State decisions needed with accountable owner and latest responsible point.
8. Record the published version and update affected plans or logs.
9. Remove measures that do not drive action or control.

## Status dimensions

| Dimension | Evidence | Decision enabled |
|---|---|---|
| Outcome and value | Outcome metric, learning, adoption, and guardrail trend | Continue, adapt, expand, or stop |
| Scope | Baseline, completed, changed, unresolved, and release scope | Accept change or protect boundary |
| Forecast and milestones | Target, current range, confidence, path, and variance | Recovery, scope, capacity, or date decision |
| Flow | WIP, throughput, cycle time distribution, age, and blocked time | Pull, WIP, bottleneck, or policy change |
| Quality | Acceptance, defect, reopen, leakage, rework, and automation evidence | Quality action or risk acceptance |
| Capacity | Role capacity, demand, interrupts, and bottlenecks | Reallocation, staffing, or scope decision |
| Dependencies and risk | At-risk need-by points, triggers, exposure, and owner actions | Mitigation or escalation |
| Release and operations | Readiness, environment, migration, recovery, support, and observability | Release plan or G6 decision |
| Decisions and actions | Open decisions, owners, due points, and aging | Accountability and escalation |

## RAG policy

Define thresholds before reporting:

- **Green:** current evidence supports the approved objective or forecast within tolerance.
- **Amber:** objective remains feasible, but threshold, dependency, confidence, or corrective-action condition requires attention.
- **Red:** objective or commitment is currently infeasible without an approved change, recovery decision, or risk acceptance.
- **Grey:** insufficient or stale evidence; not equivalent to Green.

RAG applies separately to dimensions. Overall status follows the most material decision need, not a simple average.

## Status report

| Field | Current statement |
|---|---|
| Reporting period and data freshness | Not established |
| Outcome and executive summary | Not established |
| Overall status and rationale | Grey — evidence not provided |
| Baseline target or commitment | Not established |
| Current forecast and confidence | Not calculated |
| Scope and change summary | Not established |
| Milestone and release status | Not established |
| Flow, quality, and capacity signals | Not established |
| Critical dependencies and risks | Not established |
| Decisions needed, owner, and deadline | None recorded |
| Recovery actions and next checkpoint | Not established |

## Metric governance

The [metric dictionary](../metrics/metric-dictionary.md) owns formula, population, event, window, source, quality, threshold, segmentation, access, and version definitions. A status report references canonical metric IDs and definition versions. It must not redefine a measure locally to improve a narrative or fit a dashboard.

## Decision rules

- Green requires evidence; missing data is Grey.
- Percent complete is unsuitable for uncertain knowledge work unless completion units and weighting are controlled.
- Average cycle time without distribution or percentile can hide risk.
- Velocity is a team planning input, not an executive productivity measure.
- Do not overwrite a prior forecast; preserve forecast history and decision context.
- Report scope change separately from delivery variance.
- RAG thresholds must not be changed retrospectively to improve status.
- Sensitive client, employee, security, or incident data follows access policy.

## Outputs

- audience-specific status report;
- canonical metric IDs, definition versions, and authoritative sources;
- trend, variance, confidence, and decision needs;
- recovery actions, owners, escalation, and updated baselines;
- lower-noise dashboards and ceremonies.

## Quality checks

- Every reported measure has a contract.
- Status separates facts, interpretation, recommendation, and decision.
- Target, forecast, and commitment are distinct.
- Grey identifies missing evidence.
- Material scope, quality, dependency, and risk effects are visible.
- Decisions and actions have owners and timing.

## Common mistakes

- reporting ticket counts without outcome context;
- treating Green as the absence of bad news;
- hiding scope growth inside progress;
- comparing team velocity;
- publishing dashboards with undefined metrics;
- producing reports that request no decision and change no action.

## Related modules

- [Delivery setup](../lifecycle/delivery-setup.md)
- [Ceremonies](ceremonies.md)
- [Workflow statuses](workflow-statuses.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Delivery metrics](../metrics/delivery-metrics.md)
- [Flow metrics](../metrics/flow-metrics.md)
