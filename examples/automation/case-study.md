---
title: Invoice Exception Automation Example
type: end-to-end-example
status: illustrative
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../../playbooks/ai-feature-delivery.md
  - ../../playbooks/production-release.md
related:
  - ../../ai/agents-and-tools.md
  - ../../ai/mcp.md
  - ../../architecture/data-and-integrations.md
  - ../../metrics/engineering-metrics.md
---

# Invoice Exception Automation Example

## Use notice

This fictional example demonstrates bounded AI-assisted workflow automation. It does not authorize payments, accounting treatment, vendor communication, or use of any specific automation platform.

## Scenario

A fictional enterprise receives invoices through an approved intake channel. Deterministic checks match most invoices to purchase orders; operations staff manually classify exceptions and route them for resolution. The proposed feature extracts exception evidence, recommends a route, and prepares actions for human approval.

### Confirmed within the scenario

- The accounting system remains authoritative for invoice, purchase-order, vendor, and payment state.
- Payment release requires existing segregation-of-duties approval.
- A workflow system can create an exception case through a scoped API.
- Invoice attachments may contain sensitive commercial and personal data.
- Exception categories and routing rules exist but are inconsistently applied.

### Assumptions

| ID | Assumption | Validation | Owner | Status |
|---|---|---|---|---|
| ASM-AU-001 | Classification and evidence gathering create a material exception queue | Workflow observation and age distribution | Operations owner | Open |
| ASM-AU-002 | Existing categories cover a useful pilot population | Historical sample and reviewer agreement | Process owner | Open |
| ASM-AU-003 | Recommendation plus approval is safer and still valuable compared with autonomous action | Comparative prototype and risk review | Product owner | Open |

### Hypotheses

- **HYP-AU-001:** Evidence-linked classification reduces elapsed routing time for supported exceptions.
- **HYP-AU-002:** Human approval before submission preserves segregation of duties while retaining useful automation.

### Open questions

- Which exception categories have sufficient label agreement and evidence quality?
- What attachment, prompt, evaluation, trace, and review retention will be approved?
- Can the workflow API guarantee or support idempotent draft creation and reconciliation?

## Lifecycle and gates

| Stage | Example evidence | Result |
|---|---|---|
| Discovery | Exception journey, policy, samples, reviewer capacity, non-AI workflow options | G1 Conditional: label agreement pending |
| Product definition | Queue and task outcome, no payment authority, operational guardrails | G2 Proposed |
| Requirements and solution | Extraction, classification, tools, permissions, state, idempotency, audit, fallback | G3 Conditional: attachment retention approval |
| Planning | Dataset, workflow API, evaluator and reviewer capacity, relative ranges | G4 Proposed |
| Delivery | Exception classes, DoR/DoD, approval roles, incident and reporting | G5 Proposed |
| Release | Shadow mode, approval-only pilot, action limits, G6 evidence | G6 Pending |
| Improvement | Accepted routing, queue age, errors, override, cost, and control review | G7 Future |

## Product definition

**Outcome `OUT-AU-001`:** Reduce elapsed time for eligible invoice exceptions to reach the correct accountable queue with complete evidence while maintaining payment authority, classification quality, privacy, duplicate-action, and reviewer-load guardrails.

**Non-goals:**

- approve or release payment;
- change vendor bank or tax data;
- create or modify purchase orders;
- send external messages;
- make accounting or legal determinations;
- process unsupported exception classes.

## MVP boundary and autonomy

| Capability | MVP authority |
|---|---|
| Read approved invoice, purchase-order, and vendor reference fields | Allowed within service identity and case scope |
| Extract candidate fields and exception evidence | Allowed; output remains untrusted until validation |
| Recommend category and target queue | Allowed with confidence and evidence |
| Create draft exception case | Allowed only through idempotent scoped operation |
| Submit case to queue | Requires authenticated human confirmation |
| Change financial master data or release payment | Denied |

## Requirements

| ID | Requirement | Acceptance direction |
|---|---|---|
| FR-AU-001 | Process only eligible invoice states and supported attachment types | Deterministic eligibility denies unsupported cases |
| FR-AU-002 | Extract fields with source location and uncertainty | Reviewer can compare every material field with evidence |
| FR-AU-003 | Recommend only approved exception categories and queues | Held-out category and route thresholds pass by slice |
| FR-AU-004 | Create one draft case per approved invoice exception | Idempotency, retry, concurrency, and reconciliation pass |
| SCR-AU-001 | Enforce service, user, invoice, field, and action authorization outside the model | Unauthorized reads and writes are denied and audited |
| SCR-AU-002 | Resist invoice-content and tool-result injection | Adversarial attachments cannot change policy or tool authority |
| DR-AU-001 | Minimize attachment, prompt, output, trace, and review retention | Approved lifecycle and deletion verification pass |
| NFR-AU-001 | Halt safely on stale state, tool failure, loop, cost, or approval expiry | Failure and cancellation scenarios pass |

## Solution outline

| Area | Example direction |
|---|---|
| Orchestration | Durable workflow state controls deterministic steps; model performs bounded extraction and recommendation |
| Tools | Narrow read operations and idempotent draft-case creation; no payment or master-data tools |
| Identity | Scoped service identity for reads; user identity and confirmation for submission |
| State | Invoice and accounting systems authoritative; workflow stores correlation, checkpoint, approval, and result |
| Model | Candidate selected from representative document and category evaluation |
| Guardrails | Eligibility, schema, category allowlist, evidence requirement, limits, no external communication |
| Security | Attachment scanning, instruction separation, sensitive-data control, supply-chain and access review |
| Recovery | Cancel or retry safe reads; reconcile draft creation; manual exception workflow remains available |
| Observability | Exact versions, stages, tool calls, denials, approval, duplicates, latency, cost, and outcome |

MCP may be used only if its client-server boundary, allowlisted capabilities, identity, schema, side effects, revocation, and incident controls pass the [MCP integration](../../ai/mcp.md) method.

## Evaluation and release

| Stage | Example evidence |
|---|---|
| Offline | Representative documents, OCR quality, categories, ambiguous and adversarial cases, reviewer agreement |
| Integration | Stale state, duplicate callback, timeout, partial failure, authorization denial, and reconciliation |
| Shadow | Run without creating cases; compare recommendation with actual qualified routing |
| Approval pilot | Create draft, show evidence, require human submit, limit cohort and volume |
| Expansion | Only after mandatory quality, control, queue, cost, and incident evidence |

**Stop:** unauthorized access or action, duplicate case beyond recovery, unsupported category execution, material leakage, reviewer queue breach, or blind action trace.

**Fallback:** existing manual classification and routing.

## Plan

| Workstream | Relative range | Confidence | Dependency |
|---|---|---|---|
| Process and dataset | T+1–3 delivery cycles | Medium | Sample rights and reviewers |
| Extraction and classification | T+2–4 delivery cycles | Low | Document variability |
| Workflow tools and controls | T+2–5 delivery cycles | Low | API, identity, and reconciliation |
| Shadow and approval pilot | After evaluation and G6 | Not assessable | Operational capacity |

## Metrics

| Role | Example direction |
|---|---|
| Outcome | Eligible exception reaching correct accountable queue with required evidence within service expectation |
| Quality | Category, routing, extraction, abstention, and reviewer correction by document and exception slice |
| Control | Unauthorized tool attempt, duplicate action, stale-state prevention, and approval trace |
| Flow | Queue age, cycle-time distribution, WIP, blocked reason, and reviewer demand |
| Cost | Cost per correctly routed approved case including model, tools, and review |
| Guardrail | Payment or master-data action, privacy event, harmful automation, and reviewer overload |

## Decisions and traceability

| Decision | Status | Authority |
|---|---|---|
| Use deterministic orchestration with bounded AI steps | Proposed | Architecture authority |
| Permit draft creation but require human submission | Proposed | Operations and control authority |
| Exclude payment and master-data tools | Proposed | Financial and security authority |

`OUT-AU-001 → FR-AU-004 / SCR-AU-001 → scoped tool and state work → idempotency and authorization tests → approval pilot → queue outcome plus action-control guardrails`

## Reuse guidance

Replace accounting, segregation, retention, tool, identity, category, threshold, and workflow assumptions with authoritative enterprise evidence. A technical tool connection never grants financial authority.

## Related modules

- [AI agents and tools](../../ai/agents-and-tools.md)
- [MCP](../../ai/mcp.md)
- [Data and integrations](../../architecture/data-and-integrations.md)
- [AI feature delivery](../../playbooks/ai-feature-delivery.md)
