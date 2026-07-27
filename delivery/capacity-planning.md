---
title: Capacity Planning
type: delivery-planning-method
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/estimation.md
related:
  - dependency-management.md
  - ../project/critical-path.md
  - ../lifecycle/roadmap.md
---

# Capacity Planning

## Purpose

Translate real role availability and delivery-system constraints into a credible amount of work that can be completed without treating headcount or theoretical hours as usable capacity.

## When to use

Use for roadmap, milestone, release, sprint, Kanban, staffing, and scenario planning. Recalculate when team composition, allocation, leave, support load, incidents, working calendar, or work mix changes materially.

## Inputs

- work packages or backlog by required role and skill;
- effort ranges and uncertainty;
- named or scenario team composition;
- working calendars, holidays, leave, start dates, and allocation;
- ceremonies, coordination, reviews, BAU, support, incident, learning, and management load;
- historical throughput, cycle time, velocity, and variability for comparable work;
- bottleneck roles, external capacity, and dependency timing.

## Capacity model

For each role or person:

`Gross availability = working time × allocation`

`Planned delivery capacity = gross availability - known non-delivery demand - explicit operating buffer`

Track units consistently. A buffer reflects observed variability or explicit policy; it must not hide known work.

## Workflow

### 1. Define horizon and unit

Choose hours or person-days for role capacity, or historical throughput for a stable flow system. State the working calendar and planning horizon.

### 2. Establish supply

Record role, skill, start and end availability, allocation, leave, holidays, part-time schedule, and confirmed external support.

### 3. Subtract known demand

Include ceremonies, planning, review, management, support, BAU, on-call, incidents, compliance, training, hiring, onboarding, and other commitments.

### 4. Apply variability buffer

Use historical unplanned demand or a documented scenario. Do not plan routine work to 100% utilization; high utilization increases queues, delay, and fragility.

### 5. Match demand by role and period

Compare work demand with capacity for each constrained role, not only total team capacity. Show overload, underuse caused by dependencies, and skill gaps.

### 6. Model scenarios

Compare scope, sequence, staffing, allocation, outsourcing, and date options. Include onboarding delay and coordination cost when changing team size.

### 7. Reconcile with throughput

For stable teams, compare capacity-based forecasts with historical throughput or velocity. Investigate material divergence rather than choosing the preferred number.

### 8. Approve and monitor

Record capacity assumptions, decision owner, review cadence, thresholds, and actions for sustained variance.

## Capacity record

| Role or resource | Period | Gross availability | Allocation | Known non-delivery demand | Buffer | Planned delivery capacity | Demand range | Gap | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| Not established | Not established | Not assessed | Not assessed | Not assessed | Not assessed | Not assessed | Not assessed | Not assessed | Not assessed |

## Scenario record

| Scenario | Team and allocation | Scope or demand | Bottleneck | Forecast effect | Cost or trade-off | Confidence | Decision |
|---|---|---|---|---|---|---|---|
| Current capacity | Not established | Not established | Not assessed | Not assessed | Not assessed | Not assessed | Not decided |

## Decision rules

- Headcount is not capacity; role, skill, allocation, calendar, and competing demand matter.
- Do not assume eight productive delivery hours per person per working day.
- Do not use individual utilization as a proxy for team value or flow.
- Historical velocity is not transferable across teams and should not be normalized as performance.
- Adding people can reduce short-term capacity through onboarding and coordination.
- Specialist capacity and approval queues can constrain the schedule even when total team hours appear sufficient.
- Planned support and operational work belongs in demand, not in unexplained variance.
- Capacity changes require forecast and critical-path review.

## Outputs

- role- and period-specific capacity plan;
- known non-delivery demand and operating buffer;
- bottlenecks, gaps, and skill constraints;
- scenario comparisons and staffing or scope decisions;
- inputs to estimates, critical path, milestones, roadmaps, and releases.

## Quality checks

- Calendar, allocation, leave, and competing work are represented.
- Demand and supply use compatible units.
- Bottleneck roles are visible by period.
- Buffer has an evidence or policy basis.
- Historical data is comparable and its limitations are stated.
- Scenario decisions include onboarding and coordination effects.

## Related modules

- [Estimation](../lifecycle/estimation.md)
- [Dependency management](dependency-management.md)
- [Critical path](../project/critical-path.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
