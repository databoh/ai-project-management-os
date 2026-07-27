---
title: Definition of Ready
type: delivery-policy
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - workflow-statuses.md
  - definition-of-done.md
  - ../business-analysis/user-stories.md
  - ../business-analysis/acceptance-criteria.md
  - ../ai/ai-product-discovery.md
  - ../ai/evaluation.md
---

# Definition of Ready

## Purpose

Make the minimum information, decisions, and conditions needed to start a work item responsibly visible without turning readiness into bureaucracy or a substitute for collaboration.

## When to use

Use at a defined commitment or pull point where missing context would create avoidable blocking, rework, unsafe action, or unreliable forecasting. Tailor by work type, risk, and delivery method.

## Policy design

1. Name the commitment point and work types covered.
2. Identify the smallest conditions needed for ownership, understanding, acceptance, dependency handling, and safe start.
3. Separate mandatory conditions from useful information that can emerge during delivery.
4. Define exception authority, risk recording, expiry, and follow-up.
5. Inspect whether the policy reduces blocked time and rework; remove criteria that do not.

## Core readiness criteria

An item is Ready when, as applicable:

- outcome, rationale, or mandatory-control link is known;
- scope boundary and explicit exclusions are understandable;
- requirement, use case, or story is small enough for the control horizon;
- acceptance criteria or completion evidence are testable;
- priority decision and owner are clear;
- material dependencies have owners, need-by points, and current status;
- high-impact assumptions, risks, and open decisions are visible;
- necessary design, data, interface, environment, access, and compliance inputs are sufficient to start;
- required roles and capacity are available;
- no unresolved issue makes starting unsafe or predictably wasteful.

## Work-type extensions

| Work type | Additional readiness evidence |
|---|---|
| User-facing change | Actor, journey context, behavior, analytics, accessibility, and recovery |
| Integration or data | Contract, source, ownership, sample, privacy, failure, retry, reconciliation, and test access |
| Infrastructure or migration | Environment, rollback or forward recovery, observability, access, blast radius, and approval |
| Defect | Reproduction or evidence, expected behavior, impact, environment, and regression boundary |
| Research or spike | Decision, question, timebox, method, output, and stop condition |
| Security or compliance | Authoritative control source, reviewer, evidence, and acceptance authority |
| AI-enabled behavior | Approved use boundary, representative evaluation set, threshold direction, data handling, guardrails, tool permissions, human review, fallback, cost, and observability |

## Readiness record

| Criterion | Result | Evidence or gap | Owner | Exception and expiry |
|---|---|---|---|---|
| Outcome and scope understood | Not assessed | Not provided | Product owner | None |
| Acceptance boundary testable | Not assessed | Not provided | Product and quality owners | None |
| Dependencies and decisions controlled | Not assessed | Not provided | Delivery owner | None |
| Data, design, environment, and access sufficient | Not assessed | Not provided | Technical owner | None |
| Risk and mandatory controls visible | Not assessed | Not provided | Control owner | None |
| Capacity and ownership available | Not assessed | Not provided | Delivery owner | None |

## Decision rules

- Ready means safe and useful to start, not fully specified.
- DoR is a policy owned by the team and accountable product/delivery roles, not a rejection weapon.
- A failed optional criterion must not block work unless its risk justifies the policy.
- Uncertainty may be the reason to start a spike; the spike still needs a decision question and timebox.
- Expedite work does not bypass safety, legal, security, privacy, or production controls.
- Exceptions require named impact, owner, approval, expiry, and resolution plan.
- DoR does not guarantee delivery, remove the need for collaboration, or replace capacity.
- Track blocked time and rework to test policy effectiveness.

## Outputs

- work-type-specific readiness policy;
- Ready decision and evidence;
- explicit exceptions, residual risk, owner, and expiry;
- inputs to pull, Sprint selection, forecast, and flow improvement.

## Quality checks

- Criteria correspond to real start risk.
- Mandatory and optional conditions are distinguishable.
- Different work types receive proportionate treatment.
- Exceptions are controlled and temporary.
- Policy effectiveness is inspected through flow and quality evidence.
- Readiness does not demand premature implementation detail.

## Common mistakes

- requiring every field for every work type;
- using DoR to push decisions onto analysts;
- marking work Ready without capacity or dependency review;
- treating unknowns as failure instead of defining a spike;
- never changing a policy that creates a refinement queue.

## Related modules

- [Workflow statuses](workflow-statuses.md)
- [Definition of Done](definition-of-done.md)
- [User stories](../business-analysis/user-stories.md)
- [Acceptance criteria](../business-analysis/acceptance-criteria.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [AI evaluation](../ai/evaluation.md)
