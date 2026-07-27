---
title: Scalability
type: architecture-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - architecture-discovery.md
  - data-and-integrations.md
related:
  - cloud-and-infrastructure.md
  - observability.md
  - security.md
  - architecture-decision-records.md
---

# Scalability

## Purpose

Define and validate how a system maintains acceptable behavior, reliability, operability, and cost as demand, data, tenants, features, or geographical reach changes.

## When to use

Use when growth, peaks, batch volume, data size, concurrency, tenant count, external rate limits, cost, or failure amplification can affect product outcomes or commitments. Do not add scaling complexity without an evidence-backed demand model.

## Inputs

- product and business growth scenarios;
- current telemetry, incident, capacity, and cost evidence;
- workload, data, integration, cloud, security, and operational architecture;
- latency, throughput, availability, recovery, and consistency requirements;
- tenant, geography, channel, seasonality, and event patterns;
- external quotas, vendor limits, team capability, and budget constraints.

## Workflow

### 1. Define demand scenarios

Record current, expected, peak, burst, growth, and failure demand with:

- requests, events, jobs, users, tenants, records, bytes, and concurrency;
- read/write mix and hot-key or skew behavior;
- payload, query, and processing complexity;
- time windows, seasonality, region, and source;
- evidence, assumptions, confidence, and review triggers.

### 2. Define service thresholds

Specify response time distributions, throughput, freshness, queue delay, error rate, availability, recovery, and cost under named conditions. Avoid average-only targets.

### 3. Map the end-to-end path

Identify client, edge, network, compute, cache, database, search, queue, integration, third-party, and operational bottlenecks. Include shared resources and noisy-neighbor risk.

### 4. Establish capacity model

Relate demand to resource consumption, saturation, queueing, storage growth, transfer, dependency limits, and cost. Identify leading saturation signals and capacity lead times.

### 5. Compare scaling strategies

Assess:

- vertical and horizontal scaling;
- statelessness and partitioning;
- caching and invalidation;
- asynchronous processing and backpressure;
- batching, aggregation, pagination, and rate limits;
- read replicas, sharding, indexing, and archival;
- workload scheduling and concurrency control;
- regional distribution and data locality;
- graceful degradation and load shedding.

### 6. Design failure containment

Define timeouts, bounded retries, circuit behavior, bulkheads, queue limits, backpressure, tenant isolation, admission control, degradation, and recovery from overload.

### 7. Validate

Use representative load, stress, spike, soak, volume, failover, and dependency-degradation tests. Validate production-like data shape, configuration, topology, and observability while protecting real users and systems.

### 8. Operationalize

Set capacity thresholds, alerts, runbooks, scaling ownership, quota review, cost alerts, and revalidation triggers. Record material choices and trade-offs in ADRs.

## Demand model

| Scenario | Workload and population | Volume and concurrency | Data size or growth | Time window | Source | Confidence |
|---|---|---|---|---|---|---|
| Current | Not established | Not assessed | Not assessed | Not established | Not provided | Not assessed |
| Expected | Not established | Not assessed | Not assessed | Not established | Not provided | Not assessed |
| Peak or burst | Not established | Not assessed | Not assessed | Not established | Not provided | Not assessed |
| Growth | Not established | Not assessed | Not assessed | Not established | Not provided | Not assessed |

## Scalability record

| Area | Current evidence | Required threshold | Bottleneck or limit | Strategy | Validation | Owner |
|---|---|---|---|---|---|---|
| End-to-end latency | Not provided | Not established | Not assessed | Not selected | Not established | Not assigned |
| Throughput and concurrency | Not provided | Not established | Not assessed | Not selected | Not established | Not assigned |
| Data growth and query behavior | Not provided | Not established | Not assessed | Not selected | Not established | Not assigned |
| Queue and async work | Not provided | Not established | Not assessed | Not selected | Not established | Not assigned |
| External dependencies and quotas | Not provided | Not established | Not assessed | Not selected | Not established | Not assigned |
| Cost per demand unit | Not provided | Not established | Not assessed | Not selected | Not established | Not assigned |

## Decision rules

- Scale for evidence-backed scenarios, not an undefined future.
- Average latency and load conceal tail behavior and peaks.
- Autoscaling reacts after signals and within service limits; it is not infinite or instantaneous.
- Caching introduces staleness, invalidation, privacy, and failure decisions.
- Queues require bounds, backpressure, replay, poison-message, and consumer-capacity controls.
- Horizontal scaling may move the bottleneck to state, data, coordination, or dependencies.
- Performance test results apply only to the tested topology, data, workload, and environment.
- Scaling that violates cost, consistency, security, or operability thresholds is not acceptable.

## Outputs

- demand, capacity, bottleneck, quota, and cost model;
- measurable performance and scaling thresholds;
- scaling, backpressure, isolation, and graceful-degradation direction;
- validation plan and evidence;
- observability, runbook, ADR, estimate, and risk inputs.

## Quality checks

- Demand scenarios include source and confidence.
- Tail latency, peaks, skew, and external limits are covered.
- Bottlenecks are mapped end to end.
- Scaling choices include consistency, security, operations, and cost.
- Tests represent realistic data and topology.
- Thresholds and owners support proactive action.

## Common mistakes

- optimizing before measuring;
- sizing only average traffic;
- assuming cloud autoscaling removes capacity planning;
- adding cache without invalidation strategy;
- load testing an unrepresentative environment.

## Related modules

- [Data and integrations](data-and-integrations.md)
- [Cloud and infrastructure](cloud-and-infrastructure.md)
- [Observability](observability.md)
- [Architecture Decision Records](architecture-decision-records.md)
