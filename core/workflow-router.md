---
title: Workflow Router
type: workflow
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - operating-principles.md
  - agent-role.md
related:
  - quality-gates.md
  - ../lifecycle/overview.md
  - ../ai/ai-product-discovery.md
  - ../metrics/metric-dictionary.md
  - ../metrics/incident-metrics.md
  - ../playbooks/idea-to-mvp.md
  - ../playbooks/existing-project-audit.md
  - ../playbooks/incident-response.md
---

# Workflow Router

## Purpose

Select the smallest responsible workflow for a request without forcing every request through every lifecycle artifact.

## Inputs

- raw request and source materials;
- desired outcome and urgency;
- product state: idea, existing product, active delivery, production incident, or improvement cycle;
- known impact, risk, constraints, and commitment requested;
- presence of AI-enabled behavior.

## Routing workflow

1. Preserve the raw request and identify its source.
2. State the requested outcome; mark it as an open question if unclear.
3. Determine whether the work concerns an idea, existing product, feature, active delivery, incident, or performance signal.
4. Select one primary mode from the routing table.
5. Add AI product controls whenever a model, agent, RAG system, or AI automation is in scope.
6. Locate the current lifecycle stage and the next material decision.
7. Apply the minimum modules and quality gate needed for that decision.
8. Re-route when new evidence changes the problem or product state.

## Routing table

| Signal | Primary mode | Expected first output | Typical next gate |
|---|---|---|---|
| New idea, concept, or client request | Idea to project | [Idea-to-MVP](../playbooks/idea-to-mvp.md) intake, questions, assumptions, and discovery plan | G0 |
| Existing repository, backlog, plan, or troubled project | Existing-project audit | [Audit](../playbooks/existing-project-audit.md), gaps, contradictions, risks, and recovery priorities | Gate matching the current stage |
| Feature or business request | Feature planning | Problem, value, requirements, options, dependencies, acceptance and measurement outline | G1 or G3 |
| Active roadmap, sprint, release, or milestone | Delivery management | Status, variance, blockers, forecast, decisions, recovery actions | G5 |
| Current production degradation or outage | Incident response | [Incident response](../playbooks/incident-response.md), impact, ownership, containment, recovery, communication, and control | Incident controls plus G6 before corrective release |
| Metrics, feedback, support data, or weak performance | Product improvement | [Product metrics review](../playbooks/product-metrics-review.md), insight, hypotheses, opportunities, and measurement plan | G7 then G1 |
| Model, agent, RAG, MCP, or AI automation | AI product overlay | [AI feature delivery](../playbooks/ai-feature-delivery.md), use assessment, risks, evaluation, controls, cost, observability, fallback, and human review | Relevant gate plus AI extension |

## Multiple-mode requests

Choose the mode tied to the most immediate material outcome. Treat other modes as overlays or follow-on workflows.

Precedence for urgent conflicts:

1. protect people, data, money, compliance, and production stability;
2. contain an active incident;
3. meet an imminent irreversible decision point;
4. restore delivery control;
5. continue discovery, definition, or improvement.

Urgency changes sequencing, not evidence classification or approval authority.

## Decision rules

- Do not route directly to planning when the problem or intended outcome is unconfirmed.
- Do not restart discovery from zero when reliable existing evidence can be audited and reused.
- Do not use the full lifecycle for a reversible, low-risk working decision.
- Do not skip the AI extension because AI is only one component of a larger feature.
- A request for a date, cost, or scope commitment routes through the evidence and planning gates needed to support that commitment.

## Outputs

- primary mode and any overlays;
- current lifecycle stage;
- next material decision and applicable gate;
- required inputs, missing information, and owners;
- smallest valuable next increment;
- escalation or human approval required.

## Quality checks

- The selected mode matches the actual product state and immediate outcome.
- The next gate is named.
- Missing facts are not silently filled with assumptions.
- AI controls are included where applicable.
- The proposed increment is sufficient for the next decision and no larger.

## Related modules

- [Agent role](agent-role.md)
- [Quality gates](quality-gates.md)
- [Lifecycle overview](../lifecycle/overview.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Incident metrics and control](../metrics/incident-metrics.md)
- [Idea to MVP](../playbooks/idea-to-mvp.md)
- [Existing project audit](../playbooks/existing-project-audit.md)
- [Incident response](../playbooks/incident-response.md)
- [AI feature delivery](../playbooks/ai-feature-delivery.md)
- [Product metrics review](../playbooks/product-metrics-review.md)
