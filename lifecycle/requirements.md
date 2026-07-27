---
title: Requirements Management
type: lifecycle-workflow
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../product/scope.md
  - ../product/mvp.md
  - ../core/evidence-policy.md
related:
  - solution-outline.md
  - ../ai/ai-product-discovery.md
  - ../ai/evaluation.md
  - decomposition.md
  - ../business-analysis/use-cases.md
  - ../business-analysis/user-stories.md
  - ../business-analysis/acceptance-criteria.md
  - ../business-analysis/requirements-traceability.md
---

# Requirements Management

## Purpose

Transform approved product direction into necessary, testable, traceable requirements without prematurely prescribing architecture or duplicating the same statement across documents.

## When to use

Use after G2 for a new product, feature, material change, integration, compliance obligation, or existing-product recovery. Tailor the artifact set to the decision and handoff; do not create BRD, PRD, FRD, and SRS merely because templates exist.

## Inputs

- approved product direction, outcomes, scope, and MVP;
- personas, jobs, journeys, and discovery evidence;
- business rules, policies, contracts, and regulatory sources;
- existing system behavior, interfaces, data, defects, and constraints;
- operational, support, security, privacy, compliance, analytics, accessibility, and AI-control needs;
- assumptions, risks, dependencies, decisions, and change history.

## Requirement model

Use stable IDs and one authoritative register. Documents are views over that register.

| Type | ID pattern | Primary concern |
|---|---|---|
| Business requirement | `BR-###` | Business capability, obligation, or outcome needed |
| User requirement | `UR-###` | User need or outcome at an appropriate level |
| Functional requirement | `FR-###` | Observable system behavior |
| Non-functional requirement | `NFR-###` | Measurable quality characteristic or operating condition |
| Data requirement | `DR-###` | Data definition, quality, lineage, lifecycle, or access |
| Interface requirement | `IR-###` | Interaction with an external system, actor, or component |
| Security or compliance requirement | `SCR-###` | Mandatory trust, policy, legal, or regulatory control |
| Transition requirement | `TR-###` | Temporary migration, rollout, training, or conversion need |

Allowed statuses are `Proposed`, `In review`, `Approved`, `Implemented`, `Verified`, `Rejected`, and `Superseded`.

## Workflow

### 1. Define the requirement decision

State the scope boundary, intended consumers, approval authority, required detail, and next gate. Select only the specification views needed for that decision.

### 2. Establish sources

Identify product outcomes, user evidence, business rules, regulations, contracts, system evidence, and accountable stakeholders. Record source dates, authority, limitations, and conflicts.

### 3. Elicit

Combine interviews, workshops, observation, document analysis, process analysis, analytics, prototypes, interface review, and technical or compliance expertise. Ask for exceptions, failures, recovery, permissions, volumes, and lifecycle behavior—not only the happy path.

### 4. Analyze and classify

Separate requirement from solution proposal, assumption, constraint, dependency, risk, and decision. Resolve overlap, contradictions, undefined terms, and missing ownership.

### 5. Specify atomically

Write one necessary behavior or quality condition per requirement. Define actor or system, trigger or condition, required response, measurable threshold where applicable, and rationale.

### 6. Model behavior

Use [use cases](../business-analysis/use-cases.md) for actor-system interactions, [user stories](../business-analysis/user-stories.md) for small value slices, and [acceptance criteria](../business-analysis/acceptance-criteria.md) for testable boundaries. These are linked representations, not substitutes for every requirement type.

### 7. Validate and verify quality

Review requirements with affected users, product owner, delivery, QA, operations, architecture, security, privacy, legal, compliance, data, and support roles as applicable. Confirm necessity, correctness, feasibility, testability, consistency, and traceability.

### 8. Approve and baseline

The accountable human approves requirements within their authority. A baseline must name its version, included requirement IDs, open exceptions, approval, and change-control path.

### 9. Maintain traceability

Use the [traceability method](../business-analysis/requirements-traceability.md) from source and outcome through requirement, design or decision, work, test, release, and metric.

### 10. Control change

Preserve superseded requirements. Analyze impact on scope, solution, estimates, tests, operations, compliance, and release before approving a baseline change.

## Requirement record

| Field | Definition |
|---|---|
| ID, type, title, and status | Stable identity and lifecycle state |
| Statement | Atomic required behavior or quality |
| Rationale | Why it is necessary |
| Source and authority | Evidence, policy, owner, or decision |
| Linked outcome, scope, actor, job, or journey | Product traceability |
| Priority and release relevance | Approved decision reference, not intrinsic value |
| Acceptance or verification method | Observable evidence of satisfaction |
| Dependencies and constraints | External needs and fixed boundaries |
| Assumptions, risks, and open questions | Linked controlled records |
| Owner and approver | Maintenance and approval accountability |
| Version and change history | Baseline and supersession |

## Requirement quality rules

A requirement should be:

- necessary and linked to a source or outcome;
- atomic enough to verify;
- unambiguous within the shared terminology;
- consistent with approved scope and other requirements;
- feasible or explicitly awaiting feasibility evidence;
- testable by inspection, analysis, demonstration, or test;
- implementation-independent unless an approved constraint requires a solution;
- bounded by actor, condition, data, and exception where relevant.

## Specification selection

| Artifact | Use when | Do not use as |
|---|---|---|
| BRD | Business capabilities, goals, rules, stakeholders, and obligations need approval | Detailed product backlog or system design |
| PRD | Product problem, users, outcomes, scope, behavior, metrics, and release direction need alignment | Complete technical specification |
| FRD | Detailed functional behavior, processes, rules, data behavior, and exceptions need handoff | Architecture or quality-attribute catalog |
| SRS | Software behavior, interfaces, data, quality attributes, constraints, and verification need a controlled baseline | Copy of BRD, PRD, and FRD |

## Decision rules

- The requirement register is authoritative; specifications reference requirement IDs.
- Do not infer approval from review comments or meeting attendance.
- A stakeholder request is an input until necessity, scope fit, and authority are established.
- “User-friendly,” “fast,” “secure,” and “scalable” are not testable requirements without defined conditions and measures.
- Mandatory requirements must identify the authoritative obligation and minimum satisfying control.
- A rejected requirement remains traceable with rationale.
- Do not baseline requirements while high-impact conflicts or unowned exceptions remain hidden.
- AI-enabled behavior requires traceable [evaluation](../ai/evaluation.md), guardrail, privacy, security, human-review, fallback, cost, latency, and observability requirements proportionate to risk.

## Outputs

- authoritative requirement register and selected specification views;
- use cases, user stories, and acceptance criteria where useful;
- non-functional, data, interface, trust, and transition requirements;
- requirement baseline and approval record;
- traceability and change-impact information;
- inputs to solution outline, decomposition, estimation, and G3.

## Quality checks

- Requirements trace to approved outcomes, obligations, or controls.
- Facts, requests, requirements, assumptions, constraints, and solution decisions are distinct.
- Normal, alternate, failure, recovery, permission, and lifecycle behavior are covered.
- Quality attributes use measurable conditions.
- Duplicate or conflicting statements have one authoritative resolution.
- Approval and baseline status are explicit.
- Every approved requirement has a planned verification method.

## Related modules

- [Solution outline](solution-outline.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [AI evaluation](../ai/evaluation.md)
- [Decomposition](decomposition.md)
- [Use cases](../business-analysis/use-cases.md)
- [User stories](../business-analysis/user-stories.md)
- [Acceptance criteria](../business-analysis/acceptance-criteria.md)
- [Requirements traceability](../business-analysis/requirements-traceability.md)
