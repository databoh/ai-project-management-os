---
title: Architecture Decision Records
type: architecture-governance-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/decision-policy.md
related:
  - solution-options.md
  - architecture-discovery.md
  - system-context.md
  - ../lifecycle/solution-outline.md
---

# Architecture Decision Records

## Purpose

Preserve the context, drivers, considered options, approved architecture decision, consequences, evidence, authority, and review triggers so future teams can understand and safely revisit material choices.

## When to use

Use when a choice materially affects system boundaries, technology, data, integration, cloud, security, privacy, scalability, reliability, operability, cost, vendor lock-in, migration, or team capability. Do not create an ADR for a reversible local implementation detail with no meaningful consequence.

## Authority boundary

An agent may draft and analyze an ADR. A named human authority accepts material architecture and residual-risk decisions. `Proposed` must not be interpreted as `Accepted`.

## ADR statuses

- **Proposed:** decision prepared for review.
- **Accepted:** approved and effective.
- **Rejected:** considered and not selected.
- **Deprecated:** no longer recommended for new use but may remain active.
- **Superseded:** replaced by a named later ADR.

Do not rewrite an accepted ADR to hide the original decision context; supersede it.

## Workflow

1. Assign an immutable ADR ID and concise decision title.
2. State context, problem, scope, timing, and authority.
3. List architecture drivers, requirements, evidence, assumptions, constraints, risks, and dependencies.
4. Summarize credible options, including current-state or non-action where appropriate.
5. Record the proposed or approved decision and conditions.
6. Describe positive, negative, uncertain, and operational consequences.
7. Define implementation, migration, validation, security, observability, cost, and rollback or exit implications.
8. Obtain explicit approval and record date and references.
9. Propagate the decision to diagrams, requirements, plans, estimates, tests, runbooks, and other ADRs.
10. Review on a trigger; supersede instead of editing decision history.

## ADR record

| Field | Definition |
|---|---|
| ADR ID and title | `ADR-###`; immutable identity |
| Status and decision class | Proposed, Accepted, Rejected, Deprecated, or Superseded; D1, D2, or D3 |
| Date, owner, and approver | Drafting and decision authority |
| Context and decision | Problem, boundary, and latest responsible point |
| Drivers and requirements | Linked `DRV-###`, requirement, outcome, and control IDs |
| Evidence and confidence | Sources, dates, tests, limitations, and uncertainty |
| Assumptions, constraints, risks, and dependencies | Controlled references |
| Options considered | Comparable alternatives and non-action |
| Decision and conditions | Selected direction and prerequisites |
| Consequences | Benefits, costs, trade-offs, new risks, and organizational effects |
| Security, privacy, compliance, and data | Trust consequences and approval |
| Operations, observability, resilience, and cost | Run and support consequences |
| Migration, rollback, and exit | Transition and reversibility |
| Validation and success evidence | Tests, thresholds, and owners |
| Review triggers and supersession | Conditions for revisit and replacement link |

## Copy-ready ADR structure

### ADR-###: Decision title

**Status:** Proposed
**Decision class:** Not classified
**Owner:** Not assigned
**Approver:** Not established
**Date:** Not provided

#### Context

Not established.

#### Decision drivers

- Not established.

#### Options considered

1. Current state or non-action — not assessed.
2. Option A — not assessed.
3. Option B — not assessed.

#### Decision

Proposed; not approved.

#### Consequences

- Positive: not assessed.
- Negative: not assessed.
- Uncertain: not assessed.
- Operational: not assessed.

#### Validation and review

Evidence threshold, owner, review trigger, and supersession path are not established.

## Decision rules

- One ADR addresses one material decision.
- ADRs record why and consequences, not detailed implementation instructions.
- A numeric option score cannot hide a failed mandatory requirement.
- Approval must be explicit and from the required authority.
- Rejected options retain enough evidence to prevent repeated uninformed debate.
- An ADR does not replace security, privacy, legal, or compliance review.
- Implementation that deviates materially from an accepted ADR requires a new decision or approved exception.
- Review triggers include requirement, demand, incident, cost, vendor, security, or capability change.

## Outputs

- immutable, reviewable architecture decision history;
- explicit approval, evidence, conditions, and residual consequences;
- traceability to requirements, diagrams, plans, implementation, validation, and operations;
- review and supersession path.

## Quality checks

- Context and decision boundary are understandable to a future team.
- Options and drivers are evidence-backed and comparable.
- Consequences include operations, security, data, cost, migration, and exit.
- Status and authority are explicit.
- Downstream artifacts reflect accepted decisions.
- Superseded decisions preserve history.

## Common mistakes

- writing an ADR after implementation to justify a choice;
- using `Accepted` without an approver;
- recording only positive consequences;
- turning the ADR into a design specification;
- editing history instead of superseding.

## Related modules

- [Decision policy](../core/decision-policy.md)
- [Solution options](solution-options.md)
- [Architecture discovery](architecture-discovery.md)
- [Solution outline](../lifecycle/solution-outline.md)
