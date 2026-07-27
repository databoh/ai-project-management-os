---
title: Work Decomposition
type: lifecycle-workflow
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - requirements.md
  - ../product/product-outcomes.md
related:
  - ../project/work-breakdown-structure.md
  - ../business-analysis/user-stories.md
  - ../business-analysis/requirements-traceability.md
  - prioritization.md
  - estimation.md
---

# Work Decomposition

## Purpose

Break approved outcomes and requirements into the smallest hierarchy that provides ownership, estimation, sequencing, verification, and control without creating administrative layers that add no decision value.

## When to use

Use when requirements are sufficiently stable to prepare a backlog, WBS, estimate, roadmap, release, or delivery handoff. Revisit when scope, solution, assumptions, dependencies, or acceptance evidence changes.

## Inputs

- approved outcomes, scope direction, and MVP;
- requirement baseline or approved subset;
- use cases, user stories, acceptance criteria, and verification needs;
- known solution boundaries, components, integrations, data, and operational work;
- dependencies, constraints, risks, team model, and delivery method.

## Decomposition views

Do not force one hierarchy to serve every purpose:

- **Product hierarchy:** `Outcome → Initiative → Epic → Feature → User story`.
- **Delivery work:** `User story or deliverable → Task → Subtask`.
- **Project WBS:** `Project outcome → Deliverable → Work package`.
- **Traceability:** source and outcome through requirement, work, test, release, and metric.

Use only the levels necessary. The same item may be referenced across views but must not be copied as separate sources of truth.

## Workflow

### 1. Define the control need

State whether decomposition supports product choice, scope completeness, estimate, ownership, delivery flow, procurement, release, or reporting. Select the appropriate view and depth.

### 2. Start from outcomes and deliverables

Identify the outcome and the complete deliverables required to achieve or test it. Include user-facing, enabling, operational, compliance, data, integration, migration, quality, release, support, and measurement work.

### 3. Map requirements

Attach approved requirement IDs to the deliverable or product slice that will satisfy them. Expose orphan requirements and work items with no requirement, outcome, control, or enabling rationale.

### 4. Choose boundaries

Decompose by end-to-end value slice, deliverable, capability, workflow, business rule, data boundary, interface, risk, or verification boundary. Avoid splitting solely by technical layer when it prevents incremental verification.

### 5. Define completion

For each controlled item, state output, owner, acceptance or completion evidence, dependencies, exclusions, and parent traceability.

### 6. Test size and independence

Split an item when it cannot be estimated with useful confidence, assigned to an accountable owner, sequenced, or verified. Stop splitting when additional detail does not improve control.

### 7. Analyze dependencies and risk

Identify predecessor, external, decision, data, environment, specialist, and approval dependencies. Pull forward risk-reduction and enabling work when it changes feasibility or confidence.

### 8. Validate completeness

Apply the 100% rule to the chosen WBS boundary: children represent all work needed for the parent, including management and non-development work, without double counting.

### 9. Link priorities and baseline

Reference the approved [prioritization decision](prioritization.md). Record decomposition version and baseline scope; do not convert relative priority into an arbitrary delivery date.

## Item contract

| Field | Definition |
|---|---|
| ID, type, and title | Stable identity and hierarchy level |
| Parent and linked outcome | Upward traceability |
| Linked requirements | Requirement IDs satisfied |
| Description and boundary | Included result and explicit exclusions |
| Owner | Accountable person or team |
| Acceptance or completion evidence | Observable done condition |
| Dependencies and assumptions | Owners, status, and impact |
| Risk and confidence | Material uncertainty |
| Priority decision | Approved rationale and horizon |
| Estimate status | Not estimated, range, or approved estimate |
| Change history | Version and baseline effect |

## Slicing rules

- Prefer vertical slices that produce testable user or operational value.
- Separate discovery, implementation, verification, deployment, migration, training, and support work when ownership or control differs.
- Do not split a story into frontend and backend stories if neither can produce a verifiable outcome; use tasks beneath a coherent slice.
- Use spikes for time-boxed uncertainty reduction with a decision output, not indefinite research.
- Enablers must name the outcome, requirement, risk, or future capability they unlock.
- Bugs and remediation work link to failed acceptance evidence, requirement, incident, or quality control.

## Decision rules

- Hierarchy depth is a control choice, not a maturity signal.
- User stories are not mandatory for infrastructure, migration, compliance, incident, or research work.
- WBS work packages are deliverable-oriented planning units; they are not automatically sprint backlog items.
- Do not estimate a parent and all children as additive unless the estimation boundary prevents double counting.
- Do not create tasks before the solution and owner are known unless the task explicitly reduces that uncertainty.
- A work item without acceptance evidence is not ready for controlled handoff.
- Changes to a baselined decomposition require impact analysis.

## Outputs

- fit-for-purpose product, delivery, and WBS views;
- traceability from outcomes and requirements to controlled work;
- complete deliverable and work-package boundaries;
- dependencies, enabling work, risks, ownership, and acceptance evidence;
- inputs to estimation, roadmap, release, and delivery setup.

## Quality checks

- Every item has a parent or a documented top-level role.
- Work traces to an outcome, requirement, mandatory control, risk, or enabling dependency.
- Child items cover the parent without overlap or omission.
- Non-development and operational work is included.
- Items can be owned, estimated, sequenced, and verified at the selected level.
- Backlog and WBS views remain distinct but linked.

## Related modules

- [Requirements management](requirements.md)
- [Work Breakdown Structure](../project/work-breakdown-structure.md)
- [User stories](../business-analysis/user-stories.md)
- [Requirements traceability](../business-analysis/requirements-traceability.md)
- [Estimation](estimation.md)
