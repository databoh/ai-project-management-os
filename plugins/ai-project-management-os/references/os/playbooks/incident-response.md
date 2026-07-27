---
title: Incident Response Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../metrics/incident-metrics.md
  - ../core/workflow-router.md
related:
  - ../architecture/observability.md
  - production-release.md
  - delayed-project-recovery.md
---

# Incident Response Playbook

## Purpose

Protect affected people, data, money, obligations, and service by establishing command, containing harm, recovering safely, communicating accurately, preserving evidence, and converting learning into controlled improvement.

## When to use

Use for suspected or confirmed production, service, data, integration, security, privacy, AI, vendor, or operational impact requiring coordinated response. Follow organization-specific emergency, legal, security, privacy, and safety procedures where they are more authoritative.

## Authority boundary

The agent may structure evidence, draft timelines and communications, surface options, and track actions. Named incident command and authorized security, privacy, legal, compliance, communications, business, and production owners make consequential containment, disclosure, customer, financial, and recovery decisions.

## Immediate priorities

1. Protect people, data, money, rights, and safety.
2. Stop or contain continuing harm.
3. Establish accountable incident command and communication.
4. Preserve evidence and reversible recovery options.
5. Restore the most important user capability safely.

## Workflow

### 1. Detect and declare

Record the signal, source, current time, observed impact, affected services, uncertainty, and reporter. Declare an incident at the threshold required by impact; do not wait for a confirmed cause.

### 2. Establish command

Assign incident commander, technical or functional leads, communications, scribe, and required security, privacy, legal, vendor, support, or business roles. Use one controlled incident channel and record handoffs.

### 3. Classify and escalate

Apply approved severity criteria using current impact, exposure, criticality, spread, and obligations. Preserve severity history and escalate required authorities.

### 4. Stabilize and contain

Choose the safest reversible action available: disable a capability, restrict access, isolate a component or tenant, stop automation, revoke credentials, hold a rollout, reduce load, fail over, or use fallback. Record decision, authority, expected effect, and verification.

### 5. Investigate in parallel

Build a factual timeline. Compare recent change, dependency, capacity, data, security, model, configuration, and environmental evidence. Treat cause statements as hypotheses until supported.

### 6. Communicate

Use audience-specific factual updates covering impact, current control, actions, user guidance, next update, and known uncertainty. Only authorized roles make regulatory, public, contractual, or security disclosures.

### 7. Recover

Select rollback, fix forward, restore, failover, replay, reconciliation, credential rotation, vendor action, or controlled degradation. Validate data, critical journeys, security, telemetry, and user impact before declaring recovery.

### 8. Monitor for recurrence

Observe recovery criteria and related signals for an appropriate window. Keep incident command until stability and ownership are clear.

### 9. Resolve and close

Use the explicit timeline states from [incident metrics and control](../metrics/incident-metrics.md). Closure requires evidence, communications, residual-risk ownership, and controlled learning actions.

### 10. Learn and improve

Run a blameless, evidence-based review of conditions, controls, decisions, response, recovery, and successful defenses. Update risks, requirements, architecture, tests, runbooks, metrics, release controls, and training.

## Incident command record

| Field | Current state |
|---|---|
| Incident ID, title, and status | Not established |
| Impact, affected population, and start | Not established |
| Severity and rationale | Not assessed |
| Commander and functional owners | Not assigned |
| Current containment and verification | Not established |
| Recovery criteria and current evidence | Not established |
| Security, privacy, legal, or notification status | Not assessed |
| Next decision and authority | Not established |
| Next update time or trigger | Not established |

## Update format

- **Observed impact:** confirmed facts and source time.
- **Current control:** containment, mitigation, or recovery state.
- **Actions completed:** action, owner, result, and time.
- **Actions in progress:** owner and expected decision point.
- **Known uncertainty:** hypotheses and evidence gaps.
- **User or stakeholder guidance:** approved action where applicable.
- **Next update:** relative time or material trigger.

## Decision rules

- Do not delay containment solely to preserve diagnostic evidence when material harm continues.
- Do not execute broad destructive actions without authority and target verification.
- Recovery is defined by user and control criteria, not only host or process health.
- Preserve fact, hypothesis, decision, action, and result as distinct timeline entries.
- Do not publish a root cause during active uncertainty.
- Security and privacy incidents restrict evidence access but still require a reliable record.
- Corrective releases follow controlled production authorization.

## Outputs

- incident declaration, command, severity, and factual timeline;
- containment, mitigation, recovery, and verification evidence;
- accurate stakeholder communication and notification decisions;
- incident metrics, causal analysis, and learning review;
- owned corrective actions and updated system controls.

## Quality checks

- Incident command and decision rights are explicit.
- Continuing harm is prioritized over reporting appearance.
- Actions include expected effect and verification.
- Communications separate confirmed information from uncertainty.
- Recovery covers users, data, security, and recurrence.
- Learning changes systems rather than assigning personal blame.

## Related modules

- [Incident metrics and control](../metrics/incident-metrics.md)
- [Observability](../architecture/observability.md)
- [Production release](production-release.md)
- [Delayed project recovery](delayed-project-recovery.md)
