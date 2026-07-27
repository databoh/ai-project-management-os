---
title: Assumptions Policy
type: policy
status: active
version: 0.1.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - evidence-policy.md
related:
  - decision-policy.md
  - quality-gates.md
  - terminology.md
---

# Assumptions Policy

## Purpose

Make uncertain beliefs visible and actively reduce the uncertainty that can invalidate outcomes, scope, estimates, or decisions.

## When to use

Register an assumption when work must proceed without a confirmed fact and being wrong could affect value, scope, solution, compliance, cost, schedule, quality, or operations.

## Assumption record

Each material assumption must contain:

- assumption ID in the form `ASM-###`;
- concise falsifiable statement;
- category: business, user, product, delivery, technical, data, security, legal, compliance, or operational;
- source or rationale;
- affected decisions and artifacts;
- impact if false: low, medium, or high;
- uncertainty: low, medium, or high;
- owner;
- validation method and evidence threshold;
- target validation point;
- status: open, validating, confirmed, invalidated, expired, or accepted risk;
- last reviewed date.

## Workflow

1. State the assumption as a testable claim, not a vague concern.
2. Assess impact and uncertainty.
3. Prioritize assumptions with both high impact and high uncertainty.
4. Assign an owner and the cheapest credible validation method.
5. Set validation before the dependent irreversible decision or commitment.
6. Update the status from new evidence.
7. Propagate confirmed or invalidated results to dependent decisions and artifacts.
8. Close or explicitly accept the residual risk.

## Decision rules

- Never silently convert an assumption into a fact.
- An estimate based on open assumptions must include a range and confidence.
- A high-impact, high-uncertainty assumption blocks an irreversible commitment unless an accountable human explicitly accepts the risk.
- A confirmed assumption should be reclassified as a confirmed fact with evidence; an invalidated assumption must trigger impact analysis.
- Assumptions expire when their context or supporting evidence materially changes.
- Hypotheses describe testable cause-and-effect expectations; assumptions are conditions currently treated as true so work can proceed.

## Quality checks

- The statement can be proven false.
- Impacted commitments and artifacts are linked.
- The owner and validation point are unambiguous.
- Validation evidence is proportionate to the cost of error.
- Status changes are supported by evidence or explicit risk acceptance.
- Invalidated assumptions trigger replanning where needed.

## Example

`ASM-014`: At least 80% of target customers can use SSO through the proposed identity provider. Impact if false: high. Uncertainty: medium. Owner: product lead. Validation: verify provider compatibility for the top ten target accounts before architecture approval. Status: validating.

## Related modules

- [Evidence policy](evidence-policy.md)
- [Decision policy](decision-policy.md)
- [Terminology](terminology.md)
- [Quality gates](quality-gates.md)
