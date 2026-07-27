---
title: Cloud and Infrastructure
type: architecture-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - system-context.md
  - architecture-discovery.md
related:
  - security.md
  - scalability.md
  - observability.md
  - data-and-integrations.md
  - architecture-decision-records.md
---

# Cloud and Infrastructure

## Purpose

Define a provider-neutral infrastructure and operating direction that satisfies workload, environment, security, resilience, deployment, recovery, cost, and ownership needs.

## When to use

Use for cloud, hybrid, on-premises, edge, hosting, platform, environment, deployment, migration, or major infrastructure changes. Tailor to the actual control model and avoid assuming cloud is automatically preferable.

## Inputs

- system context, solution options, data flows, and trust boundaries;
- demand, performance, availability, recovery, residency, and compliance requirements;
- deployment, migration, environment, access, and operational needs;
- existing accounts, subscriptions, networks, platforms, contracts, skills, costs, and incidents;
- organizational platform standards and vendor constraints.

## Workflow

### 1. Characterize workloads

For each workload record compute, memory, storage, network, accelerator, latency, availability, state, schedule, scaling, data gravity, and operational profile.

### 2. Define environment strategy

Identify development, test, staging, production, disaster-recovery, and ephemeral environments; their purpose, parity, data policy, ownership, lifecycle, and access.

### 3. Establish account and tenancy boundaries

Define organization, account, subscription, project, tenant, region, and environment isolation based on ownership, blast radius, billing, data, security, and compliance.

### 4. Outline network and identity

Define ingress, egress, private connectivity, segmentation, DNS, certificates, service identity, human access, privileged paths, and external connectivity. Apply least privilege and zero-trust principles proportionate to risk.

### 5. Select infrastructure services

Compare managed, serverless, container, virtual-machine, platform, and self-hosted options against requirements, skills, lock-in, limits, operability, cost, recovery, and exit.

### 6. Define delivery and configuration

Use versioned infrastructure as code and controlled configuration where feasible. Define build, artifact, promotion, secrets, policy, approval, rollback, drift, and provenance controls.

### 7. Design resilience and recovery

Define failure domains, redundancy, backups, restore, replication, RTO, RPO, failover, degradation, and disaster-recovery testing. Redundancy without tested recovery is not sufficient evidence.

### 8. Model cost and limits

Estimate steady, peak, growth, transfer, storage, logging, backup, support, license, and operational costs. Record quotas, service limits, reservations, commitments, and cost-allocation ownership.

### 9. Establish operations

Define patching, vulnerability response, capacity, observability, on-call, incident, change, access review, backup verification, support, and decommission ownership.

### 10. Validate and decide

Test decision-critical performance, compatibility, recovery, security, operability, cost, and provider-limit assumptions. Record material choices in ADRs.

## Infrastructure record

| Field | Definition |
|---|---|
| Workload and owner | Purpose, criticality, and accountability |
| Environment and region | Runtime boundary and data location |
| Compute, storage, and network direction | Service category and rationale |
| Identity and access | Human, workload, privileged, and emergency access |
| Deployment and configuration | Build, promotion, IaC, secrets, and drift |
| Availability and recovery | Failure domains, RTO, RPO, backup, and tests |
| Scaling and limits | Demand, thresholds, quotas, and response |
| Observability and operations | Telemetry, alerts, runbooks, on-call, and support |
| Cost model | Demand assumptions, categories, owner, and alerts |
| Security and compliance | Controls, evidence, and residual risk |
| Exit and decommission | Portability, data export, deletion, and contract end |

## Environment matrix

| Environment | Purpose | Data policy | Access owner | Deployment path | Availability and recovery | Lifecycle |
|---|---|---|---|---|---|---|
| Development | Not established | Not established | Not assigned | Not established | Not established | Not established |
| Test | Not established | Not established | Not assigned | Not established | Not established | Not established |
| Production | Not established | Not established | Not assigned | Not established | Not established | Not established |

## Decision rules

- Provider selection follows requirements and evidence, not familiarity alone.
- Managed services transfer tasks, not ultimate accountability.
- Environment parity is risk-based; document intentional differences.
- Do not place secrets or production data in code, images, logs, tickets, or unrestricted lower environments.
- Multi-region design requires data, consistency, failover, operation, and cost evidence.
- Backup success is not recovery evidence until restore is tested.
- Autoscaling does not fix an unbounded dependency, database, quota, or cost bottleneck.
- Infrastructure changes with material blast radius require human approval and rollback or recovery.

## Outputs

- workload, environment, account, tenancy, network, identity, and service direction;
- deployment, configuration, resilience, recovery, cost, and operations model;
- validation evidence, limits, assumptions, risks, and ADRs;
- estimate, roadmap, release, security, scalability, and observability inputs.

## Quality checks

- Workload and environment requirements are explicit.
- Ownership follows account, service, and operational boundaries.
- Identity, secrets, data, network, and blast radius are controlled.
- RTO and RPO have feasible design and test direction.
- Costs include operations, transfer, telemetry, backup, and support.
- Exit and decommission are considered.

## Common mistakes

- selecting a provider before workload analysis;
- assuming managed means no operations;
- copying production data into test;
- designing backup without restore testing;
- ignoring quotas, transfer cost, and exit.

## Related modules

- [System context](system-context.md)
- [Security](security.md)
- [Scalability](scalability.md)
- [Observability](observability.md)
