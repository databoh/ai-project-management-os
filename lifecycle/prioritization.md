---
title: Prioritization
type: lifecycle-method
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../product/product-outcomes.md
  - ../core/evidence-policy.md
  - ../core/decision-policy.md
related:
  - ../product/scope.md
  - ../product/mvp.md
  - overview.md
---

# Prioritization

## Purpose

Make product and delivery sequence decisions using criteria appropriate to the decision, evidence quality, and uncertainty rather than stakeholder volume or arbitrary scores.

## When to use

Use when comparing opportunities, outcomes, MVP capabilities, features, experiments, risks, or work items that compete for constrained attention or capacity. Reprioritize when evidence, strategy, dependencies, risk, cost of delay, or capacity materially changes.

## Inputs

- decision and accountable owner;
- candidate items at a comparable level;
- linked outcomes, actors, jobs, and evidence;
- expected value, reach, urgency, risk, effort range, dependencies, and constraints;
- confidence and critical assumptions;
- available capacity and decision horizon.

## Framework selection

| Framework | Best fit | Required inputs | Main caution |
|---|---|---|---|
| MoSCoW | Negotiating a fixed scope boundary or release | Clear meaning of Must, Should, Could, Won't and a capacity limit | Everything becomes Must without a strict failure test |
| RICE | Comparing similar product opportunities with observable reach | Reach, impact scale, confidence, effort | False precision and incompatible reach windows |
| ICE | Early directional comparison with limited data | Impact, confidence, ease on defined scales | Subjective scores can disguise weak evidence |
| WSJF | Sequencing comparable work in an economic flow system | Cost of delay components and job size | Relative scores are not financial forecasts |
| Kano | Understanding satisfaction effects by user segment | Structured user responses and feature states | Results vary by segment and change over time |
| Cost of Delay | Time-sensitive sequencing | Value lost per unit of delay and time sensitivity | Invented financial values create misleading certainty |
| Value versus Effort | Fast portfolio conversation or initial triage | Defined value criteria and effort ranges | Quadrants hide dependencies and risk |
| Risk versus Value | Choosing experiments, enablers, or risk-reduction work | Consequence, uncertainty, learning value, and outcome value | Risk-reduction work may be mistaken for low user value |

Use no framework when a simple constraint or dependency determines the only responsible sequence; record that rationale instead.

## Workflow

### 1. Frame the decision

State what is being prioritized, for which outcome, over what horizon, by whom, and what the result will authorize. Do not mix opportunities, features, and tasks in one comparison.

### 2. Separate mandatory work

Identify legal, security, safety, contractual, operational, or dependency work that is mandatory. Record its source and deadline. Mandatory does not mean unexamined: validate the obligation and minimum compliant response.

### 3. Select the framework

Choose based on the decision type and available evidence, not familiarity. Define scales, units, windows, and criteria before scoring.

### 4. Gather evidence and confidence

For each input, record source, date, owner, limitations, and confidence. Use ranges when effort, reach, value, or urgency is uncertain.

### 5. Score or compare

Apply the same definitions to comparable items. Show underlying inputs, not only final ranks. Keep dependencies, minimum coherence, and strategic fit visible outside the formula.

### 6. Test sensitivity

Change uncertain inputs across credible ranges. If small changes reverse the ranking, present the result as unstable and identify the cheapest validation that can resolve it.

### 7. Apply portfolio judgment

Check the candidate sequence for:

- outcome coverage;
- minimum coherent experience;
- risk and learning reduction;
- enabling dependencies;
- capacity and specialist bottlenecks;
- guardrails and mandatory controls;
- balance between near-term value and strategic options.

### 8. Decide and record

The accountable human approves the priority decision. Record selected, deferred, rejected, and unresolved items, rationale, confidence, review triggers, and affected artifacts.

## Prioritization record

| Field | Definition |
|---|---|
| Decision ID and owner | Linked approval authority |
| Objective and horizon | Outcome, context, and comparison window |
| Candidate level | Opportunities, outcomes, capabilities, features, experiments, or work items |
| Framework and rationale | Why it fits this decision |
| Criteria, scales, and weights | Definitions established before scoring |
| Sources and confidence | Evidence for every material input |
| Results and sensitivity | Rank or grouping plus stability |
| Mandatory work and dependencies | Items handled outside or alongside scoring |
| Decision | Selected, deferred, rejected, and unresolved |
| Review triggers | Evidence, capacity, risk, or strategy changes |

## Framework rules

### MoSCoW

A Must is something whose absence makes the defined release or outcome non-viable, non-compliant, unsafe, or unusable. Set a capacity limit for Must items and define “Won't in this horizon” explicitly.

### RICE and ICE

Define scales and periods consistently. Confidence must reduce the strength of the result, not merely appear as a label. Do not compare unrelated reach populations or effort units.

### WSJF and Cost of Delay

Document value, time criticality, risk reduction or opportunity enablement, and job-size inputs. Use relative WSJF for sequencing; do not report it as currency or promised ROI.

### Kano

Segment respondents and distinguish Must-be, Performance, Attractive, Indifferent, and Reverse responses. Revalidate as expectations mature.

### Value/Effort and Risk/Value

Define what value, effort, and risk mean for this decision. Use the matrix to support discussion, then account for dependencies, coherence, confidence, and mandatory controls.

## Decision rules

- Priority is a decision, not a permanent property of an item.
- Highest score does not override strategy, mandatory controls, dependencies, or minimum coherence.
- Do not convert story points directly into duration or monetary cost.
- Do not add precision beyond evidence quality.
- Do not lower priority because enabling or risk work lacks visible UI value.
- Stakeholder seniority is not a scoring criterion; accountable authority approves the final decision.
- Preserve rejected and deferred items with rationale to prevent repeated unstructured debate.
- Reprioritize on material new evidence, not continuously in response to noise.

## Outputs

- selected framework and rationale;
- transparent inputs, scores or comparisons, and sensitivity;
- priority decision with selected, deferred, rejected, and unresolved items;
- confidence, dependencies, mandatory controls, and review triggers;
- updated scope, MVP, assumption, and decision records.

## Quality checks

- Compared items are at a consistent level.
- Criteria and scales were defined before scoring.
- Inputs have evidence, units, time windows, and confidence.
- Sensitivity is shown for decision-critical uncertainty.
- Mandatory work and dependencies remain visible.
- The accountable owner approved the decision.
- Results trace to outcomes and update affected artifacts.

## Common mistakes

- choosing a framework before defining the decision;
- scoring every request to create an appearance of objectivity;
- mixing reach periods, effort units, or item levels;
- letting a formula override a coherent MVP path;
- hiding political preference inside weights;
- failing to revisit priorities when assumptions change.

## Related modules

- [Product outcomes](../product/product-outcomes.md)
- [Product scope](../product/scope.md)
- [MVP definition](../product/mvp.md)
- [Decision policy](../core/decision-policy.md)
