---
title: Retrieval-Augmented Generation
type: ai-architecture-method
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ai-product-discovery.md
  - ../architecture/data-and-integrations.md
related:
  - evaluation.md
  - privacy-and-security.md
  - observability.md
  - cost-management.md
---

# Retrieval-Augmented Generation

## Purpose

Design and govern retrieval-augmented generation so answers use authorized, current, relevant, traceable evidence while treating retrieved content as untrusted data rather than instructions.

## When to use

Use when an AI system must ground behavior in enterprise, product, customer, regulatory, or changing information that cannot be safely or economically encoded in a base model or deterministic lookup alone.

## Inputs

- approved questions, users, answer boundaries, and source-of-truth expectations;
- source owners, formats, languages, quality, sensitivity, access rules, rights, and update frequency;
- corpus volume, query demand, freshness, latency, availability, and cost constraints;
- expected citations, abstention, fallback, and human-review behavior;
- prompt-injection, cross-tenant, data-leakage, deletion, and poisoning risks;
- representative questions, relevant evidence, expected answers, and hard negatives.

## Workflow

### 1. Confirm retrieval is the right mechanism

Compare direct search, structured queries, curated content, deterministic rules, longer supplied context, and RAG. Use generation only where synthesis or transformation adds justified value.

### 2. Define source governance

For every source record authority, owner, provenance, rights, sensitivity, allowed users and purposes, tenancy, geography, retention, deletion, freshness expectation, and conflict precedence.

### 3. Design ingestion and normalization

Define acquisition, parsing, scanning, deduplication, structure preservation, metadata, versioning, language handling, quality rejection, quarantine, reprocessing, and deletion propagation.

### 4. Design segmentation and representation

Choose chunk or record boundaries based on meaning and retrieval need. Record parent-child relationships, headings, time validity, permissions, identifiers, and representation model version.

### 5. Design retrieval

Define lexical, semantic, structured, hybrid, filtering, routing, query transformation, reranking, diversification, and top-k behavior. Apply authorization before evidence reaches generation.

### 6. Assemble context safely

Separate system policy from user and retrieved content, preserve source identity, limit context, remove duplicates, prioritize current authoritative evidence, and mark retrieved instructions as untrusted.

### 7. Define answer behavior

Specify grounding, citation or evidence references, conflict handling, uncertainty, abstention, incomplete-answer behavior, and deterministic handling for mandatory rules.

### 8. Evaluate the pipeline by stage

Measure source coverage, ingestion quality, retrieval recall and precision, ranking, context sufficiency, grounded answer quality, citation correctness, refusal, leakage, injection resistance, latency, and cost.

### 9. Operate corpus and index lifecycle

Monitor freshness, failed ingestion, source drift, permission drift, orphaned content, embedding or index change, deletion lag, query gaps, and cost. Rebuild or migrate through a controlled version.

## RAG design record

| Area | Required decision or evidence |
|---|---|
| Use case and answer boundary | Supported questions, users, exclusions, and abstention |
| Source catalog | Authority, owner, rights, sensitivity, tenancy, and freshness |
| Ingestion | Acquisition, parsing, validation, metadata, quarantine, and deletion |
| Segmentation and representation | Boundaries, identifiers, model, version, and rationale |
| Index and storage | Technology direction, tenancy, encryption, lifecycle, and recovery |
| Retrieval and ranking | Methods, filters, authorization, top-k, and reranking |
| Context assembly | Token budget, precedence, deduplication, and trust separation |
| Answer and citations | Grounding, conflicts, uncertainty, references, and refusal |
| Evaluation | Stage metrics, cases, slices, thresholds, and regressions |
| Operations | Freshness, drift, rebuild, monitoring, cost, and ownership |

## Source register

| Source ID | Authority and owner | Rights and purpose | Sensitivity and tenancy | Freshness | Ingestion status | Deletion path |
|---|---|---|---|---|---|---|
| SRC-001 | Not established | Not established | Not classified | Not established | Not assessed | Not established |

## Decision rules

- Retrieved content never outranks system policy or authorized instructions.
- Access control must apply at retrieval time and survive caching, ranking, and generated output.
- An embedding index is derived sensitive data and follows source access, retention, and deletion obligations.
- Citations prove source association only when retrieval and attribution correctness are evaluated.
- Prefer abstention or bounded answers when authoritative evidence is absent or conflicting.
- Changing corpus, parser, chunking, representation, index, retrieval, or reranking can invalidate prior evaluation.
- Do not retain source content, queries, or generated context indefinitely without purpose and authority.

## Outputs

- governed source and RAG design records;
- ingestion, representation, retrieval, context, answer, and lifecycle direction;
- stage-specific evaluation and adversarial test plan;
- freshness, permission, deletion, observability, and recovery controls;
- risks, assumptions, costs, decisions, and owners.

## Quality checks

- Sources are authoritative, permitted, classified, and owned.
- Retrieval enforces user, purpose, and tenant access.
- Context is separated from instructions and resists retrieved injection.
- Evaluation distinguishes retrieval failure from generation failure.
- Freshness, deletion, drift, and rebuild paths are testable.
- Unsupported or conflicting evidence produces defined behavior.

## Common mistakes

- indexing all available content without ownership or purpose;
- evaluating only answer fluency;
- filtering permissions after retrieval;
- assuming citations guarantee correctness;
- changing chunking or embeddings without regression evaluation.

## Related modules

- [Data and integrations](../architecture/data-and-integrations.md)
- [Evaluation](evaluation.md)
- [AI privacy and security](privacy-and-security.md)
- [AI observability](observability.md)
