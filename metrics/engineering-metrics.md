---
title: Engineering Metrics
type: measurement-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
related:
  - dora-metrics.md
  - incident-metrics.md
  - ../architecture/observability.md
  - ../architecture/scalability.md
  - ../architecture/security.md
---

# Engineering Metrics

## Purpose

Measure whether the engineering system can deliver, operate, protect, and evolve valuable software sustainably, using balanced service, quality, security, maintainability, delivery, and developer-experience evidence.

## When to use

Use for engineering strategy, architecture and platform decisions, reliability and quality improvement, technical-debt prioritization, capacity allocation, operational review, and investment validation. Measure systems and teams in context, not individual activity.

## Inputs

- product outcomes, service boundaries, architecture drivers, and critical journeys;
- SLOs, performance, scalability, recovery, security, privacy, and compliance requirements;
- repositories, pipelines, deployments, tests, defects, vulnerabilities, incidents, telemetry, and support data;
- engineering workflow, ownership, team topology, platform, environments, and dependencies;
- developer research, task evidence, cognitive load, waiting, rework, and toil;
- known instrumentation, attribution, selection, and survivorship limitations.

## Workflow

### 1. Define the engineering decision

Name the capability, service, risk, bottleneck, or investment decision and the expected product or operational effect. Avoid collecting measures merely because tools expose them.

### 2. Establish the measurement boundary

Define application, service, platform, repository, team-owned system, environment, change type, user population, and time window. Map shared ownership and external dependencies.

### 3. Select a balanced view

Choose evidence across:

- user-facing reliability and performance;
- functional and data quality;
- security and control health;
- change throughput and instability;
- maintainability and technical risk;
- developer task effectiveness and sustainable workload;
- cost, capacity, and environmental constraints where material.

### 4. Prefer outcomes over activity

Measure successful change, service behavior, escaped failure, recovery, task completion, wait, and rework. Lines changed, commits, tickets, hours online, or tool events are diagnostic at most and must not become individual productivity targets.

### 5. Validate data and attribution

Reconcile service, deployment, incident, defect, test, vulnerability, and ownership records. Handle bots, generated changes, monorepos, rollups, shared services, missing links, and changes spanning multiple deployments.

### 6. Establish baseline and guardrails

Use distributions and segments for change type, service, severity, environment, and team context. Protect quality, safety, reliability, wellbeing, and customer outcomes from local optimization.

### 7. Investigate and improve

Use the measures to select a system constraint or hypothesis, change one or a controlled set of capabilities, and observe outcomes. Combine quantitative evidence with engineering and user research.

## Engineering measurement map

| Area | Decision question | Evidence family | Required boundary |
|---|---|---|---|
| Reliability | Does the service meet user-facing promises? | SLI/SLO attainment, error-budget use, availability, latency, and recovery | Service, population, good event, window, and exclusions |
| Performance and scale | Can critical journeys meet demand efficiently? | Latency distribution, saturation, throughput, queue, capacity, and cost | Load scenario, percentile, topology, and limit |
| Quality | Does change preserve required behavior? | Escaped defects, recurrence, test signal, data quality, and rework | Severity, detection stage, release, denominator, and aging |
| Security | Are material exposures and controls managed? | Vulnerability exposure, remediation, control coverage, and security events | Asset, severity authority, exposure window, and exception |
| Delivery performance | Can the system change safely and quickly? | Approved DORA measures | Application or service, production boundary, and change linkage |
| Maintainability | Can teams understand and change the system responsibly? | Change risk, dependency health, ownership, hotspots, and maintenance effort | Repository or service, evidence method, and context |
| Developer effectiveness | Can engineers complete important tasks sustainably? | Task success, wait, rework, cognitive load, satisfaction, and toil | Task, sampled population, privacy, and qualitative context |
| Engineering economics | Does engineering investment produce responsible outcomes? | Service or change cost, unit cost, capacity, and avoided impact | Full cost, outcome unit, attribution, and guardrails |

## Engineering metric record

| Field | Required content |
|---|---|
| Engineering objective | Capability, risk, constraint, or service outcome |
| System boundary | Services, environments, repositories, owners, and dependencies |
| Balanced measures | Outcome, input, guardrail, diagnostic, and control metric IDs |
| Segments | Service, change, severity, environment, team context, and approved slices |
| Evidence limitations | Attribution, missing links, generated work, shared systems, and bias |
| Improvement hypothesis | Capability change, expected effect, horizon, and counter-signals |
| Review | Decision, action, owner, follow-up, and learning |

## Decision rules

- Do not use code volume, commit count, ticket count, story points, or hours as individual productivity measures.
- Test count and coverage percentage do not prove test effectiveness or risk coverage.
- Defect counts require severity, exposure, detection opportunity, and release or usage context.
- Vulnerability counts require asset criticality, exploitability or severity method, exposure, and exception status.
- Reliability measures should reflect user impact rather than host health alone.
- Developer sentiment needs qualitative evidence and cannot be reduced to one score.
- A local improvement is not successful if it shifts toil, risk, delay, or cost elsewhere.

## Outputs

- balanced engineering measurement map and contracts;
- service, quality, security, maintainability, DevEx, and cost evidence;
- validated baselines, guardrails, and improvement hypotheses;
- engineering-health review and investment decisions;
- data gaps, risks, actions, and owners.

## Quality checks

- Measures connect engineering behavior to product or operational outcomes.
- Boundaries and ownership reflect real systems and dependencies.
- Quality, stability, speed, safety, sustainability, and cost are balanced.
- Activity measures do not become individual performance proxies.
- Distributions and critical segments remain visible.
- Improvement decisions include guardrails and follow-up.

## Common mistakes

- ranking engineers by commits or tickets;
- rewarding test coverage without defect-detection evidence;
- combining unlike services into one benchmark;
- measuring vulnerabilities without exposure and ownership;
- optimizing deployment speed while ignoring instability.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [DORA metrics](dora-metrics.md)
- [Incident metrics](incident-metrics.md)
- [Observability](../architecture/observability.md)
- [Scalability](../architecture/scalability.md)
