---
title: Security Architecture
type: architecture-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - system-context.md
  - ../lifecycle/requirements.md
related:
  - data-and-integrations.md
  - cloud-and-infrastructure.md
  - observability.md
  - architecture-decision-records.md
---

# Security Architecture

## Purpose

Translate business impact, data, trust boundaries, threats, obligations, and operational realities into proportionate preventive, detective, responsive, and recovery controls.

## When to use

Use for every material product or system change, with increased rigor for authentication, authorization, payments, financial services, personal or regulated data, external integrations, public interfaces, privileged tools, infrastructure, and production migration.

## Authority boundary

The agent may identify threats, map controls, expose gaps, and draft recommendations. A named human security, privacy, legal, compliance, or risk authority approves interpretations and accepts material residual risk.

## Inputs

- system context, data classification, integrations, environments, and ownership;
- security, privacy, legal, compliance, contractual, and audit requirements;
- business impact, threat intelligence, prior incidents, vulnerabilities, and abuse cases;
- identity, access, secrets, dependencies, software supply chain, and operational model;
- availability, recovery, observability, and incident-response needs.

## Workflow

### 1. Define security scope and assets

Identify protected outcomes, users, data, credentials, funds, services, infrastructure, decisions, and operational capabilities. Record business impact and owners.

### 2. Map trust and attack surfaces

Use the system context and data flows to identify identities, entry points, privilege changes, public interfaces, admin paths, third parties, build systems, and trust-boundary crossings.

### 3. Model threats and abuse

Use an appropriate method such as STRIDE, attack trees, misuse cases, or scenario analysis. Cover external, insider, supply-chain, automation, configuration, and operational threats.

### 4. Define identity and authorization

Specify identity source, authentication assurance, session behavior, service identity, authorization model, tenant isolation, privileged access, break-glass, lifecycle, and review.

### 5. Protect data and secrets

Define minimization, classification, encryption, key ownership, secret storage and rotation, masking, tokenization, backup protection, retention, deletion, and non-production policy.

### 6. Secure design and delivery

Address secure defaults, input and output handling, dependency and artifact provenance, code and configuration review, scanning, patching, environment separation, CI/CD permissions, and change evidence.

### 7. Design detection and response

Define security events, audit trails, tamper resistance, monitoring, alert ownership, triage, containment, evidence preservation, recovery, disclosure, and learning.

### 8. Validate

Use design review, threat-model review, automated checks, dependency analysis, configuration review, penetration testing, access review, restore testing, and control evidence proportionate to risk.

### 9. Record and approve

Trace threats to requirements and controls. Record material security choices in ADRs and route residual-risk acceptance to the authorized human owner.

## Threat and control register

| Threat ID | Asset and scenario | Likelihood | Impact | Existing control | Required control | Detection and response | Owner | Residual risk |
|---|---|---|---|---|---|---|---|---|
| THR-001 | Not established | Not assessed | Not assessed | Not assessed | Not established | Not established | Not assigned | Not assessed |

## Security architecture record

| Area | Required decision or evidence |
|---|---|
| Identity and authentication | Assurance, federation, session, recovery, and lifecycle |
| Authorization and tenancy | Roles, attributes, ownership, isolation, and denial defaults |
| Data and cryptography | Classification, minimization, encryption, keys, retention, and deletion |
| Secrets and privileged access | Storage, rotation, just-in-time access, review, and emergency path |
| Application and API security | Validation, abuse, rate, authorization, integrity, and error handling |
| Supply chain and CI/CD | Dependencies, provenance, signing, permissions, scanning, and patching |
| Infrastructure and network | Segmentation, exposure, hardening, configuration, and drift |
| Logging and detection | Audit events, protection, alerting, triage, and retention |
| Incident and recovery | Containment, evidence, communication, restore, and lessons |
| Third parties | Due diligence, contract, access, monitoring, change, and exit |

## Decision rules

- Compliance is a minimum obligation, not proof of security.
- Authentication does not replace resource-level authorization.
- Least privilege applies to people, services, automation, and support access.
- Secrets must not be stored in source code, tickets, chat, logs, or images.
- Encryption requires key ownership, lifecycle, access, and recovery decisions.
- Security logging must avoid unnecessary sensitive-data exposure.
- Critical controls require evidence in the relevant environment.
- Residual risk cannot be silently accepted by an agent or delivery team.
- Security exceptions need scope, compensating controls, owner, expiry, and review.

## Outputs

- asset, trust-boundary, threat, and abuse model;
- security architecture and control requirements;
- identity, data, supply-chain, detection, incident, and third-party direction;
- validation evidence, residual risks, exceptions, ADRs, and approvals;
- inputs to DoD, release readiness, observability, operations, and G3.

## Quality checks

- Scope, assets, impact, and trust boundaries are explicit.
- Threats include abuse and operational paths.
- Controls are preventive, detective, responsive, and recoverable.
- Identity, authorization, secrets, data, and supply chain are covered.
- Validation matches environment and risk.
- Residual risk has authorized ownership.

## Common mistakes

- treating authentication as the complete security design;
- relying on compliance certification alone;
- logging sensitive values for debugging;
- granting permanent broad support access;
- postponing threat modeling until release.

## Related modules

- [System context](system-context.md)
- [Data and integrations](data-and-integrations.md)
- [Cloud and infrastructure](cloud-and-infrastructure.md)
- [Observability](observability.md)
