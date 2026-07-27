---
title: Model Context Protocol Integration
type: ai-integration-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - agents-and-tools.md
  - ../architecture/data-and-integrations.md
related:
  - privacy-and-security.md
  - evaluation.md
  - observability.md
  - ../architecture/architecture-decision-records.md
---

# Model Context Protocol Integration

## Purpose

Govern MCP client-server integrations as explicit trust, capability, identity, data, and operational boundaries so protocol convenience does not become uncontrolled authority.

## When to use

Use when an AI application consumes or exposes tools, resources, prompts, or other capabilities through MCP. Apply the authoritative protocol version and implementation documentation for syntax; this module owns product, architecture, security, and delivery controls.

## Inputs

- approved agent purpose, users, autonomy, and tool matrix;
- client, server, transport, deployment, ownership, and trust boundaries;
- capability inventory, schemas, side effects, data classifications, and downstream systems;
- identity, authentication, authorization, consent, tenancy, and delegation requirements;
- protocol and implementation versions, compatibility, change, and support expectations;
- latency, availability, rate, cost, logging, incident, and recovery needs.

## Workflow

### 1. Define the integration boundary

Record client, server, operators, users, environments, transport, network path, downstream dependencies, and whether the server is first-party, customer-operated, or third-party.

### 2. Inventory capabilities

For every exposed tool, resource, or prompt, record purpose, input and output schema, sensitivity, side effects, authority, limits, expected errors, and owner. Disable capabilities not required by the approved use case.

### 3. Establish trust and identity

Define server authentication, client identity, user delegation, token audience, scope, tenant context, credential storage, rotation, expiry, revocation, and reauthorization.

### 4. Enforce authorization outside the model

Validate the caller, user, tenant, capability, target object, parameters, and current state at the trusted execution boundary. Capability discovery does not grant permission to invoke.

### 5. Protect content and schemas

Treat descriptions, prompt content, resource content, tool results, and errors as untrusted data. Validate schemas, sizes, media types, references, and output handling; prevent content from overriding policy.

### 6. Control side effects

Apply confirmation, idempotency, deduplication, transaction or compensation behavior, rate and spend limits, timeouts, cancellation, and audit attribution according to action impact.

### 7. Design lifecycle and compatibility

Pin or record supported protocol, client, server, and capability versions. Define discovery refresh, schema-change handling, deprecation, qualification, rollback, and fallback.

### 8. Validate adversarially

Test malicious descriptions, poisoned resources, schema confusion, cross-tenant access, credential misuse, unauthorized capability invocation, replay, excessive output, loops, dependency failure, and partial side effects.

### 9. Operate

Monitor discovery, connection, authorization, capability calls, denial, error, latency, rate, data volume, side effects, versions, and revocation without logging unnecessary sensitive content.

## MCP integration register

| Field | Required content |
|---|---|
| Integration ID and owner | Stable identity, business owner, and technical operator |
| Client and server | Product, deployment, operator, environment, and trust classification |
| Protocol and implementation | Supported versions, libraries, compatibility, and provenance |
| Capability allowlist | Required tools, resources, prompts, schemas, and rationale |
| Identity and tenancy | Authentication, delegation, scopes, isolation, expiry, and revocation |
| Data handling | Classification, purpose, minimization, retention, and downstream use |
| Side-effect policy | Approval, limits, idempotency, recovery, and attribution |
| Validation | Functional, security, failure, and compatibility evidence |
| Operations | SLO, telemetry, alerts, support, incident, and change ownership |
| Exit | Disablement, credential revocation, data deletion, and fallback |

## Capability matrix

| Capability | Type | Data and target | Side effect | Required scope | Human approval | Limit | Owner |
|---|---|---|---|---|---|---|---|
| Not established | Not classified | Not classified | Not assessed | Not established | Not established | Not established | Not assigned |

## Decision rules

- A connected MCP server is a supply-chain and trust dependency.
- Capability discovery is descriptive; authorization remains explicit and contextual.
- Server or tool text must never change system policy or expand authority.
- Credentials must be scoped to the intended audience, user, tenant, purpose, and duration.
- New or changed capabilities require impact-based review before availability.
- Side effects follow the same approval and recovery policy regardless of transport.
- Disconnecting a server includes credential revocation, capability removal, data handling, and operational verification.

## Outputs

- MCP boundary and integration register;
- allowlisted capability, schema, identity, and authorization design;
- side-effect, confirmation, lifecycle, compatibility, and exit controls;
- adversarial, failure, and regression evaluation evidence;
- telemetry, incident, support, and ownership model.

## Quality checks

- Client, server, operator, user, and tenant boundaries are explicit.
- Only necessary capabilities are exposed and authorized.
- Content cannot override policy or permission.
- Side effects are bounded, attributable, and recoverable.
- Version, change, revocation, and fallback paths are tested.
- Sensitive MCP telemetry follows purpose and minimization rules.

## Common mistakes

- trusting a server because it uses the protocol;
- exposing every discovered capability;
- sharing one broad credential across users or tenants;
- assuming schemas prevent semantic misuse;
- omitting revocation and server-removal testing.

## Related modules

- [AI agents and tools](agents-and-tools.md)
- [AI privacy and security](privacy-and-security.md)
- [Evaluation](evaluation.md)
- [Data and integrations](../architecture/data-and-integrations.md)
