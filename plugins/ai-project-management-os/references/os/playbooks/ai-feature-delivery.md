---
title: AI Feature Delivery Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../ai/ai-product-discovery.md
  - idea-to-mvp.md
related:
  - ../ai/evaluation.md
  - ../ai/guardrails.md
  - ../ai/privacy-and-security.md
  - ../ai/observability.md
  - production-release.md
---

# AI Feature Delivery Playbook

## Purpose

Deliver an AI-enabled feature from justified use case through evaluation, bounded architecture, controlled release, and production learning without treating model capability as product reliability.

## When to use

Use for generative, predictive, classification, extraction, recommendation, RAG, agent, MCP, or AI automation behavior. Apply as an overlay on the relevant product and delivery playbook.

## Authority boundary

The agent may frame, analyze, prototype, evaluate, and recommend. Named product, domain, security, privacy, legal, compliance, safety, finance, architecture, and production authorities approve consequential use, thresholds, autonomy, residual risk, and release.

## Workflow

| Step | AI-specific control | Exit evidence |
|---|---|---|
| 1. Route | Add the AI overlay to the current lifecycle mode and gate | Use boundary, decision, authorities, and required modules |
| 2. Discover | Use [AI product discovery](../ai/ai-product-discovery.md); compare non-AI, deterministic, assisted, and autonomous options | Proceed, conditional, more discovery, non-AI, or stop recommendation |
| 3. Define requirements | Specify quality, safety, fairness, privacy, security, human review, fallback, latency, cost, and observability | Traceable AI requirements and acceptance direction |
| 4. Establish evaluation | Use [AI evaluation](../ai/evaluation.md) for representative sets, baselines, slices, rubrics, thresholds, and reproducible configuration | Approved evaluation plan before selection or acceptance |
| 5. Select model and pattern | Compare candidates; design RAG, agents, tools, or MCP only where justified | Model baseline, solution direction, ADRs, and exit path |
| 6. Design controls | Use [guardrails](../ai/guardrails.md), privacy and security, least authority, human review, fallback, stop, and incident controls | Layered control plan with owners and test cases |
| 7. Model economics and operations | Forecast full cost; define version identity, telemetry, quality sampling, drift, limits, support, and response | Cost controls and AI observability plan |
| 8. Build and evaluate | Freeze system configuration; test normal, slice, adversarial, failure, recovery, and regression behavior | Mandatory criteria pass, fail, or authorized conditional result |
| 9. Prepare release | Apply DoD, G6, controlled cohort, exposure, guardrails, rollback, model fallback, communication, and review capacity | Explicit human go/no-go decision |
| 10. Observe and learn | Monitor outcome, quality, grounding, safety, actions, latency, cost, feedback, drift, and incidents | Expand, hold, adapt, rollback, stop, or re-enter discovery |

## AI feature control record

| Area | Required evidence |
|---|---|
| Use and outcome | Actor, problem, non-AI comparison, AI contribution, autonomy, and metric |
| Impact and authority | Consequence, reversibility, affected population, domain trust, and approvers |
| Data | Rights, provenance, representativeness, sensitivity, purpose, retention, and deletion |
| Evaluation | Dataset, baseline, metrics, slices, thresholds, run, result, and limitations |
| Model and context | Model baseline, prompt, RAG, context, tools, and version behavior |
| Controls | Guardrails, permissions, review, fallback, stop, appeal, and incident path |
| Operations | Latency, availability, cost, limits, telemetry, support, and drift |
| Release | Cohort, exposure, G6 evidence, rollback, authority, and observation horizon |

## Decision rules

- AI must outperform or justify itself against a credible simpler approach.
- A demonstration, benchmark, or average score is not acceptance evidence.
- Mandatory harm, legal, security, privacy, and critical-slice thresholds cannot be averaged away.
- Tool permission and business rules are enforced outside model reasoning.
- Human review requires capacity, expertise, timing, and quality control.
- A fallback must be evaluated and safer under the trigger condition.
- Model, prompt, corpus, retrieval, tool, and guardrail changes follow impact-based regression and release control.

## Outputs

- approved use-case and AI risk assessment;
- traceable requirements, model and architecture baseline;
- evaluation, guardrail, security, human-review, and fallback evidence;
- cost and observability controls;
- staged release and production decision record.

## Quality checks

- The AI contribution and autonomy are bounded.
- Representative evaluation precedes reliability claims.
- Data and affected-user rights are controlled.
- Permissions and consequential actions remain deterministic and accountable.
- Production signals map to exact configuration versions.
- Expansion depends on product, trust, quality, and cost evidence.

## Related modules

- [AI product discovery](../ai/ai-product-discovery.md)
- [AI evaluation](../ai/evaluation.md)
- [AI guardrails](../ai/guardrails.md)
- [AI privacy and security](../ai/privacy-and-security.md)
- [Production release](production-release.md)
