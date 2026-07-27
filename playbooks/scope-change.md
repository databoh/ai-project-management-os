---
title: Scope Change Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/decision-policy.md
  - ../lifecycle/requirements.md
related:
  - ../product/scope.md
  - ../business-analysis/requirements-traceability.md
  - ../lifecycle/estimation.md
  - ../lifecycle/roadmap.md
  - delayed-project-recovery.md
---

# Scope Change Playbook

## Purpose

Evaluate, approve, reject, defer, or replace a proposed scope change using traceable outcome, requirement, solution, delivery, cost, trust, operational, and commitment impact.

## When to use

Use after an approved product, requirement, release, project, budget, or delivery baseline exists and a request would add, remove, alter, accelerate, defer, or reinterpret its boundary or acceptance.

## Inputs

- change request, requester, source, rationale, urgency, and desired decision point;
- current outcome, scope, requirement, solution, estimate, roadmap, release, and contract baselines;
- traceability, dependencies, capacity, path, quality, security, privacy, compliance, data, operations, support, and metric evidence;
- change authority and commercial or contractual process.

## Workflow

### 1. Preserve the request

Record the request verbatim and classify whether it is a clarification, defect, compliance obligation, assumption correction, new requirement, replacement, removal, or changed acceptance.

### 2. Confirm the decision boundary

Identify affected baseline versions, authority, latest decision point, fixed constraints, reversibility, and whether urgent containment is needed before full analysis.

### 3. Test value and necessity

Trace the change to a business goal, product outcome, user need, defect, evidence, obligation, control, or risk. A stakeholder preference is an input, not automatically approved scope.

### 4. Analyze product and requirements

Assess users, journeys, MVP coherence, in/out boundaries, requirement IDs, acceptance, analytics, accessibility, documentation, training, and non-goals.

### 5. Analyze solution and trust

Assess architecture, data, integration, environment, migration, security, privacy, compliance, AI controls, scalability, observability, recovery, vendor, and ADR effects.

### 6. Analyze delivery and economics

Update decomposition, remaining effort, role capacity, dependencies, critical path, milestones, release, cost range, commercial terms, confidence, and opportunity cost.

### 7. Develop options

Compare:

- approve as requested;
- approve a smaller or phased form;
- exchange for existing scope;
- defer to a later release or discovery;
- satisfy the need through a non-product or operational change;
- reject with rationale;
- stop or rebaseline the initiative when the change invalidates its premise.

### 8. Decide

Use the [decision policy](../core/decision-policy.md). Record approval, rejection, deferral, or supersession; conditions; authority; date; and effective baseline.

### 9. Propagate

Update every affected outcome, scope, requirement, traceability, ADR, risk, work, estimate, capacity, path, milestone, roadmap, release, contract, test, metric, training, support, and communication record.

### 10. Verify adoption

Confirm systems of record, teams, stakeholders, and vendors use the new baseline and that obsolete work or configuration is stopped or handled.

## Change-impact record

| Area | Current baseline | Proposed effect | Evidence and uncertainty | Owner |
|---|---|---|---|---|
| Outcome and users | Not established | Not assessed | Not provided | Product owner |
| Scope, requirements, and acceptance | Not established | Not assessed | Not provided | Product and analysis owners |
| Solution, data, and trust | Not established | Not assessed | Not provided | Technical and control owners |
| Work, capacity, dependencies, and path | Not established | Not assessed | Not provided | Delivery owner |
| Forecast, cost, and contract | Not established | Not assessed | Not provided | Delivery and commercial owners |
| Release, operations, and metrics | Not established | Not assessed | Not provided | Release and operations owners |

## Decision record

| Field | Required content |
|---|---|
| Change ID and status | Proposed, Approved, Rejected, Deferred, Withdrawn, or Superseded |
| Request and rationale | Preserved source and value or obligation |
| Baselines affected | Artifact IDs and versions |
| Options and impacts | Comparable boundary, outcome, forecast, cost, and risk |
| Decision and conditions | Selected outcome, conditions, exceptions, and expiry |
| Authority | Decision class, approver, date, and evidence |
| Effective change | New baseline versions and transition point |
| Propagation | Affected records, owners, completion, and verification |

## Decision rules

- Clarification that changes acceptance or effort may be a scope change regardless of its label.
- Urgency does not remove impact analysis or approval authority.
- Do not hide added scope by reducing quality or extending unpaid work.
- Scope exchange must compare outcome and dependency effects, not item counts alone.
- Rejected and deferred changes remain traceable.
- No response is not approval.

## Outputs

- classified change request and impact analysis;
- comparable options and accountable decision;
- updated estimates, risks, dependencies, and commitments;
- new or unchanged controlled baselines;
- verified propagation and stakeholder communication.

## Quality checks

- The original request and affected baseline are explicit.
- Value, requirement, solution, delivery, cost, trust, and operations were assessed.
- Options include defer, exchange, and reject where credible.
- Authority matches the consequence.
- Every affected system of record is updated.
- History is superseded, not rewritten.

## Related modules

- [Decision policy](../core/decision-policy.md)
- [Product scope](../product/scope.md)
- [Requirements management](../lifecycle/requirements.md)
- [Requirements traceability](../business-analysis/requirements-traceability.md)
- [Estimation](../lifecycle/estimation.md)
