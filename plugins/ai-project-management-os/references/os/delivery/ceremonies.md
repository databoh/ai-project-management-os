---
title: Delivery Ceremonies
type: coordination-method
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - scrum.md
  - kanban.md
  - hybrid.md
  - reporting.md
---

# Delivery Ceremonies

## Purpose

Design the smallest set of synchronous and asynchronous interactions needed for decisions, coordination, inspection, adaptation, risk control, and stakeholder alignment.

## When to use

Use during delivery setup and when meeting load, delays, missing decisions, weak feedback, or cross-team dependencies indicate that the coordination system needs redesign.

## Ceremony contract

Every recurring interaction must define:

| Field | Definition |
|---|---|
| Purpose and decision | Why the interaction exists and what it can decide |
| Owner or facilitator | Accountable preparation and follow-through |
| Required participants | Decision owners and contributors, not default observers |
| Inputs and pre-work | Evidence available before the interaction |
| Agenda and timebox | Smallest structure sufficient for the purpose |
| Outputs | Decisions, plan changes, risks, actions, or evidence |
| System-of-record update | Where the result is maintained |
| Cadence or trigger | Evidence-based frequency |
| Effectiveness measure | Delay, decision quality, rework, feedback, or action completion |

## Ceremony catalog

| Interaction | Primary purpose | Typical trigger or cadence | Required output |
|---|---|---|---|
| Intake or triage | Classify and route new demand | Arrival or short regular cadence | Accepted, rejected, or discovery decision |
| Refinement | Reduce near-term uncertainty | Ahead of commitment point | Ready candidates, questions, splits, and owner actions |
| Sprint Planning | Set Sprint Goal and feasible plan | Start of Sprint | Sprint Goal and Sprint Backlog |
| Replenishment | Pull work into the ready queue | Capacity signal or cadence | Ordered ready work and service-class decisions |
| Daily coordination | Adapt current plan and unblock flow | Daily or when work changes rapidly | Updated plan, ownership, and escalation |
| Sprint Review or product review | Inspect Increment, outcome evidence, and environment | End of Sprint or meaningful increment | Product and roadmap adaptations |
| Flow review | Inspect aging, WIP, blockers, and SLE risk | Regular flow cadence | Interventions and policy experiments |
| Dependency review | Resolve cross-boundary needs | Risk-based cadence | Confirmed forecasts, mitigations, and escalations |
| Release readiness review | Evaluate evidence and unresolved risk | Before release decision | G6 recommendation or gap actions |
| Retrospective | Improve the operating system | Regular cadence or event trigger | Small owned improvement and follow-up |
| Stakeholder or governance review | Decide scope, forecast, risk, funding, or exception | Decision calendar or trigger | Approved decision and updated baseline |

## Workflow

1. Map required decisions and information latency.
2. Reuse existing interactions where their authority and evidence are sufficient.
3. Choose asynchronous preparation or decision where real-time discussion adds no value.
4. Invite only the people needed to decide, contribute, or learn directly.
5. Publish inputs early and record missing evidence as a gap.
6. Facilitate toward the declared purpose; park unrelated work with an owner.
7. Record decisions, dissent, actions, owners, dates, and affected artifacts.
8. Review action closure and ceremony effectiveness.
9. remove, combine, shorten, or change interactions that do not improve outcomes.

## Decision rules

- Status can be asynchronous unless discussion or escalation is needed.
- A ceremony does not replace decision authority.
- Attendance is not approval; record explicit decisions.
- Do not use daily coordination for manager-by-manager reporting.
- Refinement prepares options; it must not silently approve scope.
- Retrospectives require psychological safety and must not rank individuals.
- Cross-team meetings should follow dependencies and integration needs.
- Cancel a recurring meeting when its decision or evidence need disappears.

## Outputs

- ceremony map and contracts;
- lower-latency decisions and coordination;
- recorded decisions, actions, owners, and baseline changes;
- evidence-based meeting improvements and removed waste.

## Quality checks

- Every interaction has a decision or control purpose.
- Inputs and authority are available.
- Participants and cadence are proportionate.
- Outputs update the system of record.
- Actions have owners and follow-up.
- Meeting effectiveness is inspected.

## Common mistakes

- copying a framework calendar without context;
- reading dashboards aloud;
- inviting stakeholders without decision authority;
- ending with undocumented consensus;
- accumulating meetings without removing obsolete ones.

## Related modules

- [Scrum](scrum.md)
- [Kanban](kanban.md)
- [Hybrid delivery](hybrid.md)
- [Reporting](reporting.md)
