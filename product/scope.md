---
title: Product Scope
type: product-definition-method
status: active
version: 0.4.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - product-vision.md
  - product-outcomes.md
related:
  - mvp.md
  - user-journey.md
  - ../lifecycle/prioritization.md
  - ../core/decision-policy.md
  - ../lifecycle/requirements.md
  - ../lifecycle/decomposition.md
---

# Product Scope

## Purpose

Define the product boundary needed to pursue approved outcomes while keeping inclusions, exclusions, future opportunities, assumptions, and approval status explicit.

## When to use

Use during product definition to create an outcome-based scope direction and distinguish MVP from future scope and non-goals. Refine it during requirements and solution work before G3 baseline approval.

## Inputs

- product vision and outcomes;
- personas, jobs, and journeys;
- discovery recommendation and evidence;
- business, user, technical, operational, legal, compliance, security, and privacy constraints;
- dependencies, risks, assumptions, and existing commitments.

## Scope states

- **Exploratory:** candidate boundary used to compare options.
- **Proposed:** recommended boundary awaiting accountable approval.
- **Approved direction:** product boundary approved for further elaboration, but not yet a G3 delivery baseline.
- **Baselined:** controlled scope after requirements, solution, estimates, and G3 approval.
- **Superseded:** retained historical boundary replaced by an approved decision.

Phase 3 normally produces an approved direction, not a baselined delivery commitment.

## Workflow

### 1. Anchor scope to outcomes

List the outcomes and target actors the scope must serve. Reject proposed work that has no traceable outcome, control, or enabling dependency.

### 2. Define boundary dimensions

Consider:

- actors, segments, roles, and permissions;
- jobs, journey stages, and use cases;
- channels, devices, geographies, languages, and accessibility;
- data, content, integrations, and migration;
- operational, support, reporting, and administrative capabilities;
- security, privacy, legal, compliance, and audit needs;
- environments, observability, rollout, and recovery;
- AI evaluation, guardrails, fallback, and human review where applicable.

### 3. Classify candidate scope

Place each meaningful scope item into:

- in scope for the current product direction;
- MVP candidate;
- future or optional scope;
- explicitly out of scope;
- unresolved pending evidence or decision.

### 4. Record rationale and traceability

For every material inclusion or exclusion, link the outcome, actor or job, evidence, constraint, risk, and decision owner.

### 5. Test completeness and coherence

Check whether the proposed boundary forms a usable end-to-end experience and includes enabling, operational, compliance, support, measurement, and release needs.

### 6. Assess impact

Identify dependencies, assumptions, risks, organizational changes, affected systems, and work displaced by the boundary.

### 7. Approve direction and prepare G3

Record the product-direction decision. Do not claim a delivery baseline until detailed requirements, solution assumptions, estimates, and approval needs satisfy G3.

## Scope statement

| Field | Definition |
|---|---|
| Scope ID, status, and version | Stable record and lifecycle state |
| Linked vision and outcomes | Authoritative references |
| Target actors and contexts | Included segments, roles, and conditions |
| In scope | Outcome-linked capabilities or experience boundaries |
| MVP candidate | Smallest coherent learning and value boundary |
| Future or optional | Valuable items deliberately deferred |
| Out of scope and non-goals | Explicit exclusions with rationale |
| Unresolved scope | Items awaiting evidence or decision |
| Enabling and operational needs | Data, integration, admin, support, measurement, observability, release, and recovery |
| Constraints and dependencies | Source, owner, status, and effect |
| Assumptions and risks | Linked records and response |
| Approval and baseline status | Decision reference and next gate |

## Scope register

| Scope ID | Boundary or capability | Classification | Linked outcome, actor, or job | Evidence or rationale | Dependencies | Decision owner | Status |
|---|---|---|---|---|---|---|---|
| SCP-001 | Not established | Unresolved | Not established | Not provided | Not assessed | Not established | Exploratory |

## Decision rules

- Scope must describe boundaries and capabilities, not a disconnected task list.
- Non-goals and out-of-scope items require enough detail to prevent predictable misunderstanding.
- Mandatory legal, security, operational, or enabling work may not create direct user value but must link to a constraint or control.
- A dependency is not automatically in scope; record ownership and required interface.
- Do not hide uncertainty by placing unresolved items in scope.
- A fixed date constrains scope options; it does not validate the requested boundary.
- Material changes to approved direction require impact analysis and an accountable decision.
- The MVP is a subset or staged realization of the product direction, not a synonym for all in-scope work.

## Outputs

- product scope statement and register;
- in, MVP-candidate, future, out, and unresolved classifications;
- outcome and evidence traceability;
- enabling and operational boundaries;
- dependencies, risks, assumptions, and approval status;
- inputs to MVP, prioritization, requirements, and G3 planning.

## Quality checks

- Every material inclusion links to an outcome, constraint, or enabling need.
- The experience is end-to-end rather than a collection of visible features.
- Future and out-of-scope items are explicit.
- Operational, trust, measurement, and recovery work is represented.
- Unresolved items remain visibly uncertain.
- The document does not misrepresent product direction as a baselined commitment.

## Common mistakes

- treating scope as a list of stakeholder requests;
- omitting administration, support, analytics, migration, or rollback needs;
- using “not MVP” without deciding future versus out of scope;
- including a dependency without confirming ownership;
- baselining before requirements, solution, estimation, and approval.

## Related modules

- [MVP definition](mvp.md)
- [Product outcomes](product-outcomes.md)
- [User journey](user-journey.md)
- [Prioritization](../lifecycle/prioritization.md)
- [Requirements management](../lifecycle/requirements.md)
- [Work decomposition](../lifecycle/decomposition.md)
