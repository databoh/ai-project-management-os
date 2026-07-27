---
title: FinTech Loan Application Status Example
type: end-to-end-example
status: illustrative
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../../playbooks/idea-to-mvp.md
  - ../../playbooks/production-release.md
related:
  - ../../architecture/security.md
  - ../../lifecycle/requirements.md
  - ../../metrics/product-metrics.md
  - ../../metrics/incident-metrics.md
---

# FinTech Loan Application Status Example

## Use notice

This fictional high-trust example illustrates delivery control for a loan-application status and document-completion portal. It is not financial or legal guidance and does not encode any jurisdiction’s lending, disclosure, eligibility, or adverse-action rules.

## Scenario

A fictional regulated lender wants applicants to understand application status, outstanding document requests, and supported next actions without exposing underwriting logic or making credit decisions in the portal.

### Confirmed within the scenario

- A separate loan-origination system is authoritative for application state and required documents.
- Identity verification is required before showing applicant-specific information.
- Underwriters, operations, support, security, privacy, legal, and compliance have distinct responsibilities.
- Status terminology currently differs between internal systems and customer communications.
- The portal cannot approve, decline, price, or modify a loan.

### Assumptions

| ID | Assumption | Impact | Validation | Owner |
|---|---|---|---|---|
| ASM-FT-001 | Status uncertainty drives avoidable support contact | High | Link contact reasons to application stages | Product owner |
| ASM-FT-002 | A governed customer-facing state model can map internal states without misleading applicants | High | Compliance and operations mapping workshop | Compliance owner |
| ASM-FT-003 | Secure document completion can reduce processing delay | High | Journey evidence and controlled pilot | Operations owner |

### Hypotheses

- **HYP-FT-001:** Approved status language reduces avoidable uncertainty and support contact.
- **HYP-FT-002:** A secure, explicit document path reduces preventable processing delay for eligible applications.

### Open questions

- Which customer-facing state mappings and notices will legal and compliance approve?
- Which identity assurance and recovery controls are required for the intended population?
- What retention, accessibility, notification, and segment-review obligations apply?

## Authority and evidence

- Legal and compliance interpretations are open until approved by named authorities.
- Customer-facing wording requires expert authorship, review date, source traceability, and limitation disclosure.
- Security, privacy, production, and residual-risk choices are D3 decisions.
- No example threshold or status text may be reused without jurisdiction and policy validation.

## Lifecycle and gates

| Stage | Example evidence | Result |
|---|---|---|
| Intake and discovery | Applicant interviews, support reasons, process observation, policy and system inventory | G1 Conditional: representation gaps remain |
| Product definition | Transparency and completion outcome, non-goals, trust guardrails | G2 Proposed |
| Requirements and solution | State mapping, identity, documents, audit, accessibility, integration, recovery | G3 Conditional: legal wording and retention pending |
| Planning | Integration and control work, role capacity, approval dependencies, relative forecast | G4 Proposed |
| Delivery | Segregated duties, test data, DoR/DoD, reporting, environments | G5 Proposed |
| Release | Employee test, synthetic accounts, limited applicant cohort, G6 approval | G6 Pending |
| Improvement | Completion, support, errors, complaints, security, fairness, and incident review | G7 Future |

## Product definition

**Outcome `OUT-FT-001`:** Improve the proportion of eligible applicants who correctly understand their current application stage and complete valid outstanding document requests within the approved service horizon, without increasing unauthorized disclosure, misleading communication, unequal access, or complaint guardrails.

**Non-goals:**

- provide approval probability or financial advice;
- expose internal risk scores, fraud controls, or underwriting rationale;
- automate credit decisions;
- change document requirements outside the authoritative system;
- replace legally required notices or human support.

## Customer-facing state model

| Customer state | Required evidence | Prohibited implication |
|---|---|---|
| Application received | Authoritative receipt recorded | Approval or completeness |
| Information needed | Approved request with owner, due or review rule, and secure action | Customer fault or guaranteed next decision |
| In review | Application assigned to an authorized review stage | Expected outcome or precise completion date |
| Decision available | Authoritative decision and required notice path exist | Display before identity and notice controls |
| Closed | Approved terminal state and communication | Reason not authorized for the channel |

The actual state names and mappings remain subject to legal, compliance, operational, and accessibility approval.

## Requirements

| ID | Requirement | Acceptance direction |
|---|---|---|
| FR-FT-001 | Display only approved customer-facing state mapped from authoritative internal state | Every internal state has approved mapping, exception, and owner |
| FR-FT-002 | Show outstanding document request, accepted formats, secure action, and processing status | Normal, duplicate, invalid, malware, timeout, and delayed-processing cases pass |
| FR-FT-003 | Provide approved support and correction path | Applicants can report discrepancy without changing authoritative state directly |
| SCR-FT-001 | Verify identity and authorize application ownership for every access | Cross-account, session, recovery, and support-access tests pass |
| SCR-FT-002 | Preserve tamper-resistant audit evidence for consequential views and actions | Actor, application, event, source state, communication version, and time are traceable |
| DR-FT-001 | Minimize, classify, retain, correct, export, and delete data under approved policy | Data lifecycle and legal-hold behavior are verified |
| NFR-FT-001 | Meet approved accessibility, availability, latency, and recovery thresholds | Critical journey and failure testing pass in the relevant environment |
| TR-FT-001 | Fall back to approved support and existing notices when state is unavailable | No stale or inferred status is presented as current |

## Solution outline

| Area | Example direction |
|---|---|
| Boundary | Portal reads a purpose-built status API; loan-origination remains authoritative |
| Identity | Approved identity provider, step-up where required, session and recovery controls |
| Authorization | Application-level ownership, support role separation, least privilege, and audited exception |
| State mapping | Versioned mapping service with compliance-approved customer language |
| Documents | Isolated upload, scanning, validation, encryption, lifecycle, and processing state |
| Integration | Idempotent request and callback handling, reconciliation, timeout, and stale-state rules |
| Security | Threat model, secrets, supply chain, rate and abuse controls, security events, and incident path |
| Recovery | No fabricated status; safe unavailability message and human support |
| Observability | Critical journey, mapping version, authorization denial, document state, SLO, and complaint correlation |

## Plan and approval path

| Workstream | Relative range | Confidence | Approval or dependency |
|---|---|---|---|
| State and policy discovery | T+2–4 delivery cycles | Low | Compliance, legal, and operations |
| Identity, API, and portal | T+3–6 delivery cycles | Low | Platform and loan-system teams |
| Documents and audit | T+2–5 delivery cycles | Low | Security, privacy, storage, and scanning |
| Pilot and release | After control evidence and G6 | Not assessable | Named D3 authorities |

These synthetic ranges demonstrate uncertainty handling and are not estimates for a real lender.

## Release controls

- Use synthetic accounts before any production applicant data.
- Validate every state mapping and communication version with authorized reviewers.
- Limit first exposure to an approved cohort with trained support.
- Stop on cross-account access, incorrect state, misleading notice, document loss, audit gap, or mandatory accessibility failure.
- Roll back portal exposure and use existing authorized communication channels.
- Follow incident and notification authority for security, privacy, or customer-impact events.

## Metrics

| Role | Example direction |
|---|---|
| Outcome | Eligible applicants correctly completing the current required action within the defined horizon |
| Understanding | Qualified comprehension research, discrepancy reports, and support reasons |
| Guardrail | Unauthorized disclosure, incorrect status, misleading communication, unequal segment result, and complaint |
| Operations | State freshness, reconciliation, document processing, latency, availability, and recovery |
| Business | Avoidable support demand and processing delay, without treating approval rate as a product target |

## Risks and decisions

| ID | Type | Record |
|---|---|---|
| RSK-FT-001 | Risk | Internal-to-customer state mapping may mislead; control through approved mapping and fallback |
| RSK-FT-002 | Risk | Support access may expose applications; control through role, purpose, audit, and review |
| RSK-FT-003 | Risk | Aggregate outcome may hide unequal access; require approved segment and accessibility review |
| DEC-FT-001 | Decision | Portal remains informational and completion-oriented; no underwriting decision behavior |

## Traceability sample

`OUT-FT-001 → FR-FT-001 / SCR-FT-001 → state API and access work → mapping and cross-account tests → limited release → completion outcome plus disclosure and complaint guardrails`

## Reuse guidance

Replace all policy, legal, identity, data, notice, state, accessibility, risk, and metric decisions with qualified jurisdiction-specific evidence and approval.

## Related modules

- [Security architecture](../../architecture/security.md)
- [Requirements management](../../lifecycle/requirements.md)
- [Production release](../../playbooks/production-release.md)
- [Incident metrics](../../metrics/incident-metrics.md)
