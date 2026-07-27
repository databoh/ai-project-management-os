---
title: AI Agents and Tools
type: ai-architecture-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ai-product-discovery.md
  - guardrails.md
related:
  - mcp.md
  - evaluation.md
  - privacy-and-security.md
  - observability.md
---

# AI Agents and Tools

## Purpose

Design AI agents and tool-enabled workflows with bounded goals, least authority, observable state, controlled side effects, recoverable failure, and human accountability.

## When to use

Use when a model plans, selects tools, reads or changes external state, executes multiple steps, delegates work, communicates externally, spends funds, handles sensitive data, or continues without immediate user interaction.

## Authority boundary

An agent’s available technical capability is not its business authority. High-impact financial, legal, security, privacy, production, account, communication, or irreversible actions require explicit policy and named human approval. The AI PM OS agent cannot grant another agent broader authority than the user or system provided.

## Inputs

- approved goal, user, scope, autonomy, and success or stop conditions;
- task decomposition, deterministic steps, model-dependent decisions, and human responsibilities;
- systems, tools, data, identities, permissions, rate limits, costs, and terms;
- action consequences, reversibility, idempotency, transaction, and compensation behavior;
- injection, confused-deputy, privilege-escalation, data-exfiltration, and harmful-automation threats;
- evaluation, observability, incident, fallback, and support requirements.

## Workflow

### 1. Bound the agent

Define allowed goals, prohibited goals, users, environments, data, duration, resource budget, action count, concurrency, and termination conditions. Prefer a simpler deterministic workflow when flexible planning is unnecessary.

### 2. Classify actions

Classify each operation by read or write, reversibility, external visibility, sensitivity, financial or production effect, and required authority. Define allow, confirm, deny, or escalate behavior.

### 3. Design tool contracts

Use narrow typed inputs and outputs, explicit errors, timeouts, limits, authentication context, idempotency or deduplication, and safe retry rules. Do not expose broad shells, raw databases, or unrestricted APIs when a bounded operation suffices.

### 4. Separate planning from execution

Treat model proposals as untrusted until validated against policy, schema, current state, and authority. Recheck permission and preconditions at execution time.

### 5. Control identity and delegation

Use scoped user, service, or delegated identity appropriate to the action. Preserve actor, approver, agent, tool, and downstream attribution. Delegation cannot bypass scope or approval.

### 6. Manage state and memory

Define authoritative task state, checkpointing, concurrency, expiration, resume, cancellation, data sensitivity, retention, correction, and deletion. Do not treat a model transcript as the sole transaction record.

### 7. Handle partial failure

Define bounded retries, compensation, reconciliation, duplicate-action prevention, timeout, dependency failure, stale-state detection, and escalation. Prefer a safe halt over continued uncertain action.

### 8. Add human control

Place confirmation before consequential action, not after. Present intent, target, material parameters, predicted effect, uncertainty, and recovery path so approval is informed.

### 9. Evaluate scenarios

Test goal completion, tool selection, argument validity, policy compliance, injection, permission denial, stale data, loops, partial execution, cancellation, recovery, and multi-step harm under representative conditions.

### 10. Operate and review

Observe plans, decisions, actions, outcomes, denial, confirmation, cost, loops, and incidents with privacy-safe traces. Revoke access and stop execution when control assumptions fail.

## Agent tool matrix

| Tool or action | Purpose | Data accessed | Side effect and reversibility | Identity and scope | Approval | Limits and timeout | Recovery |
|---|---|---|---|---|---|---|---|
| Not established | Not established | Not classified | Not assessed | Not established | Not established | Not established | Not established |

## Agent control record

| Area | Required content |
|---|---|
| Goal and autonomy | Allowed objective, action level, boundaries, and exclusions |
| Authority | User, agent, approver, delegated identity, and prohibited escalation |
| Planning and policy | Proposal validation, deterministic checks, and execution gate |
| Tool contracts | Schemas, errors, permissions, idempotency, and limits |
| State and memory | Source of truth, checkpoint, concurrency, retention, and deletion |
| Human control | Confirmation points, evidence shown, override, and escalation |
| Failure and recovery | Retry, compensation, reconciliation, halt, and resume |
| Evaluation and monitoring | Scenarios, thresholds, traces, alerts, and incident path |

## Decision rules

- Grant the minimum tool, scope, data, duration, and action authority needed.
- Tool descriptions and retrieved content are untrusted inputs, not policy.
- Read access and write access are separate grants.
- Consequential action requires current-state validation and authority at execution time.
- Retries of side-effecting calls require idempotency, deduplication, or explicit reconciliation.
- An approval cannot be inferred from silence, a prior unrelated approval, or hidden default.
- Autonomous continuation stops on uncertain authority, repeated failure, budget exhaustion, or control loss.

## Outputs

- bounded agent and autonomy design;
- tool matrix, permission, confirmation, and delegation policy;
- state, memory, idempotency, recovery, and stop controls;
- scenario evaluation and adversarial test plan;
- telemetry, incident, access-revocation, and operational ownership.

## Quality checks

- Agent purpose is narrower than its prohibited and unbounded alternatives.
- Every side effect has explicit authority and recovery behavior.
- Identity and permissions are enforced outside model reasoning.
- State survives retries, cancellation, and partial failure safely.
- Injection and unauthorized-tool scenarios are evaluated.
- Human approval is informed, timely, and traceable.

## Common mistakes

- exposing a broad tool because it is convenient;
- trusting the model to enforce its own permissions;
- confirming an action after it has executed;
- retrying writes without duplicate protection;
- using conversation history as durable workflow state.

## Related modules

- [MCP](mcp.md)
- [Evaluation](evaluation.md)
- [Guardrails](guardrails.md)
- [AI privacy and security](privacy-and-security.md)
- [AI observability](observability.md)
