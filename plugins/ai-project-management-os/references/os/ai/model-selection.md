---
title: AI Model Selection
type: ai-architecture-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ai-product-discovery.md
  - evaluation.md
related:
  - cost-management.md
  - privacy-and-security.md
  - observability.md
  - ../architecture/solution-options.md
---

# AI Model Selection

## Purpose

Select and govern a model or model portfolio using task evidence, mandatory controls, operational fit, lifecycle consequences, and total cost rather than popularity or a single benchmark.

## When to use

Use when choosing or changing a hosted, managed, open-weight, embedded, fine-tuned, specialized, multimodal, reranking, embedding, or moderation model. Reassess after material model, provider, data, prompt, retrieval, demand, price, policy, or risk change.

## Inputs

- approved AI use-case boundary and autonomy level;
- representative evaluation set, baselines, metrics, slices, and mandatory thresholds;
- modality, language, context, output structure, tool, and grounding needs;
- privacy, security, residency, licensing, intellectual-property, and compliance constraints;
- latency, availability, throughput, rate-limit, deployment, support, and recovery needs;
- demand scenarios, unit economics, team capability, portability, and exit requirements.

## Workflow

### 1. Define the selection decision

State the task, environment, decision horizon, authority, candidate scope, mandatory exclusions, and consequences of a wrong selection.

### 2. Establish criteria before testing

Define quality, safety, fairness, robustness, latency, availability, privacy, security, operability, portability, support, and cost measures. Separate mandatory thresholds from weighted preferences.

### 3. Build a credible candidate set

Include the current model or non-model baseline, smaller or specialized candidates, managed and self-hosted paths where feasible, and cascades or routing only when their complexity has a justified benefit.

### 4. Verify provider and artifact conditions

Record exact model identifier and version behavior, access mode, terms, data handling, training use, retention, regional processing, rate limits, deprecation, support, incident communication, licensing, and artifact provenance.

### 5. Evaluate consistently

Run candidates on the same representative cases, settings, repetitions where variance matters, and operational conditions. Preserve raw results, failures, exclusions, confidence, and evaluator agreement.

### 6. Test operational behavior

Measure end-to-end latency distributions, throughput, concurrency, context limits, structured-output reliability, tool behavior, timeout, fallback, regional availability, and observability—not only isolated model response time.

### 7. Model total cost

Include input, output, embedding, image, audio, cache, hosting, accelerator, storage, transfer, orchestration, evaluation, moderation, human review, support, and failure costs under named demand scenarios.

### 8. Assess dependency and change

Evaluate portability of prompts, tools, schemas, embeddings, fine-tunes, safety controls, telemetry, and stored data. Define a version pinning, qualification, rollback, and provider-exit path.

### 9. Decide and baseline

Record recommendation, trade-offs, confidence, residual risks, required approvals, fallback, review triggers, and accepted model configuration. Material choices use an ADR.

## Candidate comparison

| Criterion | Mandatory threshold or measure | Baseline | Candidate A | Candidate B | Evidence and confidence |
|---|---|---|---|---|---|
| Task quality | Not established | Not measured | Not measured | Not measured | Not provided |
| Safety and misuse | Not established | Not measured | Not measured | Not measured | Not provided |
| Slice performance | Not established | Not measured | Not measured | Not measured | Not provided |
| Latency and reliability | Not established | Not measured | Not measured | Not measured | Not provided |
| Privacy and security | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Unit and total cost | Not established | Not calculated | Not calculated | Not calculated | Not provided |
| Operability and change | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Portability and exit | Not established | Not assessed | Not assessed | Not assessed | Not provided |

## Model baseline record

| Field | Required content |
|---|---|
| Model baseline ID | Model, provider or artifact, version behavior, region, and access path |
| Configuration | Parameters, output schema, tools, prompt and retrieval versions |
| Intended use | Approved tasks, users, autonomy, and environments |
| Prohibited use | Unsupported or unapproved tasks and data |
| Evaluation evidence | Dataset, run, metrics, thresholds, slices, and result |
| Operational limits | Context, quota, latency, concurrency, availability, and degradation |
| Data and legal conditions | Processing, retention, training, residency, license, and obligations |
| Cost basis | Price or infrastructure inputs, demand assumptions, and observation date |
| Fallback and rollback | Trigger, route, owner, and compatibility |
| Approval and review | Authority, date, expiry, and change triggers |

## Decision rules

- Public benchmarks are discovery inputs, not product acceptance evidence.
- A weighted score cannot override failed security, legal, safety, or critical-quality thresholds.
- Compare end-to-end systems when prompts, retrieval, tools, and post-processing materially affect results.
- Lower price per token does not prove lower cost per successful outcome.
- Model aliases or silent provider updates require qualification controls appropriate to impact.
- Fine-tuning is an option only after the problem, data rights, baseline, and simpler controls are understood.
- Production model changes follow controlled evaluation, approval, rollout, monitoring, and rollback.

## Outputs

- criteria and candidate comparison;
- reproducible evaluation and operational evidence;
- model baseline, fallback, change, and exit plan;
- cost forecast, risks, assumptions, and ADR inputs;
- approved recommendation or explicit reason to continue discovery.

## Quality checks

- Criteria and mandatory thresholds preceded selection.
- Candidates were tested on comparable representative evidence.
- Exact configuration and version behavior are recorded.
- Data, legal, safety, operational, cost, and exit implications are visible.
- Fallback and requalification triggers have owners.
- Approval matches the decision class.

## Common mistakes

- choosing from leaderboard rank alone;
- comparing candidates with different prompts or case sets without disclosure;
- ignoring output variance and slice failures;
- using list price without demand and review cost;
- assuming a provider’s newest model is automatically safer or better.

## Related modules

- [AI product discovery](ai-product-discovery.md)
- [Evaluation](evaluation.md)
- [Cost management](cost-management.md)
- [AI privacy and security](privacy-and-security.md)
- [Solution options](../architecture/solution-options.md)
