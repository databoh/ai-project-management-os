---
title: Product Vision
type: product-definition-method
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/discovery.md
  - ../business-analysis/problem-framing.md
related:
  - product-outcomes.md
  - personas.md
  - jobs-to-be-done.md
  - scope.md
  - mvp.md
---

# Product Vision

## Purpose

Define a durable product direction that connects an evidence-backed problem and target audience to differentiated value, business intent, and strategic boundaries.

## When to use

Use after discovery has sufficient evidence for G1, when aligning a new product, a material product direction, or a major repositioning. Revisit the vision when the problem, audience, business model, or strategic constraints materially change.

## Inputs

- approved or conditionally accepted discovery recommendation;
- problem frame and supporting evidence;
- stakeholder analysis and decision rights;
- target-user and market evidence;
- business goals, constraints, risks, and critical assumptions;
- known alternatives and differentiators.

## Preconditions

- The discovery decision owner is known.
- The problem and affected actors are evidence-backed or explicitly classified as assumptions.
- High-impact unresolved uncertainty is visible.
- A proposed solution has not been treated as proof of product value.

## Workflow

### 1. Establish the strategic context

State the business goal, product opportunity, relevant market or operational context, and why the direction matters now. Link material claims to sources and dates.

### 2. Select the target audience

Name the primary audience and context. Separate primary beneficiaries, buyers, administrators, operators, and indirectly affected groups where their needs differ.

### 3. Define the problem and desired change

Summarize the current condition, consequence, and desired user or business change. Link to the authoritative [problem frame](../business-analysis/problem-framing.md).

### 4. Articulate the value proposition

Describe the benefit the product should create, the current alternative, and the reason the proposed direction could be meaningfully better. Mark unvalidated differentiation as a hypothesis.

### 5. Set strategic boundaries

Record non-goals, excluded users or use cases, trust boundaries, operating constraints, and choices the product will not optimize for.

### 6. Connect vision to outcomes

Translate the direction into measurable [product outcomes](product-outcomes.md). Vision language provides direction; outcomes provide evidence of progress.

### 7. Review and approve

Test the vision for evidence, coherence, differentiation, feasibility assumptions, and stakeholder alignment. Record the accountable approver and decision reference; a draft vision is not an approved product commitment.

## Product vision record

| Field | Definition |
|---|---|
| Vision ID and status | Stable ID; Draft, Proposed, Approved, Superseded, or Retired |
| Strategic context | Business goal, opportunity, and relevant time horizon |
| Primary audience | Evidence-backed segment and use context |
| Problem | Current condition and material consequence |
| Desired future | User and business change sought |
| Value proposition | Benefit and reason to choose this direction over current alternatives |
| Differentiation hypothesis | Advantage to validate, with evidence status |
| Business contribution | How the direction supports the business goal |
| Strategic boundaries | Non-goals, excluded contexts, and trust constraints |
| Critical assumptions | Linked `ASM-###` records |
| Accountable owner | Human owner of product direction |
| Decision reference | Approval status, date, and record |
| Review triggers | Evidence or context changes that require reconsideration |

## Vision statement

Use this structure only after completing the record:

> For **[primary audience and context]** experiencing **[evidence-backed problem]**, the product will enable **[desired change]** by providing **[distinct value]**. Unlike **[current alternative]**, it will **[differentiation hypothesis]**, supporting **[business contribution]** while not pursuing **[key non-goal]**.

Replace bracketed guidance with sourced content or `Not established`. Do not optimize prose at the expense of unresolved evidence.

## Decision rules

- Vision is a direction, not a feature list, roadmap, slogan, or delivery date.
- A mission describes the product's enduring contribution; a vision describes the desired future direction. Use both only when the distinction adds control.
- Keep one primary audience in the vision; document materially different audiences separately.
- Do not claim differentiation without comparative evidence or label it as a hypothesis.
- Do not approve a vision whose business value depends on an unowned high-impact assumption.
- Changes to an approved vision require a decision record and impact review.

## Outputs

- product vision record and concise statement;
- primary audience and product context;
- value and differentiation hypotheses;
- business contribution and strategic boundaries;
- linked outcomes, assumptions, evidence, and approval.

## Quality checks

- The vision begins with audience, problem, and desired change rather than features.
- Evidence and hypotheses are distinguishable.
- Business contribution is credible and traceable.
- Non-goals prevent predictable scope expansion.
- The direction can produce measurable outcomes.
- An accountable human owner and approval status are explicit.

## Common mistakes

- using generic language that could describe any product;
- merging vision, roadmap, and release scope;
- treating the buyer and end user as one persona without evidence;
- promising market leadership or reliability without a measurement basis;
- changing the vision silently when scope changes.

## Related modules

- [Product outcomes](product-outcomes.md)
- [Personas](personas.md)
- [Jobs to be Done](jobs-to-be-done.md)
- [Product scope](scope.md)
