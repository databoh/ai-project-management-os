---
title: Solution Options
type: architecture-decision-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - architecture-discovery.md
  - system-context.md
  - ../core/decision-policy.md
related:
  - architecture-decision-records.md
  - data-and-integrations.md
  - cloud-and-infrastructure.md
  - security.md
---

# Solution Options

## Purpose

Compare credible solution directions against the same product, architecture, risk, operational, cost, and reversibility criteria before recommending a material choice.

## When to use

Use for decisions involving build versus buy, reuse versus replace, managed versus self-operated, integration style, data platform, deployment model, major component boundary, migration strategy, or any choice with material cost, lock-in, reliability, security, or schedule effect.

## Inputs

- decision statement, accountable authority, and latest responsible point;
- product outcomes, scope, requirements, and context;
- architecture drivers and evidence;
- organizational skills, operations, vendor, procurement, and cost constraints;
- security, privacy, compliance, data, recovery, scalability, and observability needs;
- assumptions, risks, dependencies, and validation results.

## Workflow

### 1. Frame the decision

Describe the problem, boundary, outcome, decision class, authority, and consequences of delay or error. Do not define the decision as approval of a preferred product.

### 2. Establish criteria

Define criteria, measure, evidence, threshold, and weighting before scoring. Include:

- requirement and outcome fit;
- delivery time and uncertainty;
- total cost and cost variability;
- security, privacy, compliance, and data control;
- reliability, recovery, performance, and scalability;
- operability, observability, support, and staffing;
- integration and migration complexity;
- vendor viability, lock-in, portability, and exit cost;
- maintainability, evolvability, and reversibility;
- organizational capability and learning.

### 3. Generate credible options

Consider:

- keep or improve the current system;
- process or non-technical change;
- reuse an existing internal capability;
- buy, license, or use a managed service;
- build;
- combine approaches;
- defer until evidence improves.

### 4. Normalize assumptions

Compare the same scope, demand, quality thresholds, time horizon, environments, support model, and cost categories. Record exceptions.

### 5. Gather evidence

Use prototypes, vendor evidence, references, benchmarks, threat models, cost models, compatibility tests, operational walkthroughs, and team capability assessment. Label vendor claims and unverified benchmarks.

### 6. Compare trade-offs

Show threshold failures, ranges, confidence, sensitivity, and consequences. Do not allow an aggregate score to hide a failed mandatory control.

### 7. Recommend

State the recommended option, conditions, rejected alternatives, residual risks, migration and exit direction, confidence, and review triggers.

### 8. Approve and record

Route the decision through an [ADR](architecture-decision-records.md) and obtain the required human approval.

## Comparison matrix

| Criterion | Threshold or measure | Option A | Option B | Current or non-action | Evidence and confidence |
|---|---|---|---|---|---|
| Outcome and requirement fit | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Delivery and migration | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Total cost and variability | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Security, privacy, and compliance | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Reliability and scalability | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Operations and support | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Lock-in, portability, and exit | Not established | Not assessed | Not assessed | Not assessed | Not provided |
| Skills and maintainability | Not established | Not assessed | Not assessed | Not assessed | Not provided |

## Total-cost boundary

Include where applicable:

- licenses, subscriptions, usage, storage, transfer, and support;
- engineering, integration, migration, testing, and data work;
- security, compliance, procurement, and legal review;
- environments, observability, backup, recovery, and operations;
- training, change, support, and vendor management;
- scaling, incident, downtime, and exit costs.

Use approved rates and demand scenarios. Do not invent commercial inputs.

## Decision rules

- Include a credible current-state, non-action, or simpler option.
- Mandatory security, legal, compliance, or reliability thresholds cannot be averaged away.
- A proof of concept validates only named conditions.
- Vendor roadmaps and claims remain assumptions until contractually or empirically supported.
- Lowest initial cost is not lowest total cost.
- Prefer reversible choices while evidence is weak.
- A recommendation is not an approved decision.
- Material option or assumption changes require ADR and estimate review.

## Outputs

- framed architecture decision and criteria;
- comparable options and evidence;
- total-cost, risk, migration, operations, and exit analysis;
- recommendation, confidence, conditions, and residual uncertainty;
- ADR input and downstream estimate impact.

## Quality checks

- Options solve the same decision and scope.
- Criteria and thresholds were set before scoring.
- Mandatory-control failures remain visible.
- Cost boundary and time horizon are consistent.
- Assumptions, ranges, and confidence are explicit.
- Human authority approves the selected material option.

## Common mistakes

- comparing a detailed preferred option with vague alternatives;
- scoring vendor marketing as confirmed evidence;
- omitting current-state improvement;
- ignoring operations and exit cost;
- selecting technology before validating drivers.

## Related modules

- [Architecture discovery](architecture-discovery.md)
- [System context](system-context.md)
- [Architecture Decision Records](architecture-decision-records.md)
- [Decision policy](../core/decision-policy.md)
