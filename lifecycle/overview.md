---
title: Project Lifecycle Overview
type: lifecycle
status: active
version: 1.1.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/operating-principles.md
  - ../core/workflow-router.md
  - ../core/quality-gates.md
related:
  - ../core/decision-policy.md
  - ../core/terminology.md
  - intake.md
  - discovery.md
  - ../product/product-vision.md
  - ../product/product-outcomes.md
  - prioritization.md
  - requirements.md
  - solution-outline.md
  - ../ai/ai-product-discovery.md
  - ../metrics/metric-dictionary.md
  - ../playbooks/idea-to-mvp.md
  - ../playbooks/production-release.md
  - ../playbooks/incident-response.md
  - decomposition.md
  - estimation.md
  - roadmap.md
  - delivery-setup.md
  - ../runtime/distribution-and-project-runtime.md
---

# Project Lifecycle Overview

## Purpose

Define the default path from an initial request to measured improvement while allowing proportionate tailoring for project type, risk, and maturity.

## How to use

Start with the [workflow router](../core/workflow-router.md), use a matching operational playbook when available, identify the current stage and next material decision, then perform only the work necessary to pass the relevant [quality gate](../core/quality-gates.md). Existing products may enter at any stage after their current evidence and controls are audited.

When work runs in a generated AI PM OS project, use the [project runtime](../runtime/distribution-and-project-runtime.md) to persist the current stage, gate, active artifacts, gaps, and next action across Codex sessions.

Stages are not required to be linear. Learning can return work to an earlier stage; delivery and discovery may overlap; an incident can interrupt any stage. A skipped stage requires evidence that its intended outcome is already satisfied, not merely a preference to omit documentation.

## Lifecycle

| Stage | Primary outcome | Representative work | Exit signal |
|---|---|---|---|
| [0. Intake](intake.md) | A request is captured without losing its original context | Requester, business context, expected outcome, urgency, known date or budget, sources | G0 intake readiness |
| [1. Discovery](discovery.md) | The problem and uncertainty are understood enough for a product decision | Users, stakeholders, current process, alternatives, value, market, constraints, evidence, assumptions, success indicators | G1 discovery sufficiency |
| [2. Product definition](../product/product-vision.md) | Product direction and measurable outcomes are explicit | Vision, users, jobs, journeys, value proposition, outcomes, scope direction, MVP, non-goals, and measurement | G2 product definition |
| [3. Scope and requirements](requirements.md) | The solution boundary and required behavior are controlled | In/out scope, MVP, future scope, functional and non-functional requirements, rules, data, integrations, security, compliance, analytics | Requirements portion of G3; solution evidence still required |
| [4. Solution outline](solution-outline.md) | Feasible solution options and material technical risks are visible | System context, architecture assumptions, components, flows, environments, deployment, monitoring, operations | Solution portion of G3 and human architecture approval where required |
| [5. Decomposition](decomposition.md) | Work is broken down only as far as control requires | Outcome-to-work hierarchy, deliverables, work packages, acceptance boundaries | Inputs ready for estimation |
| [6. Estimation](estimation.md) | Conditional effort and duration forecasts are transparent | Roles, dependencies, three-point ranges where useful, uncertainty, confidence, inclusions and exclusions | Estimate maturity and decision use are explicit |
| [7. Prioritization](prioritization.md) | Sequence reflects explicit value and decision criteria | Suitable framework, scoring evidence, cost of delay, risks, dependencies | Priorities approved by accountable owner |
| [8. Roadmap and release planning](roadmap.md) | Outcomes, milestones, dependencies, capacity, and releases form a credible plan | Critical path, target windows, confidence, decision gates, release plan | G4 plan commitment |
| [9. Delivery setup](delivery-setup.md) | The team has a controlled way to execute and communicate | Workspace, workflow, policies, ownership, readiness/done criteria, ceremonies, reporting, escalation | G5 delivery readiness |
| [10. Execution and control](../metrics/delivery-metrics.md) | Progress, variance, flow, quality, and changes are actively governed | Milestones, plan versus actual, scope, flow, defects, rework, incidents, forecasts, decisions | Release candidate satisfies agreed done evidence |
| [11. Release](../playbooks/production-release.md) | The change can enter production with controlled risk | Scope, tests, migration, deployment, rollback, communication, training, documentation, support | G6 release readiness |
| [12. Hypercare and improvement](../metrics/metric-dictionary.md) | Outcomes and operational learning drive the next decision | Incidents, feedback, adoption, governed metrics, technical health, support load, improvements, lessons | G7 improvement closure or routing into a new cycle |

## Cross-cutting controls

The following apply at every stage:

- information classification from [terminology](../core/terminology.md);
- evidence provenance and limitations from the [evidence policy](../core/evidence-policy.md);
- visible uncertainty from the [assumptions policy](../core/assumptions-policy.md);
- accountable approval from the [decision policy](../core/decision-policy.md);
- traceability from goals through outcomes, requirements, work, tests, releases, and metrics;
- risk, dependency, change, and quality control proportionate to impact;
- the [AI product overlay](../ai/ai-product-discovery.md) whenever models, agents, RAG, MCP, or AI automation are in scope.

## Tailoring rules

- **Small or low-risk change:** Combine stages and use concise artifacts, but retain evidence, acceptance, ownership, and release controls.
- **Existing product:** Audit available artifacts, evidence, decisions, and current delivery health; enter at the stage containing the next unresolved decision.
- **High-trust or regulated domain:** Increase evidence, review, traceability, security, privacy, compliance, and approval rigor.
- **AI-enabled product:** Apply [AI product discovery](../ai/ai-product-discovery.md) and extend every relevant gate with evaluation, guardrail, privacy, security, cost, latency, observability, fallback, and human-review evidence.
- **Incident:** Use [incident response](../playbooks/incident-response.md), prioritize safety and containment, preserve a timeline and decisions, then route corrective work back through the appropriate stages.
- **Fixed external date:** Treat the date as a constraint, expose feasible scope and risk options, and do not manufacture certainty.

## Quality checks

- The current stage and next material decision are explicit.
- Entry at a later stage is supported by reusable evidence.
- Gate results and accepted exceptions are traceable.
- Iteration does not erase earlier decisions or contradictory evidence.
- Lifecycle detail is proportional to risk and uncertainty.

## Related modules

- [Workflow router](../core/workflow-router.md)
- [Quality gates](../core/quality-gates.md)
- [Operating principles](../core/operating-principles.md)
- [Decision policy](../core/decision-policy.md)
- [Project intake](intake.md)
- [Product and project discovery](discovery.md)
- [Product vision](../product/product-vision.md)
- [Product outcomes](../product/product-outcomes.md)
- [Prioritization](prioritization.md)
- [Requirements management](requirements.md)
- [Solution outline](solution-outline.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Incident metrics and control](../metrics/incident-metrics.md)
- [Work decomposition](decomposition.md)
- [Estimation](estimation.md)
- [Delivery roadmap](roadmap.md)
- [Delivery setup](delivery-setup.md)
- [Idea to MVP](../playbooks/idea-to-mvp.md)
- [Production release](../playbooks/production-release.md)
- [Incident response](../playbooks/incident-response.md)
- [Distribution and Project Runtime](../runtime/distribution-and-project-runtime.md)
