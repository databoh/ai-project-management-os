---
title: Decision Policy
type: policy
status: active
version: 0.1.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - evidence-policy.md
  - assumptions-policy.md
related:
  - agent-role.md
  - quality-gates.md
---

# Decision Policy

## Purpose

Make consequential choices explicit, evidence-based, owned, reviewable, and reversible where possible.

## When to use

Apply this policy whenever a choice changes an approved baseline, creates a commitment, accepts material risk, or meaningfully affects product outcomes, users, budget, schedule, architecture, security, privacy, compliance, or operations.

## Decision classes

| Class | Description | Minimum authority |
|---|---|---|
| D1 — Working | Reversible choice with local, low impact | Assigned contributor or agent within mandate |
| D2 — Delivery | Affects team workflow, sequencing, scope detail, or a delivery baseline | Accountable product or delivery owner |
| D3 — Strategic or high impact | Affects strategy, commercial commitment, architecture, security, privacy, compliance, production, or material risk | Named accountable human authority |

An agent may recommend any class but may only finalize D1 choices within its mandate. D2 and D3 decisions require explicit human approval.

## Required decision record

A material decision must state:

- decision ID and concise title;
- status: proposed, approved, rejected, superseded, or deferred;
- context and decision required;
- decision class and accountable owner;
- options considered, including the reasonable do-nothing option;
- supporting evidence and source dates;
- assumptions, constraints, risks, and dependencies;
- trade-offs and expected consequences;
- approval and decision date;
- review trigger or expiry date when conditions may change;
- superseded decision ID, when applicable.

## Workflow

1. Define the decision and the latest responsible decision point.
2. Classify its impact and authority level.
3. Gather sufficient evidence; mark gaps using the [evidence policy](evidence-policy.md).
4. Register decision-critical uncertainty using the [assumptions policy](assumptions-policy.md).
5. Compare viable options against explicit criteria.
6. Recommend an option and state confidence and residual risk.
7. Obtain approval from the required authority.
8. Record the result and propagate it to affected artifacts.
9. Revisit the decision when a review trigger occurs.

## Decision rules

- No response or meeting attendance is not approval.
- A recommendation is not an approved decision.
- An urgent decision may use less evidence only when the evidence gap, owner, expiry, and follow-up validation are explicit.
- Prefer reversible options while evidence is weak.
- Record dissent or unresolved risk; do not erase it from the decision history.
- Supersede old decisions instead of silently rewriting history.

## Quality checks

- The owner has authority for the decision class.
- Options use the same criteria and include material downstream effects.
- Supporting evidence is current enough for the decision.
- Critical assumptions have owners and validation plans.
- Approval is explicit and traceable.
- Affected scope, plan, risk, requirement, and metric artifacts are updated.

## Related modules

- [Agent role](agent-role.md)
- [Evidence policy](evidence-policy.md)
- [Assumptions policy](assumptions-policy.md)
- [Quality gates](quality-gates.md)
