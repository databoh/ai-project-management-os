---
title: Use Cases
type: requirements-method
status: active
version: 0.4.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/requirements.md
related:
  - user-stories.md
  - acceptance-criteria.md
  - requirements-traceability.md
  - ../product/user-journey.md
---

# Use Cases

## Purpose

Specify goal-oriented interactions between actors and a system, including preconditions, normal flow, alternatives, failures, permissions, and resulting state.

## When to use

Use for multi-step behavior, business-process interactions, integrations, permission-sensitive actions, or exception-rich workflows. Prefer a user story with acceptance criteria for a small independent slice; prefer a process model when system interaction is not the main concern.

## Inputs

- approved scope and requirement IDs;
- actors, roles, personas, jobs, and journey stages;
- business rules, data, permissions, interfaces, and state transitions;
- expected errors, recovery, audit, and operational behavior;
- evidence, assumptions, constraints, and open questions.

## Workflow

1. Define the actor's goal and system boundary.
2. Identify primary and supporting actors, including external systems.
3. State trigger, preconditions, permissions, and required input state.
4. Write the main success flow as observable actor-system interactions.
5. Add alternate, exception, timeout, cancellation, retry, and recovery flows.
6. State success and minimal guarantees on failure.
7. Link business rules, data, functional, interface, and quality requirements.
8. Derive test scenarios and smaller delivery slices where useful.
9. Review with users, operations, QA, security, and interface owners as applicable.

## Use-case record

| Field | Definition |
|---|---|
| Use-case ID and status | `UC-###`; Proposed, In review, Approved, Implemented, Verified, Rejected, or Superseded |
| Goal and scope | Outcome the primary actor seeks and system boundary |
| Primary and supporting actors | People, roles, systems, or timed events |
| Trigger | Observable event that starts the interaction |
| Preconditions | Required state, permission, and dependency conditions |
| Main success flow | Numbered observable interactions |
| Alternate flows | Valid variants that can still reach success |
| Exception and recovery flows | Failures, messages, retries, rollback, and escalation |
| Success guarantee | State established when the goal is achieved |
| Minimal guarantee | State preserved even when the goal fails |
| Business rules and data | Linked rule and requirement IDs |
| Non-functional and trust needs | Performance, audit, security, privacy, accessibility, or AI controls |
| Open questions and assumptions | Controlled linked records |
| Verification | Linked acceptance criteria and tests |

## Flow-writing rules

- Describe externally observable behavior; do not embed architecture unless it is an approved constraint.
- Number steps and make actor and system responsibility explicit.
- Branch alternate flows from a named step and define where they rejoin or end.
- Define behavior for invalid, duplicate, unauthorized, unavailable, delayed, and partial input where relevant.
- Describe idempotency, rollback, notification, and audit expectations for consequential actions.
- Keep reusable business rules in an authoritative rule source and reference them by ID.

## Decision rules

- One use case has one primary actor goal.
- A user journey may span multiple systems and organizations; a use case stays within a declared system boundary.
- `Include` is appropriate for mandatory reused behavior; `extend` is appropriate for conditional behavior. Do not use either merely to shorten writing.
- Do not create a separate use case for every screen.
- External systems are actors only when they interact across the defined boundary.
- An approved use case does not remove the need for measurable non-functional requirements.

## Outputs

- use-case records and interaction flows;
- alternate, failure, and recovery behavior;
- linked requirements, rules, data, and interfaces;
- candidate user stories, acceptance criteria, and test scenarios;
- exposed gaps, assumptions, and dependency decisions.

## Quality checks

- Goal, actor, trigger, boundary, and end state are explicit.
- Main flow is understandable without implementation detail.
- Exceptions and recovery cover material failure modes.
- Permissions, data effects, and external interactions are linked.
- Success and failure guarantees are testable.
- The use case traces to outcomes and approved requirements.

## Common mistakes

- describing a feature instead of an actor goal;
- omitting error and cancellation behavior;
- mixing UI design with functional behavior;
- using one use case for unrelated goals;
- duplicating business rules in every flow.

## Related modules

- [User stories](user-stories.md)
- [Acceptance criteria](acceptance-criteria.md)
- [User journey](../product/user-journey.md)
- [Requirements traceability](requirements-traceability.md)
