---
title: Product Outcomes
type: product-definition-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - product-vision.md
  - ../core/evidence-policy.md
related:
  - scope.md
  - mvp.md
  - ../lifecycle/prioritization.md
  - user-journey.md
  - product-roadmap.md
  - ../metrics/metric-dictionary.md
  - ../metrics/product-metrics.md
---

# Product Outcomes

## Purpose

Translate product direction into measurable changes in user or business behavior without confusing delivered outputs with achieved value.

## When to use

Use after a product direction is proposed, before defining MVP scope, priorities, roadmap, or success claims. Update outcomes when the vision changes or evidence shows that the selected measure does not represent value.

## Inputs

- product vision and business goal;
- discovery findings and problem frame;
- target segments, jobs, and journey evidence;
- current baseline and data-quality assessment;
- constraints, guardrails, risks, and assumptions.

## Workflow

### 1. Build the outcome chain

Connect:

`Business goal → Product outcome → User behavior → Product influence → Measure → Decision`

State what the product can plausibly influence and which external factors may affect the measure.

### 2. Define the behavior change

Specify the actor, current behavior or state, desired change, context, and intended direction. Avoid output language such as “launch,” “implement,” or “build.”

### 3. Establish measurement

Define or reference a governed metric contract covering formula, population, segment, data source, owner, baseline window, target or decision threshold, measurement horizon, and known limitations. Use relative periods when a start date is unknown.

### 4. Add guardrails

Identify measures that must not deteriorate while improving the primary outcome, including trust, safety, quality, accessibility, cost, latency, operational load, and unintended segment effects.

### 5. Test causality and controllability

Record why product changes may influence the outcome, what evidence supports the relationship, and what alternative explanations must be considered.

### 6. Assign ownership and review

Name the accountable outcome owner and data owner. Define review cadence, decision thresholds, and conditions for changing or retiring the outcome.

## Outcome record

| Field | Definition |
|---|---|
| Outcome ID and status | `OUT-###`; Proposed, Active, Achieved, Not achieved, Superseded, or Retired |
| Linked business goal and vision | Authoritative references |
| Actor and segment | Who must experience or perform the change |
| Behavior or state change | From current condition to desired condition |
| Product influence hypothesis | Why the product can affect the change |
| Primary metric | Formula, direction, population, and data source |
| Baseline | Value, window, source, and quality limitations |
| Target or decision threshold | Desired evidence and rationale |
| Measurement horizon | Relative period or approved dates |
| Leading indicators | Earlier signals of movement |
| Guardrails | Measures that constrain harmful optimization |
| Dependencies and external factors | Conditions outside direct product control |
| Assumptions and confidence | Linked records and current confidence |
| Accountable owner and data owner | Named humans or governed groups |
| Review and decision rule | When evidence triggers continue, adapt, or stop |

## Outcome statement

> For **[actor and context]**, change **[behavior or state]** from **[baseline]** toward **[target or threshold]** within **[measurement horizon]**, while maintaining **[guardrails]**.

Use `Not established` where the evidence is not ready; do not invent a baseline or target to complete the statement.

## Decision rules

- Delivery of a feature is an output, not a product outcome.
- A target without a baseline, source, or rationale is not decision-ready.
- Do not use a North Star Metric unless one durable measure credibly represents recurring customer value; support it with input and guardrail metrics.
- Avoid vanity metrics that can rise without increasing user or business value.
- Segment results where aggregate movement can conceal harm or unequal effects.
- A proxy metric must state the evidence linking it to the desired behavior.
- Material target changes require an explicit decision and preserved history.

## Outputs

- outcome chain;
- measurable outcome records;
- primary, leading, and guardrail measures;
- baseline and data-quality gaps;
- ownership, review cadence, and decision rules;
- inputs to scope, MVP, prioritization, and later roadmap work.

## Quality checks

- Every outcome links to a business goal and product vision.
- The outcome describes behavior or state rather than shipped work.
- Metrics include formula, population, source, window, and owner.
- Target and horizon reflect evidence rather than arbitrary precision.
- Product influence and external factors are visible.
- Guardrails protect against foreseeable harmful optimization.

## Common mistakes

- measuring activity instead of value;
- selecting a metric because it is easy to query;
- setting an exact target without baseline quality;
- assigning the delivery team ownership of a business outcome they cannot control;
- declaring success before the measurement horizon or without segment analysis.

## Related modules

- [Product vision](product-vision.md)
- [Product scope](scope.md)
- [MVP definition](mvp.md)
- [Prioritization](../lifecycle/prioritization.md)
- [Product roadmap](product-roadmap.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Product metrics](../metrics/product-metrics.md)
