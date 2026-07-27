---
title: AI Product Discovery
type: ai-lifecycle-method
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/discovery.md
  - ../product/product-outcomes.md
related:
  - model-selection.md
  - evaluation.md
  - guardrails.md
  - privacy-and-security.md
  - cost-management.md
  - ../playbooks/ai-feature-delivery.md
---

# AI Product Discovery

## Purpose

Determine whether AI is a justified, feasible, measurable, and governable way to improve an approved product outcome before selecting models or committing to AI delivery.

## When to use

Use for any feature involving probabilistic models, generated or transformed content, semantic retrieval, agents, tool use, recommendations, classification, extraction, or AI-enabled automation. Use it as an overlay on the current lifecycle stage, not as permission to skip product, requirement, architecture, or release controls.

## Authority boundary

The agent may frame the use case, compare AI and non-AI approaches, expose uncertainty, and recommend validation. Named human product, domain, legal, security, privacy, compliance, and risk authorities approve high-impact use, affected-user policy, and residual risk.

## Inputs

- confirmed problem, affected users, current process, alternatives, and desired outcomes;
- task frequency, variability, decision cost, reversibility, and tolerance for error;
- representative input and expected-output evidence;
- data rights, sensitivity, provenance, quality, language, geography, and retention;
- domain obligations and impact on people, money, access, rights, safety, or reputation;
- latency, availability, scale, integration, cost, support, and operational constraints.

## Workflow

### 1. Frame the job without assuming AI

State the user or operational job, present baseline, friction, consequence, desired behavior change, and why existing rules, search, workflow, or interface improvements may be insufficient.

### 2. Define the AI contribution

Separate what AI may infer, generate, retrieve, rank, recommend, or automate from deterministic business rules and human judgment. Identify where uncertainty enters the journey.

### 3. Compare approaches

Compare non-AI improvement, rules or conventional software, assisted AI, and greater autonomy against value, quality, risk, cost, latency, explainability, maintainability, and reversibility.

### 4. Classify impact and autonomy

Assess consequence severity, affected population, reversibility, detectability, user vulnerability, domain trust, data sensitivity, and whether output informs, recommends, decides, or acts. Higher impact requires stronger evidence, human control, and approval.

### 5. Assess evidence and data feasibility

Inspect representative cases, edge conditions, labels or reference answers, source rights, coverage gaps, drift risk, and whether success can be evaluated without using production users as an uncontrolled experiment.

### 6. Define outcome and acceptance direction

Link product outcomes to task-quality, safety, fairness, latency, cost, adoption, and operational measures. Establish baseline, minimum useful threshold, mandatory guardrails, stop conditions, and decision horizon.

### 7. Identify failure and misuse

Cover inaccurate output, hallucination, prompt injection, data leakage, unauthorized tool use, harmful automation, bias, privacy, security, dependency, lock-in, context limits, evaluation gaps, missing oversight, and fallback failure.

### 8. Design a validation path

Select the smallest responsible combination of data audit, prototype, offline evaluation, red-team exercise, shadow mode, internal pilot, limited cohort, or expert review. Name evidence thresholds before execution.

### 9. Make the discovery recommendation

Recommend proceed, proceed conditionally, continue discovery, choose a non-AI approach, or stop. State confidence, assumptions, required approvals, and the next gate.

## AI use-case assessment

| Field | Required evidence |
|---|---|
| Use-case ID and owner | Stable identity and accountable product owner |
| Problem, actor, and baseline | Evidence of current behavior and consequence |
| Outcome and AI contribution | Measurable change and bounded model role |
| Alternatives | Non-AI, deterministic, assisted, and autonomous options as applicable |
| Impact and autonomy | Consequence, reversibility, detectability, and human control |
| Data feasibility | Rights, provenance, representativeness, quality, and lifecycle |
| Evaluation direction | Dataset, baseline, metrics, thresholds, slices, and reviewers |
| Trust controls | Safety, fairness, privacy, security, guardrails, and fallback |
| Operational feasibility | Latency, scale, availability, support, and observability |
| Economics | Unit-cost drivers, demand scenarios, review cost, and value hypothesis |
| Risks and assumptions | IDs, owners, validation, triggers, and residual exposure |
| Recommendation | Status, rationale, confidence, authority, and next decision |

## Initial AI risk register

| Risk ID | Scenario and affected party | Trigger or cause | Likelihood | Impact | Control or validation | Owner | Status |
|---|---|---|---|---|---|---|---|
| AIR-001 | Not established | Not established | Not assessed | Not assessed | Not established | Not assigned | Open |

## Decision rules

- AI must earn its place against a credible simpler approach.
- A compelling demonstration is not representative evaluation evidence.
- Do not describe an AI feature as reliable before defining an evaluation method, representative set, and acceptance threshold.
- Assistance, recommendation, decision, and action are different autonomy levels and must not be conflated.
- High-impact cases require domain expertise and explicit human accountability.
- Unknown data rights or inability to evaluate critical harm blocks responsible progression.
- Discovery approval permits controlled validation, not production release.

## Outputs

- AI use-case assessment and recommendation;
- initial AI risk register and impact classification;
- outcome, evaluation, guardrail, human-control, fallback, cost, and observability direction;
- data and evidence gaps with owners;
- inputs to requirements, solution outline, estimation, and gate assessment.

## Quality checks

- The problem and baseline exist independently of the proposed AI.
- AI and non-AI options were compared.
- Model responsibility and autonomy are bounded.
- Representative data and evaluation feasibility are understood.
- Benefit, quality, harm, cost, and operational measures are linked.
- High-impact approval and residual risk remain human-owned.

## Common mistakes

- beginning with a fashionable model or vendor;
- calling model capability a user outcome;
- treating a hand-picked demo as validation;
- ignoring reviewer and exception-handling cost;
- postponing data rights, misuse, and fallback decisions.

## Related modules

- [Product and project discovery](../lifecycle/discovery.md)
- [Model selection](model-selection.md)
- [Evaluation](evaluation.md)
- [Guardrails](guardrails.md)
- [AI privacy and security](privacy-and-security.md)
- [AI feature delivery playbook](../playbooks/ai-feature-delivery.md)
