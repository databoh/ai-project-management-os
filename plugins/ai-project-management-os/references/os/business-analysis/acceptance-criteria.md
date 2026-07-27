---
title: Acceptance Criteria
type: requirements-method
status: active
version: 0.4.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/requirements.md
related:
  - use-cases.md
  - user-stories.md
  - requirements-traceability.md
---

# Acceptance Criteria

## Purpose

Define observable conditions that determine whether a requirement, use case, story, or deliverable satisfies its intended boundary.

## When to use

Use before implementation or controlled handoff for behavior that must be accepted. Add examples for business rules and data boundaries; retain separate measurable NFRs where criteria would otherwise become an incomplete quality specification.

## Inputs

- linked requirement, use case, story, or deliverable;
- actor, trigger, preconditions, business rules, data, and permissions;
- normal, alternate, failure, recovery, and concurrency behavior;
- measurable quality, analytics, audit, security, privacy, accessibility, and AI-control needs.

## Workflow

1. Name the item and behavior boundary being accepted.
2. Identify the material rules, states, actors, data classes, and failure modes.
3. Write observable criteria independent of a preferred implementation.
4. Add concrete examples at decision boundaries.
5. Link NFR, security, data, interface, and compliance requirements rather than copying them.
6. Review for contradictions, overlap, missing negative cases, and testability.
7. Obtain product or requirement-owner approval before treating criteria as baselined.

## Criterion record

| Field | Definition |
|---|---|
| Criterion ID and status | `AC-###`; Proposed, In review, Approved, Verified, Rejected, or Superseded |
| Linked item | Requirement, use case, story, or deliverable ID |
| Condition or context | Relevant starting state |
| Trigger or action | Event under evaluation |
| Expected observable result | Behavior, state, output, or controlled error |
| Example data | Representative valid, invalid, boundary, and sensitive cases |
| Linked quality or control requirements | NFR, security, compliance, accessibility, analytics, or AI IDs |
| Verification method | Test, demonstration, inspection, or analysis |
| Evidence and owner | Result location and acceptance authority |

## Formats

### Rule-oriented

Use concise declarative conditions when sequence is not important:

- The permitted actor can perform the action only while the record is in an eligible state.
- An invalid transition leaves the original state unchanged and produces a controlled error.

### Scenario-oriented

Use Given/When/Then for behavior with meaningful context:

> **Given** [relevant state]
> **When** [actor or event performs an action]
> **Then** [observable result]
> **And** [additional result only when it belongs to the same behavior]

### Example mapping

Map a business rule to concrete examples and unresolved questions before formal scenarios. Use boundary values and representative equivalence classes rather than exhaustive permutations.

## Coverage model

Consider:

- primary success;
- alternative valid path;
- invalid input and boundary values;
- unauthorized or insufficient permission;
- duplicate, concurrent, or out-of-order action;
- unavailable dependency, timeout, retry, and partial failure;
- cancellation, rollback, recovery, and audit;
- accessibility and supported channels;
- analytics and notification effects;
- AI low-confidence, unsafe, injected, unavailable, or human-review outcomes where applicable.

## Decision rules

- One criterion should assert one coherent behavior; several observations from the same action may remain together.
- Avoid UI coordinates, database tables, or implementation detail unless approved as a constraint.
- “Works correctly,” “is intuitive,” and “loads quickly” are not verifiable criteria.
- Do not repeat the Definition of Done in every story.
- Acceptance criteria specify item behavior; test cases add execution detail and data.
- A passing happy path does not compensate for an undefined material failure path.
- Changed criteria require impact review on implementation, tests, estimates, and baseline.

## Outputs

- stable acceptance-criterion records;
- normal, alternate, boundary, failure, and recovery coverage;
- links to quality and control requirements;
- verification method, evidence location, and acceptance ownership.

## Quality checks

- Every criterion is observable and unambiguous.
- The linked item and acceptance owner are known.
- Negative and boundary behavior is proportionate to risk.
- Business rules use representative examples.
- NFR and mandatory controls remain traceable.
- Criteria avoid unnecessary solution prescription.

## Common mistakes

- rewriting the story statement as a criterion;
- listing only the happy path;
- mixing several unrelated rules in one scenario;
- encoding visual design choices as business behavior;
- relying on QA to invent missing product decisions.

## Related modules

- [Use cases](use-cases.md)
- [User stories](user-stories.md)
- [Requirements traceability](requirements-traceability.md)
