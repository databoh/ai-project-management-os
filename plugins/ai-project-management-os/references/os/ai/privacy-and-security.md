---
title: AI Privacy and Security
type: ai-security-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../architecture/security.md
  - ai-product-discovery.md
related:
  - rag.md
  - agents-and-tools.md
  - mcp.md
  - guardrails.md
  - observability.md
---

# AI Privacy and Security

## Purpose

Extend the general security architecture with AI-specific data flows, threats, controls, vendor conditions, and incident paths across models, prompts, context, retrieval, tools, evaluation, telemetry, and human review.

## When to use

Use for every AI-enabled scope and whenever models, providers, prompts, knowledge sources, tools, agent autonomy, data purposes, affected populations, or deployment boundaries change.

## Authority boundary

The agent may map data, threats, and controls and draft recommendations. Named human security, privacy, legal, compliance, safety, and business authorities determine obligations, approve consequential processing and access, and accept material residual risk.

## Inputs

- system context, trust boundaries, actors, data flows, assets, and business impact;
- AI use, autonomy, models, providers, prompts, RAG, tools, MCP, reviewers, and telemetry;
- personal, confidential, regulated, copyrighted, proprietary, credential, and customer data;
- purpose, consent or other authority, notice, access, residency, retention, deletion, and subject rights;
- threats, abuse cases, supplier evidence, model artifacts, dependencies, and prior incidents;
- guardrails, evaluation, observability, fallback, response, and recovery needs.

## Workflow

### 1. Map the complete AI data lifecycle

Trace collection, prompt entry, preprocessing, context, provider transfer, retrieval, caching, model input and output, tool calls, logs, evaluation sets, human review, training or tuning, retention, export, correction, and deletion.

### 2. Minimize purpose and data

Define approved purposes and prohibit incompatible reuse. Remove unnecessary fields, redact or tokenize where effective, restrict production data in development and evaluation, and establish lawful or contractual authority.

### 3. Analyze AI-specific threats

Cover direct and indirect prompt injection, jailbreak, sensitive-data disclosure, cross-tenant retrieval, model or system-prompt extraction, training-data or membership inference where relevant, poisoning, insecure output handling, unauthorized tool use, excessive agency, denial of wallet, model or dependency supply chain, and unsafe vendor change.

### 4. Secure instruction and context boundaries

Separate policy, developer configuration, user input, retrieved content, memory, and tool results. Validate and label provenance; prevent lower-trust content from changing authority or control logic.

### 5. Control identities and actions

Apply least privilege, user and service attribution, tenant isolation, scoped credentials, secret management, approval, rate and spend limits, output validation, and downstream authorization.

### 6. Govern providers and artifacts

Assess data processing and training use, retention, regions, subprocessors, security evidence, incident notice, model changes, abuse handling, support, deletion, export, audit, licensing, provenance, vulnerability response, and exit.

### 7. Protect evaluation and operations

Classify datasets, prompts, outputs, reviewer tools, traces, and feedback. Limit access, avoid unnecessary raw content, secure exports, control annotation vendors, and define tamper-resistant audit evidence for consequential actions.

### 8. Validate

Use threat-model review, injection tests, authorization tests, tenant-isolation tests, data-leakage probes, tool-abuse scenarios, supply-chain checks, configuration review, vendor evidence, deletion verification, and incident exercises proportionate to impact.

### 9. Prepare response and recovery

Define detection, containment, provider escalation, key and token revocation, capability disablement, user or authority notification, evidence preservation, output correction, data deletion, safe fallback, and requalification.

## AI threat and control register

| Threat ID | Asset and scenario | Boundary or cause | Prevent | Detect | Respond and recover | Evidence | Owner | Residual risk |
|---|---|---|---|---|---|---|---|---|
| AIT-001 | Not established | Not established | Not established | Not established | Not established | Not provided | Not assigned | Not assessed |

## AI data and provider record

| Area | Required decision or evidence |
|---|---|
| Data category and purpose | Fields, subjects, sensitivity, necessity, authority, and prohibited use |
| Flow and location | Prompts, context, models, stores, reviewers, vendors, regions, and transfers |
| Provider behavior | Training use, retention, subprocessors, changes, deletion, and incident terms |
| Access and tenancy | Identities, scopes, isolation, support, and privileged paths |
| Retention and rights | Cache, logs, datasets, deletion, correction, export, and legal hold |
| Model and artifact supply chain | Origin, license, integrity, dependencies, scanning, and updates |
| Validation and approval | Threat tests, control evidence, authority, exceptions, and expiry |

## Decision rules

- User input, retrieved content, tool results, and model output are untrusted across their boundaries.
- Sensitive data must not enter a model or vendor path without approved purpose, minimization, authority, and lifecycle.
- Provider “no training” language does not answer retention, logging, access, region, or subprocessor questions.
- Model output must not be executed, rendered, queried, or stored unsafely downstream.
- Security and privacy controls apply to evaluation, support, and telemetry as well as production inference.
- A model refusal is not an authorization control.
- Residual risk and legal interpretation remain human decisions.

## Outputs

- complete AI data-flow and trust-boundary model;
- AI threat, control, provider, and artifact records;
- privacy, tenancy, credential, tool, evaluation, and telemetry controls;
- validation, incident, revocation, deletion, recovery, and exit plans;
- approved exceptions and residual-risk ownership.

## Quality checks

- Every AI data copy, processor, purpose, and retention path is visible.
- Injection, leakage, tenancy, output handling, tools, and supply chain are covered.
- Provider evidence addresses operations rather than marketing claims.
- Controls are enforced beyond prompt text.
- Deletion, revocation, containment, and fallback are testable.
- Required authorities explicitly approve residual exposure.

## Common mistakes

- sending production data to a prototype without review;
- logging prompts and outputs by default;
- treating a vendor contract as a complete threat model;
- testing direct injection but not poisoned retrieval or tool output;
- forgetting evaluation datasets and reviewer exports.

## Related modules

- [Security architecture](../architecture/security.md)
- [RAG](rag.md)
- [AI agents and tools](agents-and-tools.md)
- [MCP](mcp.md)
- [Guardrails](guardrails.md)
