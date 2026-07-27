---
title: Architecture Discovery
type: architecture-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/solution-outline.md
  - ../core/evidence-policy.md
related:
  - system-context.md
  - solution-options.md
  - architecture-decision-records.md
---

# Architecture Discovery

## Purpose

Establish the evidence, constraints, architecture drivers, current-state realities, organizational capability, and decision-critical unknowns required for responsible solution comparison.

## When to use

Use for a new system, material feature, migration, integration, scaling concern, security change, vendor decision, recovery initiative, or audit of an existing product.

## Inputs

- product outcomes, scope, use cases, and requirement IDs;
- current systems, diagrams, repositories, environments, inventories, incidents, support data, and costs;
- stakeholder and ownership information;
- business, legal, compliance, security, privacy, data, operational, and vendor constraints;
- expected demand, growth, availability, recovery, and latency;
- known assumptions, risks, dependencies, and decisions.

## Workflow

### 1. Frame decisions and boundaries

Name the decisions discovery must enable, in-scope systems and environments, excluded areas, accountable authorities, and latest responsible points.

### 2. Identify architecture stakeholders

Include product, engineering, architecture, security, privacy, compliance, data, platform, operations, support, finance, procurement, vendors, and affected users where relevant. Map decision rights rather than relying on job titles.

### 3. Inventory current state

Collect authoritative evidence for:

- systems, services, repositories, data stores, interfaces, and owners;
- environments, accounts, regions, networks, identity, secrets, and access;
- deployment, infrastructure, observability, backup, recovery, and support;
- dependencies, vendors, licenses, contracts, quotas, and costs;
- incidents, defects, technical debt, bottlenecks, and manual operations.

### 4. Extract architecture drivers

Translate requirements and evidence into:

- functional and integration needs;
- quality-attribute scenarios;
- demand and growth model;
- security, privacy, compliance, and trust boundaries;
- availability, recovery, support, and operability expectations;
- skills, delivery, cost, timeline, and vendor constraints.

### 5. Assess evidence quality

Record source, observation date, environment, owner, freshness, limitations, and conflicts. Treat undocumented stakeholder recollection as evidence of perspective, not confirmed system behavior.

### 6. Map uncertainty

Identify high-impact unknowns in data, interfaces, demand, compatibility, security, operations, cost, performance, vendor capability, and migration. Assign validation owner, method, threshold, and decision point.

### 7. Validate through focused work

Use code or configuration inspection, telemetry, data profiling, architecture walkthroughs, threat modeling, load tests, interface probes, disaster-recovery evidence, vendor proof, or time-boxed spikes.

### 8. Synthesize

Produce architecture drivers, current-state gaps, option constraints, technical risks, decision needs, and recommended validation sequence.

## Architecture-driver record

| Field | Definition |
|---|---|
| Driver ID and type | `DRV-###`; functional, quality, constraint, risk, or organizational |
| Statement and scenario | Actor or source, stimulus, environment, response, and measure where applicable |
| Source and date | Requirement, evidence, policy, incident, or decision |
| Priority and authority | Decision reference, not informal preference |
| Current capability | Evidence-backed current state |
| Required capability | Threshold or condition |
| Gap and impact | Consequence if unmet |
| Assumptions and confidence | Controlled uncertainty |
| Validation and owner | Method, threshold, and decision point |

## Discovery inventory

| Area | Evidence available | Owner | Freshness | Gap or risk | Next validation |
|---|---|---|---|---|---|
| Systems and ownership | Not provided | Not assigned | Not assessed | Not assessed | Not established |
| Data and interfaces | Not provided | Not assigned | Not assessed | Not assessed | Not established |
| Environments and delivery | Not provided | Not assigned | Not assessed | Not assessed | Not established |
| Security and compliance | Not provided | Not assigned | Not assessed | Not assessed | Not established |
| Reliability and operations | Not provided | Not assigned | Not assessed | Not assessed | Not established |
| Demand, performance, and cost | Not provided | Not assigned | Not assessed | Not assessed | Not established |

## Decision rules

- Discover enough to support the next architecture decision, not to document every implementation detail.
- Current-state diagrams must identify evidence date and environment.
- An undocumented component is not automatically unused or safe to remove.
- Requirements stated as technology choices are constraints or proposals until authority and rationale are confirmed.
- Pull forward uncertainty that can invalidate feasibility, security, cost, or schedule.
- Do not expose secrets or sensitive infrastructure details in unrestricted artifacts.
- A successful prototype proves only the conditions it tested.

## Outputs

- architecture discovery scope and evidence inventory;
- architecture drivers and quality-attribute scenarios;
- current-state gaps, constraints, ownership, and technical risks;
- validation backlog with owners and thresholds;
- inputs to context, options, ADRs, estimates, and G3.

## Quality checks

- Decisions and system boundaries are explicit.
- Sources, environments, dates, and limitations are recorded.
- Drivers trace to outcomes, requirements, obligations, or incidents.
- Current capability and required threshold are distinguishable.
- High-impact unknowns have validation plans.
- Sensitive evidence follows access controls.

## Common mistakes

- beginning with preferred technology;
- trusting stale diagrams without runtime evidence;
- interviewing only engineering;
- treating a spike as production proof;
- hiding operational toil and vendor constraints.

## Related modules

- [Solution outline](../lifecycle/solution-outline.md)
- [System context](system-context.md)
- [Solution options](solution-options.md)
- [Evidence policy](../core/evidence-policy.md)
