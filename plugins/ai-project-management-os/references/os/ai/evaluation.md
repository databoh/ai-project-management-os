---
title: AI Evaluation
type: ai-quality-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ai-product-discovery.md
  - ../core/evidence-policy.md
related:
  - model-selection.md
  - rag.md
  - agents-and-tools.md
  - guardrails.md
  - observability.md
---

# AI Evaluation

## Purpose

Produce reproducible evidence that an AI-enabled system meets task-quality, safety, fairness, operational, and product thresholds for a defined use, population, configuration, and decision.

## When to use

Use before selecting a model, accepting an AI requirement, merging consequential behavior, expanding a rollout, changing a model, prompt, context, retrieval, tool, or guardrail, and when production evidence suggests drift or regression.

## Authority boundary

The agent may design evaluation, generate candidate cases, run analysis, and report results. Accountable product, domain, quality, safety, legal, or risk owners approve thresholds and acceptance for consequential uses. AI-generated judging cannot be the sole authority where material harm requires expert judgment.

## Inputs

- use-case boundary, user population, task taxonomy, impact, and autonomy;
- outcome, requirement, acceptance, safety, fairness, latency, and cost criteria;
- current product or non-AI baseline;
- representative inputs, reference answers or rubrics, difficult cases, and known failures;
- exact system configuration, data lineage, evaluator guidance, and environment;
- release, guardrail, fallback, monitoring, and human-review policies.

## Workflow

### 1. Define the decision

State whether the evaluation supports discovery, selection, development regression, gate acceptance, rollout, incident analysis, or ongoing monitoring. Name authority and cost of false acceptance or rejection.

### 2. Build a task and risk taxonomy

Partition normal tasks, edge cases, languages, user or domain slices, adversarial inputs, ambiguity, missing context, unsafe requests, retrieval conditions, tool failures, and abstention cases.

### 3. Establish datasets

Separate development, validation, and held-out acceptance sets where overfitting is plausible. Record source, consent or rights, collection period, transformations, labels, reviewer expertise, coverage, contamination risk, sensitivity, and version.

### 4. Define metrics and rubrics

Use task-appropriate deterministic measures, structured rubrics, pairwise preference, expert review, safety outcomes, calibration, abstention, latency, cost, and product measures. Define direction, aggregation, uncertainty, and slice reporting.

### 5. Set thresholds before the acceptance run

Specify minimum useful quality, mandatory harm limits, slice floors, regression tolerance, operational limits, and stop conditions. Do not select thresholds after seeing the final result.

### 6. Freeze the evaluated system

Record model, prompt, system instruction, retrieval corpus and index, context assembly, tools, policies, parameters, code, dependencies, environment, and evaluator versions.

### 7. Execute reproducibly

Preserve cases, outputs, tool traces, scores, errors, seeds where supported, repetitions, timing, costs, and exclusions. Blind or randomize human review when ordering or identity can bias judgment.

### 8. Analyze beyond averages

Report distributions, confidence or uncertainty, evaluator agreement, slice results, severe failures, correlations, and comparison with baseline. Investigate metric gaming and disagreement between automatic and human measures.

### 9. Decide and route failures

Record pass, conditional pass, fail, or insufficient evidence for each mandatory criterion. Link failures to requirements, work, risks, guardrails, fallback, and owners.

### 10. Continue in production

Use privacy-safe sampling, user feedback, adjudicated incidents, shadow evaluations, canaries, and drift indicators. Production monitoring complements rather than replaces controlled acceptance evidence.

## Evaluation plan

| Field | Required content |
|---|---|
| Evaluation ID, version, and decision | Stable identity and intended gate or choice |
| Use case and population | Approved boundary, actors, languages, domains, and exclusions |
| System under evaluation | Complete model, prompt, retrieval, tool, guardrail, and code baseline |
| Dataset and lineage | Sources, rights, time period, splits, slices, sensitivity, and limitations |
| Baseline | Current product, human, rule, or prior-system performance |
| Metrics and rubrics | Formula or scale, direction, aggregation, and evaluator |
| Thresholds | Overall, slice, harm, regression, latency, cost, and stop criteria |
| Procedure | Environment, repetitions, randomization, review, and reproducibility |
| Result | Distribution, slices, uncertainty, failures, and exclusions |
| Decision | Pass state, authority, conditions, expiry, and follow-up |

## AI acceptance record

| Criterion ID | Requirement or risk | Metric and slice | Threshold | Result | Evidence | Decision | Owner |
|---|---|---|---|---|---|---|---|
| AIE-001 | Not established | Not established | Not established | Not measured | Not provided | Pending | Not assigned |

## Decision rules

- Reliability claims are bounded to the evaluated use, data, configuration, and time.
- One aggregate score cannot hide a mandatory slice or severe-harm failure.
- Test-set leakage, benchmark contamination, and repeated manual tuning reduce evidence strength.
- Model-based evaluators require validation against qualified human judgment for the intended rubric.
- Absence of observed harm is not proof of safety when exposure or sample size is insufficient.
- A changed model, prompt, corpus, tool, policy, or orchestration path requires impact-based regression evaluation.
- Conditional acceptance names the gap, owner, expiry, exposure control, and authorized approver.

## Outputs

- versioned evaluation plan, datasets, rubrics, runs, and acceptance record;
- baseline comparison, slices, uncertainty, and severe-failure analysis;
- regression suite and production evaluation direction;
- defects, risks, guardrail changes, and release-gate evidence;
- explicit limitations on every reliability claim.

## Quality checks

- The evaluation decision and system boundary are explicit.
- Data is representative enough for the stated claim and has traceable rights.
- Thresholds and mandatory slices were set before acceptance results.
- Baselines, failures, uncertainty, and evaluator disagreement are visible.
- Runs are reproducible and configuration-complete.
- Human authority accepts consequential residual risk.

## Common mistakes

- using only happy-path or synthetic cases;
- tuning directly against the acceptance set;
- reporting averages without slices and severe failures;
- treating an LLM judge as ground truth;
- changing production configuration after evaluation without requalification.

## Related modules

- [AI product discovery](ai-product-discovery.md)
- [Model selection](model-selection.md)
- [Guardrails](guardrails.md)
- [AI observability](observability.md)
- [Evidence policy](../core/evidence-policy.md)
