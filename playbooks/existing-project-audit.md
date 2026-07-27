---
title: Existing Project Audit Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/workflow-router.md
  - ../lifecycle/overview.md
related:
  - ../core/evidence-policy.md
  - ../delivery/reporting.md
  - ../metrics/delivery-metrics.md
  - delayed-project-recovery.md
---

# Existing Project Audit Playbook

## Purpose

Establish an evidence-based current state, identify contradictions and control gaps, locate the next material decision, and recommend the smallest recovery sequence without restarting useful work or trusting documentation blindly.

## When to use

Use for inherited products, due diligence, delivery-health review, troubled engagements, vendor transition, leadership change, undocumented systems, or a request to assess an existing repository, backlog, roadmap, or operating product.

## Inputs

- audit mandate, audience, authority, scope, timebox, and access;
- product, business, user, requirements, architecture, delivery, quality, release, operational, incident, financial, and AI records;
- repositories, configuration, work systems, telemetry, dashboards, contracts, and decision history;
- stakeholder interviews and observed work.

## Workflow

### 1. Define the audit decision

State why the audit exists, what may be inspected, decisions it must support, evidence cut-off, confidentiality, independence, and what is explicitly out of scope.

### 2. Build the evidence inventory

Record artifact or system, owner, version, date, authority, freshness, completeness, and access limitation. Reuse trustworthy evidence and mark unsupported claims.

### 3. Reconstruct the intended system

Map goals, outcomes, users, scope, requirements, architecture, plan, delivery model, release, metrics, and decision rights from authoritative records.

### 4. Observe the actual system

Inspect product behavior, code and configuration, environments, data flows, telemetry, backlog, workflow history, quality evidence, releases, incidents, support, cost, and team practices where authorized.

### 5. Compare intent with reality

Identify missing, stale, contradictory, duplicated, unapproved, or ineffective controls. Distinguish documentation gap from actual capability gap.

### 6. Assess by decision domain

| Domain | Audit question |
|---|---|
| Product and business | Are problem, users, outcomes, value, scope, and success evidence current? |
| Requirements and traceability | Can approved needs be traced to work, tests, release, and measures? |
| Architecture and data | Are boundaries, decisions, dependencies, trust, scale, recovery, and debt visible? |
| Delivery and forecast | Are workflow, capacity, flow, path, milestones, dependencies, and forecasts reliable? |
| Quality and release | Do acceptance, DoD, test, security, migration, rollback, and G6 controls work? |
| Operations and incidents | Are SLOs, telemetry, support, incident control, recovery, and learning effective? |
| Metrics and economics | Are definitions governed and do measures support decisions without gaming? |
| AI overlay | If applicable, are use, evaluation, guardrails, permissions, cost, and observability controlled? |
| Governance and people | Are authority, ownership, communication, capability, workload, and escalation sustainable? |

### 7. Validate findings

Triangulate material findings across records, system evidence, and affected roles. Give owners a factual-correction path without allowing unsupported objections to erase evidence.

### 8. Prioritize recovery

Order actions by immediate harm, irreversible risk, blocked decisions, outcome impact, dependency, effort range, and learning value. Separate containment, stabilization, restoration, and improvement.

### 9. Route to the next gate

Name the current lifecycle stage actually supported by evidence, failed or conditional gates, decisions required, and the smallest recovery increment.

## Finding record

| Field | Required content |
|---|---|
| Finding ID and domain | Stable reference and owning area |
| Statement and classification | Confirmed fact, inconsistency, risk, issue, or recommendation |
| Evidence | Sources, dates, method, and limitations |
| Expected control | Authoritative requirement, policy, decision, or stated intent |
| Actual condition | Observed behavior or absence |
| Impact and urgency | User, business, delivery, technical, trust, or operational effect |
| Recommendation | Options, dependencies, effort range, and confidence |
| Owner and decision | Accountable authority, status, and follow-up |

## Decision rules

- Missing documentation does not prove missing capability; inspect behavior.
- Existing documentation is evidence, not automatically fact or approval.
- Do not rate health with colors or scores lacking explicit criteria.
- Protect active users and production before improving documentation.
- Preserve dissent, access limitations, and unavailable evidence.
- Recovery recommendations remain proposals until approved.

## Outputs

- evidence and system inventory;
- intended-versus-actual assessment;
- prioritized findings, risks, contradictions, and missing decisions;
- lifecycle and gate assessment;
- containment and recovery roadmap with owners and confidence.

## Quality checks

- Audit scope, cut-off, access, and limitations are explicit.
- Findings distinguish fact from interpretation and recommendation.
- Material claims use multiple evidence paths where practical.
- Product, technical, delivery, operational, and governance views are connected.
- Priorities reflect impact and dependency rather than documentation neatness.
- The next gate and accountable decisions are named.

## Related modules

- [Evidence policy](../core/evidence-policy.md)
- [Lifecycle overview](../lifecycle/overview.md)
- [Delivery reporting](../delivery/reporting.md)
- [Delivery metrics](../metrics/delivery-metrics.md)
- [Delayed project recovery](delayed-project-recovery.md)
