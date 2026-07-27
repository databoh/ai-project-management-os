---
title: Solution Outline
type: lifecycle-workflow
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - requirements.md
  - ../core/decision-policy.md
related:
  - ../architecture/architecture-discovery.md
  - ../architecture/system-context.md
  - ../architecture/solution-options.md
  - ../architecture/architecture-decision-records.md
  - ../ai/ai-product-discovery.md
  - ../ai/evaluation.md
  - ../core/quality-gates.md
---

# Solution Outline

## Purpose

Develop sufficient architecture evidence, alternatives, boundaries, operational requirements, and decisions to assess feasibility, technical risk, and the solution portion of G3 without pretending the outline is detailed design.

## When to use

Use after product direction and requirements are sufficiently defined for a technical decision, and before planning or commitment requires more than a conditional ROM estimate. Reopen when scope, requirements, demand, risk, vendors, constraints, or production evidence materially changes.

## Inputs

- product outcomes, scope, MVP, and requirements;
- use cases, data, interface, security, privacy, compliance, and quality requirements;
- existing systems, environments, operations, incidents, technical debt, and organizational capability;
- expected demand, availability, recovery, latency, cost, and growth;
- constraints, dependencies, assumptions, risks, decisions, and estimate needs.

## Authority boundary

The AI PM OS agent may discover, structure, compare, identify risks, draft diagrams and ADRs, and recommend options. A named human authority approves material architecture, security, privacy, production, vendor-lock-in, and cost decisions under the [decision policy](../core/decision-policy.md).

## Workflow

### 1. Frame the architecture decision

State the business and product outcome, solution scope, decision required, accountable authority, latest responsible point, and cost of being wrong.

### 2. Run architecture discovery

Use [architecture discovery](../architecture/architecture-discovery.md) to establish current state, drivers, constraints, unknowns, organizational capability, and technical risks.

### 3. Define system context

Use the [system context](../architecture/system-context.md) to establish actors, systems, boundaries, trust zones, major interactions, and ownership.

### 4. Develop solution options

Use [solution options](../architecture/solution-options.md) to compare credible alternatives, including reuse, buy, build, managed service, and non-technical or simpler approaches where applicable.

### 5. Outline cross-cutting architecture

Address:

- [data and integrations](../architecture/data-and-integrations.md);
- [cloud and infrastructure](../architecture/cloud-and-infrastructure.md);
- [security](../architecture/security.md);
- [scalability](../architecture/scalability.md);
- [observability](../architecture/observability.md);
- environment, deployment, migration, recovery, support, and operational ownership.

### 6. Validate requirements and feasibility

Trace architecture drivers and options to functional, data, interface, security, compliance, and NFR IDs. Identify infeasible, conflicting, missing, or solution-constraining requirements.

When AI is in scope, incorporate the approved AI use-case boundary, model direction, evaluation, RAG or agent controls, guardrails, privacy and security, cost, observability, fallback, and human review.

### 7. Test uncertainty

Use spikes, prototypes, vendor validation, load tests, threat modeling, data profiling, integration tests, cost models, or operational walkthroughs for decision-critical uncertainty. Define evidence thresholds before testing.

### 8. Record decisions

Use [Architecture Decision Records](../architecture/architecture-decision-records.md) for material choices. Preserve rejected and superseded options and consequences.

### 9. Assess G3

Combine the approved scope and requirement evidence with solution feasibility, dependencies, operations, risks, assumptions, and approvals. A conditional pass requires authorized acceptance, expiry, and follow-up.

### 10. Update downstream plans

Propagate the approved outline to decomposition, estimates, critical path, roadmap, release, security, operations, and traceability. Re-estimate when solution evidence materially changes effort or risk.

## Solution-outline record

| Field | Definition |
|---|---|
| Outline ID, version, and status | Draft, Proposed, Approved, Superseded, or Retired |
| Outcome, scope, and requirement baseline | Authoritative references |
| Architecture drivers | Quality attributes, constraints, demand, and risks |
| System context and boundaries | Actors, systems, trust zones, and ownership |
| Options and recommendation | Comparable alternatives, evidence, trade-offs, and confidence |
| Component and responsibility outline | Major building blocks without premature detail |
| Data and integration direction | Ownership, lifecycle, contracts, and failure handling |
| Cloud and environment direction | Workload, deployment, recovery, and operational model |
| Security and privacy direction | Threats, controls, residual risk, and approval |
| Scalability and resilience direction | Demand, bottlenecks, degradation, and test plan |
| Observability and support direction | SLIs, telemetry, alerts, runbooks, and ownership |
| Migration, rollout, and rollback | Transition and recovery assumptions |
| ADRs, risks, assumptions, and open questions | Controlled references |
| Authority and approval | Named architecture and control approvers |

## G3 scope and solution readiness

| Criterion | Result | Evidence or gap | Owner | Resolution point |
|---|---|---|---|---|
| Scope and requirement boundary | Not assessed | Not provided | Product owner | Before baseline |
| System context and solution options | Not assessed | Not provided | Architecture owner | Before baseline |
| Data, integration, and interface feasibility | Not assessed | Not provided | Data and integration owners | Before baseline |
| Security, privacy, and compliance controls | Not assessed | Not provided | Control owners | Before baseline |
| Scalability, reliability, and operational needs | Not assessed | Not provided | Technical and operations owners | Before baseline |
| Dependencies, assumptions, risks, and ADRs | Not assessed | Not provided | Architecture owner | Before baseline |
| Required human approvals | Not assessed | Not provided | Accountable authority | Before commitment |

**G3 decision:** Pending assessment
**Solution-outline authority:** Not established
**Unresolved technical exceptions:** None recorded
**Approved baseline:** Not established

## Decision rules

- Do not select a solution before comparing credible alternatives against explicit drivers.
- Architecture precision must match requirement and evidence maturity.
- A diagram is not an approval or proof of feasibility.
- Cloud, vendor, framework, database, or integration choices require consequence and exit analysis.
- Security, privacy, compliance, recovery, and operations are architecture drivers, not later add-ons.
- High-impact residual risk requires explicit human acceptance.
- Approved solution evidence enables planning; it does not authorize production deployment.
- Revisit the outline when monitored reality invalidates a driver or assumption.

## Outputs

- approved or proposed solution outline;
- architecture discovery and system context;
- compared options and ADRs;
- data, integration, cloud, security, scalability, observability, and operations direction;
- technical risks, validation results, assumptions, dependencies, and G3 decision;
- updated estimates and downstream planning inputs.

## Quality checks

- Requirements and architecture drivers are traceable.
- At least one credible alternative and non-action or simpler option were considered.
- Boundaries, ownership, data, trust, failure, recovery, and operations are explicit.
- Decision-critical uncertainty has evidence or an authorized exception.
- Human approval and residual risk are visible.
- Downstream estimate and plan impacts are propagated.

## Related modules

- [Architecture discovery](../architecture/architecture-discovery.md)
- [System context](../architecture/system-context.md)
- [Solution options](../architecture/solution-options.md)
- [Architecture Decision Records](../architecture/architecture-decision-records.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [AI evaluation](../ai/evaluation.md)
- [Quality gates](../core/quality-gates.md)
