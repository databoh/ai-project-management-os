---
title: Scrum
type: delivery-operating-method
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - kanban.md
  - hybrid.md
  - workflow-statuses.md
  - definition-of-ready.md
  - definition-of-done.md
  - ceremonies.md
---

# Scrum

## Purpose

Provide a lightweight empirical operating method for a stable cross-functional team delivering a valuable, usable increment toward a coherent Sprint Goal.

## When to use

Use when:

- a stable team can own an end-to-end increment;
- work can be planned into a short fixed cadence;
- stakeholders can inspect an integrated result regularly;
- uncertainty benefits from frequent feedback and adaptation;
- interrupt demand can be controlled without routinely invalidating the Sprint Goal.

Prefer Kanban or a hybrid when work arrives continuously, interrupts dominate, specialist queues control flow, or a stable Sprint boundary is artificial.

## Accountabilities

| Accountability | Primary responsibility | Must not become |
|---|---|---|
| Product Owner | Product Goal, ordering, value decisions, and transparent Product Backlog | Committee proxy without decision authority |
| Scrum Master | Scrum effectiveness, impediment removal, coaching, and system improvement | Meeting secretary or team manager |
| Developers | Create a usable Done Increment and adapt the plan toward the Sprint Goal | Individual component silos with separate completion |

Local job titles may differ, but these accountabilities and decision rights must remain clear.

## Artifacts and commitments

- **Product Backlog → Product Goal**
- **Sprint Backlog → Sprint Goal**
- **Increment → Definition of Done**

Acceptance criteria define item-specific behavior. The [Definition of Done](definition-of-done.md) defines shared completion evidence for the Increment.

## Operating workflow

1. Maintain an ordered Product Backlog with outcome, requirement, acceptance, dependency, and priority traceability.
2. Refine only enough work to support responsible selection and upcoming decisions.
3. In Sprint Planning, define a coherent Sprint Goal, select feasible work using real capacity, and form an adaptable plan.
4. During the Sprint, Developers pull and coordinate work, protect the goal, expose blockers, and update the forecast.
5. Use the Daily Scrum to inspect progress toward the Sprint Goal and adapt the plan.
6. Produce a Done integrated Increment; incomplete work does not count as completed.
7. In Sprint Review, inspect the outcome, Increment, environment, and roadmap with stakeholders and adapt the Product Backlog.
8. In Sprint Retrospective, select a small owned improvement and inspect its result later.

## Sprint policy

| Field | Definition |
|---|---|
| Sprint length and calendar | Consistent cadence and timezone |
| Product and Sprint Goal | Outcome direction and current objective |
| Capacity basis | Availability, leave, support, and known demand |
| Selection policy | Ordered work, readiness, dependencies, and risk |
| Interrupt policy | What qualifies, who decides, capacity treatment, and goal impact |
| Quality policy | DoD, acceptance, review, automation, and unresolved-defect treatment |
| Carryover policy | Reassess and reorder incomplete work; never auto-count it |
| Cancellation authority | Product Owner and conditions where the goal becomes obsolete |
| Metrics and review | Goal success, flow, quality, predictability, and improvement evidence |

## Forecasting

- Use historical completion and capacity from the same team and comparable work.
- Treat velocity as a planning observation, not a productivity target.
- Do not compare teams or reward point totals.
- Forecast the Sprint Goal and coherent Increment, not maximum utilization.
- Report scope change and interrupt demand separately from estimation variance.

## Decision rules

- The Sprint Goal provides flexibility; selected items may change through collaboration while the goal remains valid.
- A Sprint is not a mini-waterfall with analysis, build, and test in separate sequential phases.
- Quality does not decrease to meet the Sprint boundary.
- Work that does not satisfy the DoD returns to the Product Backlog and is not part of the Increment.
- Stakeholders inspect an integrated outcome, not individual status presentations.
- Urgent work follows the explicit interrupt policy; urgency alone does not authorize silent substitution.
- Retrospective actions require owners and observable follow-up.
- Scrum events may be adapted in format, but their inspection and adaptation purpose must remain.

## Outputs

- Product and Sprint Goals;
- ordered Product Backlog and adaptable Sprint Backlog;
- usable Done Increment;
- updated forecast, dependencies, risks, and decisions;
- stakeholder feedback and owned improvement action.

## Quality checks

- The team can create an end-to-end Increment.
- Product Owner has real ordering and value authority.
- Sprint Goal is outcome-oriented and coherent.
- Capacity and interrupts are explicit.
- Done means integrated and evidenced.
- Review and retrospective produce adaptation.

## Common mistakes

- treating Scrum as a ticket cadence without goals;
- assigning stories to individuals before team planning;
- using velocity as a performance KPI;
- carrying incomplete work forward without reordering;
- demonstrating partial components as a Done Increment;
- running events that produce no decision or adaptation.

## Related modules

- [Delivery setup](../lifecycle/delivery-setup.md)
- [Kanban](kanban.md)
- [Definition of Ready](definition-of-ready.md)
- [Definition of Done](definition-of-done.md)
- [Ceremonies](ceremonies.md)
