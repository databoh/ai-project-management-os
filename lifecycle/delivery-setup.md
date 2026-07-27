---
title: Delivery Setup
type: lifecycle-workflow
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - roadmap.md
  - ../core/quality-gates.md
related:
  - ../delivery/scrum.md
  - ../delivery/kanban.md
  - ../delivery/hybrid.md
  - ../delivery/workflow-statuses.md
  - ../delivery/reporting.md
  - ../metrics/metric-dictionary.md
  - ../metrics/delivery-metrics.md
---

# Delivery Setup

## Purpose

Establish the minimum explicit operating model, workspace, ownership, workflow, quality policies, cadence, reporting, and escalation needed to begin controlled execution.

## When to use

Use before a team starts executing a new initiative, when onboarding or restructuring a team, when moving tools, or when an existing project lacks reliable flow and governance. Tailor depth to risk, team size, and delivery horizon.

## Inputs

- approved plan, scope, roadmap, milestones, and release direction;
- requirement, backlog, WBS, acceptance, and traceability baselines;
- team roles, allocation, capacity, locations, skills, and working calendars;
- dependency, risk, environment, compliance, security, and support needs;
- existing organizational policies, tools, integrations, and governance;
- stakeholder communication and decision requirements.

## Workflow

### 1. Define delivery context

State product or project type, uncertainty, work arrival pattern, release constraints, team stability, external governance, and required evidence. Identify the G5 decision owner.

### 2. Select the operating method

Choose:

- [Scrum](../delivery/scrum.md) for a stable cross-functional team working toward Sprint Goals in a fixed cadence;
- [Kanban](../delivery/kanban.md) for continuous or variable flow requiring explicit pull and WIP control;
- [hybrid delivery](../delivery/hybrid.md) when different work systems or governance layers must interact.

Document why the method fits and what evidence will trigger a change.

### 3. Define accountability

Name product, delivery, technical, quality, security, data, operational, release, and stakeholder decision owners as applicable. Avoid shared accountability without a final decision owner.

### 4. Configure the work model

Select the hierarchy, work-item types, [workflow statuses](../delivery/workflow-statuses.md), required fields, links, blocked policy, priority authority, and change-control route. Keep authoritative requirements and decisions linked rather than copied.

### 5. Establish readiness and completion

Adopt a proportionate [Definition of Ready](../delivery/definition-of-ready.md), [Definition of Done](../delivery/definition-of-done.md), acceptance criteria, review responsibilities, and exception authority.

### 6. Define planning and flow policies

Record planning horizon, replenishment or Sprint policy, WIP limits, capacity allocation, expedite rules, dependency handling, release cadence, and work-aging thresholds.

### 7. Establish ceremonies and decisions

Select only the [ceremonies](../delivery/ceremonies.md) that produce needed decisions, coordination, inspection, or adaptation. Define purpose, owner, inputs, outputs, and timebox.

### 8. Establish reporting and escalation

Adopt [reporting](../delivery/reporting.md) with metric definitions, forecast-versus-target rules, RAG thresholds, decision logs, audience, cadence, and escalation paths.

### 9. Configure tools

Implement the canonical model in [Jira](../tools/jira.md), [ClickUp](../tools/clickup.md), or another approved system. Tool configuration must follow the operating model rather than define it implicitly.

### 10. Pilot and assess G5

Run a short pilot or workflow walkthrough. Verify ownership, state transitions, access, automation, dashboards, quality policies, reporting, and escalation before starting controlled execution.

## Operating-model record

| Field | Definition |
|---|---|
| Model ID, version, and owner | Controlled operating-model identity |
| Delivery context and method | Scrum, Kanban, hybrid, or justified alternative |
| Team and accountability | Roles, authority, capacity, and calendars |
| Work hierarchy and item types | Product, project, delivery, defect, risk, and decision records |
| Workflow and policies | States, transitions, WIP, blocked, expedite, and change rules |
| Readiness and completion | DoR, DoD, acceptance, quality, and exception handling |
| Cadence and ceremonies | Planning, coordination, review, improvement, and governance |
| Tools and integrations | Systems of record, permissions, automation, and ownership |
| Reporting and escalation | Metrics, audiences, thresholds, paths, and cadence |
| Release and operational interface | Readiness, deployment, support, and incident handoff |
| Review triggers | Evidence that requires operating-model adaptation |

## G5 delivery readiness

| Criterion | Result | Evidence or gap | Owner | Resolution point |
|---|---|---|---|---|
| Ownership and decision authority | Not assessed | Not provided | Delivery owner | Before execution |
| Work hierarchy, workflow, and policies | Not assessed | Not provided | Workflow owner | Before execution |
| Acceptance, DoR, and DoD | Not assessed | Not provided | Product and quality owners | Before execution |
| Capacity, WIP, and dependency handling | Not assessed | Not provided | Delivery owner | Before execution |
| Environments, access, tools, and automation | Not assessed | Not provided | Technical owner | Before execution |
| Ceremonies, reporting, and escalation | Not assessed | Not provided | Delivery owner | Before execution |
| Change, release, and operational interfaces | Not assessed | Not provided | Governance owner | Before execution |

**G5 decision:** Pending assessment
**Unresolved setup exceptions:** None recorded
**Delivery-readiness authority:** Not established
**Model baseline:** Not established

## Decision rules

- Choose the operating method from work characteristics, not organizational fashion.
- A tool workflow is not an operating model unless policies, ownership, and evidence are explicit.
- Do not create a status, field, meeting, or report without a decision or control purpose.
- Readiness policies expose risk; they must not become a queue for unowned decisions.
- Quality and trust work stays inside the delivery system.
- Metrics support inspection and decisions; they must not rank individuals.
- G5 exceptions require an owner, impact, expiry, and authorized acceptance.
- Reassess the model when flow, quality, team, product, or governance conditions materially change.

## Outputs

- approved delivery operating model;
- configured work hierarchy, workflow, roles, policies, tools, and access;
- DoR, DoD, ceremonies, reporting, and escalation model;
- completed G5 assessment and exception record;
- controlled handoff into execution and release management.

## Quality checks

- Method selection is evidence-based.
- Decision rights and systems of record are explicit.
- Workflow, WIP, quality, and change policies are testable.
- Tools implement the canonical model consistently.
- Reporting distinguishes actual, forecast, target, risk, and decision.
- G5 approval and remaining exceptions are visible.

## Related modules

- [Scrum](../delivery/scrum.md)
- [Kanban](../delivery/kanban.md)
- [Hybrid delivery](../delivery/hybrid.md)
- [Workflow statuses](../delivery/workflow-statuses.md)
- [Reporting](../delivery/reporting.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Delivery metrics](../metrics/delivery-metrics.md)
