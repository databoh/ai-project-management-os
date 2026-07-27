---
title: Kanban
type: delivery-operating-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - scrum.md
  - hybrid.md
  - workflow-statuses.md
  - definition-of-ready.md
  - definition-of-done.md
  - ceremonies.md
  - ../metrics/flow-metrics.md
---

# Kanban

## Purpose

Manage and improve the flow of value by visualizing real work, limiting work in progress, using explicit pull policies, and adapting from flow evidence.

## When to use

Use when work arrives continuously or unpredictably, priorities can change between deliveries, service expectations matter, specialist or review queues constrain flow, or releases are decoupled from a fixed iteration.

## Core practices

- define and visualize the actual workflow;
- limit work in progress at relevant states or swimlanes;
- pull work only when downstream capacity exists;
- make selection, transition, blocked, expedite, and completion policies explicit;
- manage flow using work-item age, cycle time, throughput, WIP, and blocked time;
- establish a Service Level Expectation from historical data;
- inspect and evolve policies collaboratively.

## Workflow design

1. Define service boundaries, customer, request types, arrival and completion points.
2. Map actual states and queues using [workflow statuses](workflow-statuses.md).
3. Establish entry and exit policies for each state.
4. Set initial WIP limits based on bottlenecks, team capability, and risk.
5. Define replenishment, selection, classes of service, and expedite authority.
6. Make blocked work visible without losing its underlying workflow state.
7. Define delivery review, flow review, operations review, and improvement cadence.
8. Establish SLE and aging alerts from comparable historical work.
9. Change one policy at a time where practical and inspect its effect.

## Explicit-policy record

| Field | Definition |
|---|---|
| Service and boundaries | Request types, commitment point, delivery point, and customer |
| Workflow states | Actual value-adding and queue states |
| Pull and selection policy | Who selects what and from where |
| WIP limits | Limits by state, swimlane, or system |
| Classes of service | Standard, fixed-date, expedite, or intangible with rules |
| Blocked policy | Flag, owner, aging, escalation, and capacity treatment |
| SLE | Probability-based elapsed-time expectation and historical period |
| Aging thresholds | Warning signals before SLE risk |
| Completion policy | Acceptance and DoD evidence |
| Review cadence | Replenishment, delivery, flow, risk, and improvement reviews |

## Flow measures

| Measure | Use | Required boundary |
|---|---|---|
| WIP | Expose demand already started | Start and finish states |
| Throughput | Understand completion rate | Work-item type and period |
| Cycle time | Forecast elapsed delivery behavior | Commitment and delivery points |
| Work-item age | Intervene before current work becomes late | Same start boundary as cycle time |
| Blocked time | Identify preventable delay | Blocked definition and timestamps |
| Flow efficiency | Explore wait versus active time | Reliable active and waiting data |
| SLE attainment | Assess service predictability | Stated percentile, period, and item population |

## Classes of service

Use classes sparingly:

- **Standard:** normal pull and SLE.
- **Fixed date:** economic or compliance consequence at a validated date.
- **Expedite:** immediate material harm or cost; strict WIP and authority.
- **Intangible:** important improvement with delayed visible consequence.

Classes do not replace priority decisions or permit unlimited expediting.

## Decision rules

- WIP limits are operating policies, not aspirational labels.
- Stop starting and help finish when a limit is reached.
- Blocked is normally a flag layered on the current state, not a parking status that hides aging.
- An SLE is a forecast based on a defined historical population, not a guaranteed SLA.
- Do not average incomparable item types or service classes.
- Expedite work consumes capacity and must expose displaced work and outcome impact.
- High utilization is not the goal; sustainable flow and outcome delivery are.
- Do not change multiple workflow policies without preserving the ability to learn.

## Outputs

- explicit service boundary and workflow;
- WIP limits, pull, blocked, class-of-service, and completion policies;
- SLE, aging thresholds, and flow reviews;
- evidence-based improvement decisions and updated forecasts.

## Quality checks

- Workflow reflects actual work and queues.
- Commitment and delivery points are explicit.
- WIP limits are visible and enforced.
- Blocked and aging work trigger ownership.
- SLE uses comparable historical evidence.
- Metrics drive system improvement rather than individual ranking.

## Common mistakes

- using a board without WIP limits or pull;
- treating every urgent request as expedite;
- hiding blocked work in a separate state;
- reporting average cycle time without distribution;
- increasing WIP to keep every person busy;
- copying Scrum events without a flow decision purpose.

## Related modules

- [Delivery setup](../lifecycle/delivery-setup.md)
- [Workflow statuses](workflow-statuses.md)
- [Definition of Done](definition-of-done.md)
- [Ceremonies](ceremonies.md)
- [Reporting](reporting.md)
- [Flow metrics](../metrics/flow-metrics.md)
