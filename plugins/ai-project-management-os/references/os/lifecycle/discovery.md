---
title: Product and Project Discovery
type: lifecycle-workflow
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - intake.md
  - ../core/evidence-policy.md
  - ../core/assumptions-policy.md
related:
  - ../business-analysis/problem-framing.md
  - ../business-analysis/stakeholder-analysis.md
  - ../templates/discovery/discovery-questionnaire.md
  - ../templates/discovery/discovery-report.md
  - ../product/product-vision.md
  - ../product/product-outcomes.md
---

# Product and Project Discovery

## Purpose

Reduce the uncertainty that can invalidate the problem, intended outcome, target users, value, scope direction, feasibility, or delivery commitment.

## When to use

Use after intake for new ideas and material features, and when an existing initiative lacks credible evidence for its next decision. Discovery may also be reopened when metrics, incidents, stakeholder changes, or invalidated assumptions challenge the current direction.

## Inputs

- a project brief with G0 result;
- raw request and source-material inventory;
- existing product, research, analytics, commercial, support, delivery, and technical evidence;
- known assumptions, constraints, dependencies, risks, issues, and decisions;
- the next material decision and its latest responsible decision point.

## Preconditions

- An intake owner and discovery owner are named.
- Sensitive data and access constraints are understood.
- The primary mode and applicable quality gate are identified.
- The discovery objective is expressed as a decision to enable, not “learn everything.”

## Workflow

### 1. Frame the decision

State the decision discovery must support, its accountable owner, options currently visible, cost of being wrong, and required confidence. Use the [decision policy](../core/decision-policy.md) to classify it.

### 2. Establish the evidence baseline

Inventory available evidence, source dates, methods, limitations, and conflicts. Reuse reliable existing work. Apply the [evidence policy](../core/evidence-policy.md).

### 3. Frame the problem

Use [problem framing](../business-analysis/problem-framing.md) to distinguish the observed situation, affected actors, consequences, desired outcome, and proposed solutions.

### 4. Analyze stakeholders

Use [stakeholder analysis](../business-analysis/stakeholder-analysis.md) to identify decision rights, affected groups, subject-matter experts, blockers, and engagement needs. Include groups affected by the outcome even if they did not request it.

### 5. Map uncertainty

Create or update the [assumptions log](../templates/discovery/assumptions-log.md). Prioritize high-impact, high-uncertainty assumptions and unresolved evidence conflicts.

### 6. Build the learning plan

For each decision-critical unknown, select the least costly credible method:

- source and document review;
- stakeholder or user interview;
- observation or process walkthrough;
- analytics or data analysis;
- market or competitor research;
- technical spike or architecture review;
- prototype or concept test;
- commercial, legal, security, privacy, or compliance review.

Define the evidence threshold and decision rule before collecting results.

### 7. Execute and synthesize

Collect evidence with provenance and limitations. Distinguish findings from interpretation. Update assumptions, risks, questions, and candidate options as evidence changes.

### 8. Form the recommendation

Compare viable options using explicit criteria. State benefits, costs, risks, dependencies, reversibility, and confidence. Include “do not proceed yet” or “stop” when supported.

### 9. Evaluate discovery sufficiency

Complete the [discovery report](../templates/discovery/discovery-report.md) and assess G1. Discovery ends when evidence is sufficient for the next decision—not when every question is answered.

## Decision rules

- Research breadth must be proportional to decision impact and uncertainty.
- Interview statements are evidence of perspectives; triangulate behavioral or market claims where material.
- A solution hypothesis must not replace a problem statement.
- High-impact assumptions must be validated before an irreversible commitment or explicitly accepted by an authorized human.
- Conflicting authoritative evidence remains visible until resolved or accepted as residual uncertainty.
- If discovery shows insufficient value, unacceptable risk, or no feasible path, recommend stopping or reframing.
- New evidence that changes the intended outcome requires re-routing, not silent scope drift.

## Outputs

- decision framing and discovery plan;
- evidence inventory and findings;
- problem frame;
- stakeholder analysis;
- assumptions log and validation outcomes;
- constraints, dependencies, risks, and open questions;
- options and recommendation;
- discovery report with confidence and G1 result.

## Quality checks

- The next decision and required confidence are explicit.
- Target users and affected stakeholders are supported by evidence or marked as assumptions.
- Findings, interpretations, and recommendations are distinguishable.
- Critical assumptions have validation evidence or authorized risk acceptance.
- Options include meaningful trade-offs and a viable non-action alternative.
- Success indicators are measurable or have an owner to define them.
- The discovery report enables a clear decision, follow-up discovery, or stop recommendation.

## Common mistakes

- using a fixed questionnaire without tailoring it to the decision;
- counting interviews instead of evaluating evidence quality;
- documenting only evidence that supports the preferred solution;
- extending discovery indefinitely because low-impact questions remain;
- claiming validation without a predeclared threshold;
- committing to scope or dates as a discovery output.

## Related modules

- [Project intake](intake.md)
- [Problem framing](../business-analysis/problem-framing.md)
- [Stakeholder analysis](../business-analysis/stakeholder-analysis.md)
- [Discovery questionnaire](../templates/discovery/discovery-questionnaire.md)
- [Discovery report](../templates/discovery/discovery-report.md)
- [Product vision](../product/product-vision.md)
- [Product outcomes](../product/product-outcomes.md)
