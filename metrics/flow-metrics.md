---
title: Flow Metrics
type: measurement-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
  - ../delivery/workflow-statuses.md
related:
  - delivery-metrics.md
  - ../delivery/kanban.md
  - ../delivery/capacity-planning.md
---

# Flow Metrics

## Purpose

Measure how comparable work enters, waits, progresses, completes, and ages through a defined delivery system so teams can control WIP, forecast service, identify constraints, and improve flow.

## When to use

Use for Kanban, Scrum, hybrid, service, support, operational, discovery, and portfolio workflows when work-state history is reliable enough to support a decision. Tailor boundaries and classes rather than comparing unlike systems.

## Inputs

- canonical workflow states, overlays, transition history, and completion policy;
- work-item types, sizes or service classes, priorities, arrival and departure events;
- start, finish, active, queue, blocked, cancelled, reopened, and excluded behavior;
- WIP policies, service expectations, calendars, capacity, and demand;
- data-quality evidence for status automation, missing transitions, and historical changes.

## Workflow

### 1. Define the flow system

Name the service or team, demand source, work population, commitment or start point, completion point, queues, active states, blocked overlay, calendar, and reporting period.

### 2. Segment comparable work

Use work type, service class, risk, size band, or other decision-relevant grouping. Do not combine incomparable items solely to create a larger sample.

### 3. Validate state history

Test missing and simultaneous transitions, automation, reopened items, items that predate tracking, cancelled work, multiple-list behavior, and policy changes.

### 4. Measure demand and departure

Track arrival rate and throughput using the same period and population. Persistent excess arrival over departure increases WIP or unserved demand.

### 5. Measure WIP and age

Measure WIP at defined points or as a time series, work-item age for current items, blocked time, queue distribution, and WIP-limit exceptions.

### 6. Measure elapsed flow

Report cycle or lead time as distributions and percentiles by comparable class. Preserve start, finish, pauses, reopen, and calendar rules.

### 7. Establish a service expectation

Derive a Service Level Expectation from a relevant historical population and percentile, then state probability, boundary, class, period, and exclusions. It is a forecast, not a guarantee.

### 8. Identify constraints

Use cumulative flow, queue growth, aging, blocked reasons, stage time, flow efficiency, and demand-capacity evidence to locate delay. Confirm with workflow observation.

### 9. Change and learn

Adjust WIP, pull, batch size, policy, capacity, automation, dependency, or review design; preserve the change date and test its effect on outcome and quality guardrails.

## Canonical flow measures

| Measure | Definition | Required boundary |
|---|---|---|
| Work in progress | Count of eligible items that crossed start but not completion at a defined time | Population, start, finish, overlays, and snapshot rule |
| Throughput | Count of eligible items reaching completion during a period | Completion event, period, item class, cancellation, and reopen rule |
| Arrival rate | Count of eligible demand entering the defined system during a period | Arrival event, rejected demand, duplicates, and period |
| Cycle time | Elapsed time from defined work start to defined completion | Start, finish, calendar, pauses, reopen behavior, and distribution |
| Lead time | Elapsed time from defined request or commitment to defined completion | Request or commitment event, completion, calendar, and distribution |
| Work-item age | Elapsed time from defined start to observation time for current WIP | Start, observation cut-off, pauses, and current state |
| Blocked time | Elapsed time under a valid blocked overlay or state | Block and unblock events, overlapping blocks, calendar, and reason |
| Flow efficiency | Active elapsed time divided by active plus waiting elapsed time for the defined path | Active and waiting state classification, missing time, and item population |
| Service Level Expectation | Probability that a comparable item completes within a stated elapsed time | Historical population, percentile, period, class, and exclusions |

## Flow review

| Signal | Current evidence | Comparison or threshold | Interpretation | Action | Owner |
|---|---|---|---|---|---|
| Arrival and throughput | Not measured | Not established | Not assessed | Not established | Not assigned |
| WIP and aging | Not measured | Not established | Not assessed | Not established | Not assigned |
| Cycle-time distribution | Not measured | Not established | Not assessed | Not established | Not assigned |
| Blocked and queue time | Not measured | Not established | Not assessed | Not established | Not assigned |
| SLE performance | Not measured | Not established | Not assessed | Not established | Not assigned |

## Decision rules

- Use distributions and percentiles; averages alone hide skew and aging risk.
- Current work-item age is not completed-item cycle time.
- Blocked is an overlay unless the canonical workflow explicitly defines it as a state.
- Flow efficiency is diagnostic and depends on trustworthy active-versus-wait classification.
- Little’s Law is a consistency and scenario aid only for a sufficiently stable system, period, and comparable units; it is not a date generator.
- An SLE describes observed probability under stated conditions and is not an SLA or commitment.
- Faster flow is not improvement if quality, safety, value, or sustainability deteriorates.

## Outputs

- governed flow metric contracts and data-quality record;
- demand, WIP, throughput, age, elapsed-time, blocked, and SLE evidence;
- cumulative-flow and constraint analysis where useful;
- policy experiment, guardrails, action, owner, and review point;
- forecast and capacity inputs.

## Quality checks

- Start, finish, population, class, calendar, and state semantics are explicit.
- Work history is reliable enough for the intended use.
- Current and completed work are analyzed appropriately.
- Distributions, aging, queues, and blocked reasons are visible.
- SLE uses a relevant historical population.
- Flow measures improve the system rather than rank people.

## Common mistakes

- mixing epics, incidents, and small tasks in one cycle-time series;
- resetting age when priority or status changes;
- reporting average cycle time without tails;
- treating a WIP limit breach as a reason to hide work;
- promising a date from Little’s Law alone.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [Workflow statuses](../delivery/workflow-statuses.md)
- [Kanban](../delivery/kanban.md)
- [Delivery metrics](delivery-metrics.md)
- [Capacity planning](../delivery/capacity-planning.md)
