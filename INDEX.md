---
title: AI PM OS Index
type: index
status: active
version: 1.2.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-27
depends_on: []
related:
  - README.md
---

# AI PM OS Index

Use this page as the canonical navigation map for all implemented phases.

## Repository entry points

- [Repository overview](README.md) — purpose, status, supported modes, and recommended reading order.
- [Agent instructions](AGENTS.md) — mandatory rules for agents that inspect or change this repository.
- [Changelog](CHANGELOG.md) — user-visible repository changes by version.
- [Version](VERSION) — current repository version.
- [Security policy](SECURITY.md) — supported versions, private vulnerability reporting, trust boundaries, and release controls.

## Distribution and project runtime

- [Plugin Installation and Smoke Testing](docs/installation-and-smoke-testing.md) — public GitHub installation, fresh-clone release verification, automated validation, beginner smoke testing, safety checks, and troubleshooting.
- [Distribution and Project Runtime](runtime/distribution-and-project-runtime.md) — installable plugin architecture, beginner onboarding, generated workspace contract, persistent state, lifecycle execution, packaging, and safety.
- [Plugin manifest](plugins/ai-project-management-os/.codex-plugin/plugin.json) — installable AI PM OS product metadata and skill discovery.
- [Runtime contract](plugins/ai-project-management-os/references/runtime-contract.md) — shared authority, information-integrity, state, and safety rules for runtime skills.
- [Lifecycle runtime map](plugins/ai-project-management-os/references/lifecycle-map.json) — machine-readable stage, gate, method, artifact, and transition routing.
- [Start project skill](plugins/ai-project-management-os/skills/ai-pm-start/SKILL.md) — adaptive interview, explicit confirmation, safe creation, and validation.
- [Resume project skill](plugins/ai-project-management-os/skills/ai-pm-resume/SKILL.md) — validated context reconstruction across sessions.
- [Run phase skill](plugins/ai-project-management-os/skills/ai-pm-run-phase/SKILL.md) — current-stage execution, approved delivery work, gate routing, and transition.
- [Gate review skill](plugins/ai-project-management-os/skills/ai-pm-gate-review/SKILL.md) — evidence-based G0–G7 assessment and authorized state changes.
- [Project status skill](plugins/ai-project-management-os/skills/ai-pm-status/SKILL.md) — read-only lifecycle and control reporting.

## Core operating system

- [Operating principles](core/operating-principles.md) — values and default behavior.
- [Agent role](core/agent-role.md) — responsibilities, authority, and escalation boundaries.
- [Decision policy](core/decision-policy.md) — how decisions are prepared, approved, and recorded.
- [Evidence policy](core/evidence-policy.md) — source quality, claim classification, and traceability.
- [Assumptions policy](core/assumptions-policy.md) — how uncertainty is registered, validated, and retired.
- [Quality gates](core/quality-gates.md) — minimum checks before commitments, handoffs, releases, and closure.
- [Workflow router](core/workflow-router.md) — how to select an operating mode and next workflow.
- [Terminology](core/terminology.md) — canonical language and distinctions.

## Lifecycle

- [Lifecycle overview](lifecycle/overview.md) — stages 0–12, stage outcomes, decision gates, and tailoring rules.
- [Project intake](lifecycle/intake.md) — preserves the request, classifies initial information, and establishes G0 readiness.
- [Product and project discovery](lifecycle/discovery.md) — reduces decision-critical uncertainty and establishes G1 sufficiency.
- [Prioritization](lifecycle/prioritization.md) — selects and applies a decision-appropriate framework without hiding uncertainty.
- [Requirements management](lifecycle/requirements.md) — controls elicitation, classification, quality, approval, baselines, and change.
- [Solution outline](lifecycle/solution-outline.md) — integrates solution evidence, alternatives, cross-cutting controls, decisions, and G3 readiness.
- [Work decomposition](lifecycle/decomposition.md) — creates fit-for-purpose product, delivery, and WBS views.
- [Estimation](lifecycle/estimation.md) — produces maturity-appropriate effort, duration, cost, range, reserve, and confidence.
- [Delivery roadmap](lifecycle/roadmap.md) — integrates scope, estimates, capacity, dependencies, paths, milestones, releases, and G4.
- [Delivery setup](lifecycle/delivery-setup.md) — selects and configures the operating model, ownership, workflow, quality, cadence, tools, and G5.

## Business analysis

- [Problem framing](business-analysis/problem-framing.md) — separates the observed problem, affected actor, consequence, desired outcome, and solution proposals.
- [Stakeholder analysis](business-analysis/stakeholder-analysis.md) — maps affected groups, contribution, influence, impact, engagement, and decision rights.

## Phase 2 artifact templates

- [Project brief](templates/intake/project-brief.md) — intake record and discovery handoff.
- [Discovery questionnaire](templates/discovery/discovery-questionnaire.md) — modular, role-aware discovery question bank.
- [Assumptions log](templates/discovery/assumptions-log.md) — assumption prioritization, validation, and impact control.
- [Discovery report](templates/discovery/discovery-report.md) — evidence synthesis, recommendation, and G1 result.

## Product definition

- [Product vision](product/product-vision.md) — target audience, desired future, value, business contribution, and strategic boundaries.
- [Product outcomes](product/product-outcomes.md) — measurable behavior or state changes with baselines, targets, guardrails, and ownership.
- [Evidence-based personas](product/personas.md) — decision-relevant user patterns, roles, confidence, and representation gaps.
- [Jobs to Be Done](product/jobs-to-be-done.md) — contextual progress, desired outcomes, current alternatives, and switching forces.
- [User journey](product/user-journey.md) — end-to-end stages, evidence, touchpoints, operational dependencies, and opportunities.
- [Product scope](product/scope.md) — in, MVP-candidate, future, out, and unresolved product boundaries.
- [Minimum Viable Product](product/mvp.md) — smallest coherent validation and value boundary with mandatory controls.

## Requirements and decomposition

- [Use cases](business-analysis/use-cases.md) — goal-oriented actor-system interactions, alternate flows, failures, and recovery.
- [User stories](business-analysis/user-stories.md) — small value slices with honest handling of enablers and non-story work.
- [Acceptance criteria](business-analysis/acceptance-criteria.md) — observable acceptance boundaries and verification methods.
- [Requirements traceability](business-analysis/requirements-traceability.md) — source-to-outcome-to-requirement-to-work-to-test-to-release-to-metric links.
- [Work Breakdown Structure](project/work-breakdown-structure.md) — deliverable hierarchy, 100% rule, and WBS dictionary.

## Requirements specification templates

- [BRD](templates/requirements/brd.md) — business need, capabilities, outcomes, rules, obligations, and approval.
- [PRD](templates/requirements/prd.md) — product problem, users, outcomes, scope, behavior, measurement, and direction.
- [FRD](templates/requirements/frd.md) — functional behavior, flows, rules, states, data, interfaces, exceptions, and recovery.
- [SRS](templates/requirements/srs.md) — controlled software behavior, interface, data, quality, trust, transition, and verification baseline.

## Estimation and roadmap

- [Dependency management](delivery/dependency-management.md) — provider-consumer ownership, need-by points, forecasts, fallback, and escalation.
- [Capacity planning](delivery/capacity-planning.md) — role availability, competing demand, buffers, bottlenecks, and scenarios.
- [Critical path](project/critical-path.md) — schedule network, float, near-critical paths, constraints, and recovery options.
- [Milestone plan](project/milestone-plan.md) — evidence-based achieved states, target windows, forecasts, and confidence.
- [Product roadmap](product/product-roadmap.md) — outcomes, problems, learning, horizons, and product decision gates.
- [Release planning](delivery/release-management.md) — controlled release scope, workstreams, forecast, rollout, recovery, support, and later G6 handoff.

## Technical and architecture support

- [Architecture discovery](architecture/architecture-discovery.md) — captures current-state evidence, drivers, constraints, unknowns, and validation work.
- [System context](architecture/system-context.md) — defines actors, systems, boundaries, interactions, trust zones, and current versus proposed context.
- [Solution options](architecture/solution-options.md) — compares feasible alternatives, including non-action, against common criteria and mandatory thresholds.
- [Data and integrations](architecture/data-and-integrations.md) — governs data ownership, lifecycle, contracts, consistency, recovery, and migration.
- [Cloud and infrastructure](architecture/cloud-and-infrastructure.md) — defines provider-neutral environments, hosting, deployment, recovery, cost, and operating controls.
- [Security architecture](architecture/security.md) — translates assets, threats, trust boundaries, and obligations into proportionate controls.
- [Scalability](architecture/scalability.md) — models demand, capacity, bottlenecks, scaling behavior, containment, and validation.
- [Observability](architecture/observability.md) — connects user impact to SLIs, SLOs, telemetry, alerts, diagnosis, and response.
- [Architecture Decision Records](architecture/architecture-decision-records.md) — preserves approved material choices, authority, consequences, and review triggers.

## AI delivery system

- [AI product discovery](ai/ai-product-discovery.md) — tests whether AI is justified and establishes use, impact, evidence, risk, and validation direction.
- [Model selection](ai/model-selection.md) — compares model candidates against representative quality, trust, operational, change, and cost evidence.
- [Retrieval-Augmented Generation](ai/rag.md) — governs sources, ingestion, retrieval, grounding, citations, permissions, freshness, and RAG evaluation.
- [AI agents and tools](ai/agents-and-tools.md) — bounds autonomy, tools, authority, state, side effects, human confirmation, and recovery.
- [Model Context Protocol integration](ai/mcp.md) — governs MCP trust boundaries, capabilities, identity, schemas, lifecycle, and revocation.
- [AI evaluation](ai/evaluation.md) — defines representative datasets, metrics, thresholds, slices, regression, acceptance, and production feedback.
- [AI guardrails](ai/guardrails.md) — designs preventive, detective, responsive, fallback, and human-review controls.
- [AI privacy and security](ai/privacy-and-security.md) — extends threat, data-lifecycle, provider, supply-chain, incident, and residual-risk controls for AI.
- [AI cost management](ai/cost-management.md) — forecasts and controls cost per accepted outcome across models, infrastructure, tools, review, and operations.
- [AI observability](ai/observability.md) — connects AI versions, quality, grounding, safety, actions, cost, drift, and incidents to product decisions.

## Metrics and control

- [Metric dictionary](metrics/metric-dictionary.md) — owns metric selection, contracts, baselines, targets, data quality, approval, versioning, and retirement.
- [Product metrics](metrics/product-metrics.md) — measures value events, activation, repeated value, cohorts, retention, task success, trust, and product guardrails.
- [Business metrics](metrics/business-metrics.md) — governs commercial, financial, customer, operational, unit-economic, risk, and concentration measures.
- [Engineering metrics](metrics/engineering-metrics.md) — balances reliability, quality, security, delivery, maintainability, developer effectiveness, and engineering economics.
- [Delivery metrics](metrics/delivery-metrics.md) — controls outcome, scope, forecast, milestones, capacity, dependencies, quality, risk, and delivery health.
- [Flow metrics](metrics/flow-metrics.md) — defines demand, WIP, throughput, age, cycle and lead time, blocked time, flow efficiency, and SLE boundaries.
- [DORA metrics](metrics/dora-metrics.md) — applies the current five-measure software-delivery throughput and instability model.
- [Incident metrics and control](metrics/incident-metrics.md) — governs impact, timeline, response stages, recurrence, learning actions, and incident closure.

## Delivery operating model

- [Scrum](delivery/scrum.md) — Sprint Goals, accountabilities, empirical events, Done Increments, and responsible forecasting.
- [Kanban](delivery/kanban.md) — explicit pull, WIP limits, SLE, aging, flow metrics, and service policies.
- [Hybrid delivery](delivery/hybrid.md) — controlled interaction of multiple work systems or governance layers.
- [Workflow statuses](delivery/workflow-statuses.md) — canonical states, transitions, overlays, and tool mappings.
- [Definition of Ready](delivery/definition-of-ready.md) — proportionate start conditions and controlled exceptions.
- [Definition of Done](delivery/definition-of-done.md) — shared quality, integration, control, documentation, and operational evidence.
- [Delivery ceremonies](delivery/ceremonies.md) — purpose-driven planning, review, coordination, governance, and improvement interactions.
- [Delivery reporting](delivery/reporting.md) — outcome, forecast, flow, quality, dependency, risk, and decision reporting.

## Delivery tools

- [Jira](tools/jira.md) — governed hierarchy, work types, workflows, boards, fields, automation, permissions, and dashboards.
- [ClickUp](tools/clickup.md) — governed Workspace hierarchy, task types, statuses, fields, views, automation, and permissions.

## Operational playbooks

- [Idea to MVP](playbooks/idea-to-mvp.md) — routes an incomplete idea through G0–G7 into a controlled MVP and learning decision.
- [Client project kickoff](playbooks/client-project-kickoff.md) — reconciles authorization, commercial commitments, evidence, governance, access, and G5 readiness.
- [Existing project audit](playbooks/existing-project-audit.md) — compares intended and actual product, technical, delivery, operational, and governance systems.
- [Delayed project recovery](playbooks/delayed-project-recovery.md) — restores current-state evidence, remaining-work forecasts, recovery options, and control.
- [Scope change](playbooks/scope-change.md) — evaluates and propagates outcome, requirement, solution, plan, cost, risk, and baseline changes.
- [Production release](playbooks/production-release.md) — assembles G6 evidence and controls deployment, rollout, observation, recovery, and closure.
- [Incident response](playbooks/incident-response.md) — establishes command, containment, recovery, communication, evidence, and learning.
- [AI feature delivery](playbooks/ai-feature-delivery.md) — orchestrates AI discovery, evaluation, architecture, controls, economics, release, and production learning.
- [Product metrics review](playbooks/product-metrics-review.md) — turns governed outcome and guardrail evidence into explicit product decisions.

## End-to-end examples

- [AI SaaS support copilot](examples/ai-saas/case-study.md) — human-reviewed RAG with evaluation, source control, fallback, cost, and staged release.
- [eCommerce checkout recovery](examples/ecommerce/case-study.md) — payment and inventory failure recovery with idempotency and reconciliation.
- [FinTech loan application status](examples/fintech/case-study.md) — high-trust customer transparency with state, identity, audit, and compliance controls.
- [SEO content opportunity platform](examples/seo-platform/case-study.md) — governed data sources, lineage, opportunity rules, AI synthesis, and tenant isolation.
- [Invoice exception automation](examples/automation/case-study.md) — bounded extraction and routing with scoped tools, approval, durable state, and recovery.

## Ownership rule

This index owns navigation only. Core modules own cross-cutting policy, lifecycle modules own sequencing, topic modules own their methods, the [metric dictionary](metrics/metric-dictionary.md) owns canonical metric contracts, templates own artifact structure, playbooks orchestrate existing modules, runtime skills execute and persist the selected workflow, generated plugin snapshots distribute but do not own policy, and examples are illustrative rather than normative. When two documents appear inconsistent, use the canonical module that owns the topic and record the inconsistency for correction.
