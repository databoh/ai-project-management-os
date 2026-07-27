---
title: Production Release Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../delivery/release-management.md
  - ../core/quality-gates.md
related:
  - ../delivery/definition-of-done.md
  - ../architecture/observability.md
  - ../metrics/incident-metrics.md
  - incident-response.md
---

# Production Release Playbook

## Purpose

Authorize, execute, observe, recover, and close a production release using verified scope, quality, trust, migration, deployment, communication, support, and outcome evidence.

## When to use

Use for production deployments, feature exposure, model changes, data migrations, infrastructure changes, public launches, mobile releases, or operational changes that can affect real users, data, money, compliance, or service behavior.

## Authority boundary

The agent may assemble readiness evidence, identify gaps, draft a runbook, and recommend go, conditional go, delay, rollback, or stop. Named human release, product, engineering, operations, security, privacy, compliance, and business authorities approve consequential production action and residual risk.

## Inputs

- baselined release record, scope, exclusions, requirements, ADRs, and traceability;
- Done and test evidence, defects, security, privacy, compliance, accessibility, and approvals;
- deployment, configuration, migration, feature, compatibility, rollback or forward-recovery plans;
- environments, access, backups, restore evidence, observability, SLOs, alerts, runbooks, support, and incident readiness;
- audience, communication, documentation, training, cohorts, metrics, guardrails, and stop conditions.

## Workflow

### 1. Confirm release identity and boundary

Record release ID and version, artifacts, environment, audience, included and excluded changes, configuration, flags, data or model versions, and authoritative owner.

### 2. Assemble G6 evidence

Evaluate every applicable [G6](../core/quality-gates.md) criterion. Link evidence rather than relying on verbal confidence. Conditional exceptions require owner, authority, expiry, exposure, and follow-up.

### 3. Validate deployment and recovery

Walk through sequence, commands or automation, permissions, dependencies, prechecks, backups, migration, verification, pause points, rollback feasibility, forward recovery, data consequences, and time limits in the relevant environment.

### 4. Validate observation and response

Confirm critical user and service signals, dashboards, alerts, logs and traces, data quality, security events, business measures, thresholds, owners, runbooks, support, and incident command.

### 5. Define rollout

Select internal, shadow, pilot, canary, cohort, percentage, region, tenant, flag, or general exposure. Define entry, observation window, expansion, hold, stop, rollback, and completion criteria.

### 6. Make the go/no-go decision

Present readiness, gaps, changes since evidence collection, current incidents, dependencies, forecast, and decision options. Record explicit authority and conditions.

### 7. Execute with control

Use named operators and communication channel, preserve timestamps and actions, verify preconditions, apply the controlled version, and stop on unapproved variance.

### 8. Verify technically and functionally

Confirm deployment state, configuration, schema or data, critical journeys, permissions, integrations, telemetry, performance, and recovery signals before expanding.

### 9. Observe and decide

Compare current signals with baselines and thresholds. Expand, hold, mitigate, rollback, fix forward, or declare an incident through authorized criteria.

### 10. Close and hand off

Record final exposure, evidence, incidents, defects, exceptions, communications, support ownership, hypercare horizon, cleanup, flag lifecycle, and product-outcome review.

## G6 release decision

| Area | Result | Evidence or gap | Owner | Decision |
|---|---|---|---|---|
| Approved scope and Done evidence | Not assessed | Not provided | Product and quality owners | Pending |
| Security, privacy, compliance, and accessibility | Not assessed | Not provided | Control owners | Pending |
| Data, migration, compatibility, and recovery | Not assessed | Not provided | Technical owners | Pending |
| Deployment, environment, and access | Not assessed | Not provided | Release owner | Pending |
| Observability, support, and incident readiness | Not assessed | Not provided | Operations owner | Pending |
| Communication, training, and documentation | Not assessed | Not provided | Business owner | Pending |
| Rollout, guardrails, stop, and rollback | Not assessed | Not provided | Release authority | Pending |

## Decision rules

- A completed ticket set is not release readiness.
- The release plan does not authorize production action.
- Destructive migration may require forward recovery rather than fictional rollback.
- Backup existence is insufficient without relevant restore evidence.
- Feature flags require permission, observability, fallback, and removal ownership.
- Do not expand exposure while mandatory signals are blind.
- Production changes outside the approved boundary trigger stop and reassessment.

## Outputs

- explicit G6 decision and release log;
- deployed and verified controlled version or documented no-go;
- rollout, observation, stop, rollback, and recovery evidence;
- communication, support, incident, and hypercare handoff;
- outcome review and cleanup actions.

## Quality checks

- Release identity and included configuration are reproducible.
- Evidence covers user behavior, data, trust, operations, and recovery.
- Go/no-go authority is explicit.
- Rollout and stop conditions are measurable.
- Operators can contain and recover within current assumptions.
- Closure retains exceptions and post-release ownership.

## Related modules

- [Release planning](../delivery/release-management.md)
- [Quality gates](../core/quality-gates.md)
- [Definition of Done](../delivery/definition-of-done.md)
- [Observability](../architecture/observability.md)
- [Incident response](incident-response.md)
