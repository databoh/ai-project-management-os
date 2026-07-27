---
title: Software Requirements Specification Template
type: specification-template
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../../lifecycle/requirements.md
related:
  - brd.md
  - prd.md
  - frd.md
  - ../../business-analysis/requirements-traceability.md
  - ../../business-analysis/acceptance-criteria.md
  - ../../ai/evaluation.md
  - ../../ai/privacy-and-security.md
---

# Software Requirements Specification Template

## Purpose

Provide a controlled software-requirement baseline covering required behavior, interfaces, data, quality attributes, constraints, trust controls, and verification.

## Usage

Use when software requirements need a consolidated contractual, regulatory, vendor, multi-team, or high-risk handoff. Reference authoritative requirement records and linked specifications. Omit inapplicable sections with rationale rather than filling them with copied content.

## Document control

| Field | Value |
|---|---|
| System and initiative | Not provided |
| SRS owner | Not assigned |
| Accountable approver | Not established |
| Version and status | 0.1 Draft |
| Baseline ID | Not established |
| Included requirement IDs or query | Not established |
| Last updated | Not provided |
| Access classification | Not assessed |

## Scope and references

| Field | Definition |
|---|---|
| Software purpose | Not established |
| Included system boundary | Not established |
| Excluded systems or behavior | Not established |
| Product scope and outcome references | Not provided |
| BRD, PRD, or FRD references | Not applicable |
| Standards, policies, contracts, and regulations | Not provided |
| Terms and abbreviations | Use repository terminology plus domain-specific definitions |

## System context

| Element | Description | Owner | Evidence or decision |
|---|---|---|---|
| Users and roles | Not established | Not assigned | Not provided |
| External systems and interfaces | Not established | Not assigned | Not provided |
| Operating environments | Not established | Not assigned | Not provided |
| Major constraints and dependencies | Not established | Not assigned | Not provided |
| Assumed system state | Not established | Not assigned | Not provided |

## Functional requirements

| Requirement ID | Required behavior | Trigger or condition | Observable result | Use case or acceptance reference | Status |
|---|---|---|---|---|---|
| FR-001 | Not established | Not established | Not established | Not assigned | Proposed |

## External interface requirements

| Interface ID | Interface type | External party or system | Contract and direction | Protocol or approved constraint | Failure and recovery | Owner |
|---|---|---|---|---|---|---|
| IR-001 | Not classified | Not established | Not established | Not established | Not established | Not assigned |

Interface types may include user, software, hardware, communications, file, event, and operational interfaces.

## Data requirements

| Requirement ID | Data domain or object | Definition and quality | Source and lineage | Access and sensitivity | Retention, deletion, and export | Verification |
|---|---|---|---|---|---|---|
| DR-001 | Not established | Not established | Not established | Not assessed | Not established | Not established |

## Non-functional requirements

Each NFR must define operating conditions, measure, threshold, method, and owner.

| Requirement ID | Quality attribute | Condition and scope | Measure and threshold | Verification method | Owner | Status |
|---|---|---|---|---|---|---|
| NFR-001 | Performance | Not established | Not established | Not established | Not assigned | Proposed |
| NFR-002 | Availability and resilience | Not established | Not established | Not established | Not assigned | Proposed |
| NFR-003 | Scalability and capacity | Not established | Not established | Not established | Not assigned | Proposed |
| NFR-004 | Maintainability and supportability | Not established | Not established | Not established | Not assigned | Proposed |
| NFR-005 | Observability | Not established | Not established | Not established | Not assigned | Proposed |
| NFR-006 | Accessibility and compatibility | Not established | Not established | Not established | Not assigned | Proposed |

## Security, privacy, and compliance

| Requirement ID | Control area | Threat, obligation, or policy source | Required control and scope | Verification or review | Approver |
|---|---|---|---|---|---|
| SCR-001 | Authentication and authorization | Not established | Not established | Not established | Not established |
| SCR-002 | Confidentiality and data protection | Not established | Not established | Not established | Not established |
| SCR-003 | Integrity, audit, and non-repudiation | Not established | Not established | Not established | Not established |
| SCR-004 | Legal, regulatory, or contractual compliance | Not established | Not established | Not established | Not established |

## AI-specific requirements

Complete when models, agents, RAG, or AI automation are in scope.

| Requirement ID | Area | Condition and required behavior | Measure or threshold | Fallback or human control | Verification |
|---|---|---|---|---|---|
| Not applicable | Evaluation quality | Not assessed | Not established | Not established | Not established |
| Not applicable | Hallucination and unsafe output | Not assessed | Not established | Not established | Not established |
| Not applicable | Prompt injection and tool authorization | Not assessed | Not established | Not established | Not established |
| Not applicable | Privacy and data leakage | Not assessed | Not established | Not established | Not established |
| Not applicable | Latency and cost | Not assessed | Not established | Not established | Not established |
| Not applicable | Observability and model change | Not assessed | Not established | Not established | Not established |

## Transition requirements

| Requirement ID | Migration, rollout, conversion, training, or decommission need | Temporary control | Owner | Completion or exit evidence | Status |
|---|---|---|---|---|---|
| TR-001 | Not established | Not established | Not assigned | Not established | Proposed |

## Assumptions, constraints, and dependencies

| ID | Type | Statement | Source or owner | Effect on requirements | Validation or resolution |
|---|---|---|---|---|---|
| Not assigned | Not classified | None recorded | Not established | Not assessed | Not established |

## Verification matrix

| Requirement ID | Verification level | Method | Acceptance or test reference | Environment and data | Owner | Result and evidence |
|---|---|---|---|---|---|---|
| Not assigned | Not established | Not established | Not assigned | Not established | Not assigned | Not executed |

Verification methods are inspection, analysis, demonstration, and test. Define combinations where one method is insufficient.

## Baseline and approval

| Field | Value |
|---|---|
| Included requirement set | Not established |
| Known exceptions | None recorded |
| Conditional-pass owner and expiry | Not applicable |
| Change-control reference | Not established |

| Decision | Decision class | Approver | Status | Date and reference | Conditions |
|---|---|---|---|---|---|
| Approve software requirement baseline | Not classified | Not established | Proposed | Not provided | Not established |

## Completion checks

- The SRS has a declared system boundary and authoritative references.
- Functional, interface, data, quality, trust, and transition requirements are covered as applicable.
- NFRs include conditions, measures, thresholds, and verification methods.
- AI behavior includes evaluation, guardrails, permissions, fallback, cost, and observability where applicable.
- Every approved requirement has forward and backward traceability.
- Open exceptions, approval, baseline, and change control are explicit.

## Related modules

- [Requirements management](../../lifecycle/requirements.md)
- [FRD template](frd.md)
- [Requirements traceability](../../business-analysis/requirements-traceability.md)
- [Acceptance criteria](../../business-analysis/acceptance-criteria.md)
- [AI evaluation](../../ai/evaluation.md)
- [AI privacy and security](../../ai/privacy-and-security.md)
