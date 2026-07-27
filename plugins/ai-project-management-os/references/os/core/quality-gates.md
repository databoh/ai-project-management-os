---
title: Quality Gates
type: control-framework
status: active
version: 0.9.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - operating-principles.md
  - decision-policy.md
  - evidence-policy.md
  - assumptions-policy.md
related:
  - ../lifecycle/overview.md
  - ../lifecycle/solution-outline.md
  - ../lifecycle/delivery-setup.md
  - ../ai/ai-product-discovery.md
  - ../ai/evaluation.md
  - ../metrics/metric-dictionary.md
---

# Quality Gates

## Purpose

Define minimum evidence and control checks before work crosses a material lifecycle boundary. Gates are decision aids, not ceremonial checklists.

## Gate outcomes

- **Pass:** Required criteria are satisfied.
- **Conditional pass:** Named gaps are time-bound, owned, and explicitly accepted by the appropriate authority.
- **Fail:** A required criterion is absent or residual risk exceeds authority.
- **Not applicable:** The criterion is irrelevant and the reason is recorded.

Only accountable humans may accept a conditional pass for D2 or D3 decisions as classified by the [decision policy](decision-policy.md).

## Foundation gates

| Gate | Required before | Minimum criteria |
|---|---|---|
| G0 — Intake readiness | Starting structured discovery | Request, requester, context, expected outcome, urgency, known constraints, and source materials are captured; missing items are visible |
| G1 — Discovery sufficiency | Defining product and scope | Problem, target users, current alternatives, stakeholders, value, constraints, evidence, critical assumptions, and success indicators are understood enough for the next decision |
| G2 — Product definition | Committing to a solution direction | Intended outcomes, non-goals, user and business value, governed success and guardrail measures, decision thresholds, and accountable owners are explicit |
| G3 — Scope and solution readiness | Planning-level estimation or baseline commitment | In/out boundaries, requirements, dependencies, system context, feasible options, solution assumptions and decisions, data and integration implications, security, scalability, observability, operations, risks, and approval needs are visible |
| G4 — Plan commitment | Approving roadmap, budget, or target date | Decomposition, estimates, capacity, dependencies, QA, reviews, release work, uncertainty reserve, confidence, and critical path are represented |
| G5 — Delivery readiness | Starting controlled execution | Ownership, workflow, acceptance criteria, Definition of Ready/Done or equivalent, environments, governed reporting and metric contracts, escalation, and change control are agreed |
| G6 — Release readiness | Production release | Approved scope, test evidence, unresolved defects and risk acceptance, security/compliance checks, migration, rollback, observability, communication, and support readiness are verified |
| G7 — Improvement closure | Ending hypercare or an improvement cycle | Outcomes and governed metrics are reviewed, incident impact and learning are controlled, feedback is triaged, residual actions have owners, and lessons change the system where appropriate |

## AI extension

For any AI-enabled scope, use [AI product discovery](../ai/ai-product-discovery.md) and add checks proportionate to risk for evaluation data, accuracy and hallucination, prompt injection, data leakage, unauthorized tool use, privacy, security, bias, latency, token and model cost, context limits, vendor dependency, fallback behavior, [observability](../ai/observability.md), and human review.

An AI feature cannot be called reliable without a defined [evaluation](../ai/evaluation.md) method, acceptance threshold, representative test set, and monitored production behavior.

| AI extension criterion | Required evidence |
|---|---|
| Use and impact | Bounded AI contribution, autonomy, affected population, consequence, and non-AI comparison |
| Evaluation | Representative data, baseline, metrics, slices, thresholds, reproducible result, and limitations |
| Safety and human control | Misuse cases, layered guardrails, review, fallback, stop conditions, and appeal |
| Privacy and security | Data lifecycle, injection, leakage, tenancy, tools, providers, supply chain, and residual risk |
| Operations and economics | Version identity, latency, reliability, cost, limits, observability, support, and incident path |
| Change and authority | Regression triggers, rollout, rollback, approvals, exceptions, and expiry |

## Gate workflow

1. Identify the next material boundary and applicable gate.
2. Evaluate each criterion using evidence, not confidence language alone.
3. Record gaps, owner, due point, impact, and linked assumption or risk.
4. Assign pass, conditional pass, fail, or not applicable.
5. Obtain the required approval for commitments or accepted residual risk.
6. Recheck the gate when scope, evidence, risk, or context materially changes.

## Quality checks

- Gate evidence is linked and current.
- Conditional passes have owners, expiry points, and authorized acceptance.
- Failed gates do not silently become commitments.
- AI extensions are applied when any model, agent, RAG, or AI automation is in scope.
- Tailoring removes irrelevant criteria only with a recorded rationale.

## Related modules

- [Decision policy](decision-policy.md)
- [Evidence policy](evidence-policy.md)
- [Assumptions policy](assumptions-policy.md)
- [Lifecycle overview](../lifecycle/overview.md)
- [Solution outline](../lifecycle/solution-outline.md)
- [Delivery setup](../lifecycle/delivery-setup.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [AI evaluation](../ai/evaluation.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
