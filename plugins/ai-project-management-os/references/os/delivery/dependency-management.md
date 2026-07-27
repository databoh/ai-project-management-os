---
title: Dependency Management
type: delivery-control-method
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/decomposition.md
related:
  - capacity-planning.md
  - ../project/critical-path.md
  - ../lifecycle/estimation.md
  - ../lifecycle/roadmap.md
---

# Dependency Management

## Purpose

Identify, validate, sequence, own, monitor, and escalate conditions outside a work item's direct control before they invalidate estimates, milestones, releases, or outcomes.

## When to use

Use from discovery through release for product, technical, data, team, vendor, environment, decision, approval, legal, security, operational, and release dependencies.

## Inputs

- outcomes, scope, requirements, WBS, backlog, and release candidates;
- solution and interface assumptions;
- responsible teams, vendors, approvers, environments, and calendars;
- estimates, milestones, risks, contracts, and external commitments.

## Dependency types

- deliverable or predecessor;
- decision or approval;
- external team, vendor, or partner;
- data, interface, environment, or infrastructure;
- specialist skill or constrained capacity;
- policy, legal, security, privacy, or compliance review;
- procurement, contract, access, or funding;
- operational readiness, support, training, or communication.

Network relationships may be finish-to-start, start-to-start, finish-to-finish, or start-to-finish, with explicit lead or lag where justified.

## Workflow

1. Identify dependencies from every controlled deliverable and requirement.
2. Confirm whether the relationship is real, hard or soft, internal or external, and under whose control.
3. Define the required output, acceptance evidence, owner, consumer, need-by point, lead time, and fallback.
4. Add the relationship to the schedule or roadmap and test critical-path effect.
5. Agree monitoring cadence and early-warning indicators with both sides.
6. Track forecast, confidence, blockers, and changes.
7. Escalate before the need-by point when recovery requires authority or additional scope, capacity, or risk acceptance.
8. Close only when the consumer accepts the dependency output.

## Dependency register

| Field | Definition |
|---|---|
| Dependency ID and status | `DEP-###`; Identified, Confirmed, At risk, Blocked, Satisfied, Cancelled, or Superseded |
| Consumer and provider | Work item, team, vendor, or decision owner |
| Required output and acceptance | Observable condition that satisfies the dependency |
| Type and relationship | Category plus FS, SS, FF, or SF if scheduled |
| Need-by point and lead or lag | Relative or approved calendar timing |
| Provider forecast and confidence | Current expected availability |
| Owner and escalation path | Accountability on consumer side and authority path |
| Impact if late | Outcome, scope, cost, path, release, or control effect |
| Early-warning indicator | Signal available before failure |
| Mitigation and fallback | Reduce probability or impact |
| Source, assumptions, and evidence | Basis for the record |
| Last reviewed and next check | Maintenance cadence |

## Dependency board

| ID | Required output | Provider | Consumer | Need by | Forecast | Confidence | Critical-path effect | Status | Next action |
|---|---|---|---|---|---|---|---|---|---|
| DEP-001 | Not established | Not assigned | Not assigned | Not established | Not established | Not assessed | Not assessed | Identified | Confirm ownership |

## Decision rules

- Naming another team is not dependency acceptance; provider, output, and timing must be confirmed.
- A dependency is not a risk: the dependency is a required condition; uncertainty about it may create a linked risk.
- Do not encode preference or habitual sequence as a hard dependency without evidence.
- Leads and lags require operational rationale; they are not hidden schedule buffer.
- External commitments remain conditional until confirmed by authorized owners.
- Pull forward high-uncertainty dependencies when early validation can change feasibility.
- A satisfied dependency needs consumer acceptance, not only provider completion.
- Changes that affect the critical path or approved milestone require impact review.

## Outputs

- confirmed dependency register and network relationships;
- ownership, need-by points, forecasts, confidence, and acceptance;
- early warnings, mitigations, fallbacks, and escalation paths;
- critical-path, estimate, milestone, roadmap, and release inputs.

## Quality checks

- Every material dependency has a provider, consumer, owner, and accepted output.
- Timing uses a need-by point and current forecast.
- Hard and soft relationships are distinguishable.
- External and approval dependencies include authority and access constraints.
- Critical and near-critical effects are reviewed.
- At-risk dependencies trigger action before becoming blockers.

## Common mistakes

- treating dependency lists as status reports without action;
- recording only technical predecessors;
- assuming a vendor date without confirmation;
- omitting acceptance criteria for dependency output;
- escalating only after the consumer is blocked.

## Related modules

- [Critical path](../project/critical-path.md)
- [Capacity planning](capacity-planning.md)
- [Estimation](../lifecycle/estimation.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
