---
title: Business Metrics
type: measurement-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
related:
  - product-metrics.md
  - delivery-metrics.md
  - ../ai/cost-management.md
---

# Business Metrics

## Purpose

Measure commercial, financial, operational, customer, and strategic performance using definitions aligned with the actual business model, accounting authority, and decisions.

## When to use

Use for investment, pricing, growth, retention, portfolio, customer, sales, operating, and unit-economic decisions. Tailor to subscription, transaction, marketplace, lending, services, internal, or non-commercial models; no metric family is universally required.

## Authority boundary

The agent may structure measures, calculate scenarios, and identify inconsistencies. Named finance, commercial, legal, risk, and executive owners approve accounting treatment, targets, forecasts, customer commitments, and material financial interpretation.

## Inputs

- business goals, value streams, revenue or non-commercial model, and decision horizon;
- customer, account, contract, subscription, transaction, product, channel, and geography definitions;
- pricing, discount, tax, refund, credit, payment, cost, commission, and recognition policies;
- acquisition, service, support, infrastructure, risk, and operating cost evidence;
- finance systems, contracts, ledgers, billing, CRM, product data, and reconciliation controls;
- seasonality, currency, cohorts, data quality, assumptions, and external factors.

## Workflow

### 1. Define the business decision

State whether the decision concerns viability, investment, growth, pricing, acquisition, retention, margin, liquidity, efficiency, risk, or mission performance and identify the accountable authority.

### 2. Model the value and money flow

Map customer or beneficiary, contract, order or subscription, delivery, usage, invoice, recognized revenue, cash, direct cost, refund, loss, and support. Keep bookings, billings, revenue, and cash distinct.

### 3. Select outcome and driver measures

Choose the smallest set covering value created, durable customer behavior, economic result, controllable inputs, and guardrails. Identify external drivers and lag.

### 4. Define customer and period boundaries

Specify logo, account, tenant, user, household, contract, or payer entity; new, returning, active, retained, expanded, contracted, or churned state; fiscal calendar; cohort; currency; and consolidation rules.

### 5. Define economics

Document revenue basis, direct and allocated costs, gross contribution, acquisition cost, service cost, payback, and lifetime assumptions. Use ranges and scenario sensitivity when future behavior is uncertain.

### 6. Reconcile sources

Reconcile operational systems with authoritative finance or risk records. Explain timing, late adjustments, refunds, credits, write-offs, exchange, and restatement.

### 7. Establish baseline, target, and forecast

Separate actual, approved target, current forecast, budget, and commitment. State assumptions, confidence, scenario, and update cadence.

### 8. Review segments and concentration

Inspect product, customer, cohort, plan, channel, geography, currency, risk band, and other approved dimensions. Expose concentration and cross-subsidy rather than relying only on totals.

## Business measurement map

| Area | Decision question | Example measure family | Critical boundary |
|---|---|---|---|
| Value and mission | Is the organization producing the intended result? | Business outcome or beneficiary impact | Outcome, population, attribution, and horizon |
| Revenue or funding | What economic value is recognized or secured? | Revenue, recurring revenue, transaction value, or funding | Recognition basis, period, currency, refunds, and exclusions |
| Retention and expansion | Is the customer relationship durable? | Logo or revenue retention, churn, expansion, contraction | Entity, cohort, opening base, events, and period |
| Acquisition | Is growth economically responsible? | Acquisition volume, conversion, CAC, or payback | Attributed cost, customer definition, lag, and cohort |
| Margin and service cost | Does delivered value cover attributable cost? | Gross margin, contribution, or cost to serve | Revenue basis, direct cost, allocation, and unit |
| Cash and risk | Can obligations be met within approved exposure? | Cash, receivables, loss, fraud, or credit measures | Authority, timing, aging, loss status, and currency |
| Efficiency | Are resources converted into sustainable outcomes? | Unit cost, productivity of system, or operating leverage | Output or outcome unit, full input, quality, and guardrails |
| Concentration | Is performance overly dependent on a segment? | Customer, channel, vendor, product, or geography concentration | Denominator, related entities, and exposure window |

## Unit-economics record

| Field | Required content |
|---|---|
| Economic unit | Customer, account, order, transaction, loan, workflow, or beneficiary |
| Value basis | Recognized revenue, contribution, avoided cost, or mission value |
| Cost boundary | Acquisition, delivery, infrastructure, support, losses, and allocations |
| Cohort and horizon | Entry, observation, retention, maturity, and censoring |
| Lifetime assumption | Method, evidence, range, and sensitivity |
| Result | Unit margin, acquisition cost, payback, or other approved measure |
| Limitations | Attribution, incomplete maturity, seasonality, and data quality |

## Decision rules

- Bookings, billings, recognized revenue, and cash are not interchangeable.
- Recurring revenue measures require explicit eligibility, normalization, currency, and contraction or churn treatment.
- Customer acquisition cost requires an approved acquisition-cost boundary and acquired-customer denominator.
- Lifetime value is an assumption-driven forecast until cohort evidence matures; show sensitivity.
- Gross margin and contribution measures state which costs are included and allocated.
- A favorable total can hide loss-making cohorts or concentration risk.
- Finance authority resolves accounting and recognition policy.

## Outputs

- business measurement map and canonical metric contracts;
- value-flow, customer, period, revenue, cost, and risk boundaries;
- baseline, target, budget, forecast, variance, and scenario evidence;
- unit economics, retention, concentration, and reconciliation;
- assumptions, data-quality limitations, and decision ownership.

## Quality checks

- Measures match the real business and accounting model.
- Entity, period, currency, recognition, and cost boundaries are explicit.
- Actual, target, budget, and forecast are distinct.
- Cohorts, concentration, risk, and sensitivity are visible.
- Operational and financial sources reconcile.
- Material interpretations have accountable approval.

## Common mistakes

- treating contracted value as recognized revenue;
- calculating CAC without the full acquisition boundary;
- presenting one lifetime-value number for immature cohorts;
- hiding refunds, losses, or service cost;
- ranking products on revenue while ignoring margin and risk.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [Product metrics](product-metrics.md)
- [Delivery metrics](delivery-metrics.md)
- [AI cost management](../ai/cost-management.md)
