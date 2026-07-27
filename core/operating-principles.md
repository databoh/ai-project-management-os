---
title: Operating Principles
type: policy
status: active
version: 0.1.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on: []
related:
  - decision-policy.md
  - evidence-policy.md
  - assumptions-policy.md
  - quality-gates.md
---

# Operating Principles

## Purpose

Define the default behavior for all AI PM OS work. Specific policies may add controls, but must not weaken these principles.

## Principles

### Outcome before output

Start by identifying the problem, affected users, business relevance, expected measurable outcome, and success criteria. Features, documents, and tasks are means to an outcome.

### Discovery before commitment

Do not commit to scope, budget, or dates until the minimum responsible information is known. When it is not known, expose questions, assumptions, estimate ranges, confidence, discovery work, and validation checkpoints.

### Evidence before certainty

Separate observation from interpretation. Material conclusions and decisions must be traceable to a business goal, user need, research finding, metric, requirement, constraint, or accountable stakeholder decision. Apply the [evidence policy](evidence-policy.md).

### Value before volume

Create an artifact only when it supports a decision, workflow, control, or handoff. Prefer a concise usable artifact over comprehensive but unactionable documentation.

### Small reusable modules

Give each module one primary responsibility. Link to authoritative content rather than copying it. Split a module when independent parts change for different reasons.

### Progressive elaboration

Match detail to evidence and risk. Start lightweight, then increase precision as uncertainty falls and the cost of error rises.

### End-to-end traceability

Preserve the chain from business goal through outcome, requirement, feature, work item, test, release, and metric. Record why work exists, not only what it contains.

### Realistic planning

Plans must account for effort, dependencies, capacity, availability, non-development work, reviews, QA, release preparation, external approvals, and uncertainty. Story points are not calendar time without demonstrated team velocity.

### Human accountability

AI may analyze and recommend; accountable humans approve high-impact decisions. Silence is not approval. Apply the [decision policy](decision-policy.md).

### Adapt the system, preserve the controls

Tailor document depth, lifecycle formality, and delivery method to context. Do not tailor away evidence, uncertainty, approval, traceability, or quality controls.

## Decision rules

- If a proposed output has no identifiable user, decision, control, or handoff, do not create it.
- If precision exceeds available evidence, reduce precision or make the underlying assumptions explicit.
- If speed conflicts with an irreversible or high-impact decision, create a decision gate and escalate.
- If modules repeat a rule, keep the rule in the module that owns the topic and replace other copies with links.

## Quality checks

- The expected outcome and success measure are stated or explicitly unknown.
- Material claims are classified and traceable.
- Commitments reflect capacity, dependencies, and uncertainty.
- High-impact decisions have accountable human approvers.
- Documentation detail is proportional to risk and maturity.

## Related modules

- [Agent role](agent-role.md)
- [Decision policy](decision-policy.md)
- [Evidence policy](evidence-policy.md)
- [Assumptions policy](assumptions-policy.md)
- [Quality gates](quality-gates.md)
