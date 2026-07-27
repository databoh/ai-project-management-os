---
title: AI Observability
type: ai-operations-method
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../architecture/observability.md
  - evaluation.md
related:
  - rag.md
  - agents-and-tools.md
  - guardrails.md
  - privacy-and-security.md
  - cost-management.md
  - ../metrics/metric-dictionary.md
  - ../metrics/incident-metrics.md
---

# AI Observability

## Purpose

Extend service observability with privacy-safe evidence about AI quality, grounding, safety, agent behavior, model and configuration change, cost, feedback, and drift so teams can detect impact and make controlled product decisions.

## When to use

Use from prototype through production, with rigor proportionate to exposure and impact. Instrument the evaluated AI path before rollout and reassess after model, prompt, corpus, retrieval, tool, guardrail, traffic, or user-population change.

## Inputs

- product outcomes, AI acceptance thresholds, guardrails, stop conditions, and release cohorts;
- complete model, prompt, context, RAG, agent, tool, MCP, and fallback architecture;
- service SLIs and SLOs, incident, support, privacy, security, retention, and access controls;
- evaluation taxonomies, slices, known failures, reviewers, and feedback channels;
- cost model, budgets, quotas, provider limits, and version-change mechanisms.

## Workflow

### 1. Define production questions

Ask whether users obtain accepted outcomes, which configurations and slices fail, whether grounding and tools behave correctly, whether safety controls work, what changed, what it costs, and whether teams can contain harm.

### 2. Establish version identity

Attach traceable identifiers for application release, model, provider route, system and prompt specification, policy, retrieval corpus and index, embedding or reranker, tool set, guardrail, and experiment cohort.

### 3. Instrument the AI path

Trace request stages, retrieval, model calls, tool decisions, confirmations, actions, fallback, reviewer handoff, and final outcome. Capture timings, sizes, counts, status, and sanitized classifications rather than raw content by default.

### 4. Monitor quality and grounding

Use sampled evaluation, deterministic checks, citation validation, retrieval signals, abstention, user correction, task completion, expert review, and incident adjudication. Preserve the difference between proxy signals and confirmed quality.

### 5. Monitor safety and control

Track policy categories, blocks, bypass indicators, sensitive-data detections, denied tools, approval outcomes, unusual sequences, repeated failures, human overrides, appeals, and confirmed harmful events.

### 6. Monitor agent and RAG behavior

Observe step and loop counts, tool selection and errors, authorization denial, side effects, cancellation, reconciliation, source coverage, freshness, retrieval quality, empty or conflicting evidence, and index or permission drift.

### 7. Monitor cost and performance

Measure end-to-end latency distributions, model and tool latency, tokens or equivalent usage, cache, retries, rate limits, concurrency, unit cost, spend variance, and budget thresholds by approved dimensions.

### 8. Detect change and drift

Detect provider or alias changes, configuration drift, population and input shift, output and score shift, quality regression, source drift, control drift, and cost drift. A drift signal triggers investigation; it is not automatically proof of harm.

### 9. Alert and respond

Alert on actionable user harm, mandatory-threshold breach, control failure, unauthorized action, leakage, runaway loop or spend, severe quality regression, or blind monitoring. Link severity, owner, runbook, containment, rollback, and notification.

### 10. Review and learn

Reconcile online signals with controlled evaluation and product outcomes. Convert incidents, feedback, false alerts, missed failures, and reviewer findings into datasets, requirements, tests, guardrails, and decisions.

## AI observability plan

| Signal area | Measure or event | Population and slice | Source | Threshold | Action and owner | Data handling |
|---|---|---|---|---|---|---|
| Outcome and quality | Not established | Not established | Not established | Not established | Not established | Not classified |
| Safety and guardrails | Not established | Not established | Not established | Not established | Not established | Not classified |
| RAG and grounding | Not established | Not established | Not established | Not established | Not established | Not classified |
| Agent and tools | Not established | Not established | Not established | Not established | Not established | Not classified |
| Latency and reliability | Not established | Not established | Not established | Not established | Not established | Not classified |
| Cost and limits | Not established | Not established | Not established | Not established | Not established | Not classified |
| Drift and change | Not established | Not established | Not established | Not established | Not established | Not classified |

## AI trace record

| Field | Required content |
|---|---|
| Correlation | Request, session where lawful, trace, tenant, workflow, release, and cohort |
| Configuration | Model route, prompt, policy, corpus, index, tools, and guardrail versions |
| Execution | Stages, timing, usage, retrieval, tool, approval, fallback, and status |
| Quality | Proxy checks, sampled evaluation, feedback, adjudication, and limitations |
| Safety | Policy result, denial, override, confirmed event, and response |
| Privacy | Content capture policy, redaction, access, retention, and deletion |
| Outcome and cost | Completion, accepted result, unit cost, and attribution |

## Decision rules

- Do not log raw prompts, context, retrieved documents, outputs, or tool payloads by default.
- Version identifiers and structured events are usually more actionable than unrestricted content capture.
- User feedback is evidence with selection bias, not a complete quality measure.
- Proxy metrics cannot silently replace acceptance metrics.
- Online evaluation requires purpose, access, sampling, retention, and exposure controls.
- Drift triggers analysis against thresholds and impact; it does not by itself identify cause.
- Production incidents and corrections must feed evaluation and control improvement.

## Outputs

- AI observability plan, trace schema, dashboards, alerts, and runbooks;
- configuration, quality, grounding, safety, agent, cost, and drift signals;
- privacy-safe sampling and production evaluation process;
- incident, feedback, correction, and regression feedback loops;
- release, rollback, model-change, and product-decision evidence.

## Quality checks

- Product outcome, evaluation, guardrail, operational, and cost signals are connected.
- Every production result can be mapped to an approved configuration version.
- Critical tool actions and human approvals are attributable.
- Telemetry content, access, retention, and deletion are controlled.
- Alerts have thresholds, owners, containment, and runbooks.
- Production findings update controlled evaluation and decisions.

## Common mistakes

- logging all content for future debugging;
- monitoring latency and tokens but not outcome quality;
- treating thumbs-up rate as an unbiased acceptance measure;
- missing model, prompt, corpus, or tool version identity;
- detecting drift without a response owner or decision rule.

## Related modules

- [Observability](../architecture/observability.md)
- [Evaluation](evaluation.md)
- [Guardrails](guardrails.md)
- [AI privacy and security](privacy-and-security.md)
- [Cost management](cost-management.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Incident metrics and control](../metrics/incident-metrics.md)
