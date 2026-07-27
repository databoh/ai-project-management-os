---
title: Problem Framing
type: analysis-method
status: active
version: 0.2.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/evidence-policy.md
related:
  - ../lifecycle/discovery.md
  - stakeholder-analysis.md
  - ../templates/discovery/discovery-questionnaire.md
---

# Problem Framing

## Purpose

Create an evidence-aware description of the problem before selecting or committing to a solution.

## When to use

Use during discovery for a new product, feature, operational problem, underperforming outcome, or recovery initiative. Revisit the frame when new evidence changes the affected actor, context, consequence, or desired outcome.

## Inputs

- raw request and project brief;
- user, customer, stakeholder, process, support, and analytics evidence;
- current alternatives and workarounds;
- known constraints, assumptions, risks, and proposed solutions.

## Workflow

### 1. Describe the observed situation

Record what is happening, where, when, how often, and according to which sources. Separate direct observations from stakeholder interpretation.

### 2. Identify affected actors

Name the users, customers, operators, partners, or business functions experiencing the situation. Record segments and exclusions. If the actor is inferred rather than observed, classify it as an assumption.

### 3. Describe the job and context

Identify what the actor is trying to accomplish, the trigger, current process, alternatives, and constraints. Avoid defining the job in terms of the requested feature.

### 4. Establish consequences

Describe the user, business, operational, financial, compliance, or technical impact. Quantify frequency, severity, reach, and trend when credible data exists.

### 5. Identify root-cause uncertainty

Distinguish symptoms, contributing conditions, and plausible causes. Record causal claims as hypotheses until tested.

### 6. Define the desired outcome

State the measurable change sought, for whom, over what context or period, and why it matters. Do not prescribe the solution in the outcome.

### 7. Record boundaries

List confirmed constraints, non-goals, excluded actors or contexts, dependencies, and decision deadlines. Identify which boundaries are negotiable.

### 8. Test the frame

Check the frame against evidence and alternative interpretations with affected users, accountable stakeholders, and relevant experts.

## Problem frame

Use this compact structure:

> **Observed situation:** [evidence-backed condition]
> **Affected actor and context:** [who, when, and where]
> **Consequence:** [measurable or observable impact]
> **Current alternatives:** [how the need is handled today]
> **Desired outcome:** [change sought without prescribing a solution]
> **Known uncertainty:** [critical assumptions, hypotheses, and evidence gaps]

In a completed artifact, replace bracketed guidance with sourced content or `Not established`.

## Decision rules

- A requested feature belongs under proposed solutions until the problem is validated.
- “Users need” is not a confirmed fact without an identified source and affected segment.
- Correlation does not establish a root cause.
- A broad problem should be narrowed by actor, context, and consequence before solution comparison.
- If different segments have materially different jobs or consequences, create separate frames.
- If no credible consequence can be established, recommend more discovery or deprioritization.

## Outputs

- concise problem frame;
- evidence and limitation references;
- affected actors and contexts;
- desired outcome and candidate success indicators;
- root-cause hypotheses;
- boundaries, assumptions, and open questions;
- proposed solutions kept separate from the problem definition.

## Quality checks

- The statement describes a problem rather than a preferred feature.
- Actor, context, and consequence are explicit.
- Material claims trace to evidence or are classified as uncertain.
- The desired outcome is measurable in principle.
- Alternatives and non-action are visible.
- The frame is narrow enough to guide a decision and broad enough to allow multiple solutions.

## Common mistakes

- writing “we need to build” as the problem;
- merging several unrelated actors into one generic user;
- using business impact without showing how it relates to user or operational behavior;
- asserting a root cause from a single interview;
- defining success as feature delivery.

## Related modules

- [Discovery workflow](../lifecycle/discovery.md)
- [Stakeholder analysis](stakeholder-analysis.md)
- [Evidence policy](../core/evidence-policy.md)
