---
title: AI SaaS Support Copilot Example
type: end-to-end-example
status: illustrative
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../../playbooks/ai-feature-delivery.md
  - ../../playbooks/idea-to-mvp.md
related:
  - ../../ai/rag.md
  - ../../ai/evaluation.md
  - ../../ai/guardrails.md
  - ../../metrics/product-metrics.md
---

# AI SaaS Support Copilot Example

## Use notice

This is a fictional worked example showing how AI PM OS records decisions. Names, evidence, volumes, thresholds, and ranges are scenario fixtures, not market benchmarks or recommendations for a real product.

## Scenario

A fictional B2B SaaS company wants to help support agents draft grounded answers from approved product documentation. The feature proposes answers; a human agent remains responsible for sending them.

### Confirmed within the scenario

- Support agents use a ticketing system and search two approved documentation collections.
- Documentation ownership and article update timestamps exist.
- The first release can be limited to an internal support cohort.
- Sending an external message requires an authenticated support agent.
- No approved evaluation set or AI provider decision exists at intake.

### Assumptions

| ID | Assumption | Impact | Validation | Owner | Status |
|---|---|---|---|---|---|
| ASM-AI-001 | Search and synthesis delay materially contributes to ticket handling time | High | Observe sampled ticket workflows and agent interviews | Product owner | Open |
| ASM-AI-002 | Approved articles cover most pilot questions | High | Map representative tickets to authoritative evidence | Knowledge owner | Open |
| ASM-AI-003 | Agents can review drafts without creating a new bottleneck | Medium | Timed usability pilot and queue analysis | Support lead | Open |

### Hypotheses

- **HYP-AI-001:** Grounded draft assistance reduces time to an accepted answer for eligible tickets.
- **HYP-AI-002:** Source references improve reviewer trust and correction quality.
- **HYP-AI-003:** A constrained internal copilot provides sufficient learning without autonomous sending.

### Open questions

- Which ticket classes have sufficient authoritative-source coverage for the pilot?
- Which provider data, retention, regional-processing, and change conditions will be approved?
- What baseline-supported thresholds will the accountable owners approve for quality, safety, latency, and cost?

## Lifecycle and gates

| Stage | Example evidence | Gate result |
|---|---|---|
| Intake | Request, sponsor, support context, AI overlay, unknown data and provider choices | G0 Pass |
| Discovery | Workflow observation, ticket taxonomy, current search baseline, stakeholder and knowledge-source analysis | G1 Conditional: representative case coverage pending |
| Product definition | Support-agent outcome, non-goals, guarded measures, human accountability | G2 Pass in scenario |
| Requirements and solution | RAG option, permission boundary, evaluation, security, cost, observability, fallback | G3 Conditional: provider terms and deletion test pending |
| Plan | Pilot work, role capacity, dependencies, relative ranges, release controls | G4 Proposed |
| Delivery setup | Workflow, DoR, DoD, reviewers, reporting, escalation | G5 Proposed |
| Release | Internal cohort, feature flag, no autonomous sending, stop thresholds, support | G6 Pending evidence |
| Improvement | Product, quality, safety, cost, and support review after observation horizon | G7 Future |

## Product definition

**Outcome `OUT-AI-001`:** For eligible support tickets, increase the proportion of agent-reviewed answers completed within the existing service expectation while maintaining answer correctness, access control, and customer-trust guardrails.

**Non-goals:**

- autonomously send messages;
- answer from unapproved customer or internet sources;
- replace support policy or incident escalation;
- use ticket content for model training without separate authority;
- cover billing, legal, or security-sensitive ticket classes in the pilot.

## MVP boundary

**In:**

- internal support-agent interface;
- retrieval from approved versioned articles;
- draft answer with source references;
- agent edit, reject, and feedback controls;
- exact configuration identity, privacy-safe telemetry, and cost attribution;
- deterministic eligibility and blocked ticket classes.

**Out:**

- customer-facing chatbot;
- autonomous tool actions;
- write access to knowledge sources;
- multilingual expansion;
- automatic learning from agent edits.

## Requirements and acceptance direction

| ID | Requirement | Acceptance direction |
|---|---|---|
| FR-AI-001 | Retrieve only articles authorized for the agent and ticket tenant | Cross-tenant and unauthorized-source tests return no content |
| FR-AI-002 | Present a draft and source references without sending | External send remains a separate authenticated human action |
| FR-AI-003 | Allow edit, reject, reason, and escalation | Every pilot result has a reviewer disposition |
| NFR-AI-001 | Return or safely fail within the approved support workflow limit | End-to-end latency distribution meets the scenario threshold |
| SCR-AI-001 | Treat ticket and retrieved content as untrusted | Direct and indirect injection tests cannot expand authority |
| DR-AI-001 | Minimize prompt, trace, and evaluation data | Approved fields, retention, access, and deletion are verified |
| AIE-AI-001 | Meet mandatory answer, citation, abstention, and safety thresholds | Held-out evaluation and critical slices pass before exposure |
| TR-AI-001 | Disable the feature without affecting normal ticket handling | Feature flag and manual-search fallback are tested |

## Solution outline

| Area | Example direction |
|---|---|
| Context | Ticketing UI calls a copilot service; identity and tenant pass through a trusted boundary |
| Sources | Approved product-help collections with owner, version, sensitivity, and freshness metadata |
| RAG | Permission-filtered hybrid retrieval, reranking, bounded context, grounded drafting, and abstention |
| Model | Candidate selected only after common evaluation; configuration pinned or change-detected |
| Guardrails | Ticket eligibility, instruction separation, source allowlist, output checks, no send tool, and agent review |
| Security and privacy | Purpose limitation, tenant isolation, redaction, provider review, minimal logs, deletion verification |
| Fallback | Existing manual search and response workflow |
| Observability | Release, model, prompt, corpus, retrieval, disposition, latency, cost, and incident identity |

**Architecture recommendation:** assisted RAG copilot, not an autonomous agent.

**Decision status:** Proposed; human architecture and security approval required.

## Evaluation plan

| Area | Example-only boundary |
|---|---|
| Cases | Representative eligible tickets plus ambiguity, missing evidence, stale content, injection, and access slices |
| Baseline | Current search-assisted human answer and non-RAG model candidate |
| Measures | Answer rubric, evidence support, citation correctness, abstention, leakage, injection resistance, latency, and cost |
| Mandatory failures | Cross-tenant evidence, unauthorized tool behavior, sensitive-data leakage, or unsupported high-confidence answer |
| Review | Qualified support and knowledge reviewers, blinded where practical |
| Change trigger | Model, prompt, corpus, parser, retrieval, reranker, policy, or eligibility change |

Exact numerical thresholds are intentionally not supplied by this reusable example; the scenario team must approve them from baseline and consequence evidence before acceptance.

## Delivery and release

| Workstream | Relative forecast | Confidence | Dependency |
|---|---|---|---|
| Discovery and dataset | T+1–3 delivery cycles | Medium | Ticket access and reviewers |
| RAG and interface | T+2–4 delivery cycles | Low | Source quality and identity integration |
| Evaluation and controls | T+2–3 delivery cycles, overlapping where safe | Low | Threshold authority and provider evidence |
| Internal pilot readiness | After mandatory evidence passes | Not yet assessable | G6, review capacity, and telemetry |

The ranges are illustrative planning structure, not a real commitment.

**Rollout:** internal dogfood → trained support cohort → broader support cohort.

**Stop:** mandatory evaluation failure, unauthorized retrieval, material leakage, blind telemetry, uncontrolled cost, or review queue breach.

**Rollback:** disable copilot and retain the normal ticket workflow.

## Metrics and decisions

| Metric role | Example contract direction | Decision |
|---|---|---|
| Outcome | Accepted-answer completion within support expectation for eligible exposed tickets | Expand, adapt, or stop |
| Quality guardrail | Qualified-review answer and evidence result by ticket slice | Hold or correct |
| Trust guardrail | Confirmed unauthorized disclosure or action | Stop and incident route |
| Experience | Draft acceptance, edit, rejection, and reviewer time distributions | Improve workflow or eligibility |
| Operations | Latency, fallback, error, retrieval freshness, and review queue | Scale, degrade, or pause |
| Economics | Cost per accepted draft including model, retrieval, and review | Continue, route, or redesign |

## Traceability sample

`OUT-AI-001 → FR-AI-001 / AIE-AI-001 → RAG and guardrail work → evaluation cases → internal pilot release → governed outcome and guardrail metrics`

## Example decision log

| Decision | Class | Status | Rationale |
|---|---|---|---|
| Use assisted RAG rather than autonomous messaging | D3 | Proposed | Reduces irreversible communication risk while testing value |
| Exclude sensitive ticket classes from pilot | D2/D3 | Proposed | Evidence and control maturity are insufficient |
| Keep normal search as fallback | D2 | Proposed | Preserves service when AI is unavailable or uncertain |

## Reuse guidance

Replace every scenario fixture with project evidence. Do not copy thresholds, source assumptions, provider conditions, or release status into a real initiative.

## Related modules

- [AI feature delivery](../../playbooks/ai-feature-delivery.md)
- [RAG](../../ai/rag.md)
- [Evaluation](../../ai/evaluation.md)
- [Guardrails](../../ai/guardrails.md)
- [Product metrics](../../metrics/product-metrics.md)
