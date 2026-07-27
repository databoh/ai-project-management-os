---
title: AI Guardrails
type: ai-control-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ai-product-discovery.md
  - evaluation.md
related:
  - agents-and-tools.md
  - privacy-and-security.md
  - observability.md
  - ../core/decision-policy.md
---

# AI Guardrails

## Purpose

Design layered controls that keep AI behavior within approved product, safety, legal, security, privacy, cost, and operational boundaries and route uncertainty to safe fallback or human judgment.

## When to use

Use for every AI-enabled feature. Increase control strength with consequence, autonomy, scale, user vulnerability, data sensitivity, irreversibility, and difficulty of detecting failure.

## Authority boundary

The agent may propose policies, controls, tests, and escalation. Named human product, domain, safety, legal, compliance, security, privacy, and operations owners approve consequential boundaries, prohibited behavior, human-review policy, exceptions, and residual risk.

## Inputs

- approved use case, users, impact, autonomy, requirements, and prohibited uses;
- known failure, misuse, abuse, injection, leakage, bias, and automation scenarios;
- data classifications, domain obligations, user expectations, and accessibility needs;
- model, RAG, agent, tool, and MCP architecture;
- evaluation evidence, uncertainty, human-review capacity, and production signals;
- fallback, recovery, support, incident, and communication constraints.

## Workflow

### 1. Define behavioral boundaries

State allowed, conditionally allowed, disallowed, and escalation-required behavior for inputs, outputs, decisions, and actions. Use precise scenarios and authorities rather than vague principles.

### 2. Map control points

Identify controls at product access, input, instruction hierarchy, retrieved context, model, output, business rules, tool authorization, action execution, user interface, human review, monitoring, and incident response.

### 3. Prevent

Use eligibility and purpose checks, data minimization, instruction separation, allowlists, schema validation, deterministic rules, least privilege, rate and spend limits, and restricted action paths.

### 4. Detect

Detect policy violations, unsafe or unsupported output, injection indicators, sensitive-data exposure, unusual tool sequences, threshold breaches, repeated failure, user complaints, and control bypass.

### 5. Respond

Define block, transform, redact, abstain, request clarification, downgrade capability, route to a human, use a deterministic fallback, stop action, rollback, contain, or disable behavior.

### 6. Design human review

Specify which cases require pre-action approval, post-output review, sampling, escalation, or expert adjudication. Define reviewer qualification, evidence shown, response time, workload, disagreement, override, and audit trail.

### 7. Communicate appropriately

Make AI involvement, limitations, uncertainty, evidence, user controls, appeal, and correction visible where needed for informed use. Do not use disclosure as a substitute for control.

### 8. Evaluate controls independently

Test bypass, false acceptance, false rejection, edge slices, adversarial variants, multilingual behavior, tool paths, fallback, reviewer performance, and degraded dependencies. Measure guardrail impact on useful behavior.

### 9. Govern exceptions and change

Record exception scope, rationale, compensating control, exposure, owner, approver, expiry, and monitoring. Requalify controls after relevant model, prompt, corpus, tool, policy, or threat change.

## Guardrail plan

| Risk or policy | Control point | Prevent | Detect | Respond or fallback | Human role | Metric and threshold | Owner |
|---|---|---|---|---|---|---|---|
| Not established | Not established | Not established | Not established | Not established | Not established | Not established | Not assigned |

## Human-review policy

| Field | Required content |
|---|---|
| Review trigger | Impact, uncertainty, policy, confidence, exception, or sampling rule |
| Review timing | Before action, before exposure, after output, or retrospective sample |
| Reviewer | Role, expertise, independence, and authority |
| Evidence | Input, relevant context, model output, sources, rationale, and uncertainty |
| Decision options | Approve, edit, reject, escalate, stop, or correct |
| Service expectation | Queue, response, expiry, and safe behavior while waiting |
| Quality control | Calibration, agreement, audit, feedback, and reviewer wellbeing |
| Record | Decision, actor, time, reason, override, and downstream effect |

## Decision rules

- Guardrails are defense in depth; no single prompt, classifier, or filter is sufficient for material risk.
- Deterministic policy and permission checks belong outside probabilistic model judgment.
- Human review is a designed control with capacity and quality limits, not a generic safety claim.
- A confidence score is not calibrated authority unless validated for the use and population.
- Fallback must be safer and tested; silently switching to an unevaluated model is not safe degradation.
- Guardrail effectiveness and impact on legitimate users require separate measurement.
- Material exceptions require human approval and expiration.

## Outputs

- behavioral policy and layered guardrail plan;
- human-review, escalation, fallback, stop, and appeal policy;
- control evaluation, bypass, and regression evidence;
- exceptions, owners, approval, and review triggers;
- product, requirement, DoD, release, observability, and incident inputs.

## Quality checks

- Allowed and prohibited behavior is scenario-specific.
- Preventive, detective, responsive, and recovery controls are represented.
- Tool and action permissions are enforced deterministically.
- Human review is qualified, timely, measurable, and sustainable.
- Bypass and false-positive behavior are evaluated.
- Exceptions and residual risk have authorized owners.

## Common mistakes

- relying on a system prompt as the only guardrail;
- adding a generic content filter without a threat model;
- sending every uncertain case to an unstaffed review queue;
- treating refusal rate as proof of safety;
- deploying fallback behavior that was never evaluated.

## Related modules

- [Evaluation](evaluation.md)
- [AI agents and tools](agents-and-tools.md)
- [AI privacy and security](privacy-and-security.md)
- [AI observability](observability.md)
