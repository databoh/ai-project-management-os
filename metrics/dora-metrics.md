---
title: DORA Metrics
type: measurement-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
related:
  - engineering-metrics.md
  - flow-metrics.md
  - incident-metrics.md
  - ../delivery/release-management.md
---

# DORA Metrics

## Purpose

Apply the current DORA software-delivery performance model with reproducible application or service boundaries, linked deployment and incident evidence, and improvement-oriented interpretation.

## When to use

Use to understand how safely, quickly, and efficiently software changes reach production for one application or service. Do not use DORA measures as individual targets, universal maturity scores, or substitutes for product outcomes, reliability SLOs, engineering quality, or team context.

## Evidence basis

This module uses the official [DORA software-delivery performance metrics](https://dora.dev/guides/dora-metrics/) observed on 2026-07-23. The current model contains five measures grouped as software-delivery throughput and instability. Recheck the source when DORA definitions change and version local contracts deliberately.

## Inputs

- application or service boundary, production environment, users, and owning team;
- version-control commits, change identifiers, pipelines, releases, deployments, and timestamps;
- production impairment, rollback, hotfix, fix-forward, patch, incident, and recovery records;
- planned versus unplanned deployment classification and causal linkage;
- deployment strategies, batch behavior, generated changes, shared services, and data-quality limitations.

## Current five-measure model

| Factor | Measure | Canonical boundary |
|---|---|---|
| Throughput | Change lead time | Elapsed time from code committed to version control until that change is successfully deployed to production |
| Throughput | Deployment frequency | Number of production deployments during a period or elapsed time between them |
| Throughput | Failed deployment recovery time | Elapsed time from a production deployment causing impairment that requires immediate intervention until service recovery |
| Instability | Change fail rate | Production deployments requiring immediate intervention divided by eligible production deployments |
| Instability | Deployment rework rate | Unplanned production deployments made because of a production incident divided by eligible production deployments |

The DORA factor grouping is preserved as source-defined. Keep general incident recovery and reliability measures separate from failed deployment recovery.

## Workflow

### 1. Define the service boundary

Name one application or service, owning group, users, production environments, deployment unit, observation period, and included change types. Explain shared-service and multi-component behavior.

### 2. Build change lineage

Link commit or change, build artifact, deployment, environment, release, incident, remediation deployment, and recovery. Record gaps rather than estimating missing lineage silently.

### 3. Define deployment

Specify what counts as a production deployment, how partial, progressive, configuration, infrastructure, data, model, mobile, failed-before-exposure, and rollback events are handled, and how duplicates are prevented.

### 4. Define change failure

Specify user or service impairment and the immediate intervention that qualifies a deployment as failed. Link rollback, hotfix, fix forward, patch, or other remediation to the originating deployment.

### 5. Define planned and rework deployment

Classify whether a deployment was planned delivery or unplanned remediation caused by a production incident. Preserve mixed-purpose and uncertain cases explicitly.

### 6. Calculate distributions and rates

Report lead and recovery time distributions, deployment frequency or interval, and rate numerators and denominators. Segment by service and relevant change class without hiding small samples.

### 7. Validate

Reconcile version control, CI/CD, deployment, release, feature-management, and incident sources. Sample causal links and investigate missing commits, manual releases, squashed changes, and shared remediation.

### 8. Improve the system

Use the five measures together with reliability, quality, product outcomes, batch size, work flow, architecture, and qualitative evidence to select a constraint and test an improvement.

## DORA metric contract

| Measure | Numerator or start | Denominator or end | Required exclusions and treatment |
|---|---|---|---|
| Change lead time | Eligible change committed | Same change successfully in production | Merge or commit policy, batch mapping, abandoned changes, time basis, and distribution |
| Deployment frequency | Eligible production deployments | Observation period or interval | Deployment unit, environments, retries, progressive steps, and duplicate events |
| Failed deployment recovery time | Failed deployment impairment start | Service recovery under defined criteria | Detection lag, partial recovery, recurrence, unresolved events, and distribution |
| Change fail rate | Eligible deployments requiring immediate intervention | All eligible production deployments | Failure window, causal link, mixed changes, zero denominator, and restatement |
| Deployment rework rate | Eligible unplanned incident-remediation deployments | All eligible production deployments | Planned work, mixed-purpose releases, incident link, and classification authority |

## DORA review record

| Field | Required content |
|---|---|
| Application or service | Boundary, owner, production, users, and dependencies |
| Definition version | Local contract version and official-source observation date |
| Observation | Period, sample, five results, distributions, and confidence |
| Data quality | Linkage coverage, manual events, missingness, and bias |
| Context | Batch, architecture, regulation, release, operating, and demand conditions |
| Improvement | Constraint, hypothesis, action, guardrails, owner, and follow-up |

## Decision rules

- Use the current five measures; do not label a historical four-key implementation current without qualification.
- Failed deployment recovery time is narrower than general incident recovery time and begins with a deployment-caused impairment.
- Measure one application or service at a time before any justified aggregation.
- Industry benchmarks are orientation evidence, not arbitrary local targets.
- Speed and stability measures must be reviewed together.
- A deployment count is not value, and a high frequency is not a goal independent of safe outcomes.
- DORA measures must not rank individuals or reward manipulation of commit, deployment, or incident records.

## Outputs

- five governed DORA metric contracts;
- validated change, deployment, failure, rework, and recovery lineage;
- application or service baseline, distributions, rates, and data-quality limits;
- balanced improvement hypothesis and guardrails;
- definition version and source review trigger.

## Quality checks

- The application, production, change, deployment, failure, and recovery boundaries are explicit.
- Numerators, denominators, start and end events are reproducible.
- Failed deployments and rework are causally linked and consistently classified.
- Distributions and data-quality gaps accompany summary values.
- All five measures are interpreted with reliability and outcome context.
- The measures improve systems rather than evaluate people.

## Common mistakes

- calling all incident recovery time a DORA measure;
- comparing services with incompatible deployment units;
- counting pipeline runs as production deployments;
- hiding failed deployments by reclassifying rollbacks;
- targeting frequency without quality and stability.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [Engineering metrics](engineering-metrics.md)
- [Flow metrics](flow-metrics.md)
- [Incident metrics](incident-metrics.md)
- [Release planning](../delivery/release-management.md)
