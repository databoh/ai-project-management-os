---
title: Idea to MVP Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../core/workflow-router.md
  - ../lifecycle/overview.md
related:
  - ../lifecycle/intake.md
  - ../lifecycle/discovery.md
  - ../product/mvp.md
  - ../lifecycle/solution-outline.md
  - ../lifecycle/roadmap.md
---

# Idea to MVP Playbook

## Purpose

Move an incomplete idea to a controlled MVP decision, delivery plan, release, and learning cycle without manufacturing scope, dates, certainty, or product value.

## When to use

Use for a new digital product, material product concept, client idea, or new capability with no approved product baseline. For an existing product or inherited delivery system, start with the [existing-project audit](existing-project-audit.md).

## Inputs

- raw request and source;
- requester, expected outcome, urgency, and known constraints;
- available user, market, business, technical, data, operational, and domain evidence;
- named decision authority or an open question identifying the missing authority.

## Playbook

| Step | Work and authoritative modules | Exit evidence |
|---|---|---|
| 1. Route and preserve | Select idea-to-project mode with the [workflow router](../core/workflow-router.md); preserve the raw request | Primary mode, current stage, next gate, and source |
| 2. Intake | Use [project intake](../lifecycle/intake.md); classify facts, assumptions, constraints, risks, and questions | G0 result and discovery handoff |
| 3. Discover | Run proportionate [discovery](../lifecycle/discovery.md), problem framing, stakeholder analysis, and evidence review | Problem, users, alternatives, value, uncertainty, and G1 result |
| 4. Define product | Establish vision, outcomes, personas where evidenced, jobs, journey, scope direction, and measurement | G2 result with owner and governed outcome measures |
| 5. Define MVP | Use [MVP](../product/mvp.md) to select the smallest coherent value-and-learning boundary with mandatory controls | MVP hypothesis, in/out boundary, validation, guardrails, and stop conditions |
| 6. Specify | Create only necessary requirements, acceptance, use-case, traceability, and decomposition views | Approved requirement direction and controlled work boundary |
| 7. Outline solution | Compare alternatives and use the [solution outline](../lifecycle/solution-outline.md); apply the AI overlay when relevant | G3 result, architecture direction, ADRs, risks, and approvals |
| 8. Forecast | Estimate with range and confidence; model capacity, dependencies, critical path, milestones, roadmap, and release | G4 plan decision without converting forecast into certainty |
| 9. Prepare delivery | Select operating model, workflow, DoR, DoD, reporting, metrics, environments, and escalation | G5 result and execution-ready ownership |
| 10. Deliver and learn | Control scope, flow, quality, decisions, and forecast; route release through G6 | Done evidence and authorized staged release |
| 11. Observe | Run hypercare, outcome and guardrail review, incidents, support, and experiment decisions | G7 result: expand, adapt, stop, or return to discovery |

## MVP control record

| Field | Required content |
|---|---|
| Idea and source | Original statement, requester, date, and preserved context |
| Problem and evidence | Affected actor, current alternative, consequence, and confidence |
| Outcome | Outcome ID, baseline status, measure, threshold direction, and owner |
| MVP boundary | Included value path, exclusions, future candidates, and non-goals |
| Riskiest assumptions | IDs, impact, validation, owner, and decision threshold |
| Solution direction | Options, selected or proposed direction, evidence, and ADRs |
| Plan | Estimate range, capacity, dependencies, milestones, release, and confidence |
| Trust and operations | Security, privacy, compliance, accessibility, support, recovery, and observability |
| Learning decision | Pilot population, horizon, guardrails, stop conditions, and authority |

## Decision rules

- Do not define an MVP as the fewest requested features.
- A discovery prototype is not automatically production-ready.
- Skip an artifact only when its decision outcome is already evidenced.
- A fixed date changes scope and option analysis; it does not justify a fabricated estimate.
- The accountable human approves G2–G6 commitments and material risk.
- Release completion is not product success; outcome evidence determines the next decision.

## Outputs

- traceable intake-through-MVP decision chain;
- approved or proposed product and solution direction;
- controlled requirements, plan, operating model, and release;
- outcome, guardrail, operational, and learning evidence;
- explicit decision to expand, adapt, stop, or continue discovery.

## Quality checks

- The original idea remains distinguishable from discovered evidence.
- Every gate result links to evidence and authority.
- MVP contains a complete value and validation path.
- Estimates and targets state uncertainty and conditions.
- Trust, operations, and measurement are inside the boundary.
- Learning propagates back into product and delivery decisions.

## Related modules

- [Workflow router](../core/workflow-router.md)
- [Lifecycle overview](../lifecycle/overview.md)
- [MVP](../product/mvp.md)
- [Solution outline](../lifecycle/solution-outline.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
