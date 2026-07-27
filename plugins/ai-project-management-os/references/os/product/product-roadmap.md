---
title: Product Roadmap
type: product-planning-method
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - product-outcomes.md
  - ../lifecycle/prioritization.md
related:
  - scope.md
  - mvp.md
  - ../lifecycle/roadmap.md
  - ../project/milestone-plan.md
---

# Product Roadmap

## Purpose

Communicate an evidence-based sequence of product outcomes, problems, learning, and strategic choices without turning uncertain future work into feature or date commitments.

## When to use

Use after product outcomes and priorities exist to align product investment across a meaningful horizon. Update when evidence, strategy, outcomes, capacity, dependencies, or market and operational context changes.

## Inputs

- approved vision, business goals, and product outcomes;
- discovery evidence, personas, jobs, journeys, and opportunity areas;
- scope, MVP, assumptions, risks, and outcome measures;
- prioritization decision and confidence;
- broad feasibility, capacity, dependency, and constraint evidence;
- learning and release results from existing products.

## Roadmap horizons

Choose a horizon model that matches certainty:

- **Now / Next / Later:** appropriate when dates are not evidence-backed.
- **Relative periods:** `T+0–3 months`, `T+3–6 months`, or similar when a planning start is defined.
- **Approved calendar windows:** appropriate only when dependencies, capacity, and decision authority support them.

Confidence should normally decline with distance. Horizon labels do not imply equal duration or guaranteed scope.

## Workflow

1. Define roadmap audience, decision, horizon, update cadence, and authority.
2. Select outcome areas and problems supported by evidence and strategy.
3. Link candidate initiatives or experiments without treating them as committed solutions.
4. Apply approved prioritization and account for minimum coherence, trust controls, dependencies, and learning sequence.
5. State expected outcome, measure, evidence, assumptions, confidence, and decision gate for each item.
6. Reconcile with the [delivery roadmap](../lifecycle/roadmap.md) without copying detailed work or dates.
7. Record committed, planned, exploratory, paused, and retired items explicitly.
8. Review outcome evidence and re-roadmap through an accountable product decision.

## Roadmap item

| Field | Definition |
|---|---|
| Roadmap ID and status | `PRM-###`; Committed, Planned, Exploratory, Paused, Achieved, Retired, or Superseded |
| Horizon and confidence | Now, Next, Later, relative period, or approved window |
| Problem or opportunity | Evidence-backed context |
| Intended outcome | Linked `OUT-###` and measure |
| Target actors or jobs | Persona, segment, and `JOB-###` links |
| Candidate initiative or experiment | Direction, not detailed scope |
| Evidence and assumptions | Sources, limitations, and `ASM-###` links |
| Guardrails and trust needs | Conditions that constrain optimization |
| Dependencies and feasibility | Material path and capacity inputs |
| Decision gate and owner | Evidence required for progression |
| Delivery reference | Link to delivery roadmap or release where approved |

## Outcome roadmap

| Horizon | Problem or opportunity | Intended outcome and measure | Candidate direction | Evidence and assumptions | Dependencies | Confidence | Decision gate |
|---|---|---|---|---|---|---|---|
| Now | Not established | Not established | Not established | Not provided | Not assessed | Not assessed | Not established |
| Next | Not established | Not established | Not established | Not provided | Not assessed | Not assessed | Not established |
| Later | Not established | Not established | Not established | Not provided | Not assessed | Low | Validate before planning |

## Decision rules

- Roadmap items earn detail through evidence; distant items remain less precise.
- Product roadmap prioritizes outcomes and problems, not a fixed inventory of features.
- Do not assign a delivery date without a delivery forecast, capacity, dependencies, and approval.
- “Committed” requires an accountable decision and a delivery reference; stakeholder expectation alone is insufficient.
- Dependencies and mandatory controls may affect sequence without becoming product outcomes.
- Preserve paused and retired items with rationale.
- Re-roadmapping is responsible when evidence changes; silent date or scope movement is not.
- Do not measure roadmap success by percentage of originally listed features delivered.

## Outputs

- outcome-based roadmap with explicit horizons;
- evidence, assumptions, confidence, guardrails, and decision gates;
- candidate initiatives and learning sequence;
- accountable commitment status and delivery references;
- inputs to investment, discovery, delivery roadmap, and outcome review.

## Quality checks

- Every item links to a product outcome or strategic decision.
- Horizons match evidence and planning maturity.
- Problems, outcomes, candidate solutions, and commitments are distinct.
- Measures and guardrails are explicit.
- Dependencies and confidence are visible.
- Detailed work remains in delivery artifacts.

## Common mistakes

- publishing a feature calendar as product strategy;
- showing exact dates for exploratory work;
- marking all executive requests committed;
- omitting evidence and outcome measures;
- changing roadmap items without preserving the decision history.

## Related modules

- [Product outcomes](product-outcomes.md)
- [Prioritization](../lifecycle/prioritization.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
- [Milestone plan](../project/milestone-plan.md)
