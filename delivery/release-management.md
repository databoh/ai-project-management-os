---
title: Release Planning
type: delivery-planning-method
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/roadmap.md
  - ../project/milestone-plan.md
related:
  - dependency-management.md
  - capacity-planning.md
  - ../business-analysis/requirements-traceability.md
  - ../core/quality-gates.md
  - ../lifecycle/delivery-setup.md
  - definition-of-done.md
  - ../ai/evaluation.md
  - ../ai/observability.md
  - ../playbooks/production-release.md
---

# Release Planning

## Purpose

Define a controlled increment of approved scope and the work, evidence, dependencies, rollout, recovery, communication, support, and measurement needed to release it responsibly.

## When to use

Use when grouping requirements and deliverables into a production, market, customer, regulatory, internal, or operational release. Detailed deployment execution and G6 release readiness are completed later; Phase 5 establishes the plan and forecast.

## Inputs

- product and delivery roadmaps;
- approved or proposed scope, requirements, and traceability;
- MVP and release outcomes;
- estimates, capacity, dependencies, critical path, and milestones;
- environments, quality strategy, security, compliance, data, migration, deployment, rollback, observability, support, training, and communication needs;
- feature flag, pilot, phased rollout, or customer commitment constraints.

## Release types

- internal or operational release;
- pilot, beta, or limited availability;
- general availability;
- feature-flag or cohort rollout;
- data, platform, API, migration, or infrastructure release;
- regulatory, contractual, or customer-specific release;
- emergency corrective release.

Name the release type and its evidence standard.

## Workflow

1. Define release outcome, audience, type, and decision owner.
2. Select requirement, capability, control, migration, and operational scope by authoritative ID.
3. Confirm end-to-end coherence, exclusions, and compatibility.
4. Sequence build, integration, review, QA, security, compliance, migration, documentation, training, communication, deployment, and support readiness.
5. Validate capacity, dependencies, environments, path, and external approvals.
6. Define release entry, quality, operational, and exit criteria.
7. Select rollout, observability, fallback, rollback, and stop conditions.
8. Forecast a release window and confidence from the delivery model.
9. Link post-release outcome, adoption, reliability, support, and guardrail measures.
10. Baseline the plan and route final readiness through G6 before production action.

## Release record

| Field | Definition |
|---|---|
| Release ID, name, type, and status | `REL-###`; Proposed, Planned, Baselined, Ready, In progress, Released, Rolled back, Cancelled, or Superseded |
| Outcome and audience | Value or control achieved and affected cohort |
| Scope and exclusions | Requirement, deliverable, defect, migration, and control IDs |
| Compatibility and transition | Version, data, API, customer, and migration effects |
| Entry and exit criteria | Evidence required to start and complete the release |
| Quality and approval gates | Test, security, privacy, compliance, and business approval |
| Dependencies and critical path | Environments, vendors, decisions, capacity, and path |
| Rollout and deployment direction | Cohort, sequence, window, and ownership |
| Observability and stop conditions | Signals, thresholds, and decision authority |
| Rollback, fallback, and recovery | Feasibility, data implications, and owner |
| Communication, training, and support | Audience, timing, readiness, and escalation |
| Forecast window and confidence | Range, constraints, and assumptions |
| Outcome measurement and hypercare | Metrics, observation horizon, and owner |

## Release plan

| Workstream | Included scope or evidence | Owner | Dependencies | Forecast window | Readiness status | Exit evidence |
|---|---|---|---|---|---|---|
| Product and requirement scope | Not established | Not assigned | Not assessed | Not calculated | Not assessed | Not established |
| Quality and trust | Not established | Not assigned | Not assessed | Not calculated | Not assessed | Not established |
| Data, migration, and deployment | Not established | Not assigned | Not assessed | Not calculated | Not assessed | Not established |
| Observability and recovery | Not established | Not assigned | Not assessed | Not calculated | Not assessed | Not established |
| Communication, training, and support | Not established | Not assigned | Not assessed | Not calculated | Not assessed | Not established |
| Outcome measurement and hypercare | Not established | Not assigned | Not assessed | Not calculated | Not assessed | Not established |

## Decision rules

- Release scope includes enabling, quality, migration, operational, and support work—not only visible features.
- A release target is not a production authorization.
- Do not call a release ready before G6 evidence and accountable approval.
- Rollback may be infeasible after destructive migration; define forward recovery and acceptance authority.
- Phased rollout requires cohort rules, observation windows, stop thresholds, and ownership.
- Feature flags require lifecycle, permission, observability, and cleanup decisions.
- External communication must match the approved scope and confidence.
- A released output is not an achieved outcome until measurement supports the claim.

## Outputs

- release record and workstream plan;
- controlled scope, exclusions, sequence, and ownership;
- forecast, dependencies, capacity, path, and readiness evidence;
- rollout, observability, rollback or recovery direction;
- communication, support, hypercare, and outcome-measurement inputs;
- traceability and later G6 handoff.

## Quality checks

- Release outcome, audience, type, scope, and exclusions are explicit.
- Requirement and work IDs are traceable.
- Quality, trust, migration, operations, communication, and support are included.
- Rollout and recovery are feasible under current assumptions.
- Forecast reflects capacity, dependencies, and path.
- Production authorization remains separate from the plan.

## Common mistakes

- treating a release as a list of completed tickets;
- scheduling deployment before migration and rollback feasibility are known;
- omitting support and communication;
- using “code complete” as release readiness;
- declaring product success immediately after deployment.

## Related modules

- [Delivery roadmap](../lifecycle/roadmap.md)
- [Milestone plan](../project/milestone-plan.md)
- [Dependency management](dependency-management.md)
- [Requirements traceability](../business-analysis/requirements-traceability.md)
- [Delivery setup](../lifecycle/delivery-setup.md)
- [Definition of Done](definition-of-done.md)
- [AI evaluation](../ai/evaluation.md)
- [AI observability](../ai/observability.md)
- [Production release playbook](../playbooks/production-release.md)
