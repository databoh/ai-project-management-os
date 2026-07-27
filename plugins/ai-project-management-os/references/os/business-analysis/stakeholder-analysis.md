---
title: Stakeholder Analysis
type: analysis-method
status: active
version: 0.2.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/decision-policy.md
related:
  - problem-framing.md
  - ../lifecycle/discovery.md
  - ../templates/discovery/discovery-questionnaire.md
---

# Stakeholder Analysis

## Purpose

Identify who is affected, who contributes evidence, who controls resources or constraints, and who has authority for material decisions.

## When to use

Use during intake and discovery, when decision rights are unclear, when a change affects multiple teams or external parties, and whenever stakeholder conflict can alter value, scope, risk, or delivery.

## Inputs

- project brief and problem frame;
- organization and product ownership information;
- contracts, governance, compliance, support, and operational context;
- existing stakeholder lists, decision records, and communication paths.

## Workflow

### 1. Discover stakeholders

Identify:

- requester and sponsor;
- product, delivery, budget, and technical owners;
- users, customers, operators, and support teams;
- security, privacy, legal, compliance, finance, procurement, and data owners;
- delivery teams, vendors, partners, and dependency owners;
- groups indirectly affected or underrepresented.

### 2. Classify the relationship

For each stakeholder, record role, affected outcomes, contribution, expectations, concerns, constraints, and whether they are a decision owner, approver, contributor, consulted expert, informed party, or affected group.

### 3. Establish authority

Map material decision areas to named accountable humans. Do not infer approval authority from seniority, attendance, or requester status. Resolve gaps using the [decision policy](../core/decision-policy.md).

### 4. Assess influence and impact

Assess separately:

- **influence:** ability to affect the decision or delivery;
- **impact:** degree to which the outcome affects the stakeholder;
- **stance:** supportive, neutral, concerned, opposed, or unknown;
- **engagement need:** manage closely, involve, consult, inform, or monitor.

High-impact, low-influence groups require deliberate representation rather than reduced attention.

### 5. Plan engagement

Define the information needed from or by each stakeholder, method, cadence, owner, timing, accessibility needs, confidentiality, and escalation path.

### 6. Validate and maintain

Confirm material roles and decision rights with accountable owners. Update the analysis when scope, organization, risk, or product stage changes.

## Stakeholder register

| Stakeholder or group | Role and affected outcome | Influence | Impact | Decision rights or contribution | Stance | Engagement | Owner |
|---|---|---|---|---|---|---|---|
| Not identified | Not established | Unknown | Unknown | Not established | Unknown | Identify during discovery | Discovery owner |

Replace the default row as stakeholders are identified; do not treat `Unknown` as a completed assessment.

## Decision-rights map

| Decision area | Proposer | Contributors | Accountable approver | Evidence required | Escalation path |
|---|---|---|---|---|---|
| Product outcome and priority | Not established | Not established | Not established | Problem, value, outcome, trade-offs | Sponsor |
| Scope or baseline change | Not established | Not established | Not established | Impact on outcome, cost, date, risk | Governance owner |
| Architecture and security | Not established | Not established | Not established | Options, risks, operational effects | Technical authority |

Roles must be replaced with named people or governed groups before the related decision is committed.

## Decision rules

- Requester, sponsor, user, budget owner, and approver are distinct roles unless confirmed otherwise.
- A stakeholder statement is evidence of perspective, not automatic proof of market or user behavior.
- Consult stakeholders according to decision relevance, not only hierarchy.
- Do not expose sensitive stakeholder information beyond the access needed for the work.
- Record unresolved conflicts as decision inputs with owners and escalation paths.
- Do not use stakeholder analysis to label dissent as resistance without understanding its evidence and incentives.

## Outputs

- stakeholder register;
- decision-rights map;
- representation gaps and conflicts;
- engagement and escalation plan;
- stakeholder-related risks, dependencies, questions, and evidence sources.

## Quality checks

- Affected users and low-influence groups are represented.
- Material decisions have accountable human approvers.
- Influence and impact are assessed separately.
- Stance is evidence-based or marked unknown.
- Engagement has a purpose, owner, and timing.
- Conflicts and confidentiality needs are visible.

## Common mistakes

- listing only the project team and sponsor;
- assuming the loudest stakeholder represents the user;
- using a power-interest grid without decision rights or impact;
- treating communication volume as effective engagement;
- publishing personal or political assessments unnecessarily.

## Related modules

- [Problem framing](problem-framing.md)
- [Discovery workflow](../lifecycle/discovery.md)
- [Decision policy](../core/decision-policy.md)
