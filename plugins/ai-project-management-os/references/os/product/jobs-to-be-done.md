---
title: Jobs to Be Done
type: product-research-method
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../business-analysis/problem-framing.md
related:
  - personas.md
  - user-journey.md
  - product-vision.md
  - product-outcomes.md
---

# Jobs to Be Done

## Purpose

Describe the progress a person or organization seeks in a specific context, independently of the current product or requested feature.

## When to use

Use when understanding why users adopt, switch, retain, abandon, or work around a product; when solution requests obscure the underlying need; or when different contexts create different decision criteria.

## Inputs

- recent specific user situations and observed behavior;
- problem frame and current alternatives;
- persona or segment evidence;
- triggers, constraints, anxieties, habits, and desired outcomes;
- adoption, support, churn, and workflow evidence where available.

## Workflow

### 1. Identify the situation

Capture the triggering event, context, prior state, and constraints. Prefer a recent concrete example over general preference.

### 2. Describe desired progress

State what the actor is trying to accomplish and why it matters. Separate:

- functional progress;
- emotional progress;
- social progress.

### 3. Map current alternatives

Include competing products, manual work, internal tools, postponement, and doing nothing. Identify what users value and tolerate in each alternative.

### 4. Analyze forces

Record:

- push of the current situation;
- pull of the new approach;
- anxiety about change;
- habit or attachment to the current approach.

### 5. Define outcome expectations

Describe how users judge speed, predictability, effort, quality, confidence, control, and risk. Do not convert every expectation directly into a feature.

### 6. Validate and link

Triangulate the job across relevant users and evidence. Link it to personas, journey stages, outcomes, scope decisions, and unresolved assumptions.

## Job record

| Field | Definition |
|---|---|
| Job ID and status | `JOB-###`; Draft, Active, Superseded, or Retired |
| Actor and context | Person or organization, trigger, and situation |
| Functional job | Practical progress sought |
| Emotional job | Desired internal state |
| Social job | Desired perception or relationship effect |
| Current alternatives | Products, processes, workarounds, delay, or non-action |
| Push, pull, anxiety, and habit | Forces affecting change |
| Desired outcome criteria | How better progress is judged |
| Constraints and failure concerns | Conditions that limit acceptable solutions |
| Evidence and confidence | Sources, dates, sample, and limitations |
| Product implications | Decisions informed, not prescribed features |
| Linked personas, journey, and outcomes | Traceability references |

## Job statement

> When **[situation or trigger]**, **[actor]** wants to **[progress sought]**, so they can **[desired outcome]**, while avoiding **[material concern or constraint]**.

Replace guidance with evidence-backed content or `Not established`.

## Decision rules

- State the job independently of a product, channel, or feature.
- Do not infer emotional or social jobs without evidence.
- Similar functional jobs may require separate records when context, constraints, or decision criteria differ materially.
- A frequent task is not necessarily the higher-level job it supports.
- Do not rank jobs solely by interview frequency; consider reach, consequence, unmet need, strategy, and evidence quality.
- Preserve non-consumption and manual workarounds as alternatives.

## Outputs

- validated or provisional job records;
- desired outcome criteria;
- switching forces and current alternatives;
- evidence gaps and assumptions;
- traceability to personas, journeys, outcomes, scope, and priorities.

## Quality checks

- The statement includes actor, context, progress, and desired outcome.
- Product and feature names are absent from the core job.
- Current alternatives include non-action where relevant.
- Emotional and social dimensions are evidence-backed.
- Product implications remain distinguishable from confirmed requirements.
- Confidence reflects sample and method limitations.

## Common mistakes

- rewriting a user story as a job;
- describing use of the proposed feature rather than desired progress;
- making a job so broad that it cannot guide a decision;
- treating stakeholder preference as user evidence;
- skipping anxieties and habits that block adoption.

## Related modules

- [Personas](personas.md)
- [User journey](user-journey.md)
- [Product outcomes](product-outcomes.md)
- [Problem framing](../business-analysis/problem-framing.md)
