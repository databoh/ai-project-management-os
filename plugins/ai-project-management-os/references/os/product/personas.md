---
title: Evidence-Based Personas
type: product-research-method
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/discovery.md
  - ../core/evidence-policy.md
related:
  - jobs-to-be-done.md
  - user-journey.md
  - product-vision.md
  - ../business-analysis/stakeholder-analysis.md
---

# Evidence-Based Personas

## Purpose

Represent meaningful patterns in user goals, behavior, context, constraints, and needs so product decisions reflect evidence rather than a fictional demographic profile.

## When to use

Use when different user groups require distinct product decisions, journeys, permissions, workflows, value propositions, or success measures. Do not create personas when a simpler role or segment definition provides sufficient control.

## Inputs

- user interviews, observation, analytics, support data, and process evidence;
- stakeholder analysis;
- problem frames, jobs, and current journeys;
- segment definitions and known sampling limitations;
- accessibility, trust, privacy, and operational constraints.

## Persona levels

- **Evidence-based persona:** supported by triangulated research and behavioral data.
- **Proto-persona:** provisional model based mainly on stakeholder knowledge or limited evidence; all material claims remain assumptions.
- **Role profile:** concise description used when system responsibilities and permissions matter more than behavioral differences.

Always label the level and confidence.

## Workflow

### 1. Define the decision need

State which product decisions require segmentation and what differences would change those decisions.

### 2. Review the sample

Document represented and missing users, research methods, observation dates, sample limitations, and potential selection bias.

### 3. Identify behavioral patterns

Cluster by goals, jobs, behaviors, contexts, constraints, decision criteria, and workarounds. Do not segment primarily by age, job title, or other demographics unless evidence shows decision relevance.

### 4. Separate roles

Distinguish user, buyer, approver, administrator, operator, support, and affected non-user when their responsibilities or incentives differ.

### 5. Create the persona record

Use evidence-backed statements, source references, and confidence. Include negative evidence and variation within the segment.

### 6. Validate usefulness

Test whether the persona changes product scope, priority, journey, content, permissions, measurement, or research decisions. Merge or retire personas that do not.

## Persona record

| Field | Definition |
|---|---|
| Persona ID and status | `PER-###`; Draft, Active, Superseded, or Retired |
| Persona level | Evidence-based persona, proto-persona, or role profile |
| Segment definition | Inclusion and exclusion criteria |
| Primary context | Trigger, environment, frequency, and operating conditions |
| Goals and success | What the person is trying to achieve and how success is recognized |
| Jobs to be Done | Linked job records |
| Current behavior and alternatives | Observable actions, tools, and workarounds |
| Barriers and constraints | Access, knowledge, time, trust, policy, device, or environment constraints |
| Decision criteria | What drives adoption, choice, trust, or abandonment |
| Accessibility and inclusion | Relevant needs without unsupported generalization |
| Product implications | Decisions this persona informs |
| Evidence | Sources, dates, methods, and sample |
| Assumptions and gaps | Linked `ASM-###` records and missing representation |
| Confidence and review trigger | Current confidence and conditions for revision |

## Decision rules

- Do not invent names, biographies, photos, quotes, or motivations to make a persona feel realistic.
- Demographics require decision relevance, lawful handling, and evidence.
- A buyer, administrator, and end user should not be combined solely for convenience.
- Do not treat a proto-persona as validated user evidence.
- A persona is not a market-size estimate or a stakeholder register.
- Sensitive or stigmatizing attributes must not be inferred without a legitimate, reviewed need.
- Retain within-segment variation instead of presenting every member as identical.

## Outputs

- decision-relevant persona or role records;
- evidence, confidence, and representation gaps;
- linked jobs and journeys;
- product implications and research priorities;
- criteria for persona review, merge, or retirement.

## Quality checks

- Each persona exists because it changes a product decision.
- Claims trace to evidence or are labeled assumptions.
- Segment criteria can be applied consistently.
- Represented and missing users are visible.
- Roles and incentives are not improperly merged.
- Personal and sensitive information is minimized.

## Common mistakes

- decorative personas based on stereotypes;
- quoting one participant as if they represent a segment;
- segmenting by job title when behavior is the real distinction;
- creating too many personas to prioritize;
- leaving personas unchanged after the product or evidence evolves.

## Related modules

- [Jobs to be Done](jobs-to-be-done.md)
- [User journey](user-journey.md)
- [Stakeholder analysis](../business-analysis/stakeholder-analysis.md)
- [Evidence policy](../core/evidence-policy.md)
