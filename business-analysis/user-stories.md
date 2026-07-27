---
title: User Stories
type: requirements-method
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/requirements.md
related:
  - use-cases.md
  - acceptance-criteria.md
  - requirements-traceability.md
  - ../lifecycle/decomposition.md
  - ../delivery/definition-of-ready.md
  - ../delivery/definition-of-done.md
---

# User Stories

## Purpose

Represent a small, negotiable slice of user or operational value that can be understood, accepted, and traced without treating a sentence template as a complete requirement.

## When to use

Use for backlog slices where actor value and collaborative refinement are useful. Do not force infrastructure, compliance, migration, defect, research, or operational work into a fictional user-story format; use an appropriate work-item type and retain traceability.

## Inputs

- product outcome, actor, job, journey, and scope;
- requirement and use-case IDs;
- business rules, data, interfaces, and quality needs;
- dependencies, assumptions, risks, and priority decision;
- applicable Definition of Ready and delivery policy when available.

## Workflow

1. Identify the actor or beneficiary and the outcome-linked need.
2. Choose a vertical slice that can produce observable value or learning.
3. Write a concise story statement and preserve necessary context.
4. Add [acceptance criteria](acceptance-criteria.md), rules, data, quality, analytics, permission, and recovery needs.
5. Link parent outcome, feature or use case, and requirement IDs.
6. Split when the slice cannot be understood, estimated, delivered, or verified with useful confidence.
7. Review dependencies, assumptions, and readiness without inventing a delivery date.

## Story record

| Field | Definition |
|---|---|
| Story ID, title, and status | Stable identity and workflow state |
| Story statement | Actor, capability or progress, and value |
| Context and rationale | Problem, job, and journey position |
| Linked outcome and scope | `OUT-###`, scope, and MVP references |
| Linked requirements and use case | Authoritative behavior references |
| Acceptance criteria | Linked `AC-###` records |
| Business rules and data | Applicable IDs and examples |
| Quality and trust needs | NFR, security, privacy, accessibility, audit, analytics, and AI controls |
| Dependencies and assumptions | Owners, validation, and effect |
| Priority decision | Horizon and rationale |
| Exclusions | Behavior deliberately outside the slice |
| Verification evidence | Test, review, analysis, or demonstration |

## Story statement

> As **[actor or role]**, I want **[capability or progress]**, so that **[outcome or value]**.

Replace guidance with evidence-backed content. When the beneficiary is a system or organization rather than a person, use a plain requirement or enabler statement instead of inventing an actor.

## Slicing patterns

Slice by:

- workflow step that still produces usable value;
- happy path before controlled alternate paths;
- business-rule variation;
- data variation;
- operation such as create, view, update, or cancel;
- user role or permission boundary;
- channel or interface;
- risk or assumption to validate;
- simple case before complex scale, while retaining mandatory controls.

Do not split by technical layer if the resulting items cannot be independently accepted.

## INVEST quality lens

- **Independent enough:** dependencies are minimized and explicit.
- **Negotiable:** intent and boundaries are fixed; implementation remains discussable.
- **Valuable:** value or necessary control is traceable.
- **Estimable:** uncertainty is low enough for the intended decision.
- **Small:** completion fits the delivery control horizon.
- **Testable:** acceptance evidence is observable.

INVEST is a diagnostic, not a gate that justifies hiding necessary complexity.

## Decision rules

- The “As/I want/so that” form is optional; actor, need, and value are not.
- A story is not complete without acceptance boundaries and requirement traceability.
- Technical enablers must name the outcome, requirement, or risk they enable.
- Do not use story points as calendar time without established team velocity.
- Do not split out security, privacy, accessibility, analytics, or recovery if the slice cannot be safely accepted without them.
- A story can be rejected or superseded without deleting its history.
- Definition of Done applies across work; acceptance criteria are specific to the story.

## Outputs

- value-oriented story records;
- vertical delivery and learning slices;
- linked acceptance criteria, requirements, rules, data, and quality needs;
- visible dependencies, assumptions, exclusions, and verification evidence.

## Quality checks

- Actor or beneficiary, need, and value are explicit.
- The story traces to an outcome and approved scope.
- Acceptance criteria cover material boundaries and failures.
- The slice is independently understandable and verifiable.
- Mandatory controls remain included.
- Enablers and non-story work use honest work-item types.

## Common mistakes

- treating the one-line statement as a full specification;
- writing stories from a system component's perspective;
- splitting frontend, backend, and QA into separate value stories;
- putting multiple independent goals into one story;
- using acceptance criteria to prescribe implementation unnecessarily.

## Related modules

- [Use cases](use-cases.md)
- [Acceptance criteria](acceptance-criteria.md)
- [Work decomposition](../lifecycle/decomposition.md)
- [Requirements traceability](requirements-traceability.md)
- [Definition of Ready](../delivery/definition-of-ready.md)
- [Definition of Done](../delivery/definition-of-done.md)
