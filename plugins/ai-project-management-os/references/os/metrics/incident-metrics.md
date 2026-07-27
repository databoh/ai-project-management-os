---
title: Incident Metrics and Control
type: incident-control-method
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - metric-dictionary.md
  - ../architecture/observability.md
related:
  - engineering-metrics.md
  - dora-metrics.md
  - ../core/workflow-router.md
  - ../delivery/release-management.md
  - ../playbooks/incident-response.md
---

# Incident Metrics and Control

## Purpose

Create decision-ready incident evidence from user impact through detection, response, mitigation, recovery, resolution, learning, and recurrence without reducing operational health to one ambiguous MTTR value.

## When to use

Use for production, service, data, integration, security, privacy, AI, vendor, and operational incidents. During an active incident prioritize safety, containment, communication, and recovery; complete measurement and learning after immediate control is established.

## Authority boundary

The agent may structure a timeline, calculate defined measures, identify gaps, and draft learning actions. Named incident, service, security, privacy, legal, compliance, communications, and business authorities set severity, approve notifications and risk acceptance, and close material incidents.

## Inputs

- user, customer, business, data, safety, security, compliance, and service impact;
- telemetry, alerts, reports, tickets, communications, decisions, actions, and change records;
- service boundary, SLO, critical journey, ownership, dependencies, and support model;
- deployment, configuration, data, vendor, model, tool, and environmental changes;
- incident policy, severity criteria, notification obligations, and evidence-access controls.

## Incident timeline

Use explicit timestamps and uncertainty:

| Event | Definition |
|---|---|
| Impact start | Earliest evidenced time users, data, business, or controls were adversely affected |
| Detection | Time an actionable signal or report identified the incident |
| Acknowledgement | Time an accountable responder accepted incident ownership |
| Response start | Time coordinated investigation or containment began |
| Mitigation | Time material impact was reduced or contained, though service may remain degraded |
| Recovery | Time agreed user or service recovery criteria were satisfied |
| Resolution | Time the incident cause and required immediate remediation were addressed under the incident policy |
| Closure | Time evidence, communications, actions, ownership, and residual risk met closure criteria |

Do not infer missing times. Use earliest and latest credible bounds when evidence conflicts.

## Workflow

### 1. Declare and classify

Record incident ID, affected services and populations, impact, severity method, commander, functional owners, communication channels, and required authorities. Severity may change as evidence changes; preserve history.

### 2. Preserve evidence

Create a factual timeline with sources and access controls. Distinguish observation, hypothesis, decision, action, and result. Protect sensitive security, privacy, personnel, and customer information.

### 3. Track impact and control

Measure affected users or entities, duration, critical-journey failure, data or transaction effect, SLO consumption, financial or operational exposure, and control status as appropriate.

### 4. Track response stages

Use the defined event boundaries to calculate detection, acknowledgement, mitigation, recovery, resolution, and closure durations. Report distributions across incidents rather than only means.

### 5. Separate causal classes

Identify change-related, dependency, capacity, data, security, process, human-interface, and unknown contribution without forcing one root cause. Link deployment-caused failures to DORA evidence where applicable.

### 6. Review communication and decision flow

Assess signal actionability, routing, ownership, escalation, handoff, approval delay, stakeholder communication, and whether responders had safe tools, access, and runbooks.

### 7. Learn systemically

Identify contributing conditions, successful controls, failed controls, detection gaps, recovery constraints, and recurrence patterns. Avoid individual blame and overly simple counterfactuals.

### 8. Control actions

Give corrective and preventive actions owners, priority, due or review point, evidence of completion, risk reduction hypothesis, and validation. Track overdue and ineffective actions.

### 9. Close or route

Closure requires accountable approval, handled notifications, owned residual actions, linked risks and changes, and a follow-up measurement point. Reopen when impact recurs or evidence invalidates closure.

## Incident measurement map

| Area | Measure family | Required boundary |
|---|---|---|
| Frequency | Incident count or rate | Eligible incident, service or exposure denominator, severity, and period |
| Impact | Affected users, failed journeys, duration, data, money, or SLO effect | Population, impact rule, overlap, source, and uncertainty |
| Detection | Impact start to detection | Both event definitions, source, and incidents detectable before report |
| Acknowledgement | Detection to accountable acknowledgement | Routing, acknowledgement evidence, and coverage calendar |
| Mitigation | Impact start or detection to mitigation | Chosen start, mitigation criteria, partial impact, and recurrence |
| Recovery | Impact start or detection to recovery | Chosen start, recovery criteria, validation, and reopened impact |
| Resolution and closure | Declaration or detection to defined later state | Immediate remediation, residual work, approval, and policy |
| Recurrence | Repeated incident under an approved similarity rule | Similarity dimensions, observation horizon, and denominator |
| Learning actions | Completion, aging, validation, and effectiveness | Eligible actions, due policy, evidence, and risk-reduction result |

## Incident record

| Field | Required content |
|---|---|
| Identity and status | Incident ID, title, severity history, state, and owners |
| Scope and impact | Services, users, data, business, obligations, start, and uncertainty |
| Timeline | Detection through closure events, sources, actions, decisions, and results |
| Cause and contribution | Evidence, contributing conditions, change links, and unresolved hypotheses |
| Response and communication | Command, escalation, stakeholders, notifications, and effectiveness |
| Recovery and residual risk | Criteria, validation, remaining exposure, authority, and follow-up |
| Learning actions | Control gap, action, owner, priority, validation, and status |
| Measures | Canonical metric IDs, results, populations, exclusions, and limitations |

## Decision rules

- “MTTR” is used only when its exact event boundaries and aggregation are named; prefer the specific duration required by the decision.
- General incident recovery is not DORA failed deployment recovery unless a production deployment caused the impairment.
- Incident count alone does not measure reliability; detection and reporting capability affect observed frequency.
- Severity changes preserve history and rationale.
- Faster closure is not improvement when impact, residual risk, or actions are hidden.
- Post-incident analysis improves systems and must not become individual blame or performance ranking.
- Security, privacy, legal, and regulatory notification decisions remain with authorized humans.

## Outputs

- controlled incident record and evidence timeline;
- impact, stage-duration, recurrence, response, and learning-action metrics;
- change, deployment, service, risk, and communication links;
- corrective and preventive actions with validation;
- closure decision, residual risk, and improvement follow-up.

## Quality checks

- Impact, timeline events, severity, and uncertainty are explicit.
- Sources distinguish fact, hypothesis, decision, action, and result.
- Duration measures have stable start and end definitions.
- Impact and recurrence accompany response-speed evidence.
- Actions target system conditions and include effectiveness checks.
- Closure and notification use the correct human authority.

## Common mistakes

- reporting one undefined MTTR;
- starting every clock at ticket creation regardless of impact;
- closing an incident when service returns but risk remains unowned;
- measuring responders instead of response-system constraints;
- counting completed actions without validating risk reduction.

## Related modules

- [Metric dictionary](metric-dictionary.md)
- [Engineering metrics](engineering-metrics.md)
- [DORA metrics](dora-metrics.md)
- [Observability](../architecture/observability.md)
- [Workflow router](../core/workflow-router.md)
- [Incident response playbook](../playbooks/incident-response.md)
