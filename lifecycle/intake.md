---
title: Project Intake
type: lifecycle-workflow
status: active
version: 0.2.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/workflow-router.md
  - ../core/evidence-policy.md
  - ../core/assumptions-policy.md
related:
  - discovery.md
  - ../templates/intake/project-brief.md
  - ../core/quality-gates.md
---

# Project Intake

## Purpose

Convert a raw request into a traceable, minimally structured entry point without prematurely defining the solution, scope, budget, or delivery date.

## When to use

Use for every new idea, client request, product initiative, feature request, audit request, or material change that does not already have an adequate intake record. For an urgent production incident, route to incident response first and complete intake retrospectively.

## Inputs

- original request in its source form;
- requester and communication channel;
- referenced documents, systems, data, or links;
- known business context, urgency, constraints, budget, or dates;
- existing product or project materials, if any.

## Preconditions

- Preserve the raw request or a source reference before interpretation.
- Confirm that handling the supplied material is permitted.
- Identify the primary operating mode using the [workflow router](../core/workflow-router.md).

## Workflow

### 1. Register the request

Assign a stable intake ID, record the received date, requester, source, raw request, and responsible intake owner. Do not rewrite the raw request as if it were agreed scope.

### 2. Classify the request

Select one primary mode and any overlays. Record whether this is a new product, existing product, feature, active delivery concern, incident, improvement opportunity, or AI-enabled scope.

### 3. Capture the expected outcome

Describe the requested change in user or business terms. If the requester supplied only a feature or solution, record it as a proposed solution and create an open question for the underlying problem and outcome.

### 4. Establish current knowledge

Separate:

- confirmed facts with sources and dates;
- assumptions requiring validation;
- open questions;
- known constraints and dependencies;
- known risks and issues;
- prior decisions and named owners.

Apply the canonical definitions in [terminology](../core/terminology.md).

### 5. Screen for impact and urgency

Assess whether the request can affect people, money, production, security, privacy, legal or regulatory obligations, customer commitments, or strategic direction. Identify the required human owner and any immediate escalation.

Urgency must be supported by a trigger or impact. A requested date is initially a stated constraint, not a validated commitment.

### 6. Identify source materials and access

List available sources, missing sources, owners, freshness, access restrictions, and any sensitive information handling needs. Prefer references over copying restricted content.

### 7. Define the discovery need

State the next material decision, what must be learned before that decision, and the smallest discovery increment that can provide sufficient evidence.

### 8. Produce the brief and gate result

Create a [project brief](../templates/intake/project-brief.md). Evaluate G0 using [quality gates](../core/quality-gates.md) and record pass, conditional pass, fail, or not applicable.

## Decision rules

- Do not convert urgency into an arbitrary delivery commitment.
- Do not reject an incomplete request; expose the missing information and route it to discovery.
- Do not assume the requester is the product owner, budget owner, or final approver.
- If a raw request conflicts with authoritative evidence, preserve both and record the conflict.
- If immediate harm is possible, prioritize containment and accountable escalation over routine intake completion.
- If the request is a low-risk, reversible working change, intake may be concise, but the source, outcome, owner, and acceptance signal remain required.

## Outputs

- intake ID and source record;
- completed project brief;
- primary mode and overlays;
- initial information classification;
- impact and escalation screen;
- source-material inventory;
- discovery objective and owner;
- G0 result.

## Quality checks

- The raw request remains distinguishable from interpretation.
- Requester, intake owner, and accountable decision owner are not conflated.
- Expected outcome is stated or explicitly unknown.
- Dates and budgets are classified as confirmed constraints, stakeholder statements, or open questions.
- Material facts have provenance; assumptions have IDs.
- The next decision and discovery need are explicit.
- The G0 outcome and any conditional-pass owner are recorded.

## Common mistakes

- treating a feature request as a validated problem;
- producing a detailed plan before identifying decision-critical unknowns;
- recording a target date without its source, flexibility, and approval status;
- copying sensitive source material into unrestricted artifacts;
- asking every possible question before establishing which decision matters next.

## Related modules

- [Discovery workflow](discovery.md)
- [Project brief template](../templates/intake/project-brief.md)
- [Workflow router](../core/workflow-router.md)
- [Quality gates](../core/quality-gates.md)
