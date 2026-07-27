---
title: Client Project Kickoff Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/intake.md
  - ../lifecycle/delivery-setup.md
related:
  - ../business-analysis/stakeholder-analysis.md
  - ../lifecycle/roadmap.md
  - ../delivery/reporting.md
  - scope-change.md
---

# Client Project Kickoff Playbook

## Purpose

Convert a commercial or internal authorization into shared execution control by reconciling promises with evidence, establishing governance and working agreements, and exposing missing discovery before work starts.

## When to use

Use after an engagement, project, phase, or vendor relationship is authorized and before controlled delivery begins. Kickoff does not replace discovery, solution validation, or G5.

## Inputs

- proposal, contract, statement of work, order, or authorization;
- client request, discovery, scope, requirements, solution, estimate, roadmap, and assumptions;
- commercial constraints, acceptance, invoicing, change, security, privacy, and compliance terms;
- client and delivery stakeholders, roles, calendars, access, systems, and dependencies.

## Workflow

### 1. Preserve authorization and commitments

Record authoritative documents, versions, signatories, dates, scope, exclusions, deliverables, acceptance, target windows, budget boundaries, dependencies, and client obligations.

### 2. Reconcile sales-to-delivery evidence

Compare promises with current discovery, requirements, solution, estimate, capacity, and risks. Classify differences as ambiguity, assumption, conflict, missing evidence, or approved commitment.

### 3. Establish stakeholders and decisions

Use [stakeholder analysis](../business-analysis/stakeholder-analysis.md) to name sponsor, product, delivery, technical, data, security, privacy, legal, finance, acceptance, and escalation authorities on both sides.

### 4. Confirm outcome and scope

Restate the business outcome, user value, deliverables, in/out boundary, acceptance path, and change process. Route unresolved product or technical questions to the correct lifecycle stage.

### 5. Validate the plan

Review estimates, capacity, calendars, dependencies, milestones, release assumptions, client inputs, approvals, environments, and confidence. Keep contract dates, targets, and current forecasts distinct.

### 6. Establish operating model

Use [delivery setup](../lifecycle/delivery-setup.md) for workflow, work hierarchy, DoR, DoD, cadence, reporting, decision log, risk and dependency control, systems of record, access, and escalation.

### 7. Prepare access and onboarding

Define least-privilege access, environments, repositories, tools, data, communication channels, documentation, security onboarding, and revocation ownership. Never exchange secrets through kickoff records.

### 8. Run the kickoff decision

Present reconciled facts, remaining assumptions, decisions, actions, risks, and G5 evidence. Meeting attendance is not approval; capture explicit owners and decisions.

### 9. Publish and follow through

Publish the controlled kickoff record, update systems of record, resolve near-term actions, and recheck readiness before work crosses the agreed start point.

## Kickoff record

| Area | Required evidence |
|---|---|
| Authorization | Contract or mandate, version, effective date, and authorities |
| Outcomes and success | Business and product outcomes, metric IDs, and owners |
| Scope and acceptance | Deliverables, exclusions, baselines, acceptance, and change route |
| Plan and commercials | Targets, forecast, budget boundary, invoicing or funding, and assumptions |
| Governance | Decision rights, escalation, cadence, reporting, and systems of record |
| Delivery model | Workflow, DoR, DoD, roles, capacity, and quality controls |
| Client obligations | Inputs, access, review, approvals, dependencies, and need-by points |
| Trust and operations | Security, privacy, compliance, environments, release, and support |
| Readiness | G5 result, exceptions, authority, expiry, and first control point |

## Decision rules

- Commercial approval does not prove product, solution, or delivery readiness.
- Contract language and current delivery evidence remain distinct when they conflict.
- Do not silently absorb new commitments during kickoff.
- Client-supplied dates and budgets are constraints until feasibility is evidenced.
- Access follows least privilege, named ownership, expiry, and revocation.
- Unresolved D2 or D3 choices require explicit accountable approval.

## Outputs

- reconciled commitment and evidence record;
- named governance, decision, acceptance, and escalation authorities;
- controlled operating model and systems of record;
- G5 result with exceptions and actions;
- shared first reporting and decision cadence.

## Quality checks

- Sales, contract, and delivery interpretations were reconciled.
- Client and supplier responsibilities are explicit.
- Targets, commitments, and forecasts are not conflated.
- Scope and acceptance have controlled baselines.
- Access, data, trust, and release responsibilities are owned.
- Kickoff decisions are explicit rather than inferred.

## Related modules

- [Project intake](../lifecycle/intake.md)
- [Stakeholder analysis](../business-analysis/stakeholder-analysis.md)
- [Delivery setup](../lifecycle/delivery-setup.md)
- [Delivery reporting](../delivery/reporting.md)
- [Scope change](scope-change.md)
