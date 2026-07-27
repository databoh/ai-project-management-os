---
title: Work Breakdown Structure
type: project-planning-method
status: active
version: 0.5.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/decomposition.md
related:
  - ../lifecycle/requirements.md
  - ../business-analysis/requirements-traceability.md
  - ../product/scope.md
  - ../lifecycle/estimation.md
  - critical-path.md
---

# Work Breakdown Structure

## Purpose

Create a deliverable-oriented hierarchy containing all work required to produce the approved project scope, with boundaries suitable for ownership, estimation, sequencing, cost, and control.

## When to use

Use when a project needs schedule, estimate, budget, procurement, resource, milestone, or progress control. A lightweight backlog may be sufficient for small continuous product work; use a WBS when the project boundary and non-development deliverables must be managed explicitly.

## Inputs

- approved product direction and current scope baseline status;
- requirement baseline or approved subset;
- delivery, management, quality, release, migration, training, support, and operational deliverables;
- solution boundaries and external dependencies known at the current stage;
- organizational responsibility, procurement, reporting, and control needs.

## Principles

- **Deliverable-oriented:** describe results, not sequences of activity.
- **100% rule:** children cover all work within the parent boundary.
- **Mutually exclusive:** avoid double counting between branches.
- **Progressively elaborated:** decompose only when evidence supports useful control.
- **Outcome-traceable:** every branch links to scope, requirement, control, or project-management need.

## Workflow

1. Define the WBS purpose, approved boundary, version, and control level.
2. Identify top-level product and project deliverables.
3. Decompose deliverables into sub-deliverables and work packages.
4. Include management, discovery, design, implementation, data, integration, QA, security, compliance, deployment, migration, documentation, training, support, and closure work as applicable.
5. Create a WBS dictionary for each work package.
6. Check completeness, overlap, ownership, dependencies, and traceability.
7. Stop decomposition when a work package can be responsibly owned, estimated, scheduled, costed, and accepted.
8. Baseline only after approval; control subsequent structural change.

## WBS hierarchy

| WBS ID | Deliverable or work package | Parent | Boundary and result | Linked scope or requirements | Owner | Acceptance evidence | Dependencies | Status |
|---|---|---|---|---|---|---|---|---|
| 1.0 | Project outcome | None | Not established | Not established | Not assigned | Not established | Not assessed | Proposed |

Numbering communicates hierarchy, not schedule or priority.

## WBS dictionary

| Field | Definition |
|---|---|
| WBS ID and title | Stable hierarchy reference |
| Deliverable description | Observable result produced |
| Included and excluded work | Boundary preventing overlap |
| Linked scope and requirements | Product and control rationale |
| Acceptance evidence | Conditions proving completion |
| Accountable owner | Person or governed team |
| Dependencies and interfaces | Predecessors, external inputs, and handoffs |
| Assumptions and constraints | Conditions affecting estimate or execution |
| Required roles or skills | Capacity inputs without invented assignments |
| Estimate status | Not estimated or approved range and confidence |
| Milestone or release relevance | Later planning reference |
| Risks and change history | Control information |

## Work-package rules

A work package should be:

- bounded enough to avoid overlap;
- complete enough to produce a verifiable deliverable;
- assignable to one accountable owner;
- estimable with useful confidence at the planning stage;
- separable from schedule activities that may later implement it;
- traceable to approved scope, requirements, or project controls.

## Decision rules

- The WBS includes the total project work, not only software development.
- A WBS is not a Gantt chart, organization chart, product roadmap, or sprint backlog.
- Decompose deliverables before activities; derive schedule activities later.
- Do not force user-story granularity into the WBS if it adds no estimate or ownership control.
- Do not estimate both a parent and its fully decomposed children as additive.
- External vendor deliverables remain in the WBS with interface and acceptance ownership.
- Unresolved scope remains visible and outside the approved baseline until decided.
- Changes to a baselined WBS require impact analysis on scope, estimate, schedule, cost, and risk.

## Outputs

- numbered WBS hierarchy;
- WBS dictionary;
- complete project and product deliverable boundary;
- ownership, acceptance, dependency, assumption, and risk information;
- inputs to estimation, schedule, cost, resource, milestone, and change control.

## Quality checks

- The WBS satisfies the 100% rule for its approved boundary.
- Branches do not double count work.
- Non-development, external, and operational deliverables are included.
- Work packages are ownable, estimable, schedulable, and verifiable.
- Scope and requirement links resolve.
- Baseline and change status are explicit.

## Common mistakes

- organizing only by team or technical component;
- omitting project management, QA, release, migration, or training;
- decomposing into tasks before defining deliverables;
- treating WBS numbering as execution sequence;
- hiding unknown work inside oversized packages.

## Related modules

- [Work decomposition](../lifecycle/decomposition.md)
- [Requirements management](../lifecycle/requirements.md)
- [Requirements traceability](../business-analysis/requirements-traceability.md)
- [Product scope](../product/scope.md)
- [Estimation](../lifecycle/estimation.md)
- [Critical path](critical-path.md)
