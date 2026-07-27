---
title: Metric Dictionary
type: measurement-governance
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/evidence-policy.md
  - ../product/product-outcomes.md
related:
  - product-metrics.md
  - business-metrics.md
  - engineering-metrics.md
  - delivery-metrics.md
  - flow-metrics.md
  - dora-metrics.md
  - incident-metrics.md
---

# Metric Dictionary

## Purpose

Provide one authoritative contract, selection workflow, quality standard, and change history for measures used to make product, business, engineering, delivery, flow, release, and incident decisions.

## When to use

Use before publishing a metric, setting a target, comparing groups or periods, creating an alert, automating a gate, or interpreting a change. Existing dashboards are views over approved definitions, not independent sources of truth.

## Authority boundary

The agent may draft definitions, test calculations, identify gaps, and recommend measures. Accountable product, business, finance, engineering, delivery, risk, or operations owners approve consequential definitions, targets, incentives, and interpretations.

## Measurement model

Use the smallest balanced set needed for a decision:

- **outcome measure:** indicates the user, business, service, or delivery result;
- **input measure:** indicates a behavior or capability expected to influence an outcome;
- **guardrail measure:** constrains unacceptable harm or deterioration;
- **diagnostic measure:** helps explain variation and locate a cause;
- **control measure:** triggers a predefined review, alert, stop, or intervention.

A measure may serve different roles in different decisions; record the role rather than relying on its name.

## Workflow

### 1. Start with the decision

Name the question, decision owner, action alternatives, affected population, decision point, and cost of false action or inaction. Remove metrics that do not change a decision or enable control.

### 2. Link to an outcome or obligation

Trace the metric to a product outcome, business goal, engineering objective, delivery control, service promise, risk, or mandatory requirement. State whether the relationship is direct, proxy, assumed, or evidenced.

### 3. Select a balanced set

Combine outcome, input, guardrail, and diagnostic evidence proportionate to the decision. Avoid a single composite score when its components create materially different actions.

### 4. Define the metric contract

Specify formula, event or state semantics, unit, entity, eligible population, exclusions, dimensions, aggregation, time basis, source, transformation, latency, quality, owner, and access.

### 5. Validate measurement

Test instrumentation coverage, duplicates, missing events, joins, identity, time zones, late arrivals, backfill, bot or test traffic, changing eligibility, and agreement with an independent source where possible.

### 6. Establish baseline

Use a representative named window, segments, distribution, sample size, and data-quality limitations. Do not use a partial or exceptional period without disclosure.

### 7. Set target or control threshold

Record rationale, horizon, direction, confidence, guardrails, owner, and response. A target is a decision, not a value inferred from industry benchmarks or desired appearance.

### 8. Approve and publish

Approve the definition and intended uses. Version semantic changes, identify dashboards and consumers, and assign a review cadence.

### 9. Operate and interpret

Show actual, baseline, target, forecast, uncertainty, and variance distinctly. Analyze segments, distributions, exposure, seasonality, external effects, and data changes before attributing cause.

### 10. Change or retire

Preserve prior versions, effective dates, restatement decisions, comparability breaks, consumer migration, and deprecation. Never silently redefine a historical series.

## Canonical metric contract

| Field | Required content |
|---|---|
| Metric ID, name, version, and status | Stable identity; Proposed, Approved, Deprecated, or Superseded |
| Purpose and decision | Question, decision, action, audience, and misuse warning |
| Outcome and role | Authoritative objective and outcome, input, guardrail, diagnostic, or control role |
| Formula | Numerator, denominator, operators, event or state semantics, and unit |
| Entity and population | Unit analyzed, eligibility, exposure, inclusions, and exclusions |
| Dimensions | Approved segments and privacy or minimum-size controls |
| Time basis | Event time, processing time, time zone, window, cohort, and refresh |
| Aggregation | Sum, rate, ratio, percentile, distribution, or other method and weighting |
| Source and lineage | Systems, tables or events, transformations, joins, and steward |
| Data quality | Coverage, completeness, accuracy, freshness, known bias, and validation |
| Baseline, target, and thresholds | Values, windows, rationale, confidence, and response |
| Ownership and access | Business owner, data steward, technical owner, consumers, and permissions |
| Change history | Effective date, compatibility, restatement, supersession, and approver |

## Metric register

| Metric ID | Name | Role | Decision | Version and status | Owner | Source | Review trigger |
|---|---|---|---|---|---|---|---|
| MET-001 | Not established | Not classified | Not established | Proposed | Not assigned | Not provided | Not established |

## Calculation rules

- A count requires an entity and deduplication rule.
- A rate or ratio requires explicit numerator, denominator, eligibility, and zero-denominator behavior.
- Duration requires start, end, pauses, calendar, and percentile or distribution treatment.
- Averages require distribution and weighting review; use percentiles when tails matter.
- A cohort requires entry event, eligibility period, observation age, and censoring treatment.
- Currency requires currency, tax treatment, exchange-rate source and date, and recognition basis.
- A composite requires component definitions, normalization, weights, missing-data behavior, and reason not to report components separately.

## Decision rules

- Metric names never substitute for contracts.
- Correlation, sequence, and dashboard proximity do not establish causation.
- A proxy must state evidence and conditions linking it to the intended outcome.
- Do not use individual-level metrics for ranking or incentives when the system controls the result or gaming risk is material.
- Segment analysis must preserve privacy and avoid conclusions from insufficient samples.
- Target changes preserve history and authority.
- Missing, delayed, or low-quality data must remain visible rather than being silently imputed.

## Outputs

- approved metric contracts and register;
- decision-oriented measurement set and ownership;
- validated baseline, targets, guardrails, and response rules;
- data-quality, lineage, access, and interpretation evidence;
- version, migration, deprecation, and change history.

## Quality checks

- Every metric informs a named decision or control.
- Formula, population, window, source, and owner are reproducible.
- Actual, target, baseline, and forecast are distinguishable.
- Distribution, segments, uncertainty, and data quality are proportionate to risk.
- Incentives and likely gaming were assessed.
- Definition changes cannot silently rewrite history.

## Common mistakes

- building a dashboard before defining decisions;
- reusing a familiar metric name with different boundaries;
- setting a target before validating the baseline;
- averaging ratios with incompatible denominators;
- changing event logic without versioning the series.

## Related modules

- [Product outcomes](../product/product-outcomes.md)
- [Product metrics](product-metrics.md)
- [Business metrics](business-metrics.md)
- [Engineering metrics](engineering-metrics.md)
- [Delivery metrics](delivery-metrics.md)
