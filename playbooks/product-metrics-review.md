---
title: Product Metrics Review Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../metrics/product-metrics.md
  - ../metrics/metric-dictionary.md
related:
  - ../product/product-outcomes.md
  - ../metrics/business-metrics.md
  - ../delivery/reporting.md
  - ../core/quality-gates.md
---

# Product Metrics Review Playbook

## Purpose

Turn governed product and guardrail evidence into an explicit continue, adapt, expand, stop, investigate, or measurement-correction decision.

## When to use

Use at an approved product cadence, experiment or pilot horizon, post-release checkpoint, G7 review, performance decline, material segment divergence, or when metric validity is questioned.

## Inputs

- product outcome, hypothesis, target or threshold, horizon, and accountable owner;
- canonical metric contracts and versions;
- actual, baseline, target, forecast, prior decision, and release or experiment exposure;
- product, business, quality, safety, accessibility, cost, support, incident, and operational guardrails;
- data-quality, instrumentation, cohort, segment, external-event, and causal limitations;
- qualitative research, feedback, support, sales, and operational evidence.

## Workflow

### 1. Define the review decision

Name the product question, options, authority, evidence cut-off, affected population, and the cost of false continuation or false stopping.

### 2. Validate measurement before interpretation

Confirm metric ID and version, source freshness, instrumentation coverage, eligibility, exposure, identity, numerator, denominator, cohort age, segments, late data, and known quality incidents.

### 3. Restate the intended outcome

Review the actor, behavior or state change, product influence hypothesis, baseline, target, horizon, guardrails, assumptions, and external factors.

### 4. Review actual evidence

Show distributions and segments, not one aggregate. Compare with baseline, target, prior period, forecast, and relevant control group or counterfactual evidence where available.

### 5. Review leading and journey evidence

Inspect reach, first value, repeated value, task success, friction, conversion, retention, and qualitative evidence needed to explain outcome movement.

### 6. Review guardrails

Inspect trust, safety, fairness, accessibility, quality, latency, cost, support, incidents, complaints, appeals, and affected segments. A primary improvement cannot silently override a mandatory guardrail failure.

### 7. Analyze explanations

Separate observed movement from causal interpretation. Consider product change, exposure, selection, seasonality, market, pricing, channel, competitor, operational, instrumentation, and random variation.

### 8. Make a decision

Choose:

- **continue:** current direction remains justified;
- **expand:** evidence supports wider exposure under stated controls;
- **adapt:** change product, journey, audience, solution, or operating approach;
- **stop:** value or trust evidence does not justify continuation;
- **investigate:** evidence is insufficient or contradictory;
- **correct measurement:** definition or instrumentation is invalid and requires controlled repair.

### 9. Propagate

Update outcomes, roadmap, scope, assumptions, risks, experiments, requirements, release, support, forecasts, and metric contracts. Version definition changes and preserve comparability breaks.

## Review record

| Field | Required content |
|---|---|
| Review ID, period, and cut-off | Stable review identity and evidence horizon |
| Outcome and decision | Outcome ID, hypothesis, decision options, and authority |
| Metric contracts | Primary, leading, guardrail IDs and versions |
| Data quality | Coverage, freshness, changes, bias, and limitations |
| Evidence | Actual, baseline, target, forecast, distribution, cohorts, and segments |
| Guardrails | Threshold results, harmed segments, incidents, and exceptions |
| Interpretation | Supported explanations, alternatives, and confidence |
| Decision and actions | Continue, expand, adapt, stop, investigate, or correct; owners and follow-up |

## Decision rules

- Validate instrumentation before explaining product behavior.
- A target miss does not identify cause.
- A statistically detectable change may be practically irrelevant, and vice versa.
- Aggregate success cannot hide mandatory segment or guardrail failure.
- Qualitative evidence explains mechanisms but does not automatically quantify prevalence.
- Do not redefine a metric retrospectively to create success.
- Metric correction may require restatement and invalidation of earlier conclusions.

## Outputs

- governed product-metrics review record;
- data-quality and instrumentation decision;
- outcome, journey, segment, and guardrail interpretation;
- explicit product decision and confidence;
- updated roadmap, scope, risks, and measurement contracts.

## Quality checks

- Evidence uses approved metric versions and exposure boundaries.
- Actual, baseline, target, and forecast are distinct.
- Distribution, cohorts, segments, and guardrails are visible.
- Causal claims match the study design.
- The decision has authority, owners, and follow-up.
- Definition changes preserve history.

## Related modules

- [Product metrics](../metrics/product-metrics.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Product outcomes](../product/product-outcomes.md)
- [Business metrics](../metrics/business-metrics.md)
- [Quality gates](../core/quality-gates.md)
