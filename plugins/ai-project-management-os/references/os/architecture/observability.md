---
title: Observability
type: architecture-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - system-context.md
  - ../product/product-outcomes.md
related:
  - cloud-and-infrastructure.md
  - data-and-integrations.md
  - security.md
  - scalability.md
  - ../metrics/metric-dictionary.md
  - ../metrics/incident-metrics.md
---

# Observability

## Purpose

Enable teams to understand user impact, system behavior, dependencies, data flow, cost, and change effects from telemetry sufficient for detection, diagnosis, response, recovery, and improvement.

## When to use

Use during solution design, implementation, release, operations, incident response, scaling, and outcome review. Add instrumentation with the capability it observes rather than after failures occur.

## Inputs

- product outcomes, user journeys, release guardrails, and operational responsibilities;
- system context, services, data flows, dependencies, environments, and trust boundaries;
- SLO, security, privacy, compliance, support, and incident requirements;
- known failure modes, past incidents, demand, scale, and cost constraints;
- telemetry platform capability, retention, ownership, and access controls.

## Workflow

### 1. Define observable questions

Start with decisions and questions:

- Are users achieving the critical journey?
- Is the service meeting its reliability objective?
- Which change, component, tenant, dependency, or data condition explains impact?
- Can responders identify blast radius and recover safely?
- Are telemetry cost, volume, and quality within limits?

### 2. Define SLIs and SLOs

For each critical service or journey define:

- population and boundary;
- successful event;
- valid total event;
- latency or freshness threshold;
- measurement window;
- data source and exclusions;
- target and error budget;
- owner and response policy.

An SLO is an internal reliability objective. Distinguish it from a contractual SLA.

### 3. Design telemetry

Use:

- metrics for aggregated behavior and saturation;
- logs for structured events and diagnostic context;
- traces for request paths and dependency latency;
- domain or audit events for business state and consequential actions;
- profiles where runtime resource behavior needs diagnosis.

### 4. Establish correlation and context

Use stable request, trace, operation, release, tenant, and sanitized user or session identifiers where lawful. Propagate correlation across asynchronous boundaries and third-party interactions where possible.

### 5. Design dashboards and exploration

Provide audience-specific views for user journey, service health, dependencies, saturation, release comparison, data quality, security, and cost. Dashboards support known questions; retain exploratory access for unknown failure modes.

### 6. Design alerts

Alert on actionable user impact, SLO burn, security signal, data failure, capacity risk, or control breach. Define owner, severity, routing, deduplication, silence, escalation, runbook, and review.

### 7. Protect telemetry

Minimize sensitive content, control access, encrypt transport and storage, set retention and deletion, prevent secret capture, manage high-cardinality fields, and audit privileged use.

### 8. Validate

Test telemetry during normal, dependency failure, partial failure, overload, security, data-quality, deployment, rollback, and recovery scenarios. Confirm responders can answer the defined questions.

### 9. Operate and improve

Track missing telemetry, noisy alerts, false negatives, dashboard use, telemetry delay, cost, and incident learning. Assign instrumentation and runbook debt to owners.

## Observability record

| Field | Definition |
|---|---|
| Service, journey, or control | Observable boundary and owner |
| Decision questions | User, reliability, security, data, capacity, or cost |
| SLI and SLO | Formula, population, window, source, target, and policy |
| Signals | Metrics, logs, traces, events, and profiles |
| Correlation | Request, trace, tenant, release, and operation context |
| Dashboard and exploration | Audience and use |
| Alert and escalation | Threshold, owner, route, severity, and runbook |
| Data handling | Classification, access, retention, deletion, and masking |
| Cost and cardinality | Budget, limits, sampling, and owner |
| Validation and review | Failure tests, evidence, and trigger |

## SLI catalog

| SLI ID | Service or journey | Good event | Valid total | Window | Source | SLO | Owner |
|---|---|---|---|---|---|---|---|
| SLI-001 | Not established | Not established | Not established | Not established | Not provided | Not established | Not assigned |

## Decision rules

- Instrument user and business impact, not only infrastructure health.
- A dashboard is not observability if teams cannot ask new questions.
- Alert only when a human or safe automation can take a defined action.
- Averages do not replace distributions, percentiles, or segmented impact.
- Logs must not contain secrets, credentials, unnecessary personal data, or full sensitive payloads.
- High cardinality and unlimited retention create reliability, privacy, and cost risk.
- Monitoring success in a test environment does not prove production signal quality.
- Telemetry changes are versioned and reviewed like other production behavior.

## Outputs

- decision questions, SLI/SLO catalog, and error-budget policy;
- telemetry, correlation, dashboard, alert, runbook, and escalation design;
- privacy, security, retention, cardinality, and cost controls;
- failure-scenario validation and observability debt;
- inputs to DoD, release readiness, incident response, scaling, and improvement.

## Quality checks

- Critical user journeys and services have owners and signals.
- SLIs define good, valid total, population, window, source, and exclusions.
- Alerts are actionable and routed.
- Correlation crosses material boundaries.
- Sensitive data, retention, cardinality, and cost are controlled.
- Failure and recovery telemetry is tested.

## Common mistakes

- collecting logs without decision questions;
- alerting on every technical threshold;
- measuring only host or container health;
- storing full sensitive payloads;
- creating dashboards with no owner or response.

## Related modules

- [System context](system-context.md)
- [Cloud and infrastructure](cloud-and-infrastructure.md)
- [Security](security.md)
- [Scalability](scalability.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Incident metrics and control](../metrics/incident-metrics.md)
