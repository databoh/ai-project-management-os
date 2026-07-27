---
title: Data and Integrations
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
  - security.md
  - scalability.md
  - observability.md
  - architecture-decision-records.md
---

# Data and Integrations

## Purpose

Define data ownership, classification, lifecycle, quality, lineage, contracts, and system interactions so information can move reliably, securely, observably, and recoverably across boundaries.

## When to use

Use for APIs, events, queues, webhooks, batch jobs, files, replication, data pipelines, migrations, external vendors, analytical flows, and any feature that creates, changes, shares, derives, retains, or deletes data.

## Inputs

- system context and trust boundaries;
- functional, data, interface, security, privacy, compliance, and audit requirements;
- domain ownership and authoritative systems of record;
- volume, velocity, latency, consistency, availability, and retention needs;
- existing schemas, contracts, quality evidence, integrations, incidents, and operational capability.

## Workflow

### 1. Define data domains and ownership

Identify business meaning, authoritative source, steward, producer, consumers, sensitivity, residency, and lifecycle. Separate ownership of meaning, storage, transport, and access.

### 2. Model critical data

Define entities, identifiers, relationships, states, invariants, required history, derivations, and reconciliation rules. Avoid premature physical schema detail in the solution outline.

### 3. Classify and control

Record personal, financial, confidential, regulated, public, or operational classification; lawful basis or policy; access; encryption; masking; retention; deletion; export; audit; and data-subject obligations where applicable.

### 4. Define integration contracts

For each interaction define:

- provider, consumer, purpose, and owner;
- synchronous, asynchronous, batch, file, or human-mediated mode;
- schema, semantics, identifiers, version, and compatibility;
- authentication, authorization, integrity, and confidentiality;
- volume, rate, size, ordering, latency, and availability;
- idempotency, deduplication, retries, timeout, backoff, and circuit behavior;
- partial failure, dead-letter, replay, reconciliation, and recovery;
- observability, support, change, deprecation, and test ownership.

### 5. Choose consistency and transaction boundaries

State where strong consistency is required and where eventual consistency is acceptable. Define user-visible intermediate states, compensation, concurrency, and source-of-truth behavior.

### 6. Establish data quality

Define completeness, validity, accuracy, uniqueness, timeliness, consistency, and lineage checks with thresholds, owners, quarantine, remediation, and consumer communication.

### 7. Plan migration and backfill

Define source profiling, mapping, cleansing, dry runs, reconciliation, cutover, coexistence, rollback or forward recovery, retention, and sign-off.

### 8. Validate and record decisions

Test representative contracts, failure modes, scale, data quality, security, and recovery. Record material storage, integration, consistency, or migration choices in ADRs.

## Data-domain record

| Field | Definition |
|---|---|
| Domain and owner | Business meaning and accountable steward |
| Authoritative source | System and state of record |
| Data classification | Sensitivity, residency, and regulatory scope |
| Producers and consumers | Purpose and authorized use |
| Identifiers and invariants | Stable identity and business rules |
| Quality measures | Thresholds, owner, and response |
| Lifecycle | Create, retain, archive, delete, export, and audit |
| Lineage and derivation | Origin, transformations, and downstream use |
| Recovery | Backup, replay, reconciliation, and acceptance |

## Integration register

| Integration ID | Provider | Consumer | Purpose | Mode | Contract and version | Demand and SLO | Failure and recovery | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|
| INT-001 | Not established | Not established | Not established | Not selected | Not established | Not established | Not established | Not assigned | Proposed |

## Decision rules

- One authoritative owner must exist for each critical data meaning.
- An API or event name is not a semantic contract.
- Exactly-once delivery claims require defined boundary and evidence; design consumers for safe retries where practical.
- Retries without idempotency, backoff, and limits can amplify failure.
- Eventual consistency requires explicit intermediate behavior and reconciliation.
- Do not retain data indefinitely because deletion is difficult.
- Schema and contract changes require compatibility, consumer, and deprecation analysis.
- Sensitive production data must not enter lower environments without authorized controls.
- Migration completion requires reconciliation evidence, not only job success.

## Outputs

- data-domain, ownership, classification, lifecycle, and quality model;
- integration contracts and register;
- consistency, failure, replay, reconciliation, and recovery direction;
- migration and compatibility plan;
- security, scalability, observability, test, ADR, and estimate inputs.

## Quality checks

- Data meaning and authority are explicit.
- Every integration has provider, consumer, contract, owner, and failure behavior.
- Privacy, residency, retention, and deletion are covered.
- Demand and quality thresholds are measurable.
- Compatibility and migration include reconciliation.
- Operations can detect and recover from partial failure.

## Common mistakes

- designing only the happy-path payload;
- using shared databases as undocumented integration contracts;
- assuming retries are harmless;
- omitting data ownership and deletion;
- migrating without profiling and reconciliation.

## Related modules

- [System context](system-context.md)
- [Security](security.md)
- [Scalability](scalability.md)
- [Observability](observability.md)
