---
title: Product Metrics
type: measurement-method
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
  - ../product/product-outcomes.md
related:
  - business-metrics.md
  - ../product/user-journey.md
  - ../ai/observability.md
  - ../playbooks/product-metrics-review.md
---

# Product Metrics

## Purpose

Measure whether target users reach meaningful value, repeat desired behavior, remain served over time, and experience acceptable quality and trust—without confusing activity, shipment, or exposure with an outcome.

## When to use

Use during product definition, MVP validation, experiment design, roadmap review, release measurement, growth analysis, and improvement. Tailor the metric set to the product model, user journey, decision, and maturity.

## Inputs

- product vision, outcomes, users, jobs, journeys, scope, and value hypothesis;
- behavior or state baseline, expected causal path, and external influences;
- product model, eligibility, account and user relationships, lifecycle, and channels;
- event and state instrumentation, identity, consent, source quality, and observation delay;
- business, safety, quality, accessibility, cost, support, and operational guardrails.

## Workflow

### 1. Define the value event

Identify observable evidence that the target actor achieved meaningful progress, not merely opened a screen, clicked a control, or received a feature.

### 2. Map the measurement path

Connect eligibility and exposure to discovery, setup, first value, repeated value, retention, expansion, and outcome. Use only stages relevant to the actual journey.

### 3. Choose the primary outcome measure

Select a measure that represents the intended behavior or state change and can plausibly be influenced by the product. If no single measure is sufficient, use a small explicit set.

### 4. Add leading and diagnostic measures

Measure prerequisite behaviors, friction, step conversion, time to value, frequency, depth, task success, and failure points needed to explain the outcome.

### 5. Add guardrails

Protect trust, safety, fairness, quality, accessibility, latency, cost, unwanted contact, support burden, cancellations, and affected segments from harmful optimization.

### 6. Define cohorts and exposure

Specify eligible population, actual exposure, assignment, first-use or start event, cohort period, observation age, returning behavior, and exclusion of internal, bot, or test activity.

### 7. Validate instrumentation and baseline

Reconcile critical events with source-of-truth records, test identity and cross-device behavior, measure missingness and delay, and establish representative baseline distributions and segments.

### 8. Set decision thresholds

Define continue, adapt, expand, stop, or investigate rules with horizon, minimum evidence, guardrails, and authority. Separate statistical uncertainty from practical significance where experiments are used.

### 9. Review by segment and journey

Inspect target segments, new and established users, channel, plan, geography, device, accessibility needs, and other approved dimensions. Do not hide harmed groups in an aggregate improvement.

## Product measurement map

| Journey or outcome stage | Decision question | Candidate evidence | Required boundary |
|---|---|---|---|
| Eligibility and reach | Are intended users able to encounter the capability? | Eligible and exposed population | Eligibility, exposure, channel, and deduplication |
| First value | Do users reach a meaningful initial outcome? | Activation or time-to-value measure | Value event, start, window, and exclusions |
| Repeated value | Is useful behavior recurring at an appropriate cadence? | Frequency, depth, or repeat-value measure | Meaningful action, cadence, and active denominator |
| Retention | Do comparable cohorts continue receiving value? | Cohort retention or survival | Entry event, age, return event, and censoring |
| Task and journey quality | Can users complete the intended job? | Success, failure, abandonment, and duration | Task start, completion, error, and population |
| Satisfaction and trust | Is the experience accepted and trusted? | Feedback, complaint, appeal, or confidence evidence | Sampling, invitation, response bias, and scale |
| Product outcome | Did the intended behavior or state change? | Approved primary outcome metric | Formula, baseline, target, horizon, and owner |
| Guardrails | What must not deteriorate? | Safety, fairness, quality, cost, or support measures | Threshold, segment, response, and authority |

## Product metric record

| Field | Required content |
|---|---|
| Product outcome and hypothesis | Intended change and expected product influence |
| Primary metric | Canonical metric ID, direction, and why it represents value |
| Leading measures | Behaviors expected to precede the outcome |
| Guardrails | Unacceptable deterioration and stop thresholds |
| Journey and funnel | Eligible stages, entry, transitions, exits, and time bounds |
| Cohorts and segments | Entry event, age, comparison groups, and approved dimensions |
| Baseline and target | Values, windows, quality, rationale, and confidence |
| Decision policy | Continue, adapt, expand, stop, or investigate rule |

## Decision rules

- Adoption is not value unless the adopted behavior represents a meaningful job or outcome.
- Active user measures require a meaningful activity and appropriate period, not any event.
- Funnel conversion requires stable eligibility and stage definitions.
- Retention must compare cohorts at equivalent age.
- Satisfaction measures disclose who was invited, who responded, scale, and selection bias.
- A North Star Metric is optional and requires supporting input and guardrail measures.
- Product impact claims require design and evidence appropriate to causal uncertainty.

## Outputs

- product measurement map and approved metric contracts;
- primary, leading, diagnostic, and guardrail measures;
- cohort, funnel, journey, task, and segment definitions;
- instrumentation validation, baseline, targets, and decision thresholds;
- release and outcome-review evidence.

## Quality checks

- The primary metric represents value for the target actor.
- Eligibility, exposure, identity, cohorts, and windows are explicit.
- Guardrails cover foreseeable product harm.
- Aggregates do not hide material segment effects.
- Data quality and causal limitations are visible.
- Each measure drives a named product decision.

## Common mistakes

- calling visits or clicks activation;
- comparing retention cohorts at different ages;
- changing a funnel denominator after a release;
- optimizing engagement without wellbeing or trust guardrails;
- claiming causality from a before-and-after dashboard alone.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [Product outcomes](../product/product-outcomes.md)
- [User journey](../product/user-journey.md)
- [Business metrics](business-metrics.md)
- [AI observability](../ai/observability.md)
- [Product metrics review](../playbooks/product-metrics-review.md)
