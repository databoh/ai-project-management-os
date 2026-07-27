---
title: Terminology
type: glossary
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on: []
related:
  - evidence-policy.md
  - assumptions-policy.md
  - decision-policy.md
  - ../lifecycle/requirements.md
  - ../lifecycle/solution-outline.md
  - ../lifecycle/decomposition.md
  - ../lifecycle/estimation.md
  - ../lifecycle/roadmap.md
  - ../lifecycle/delivery-setup.md
  - ../delivery/workflow-statuses.md
  - ../ai/ai-product-discovery.md
  - ../ai/evaluation.md
  - ../metrics/metric-dictionary.md
  - ../playbooks/idea-to-mvp.md
---

# Terminology

## Purpose

Provide canonical distinctions for information, planning, product, delivery, architecture, and AI terms used across AI PM OS.

## Information classifications

| Term | Definition | Required handling |
|---|---|---|
| Confirmed fact | A claim supported by sufficient, relevant evidence for its use | Identify source and observation date |
| Assumption | A condition treated as true so work can proceed, but not yet sufficiently verified | Assign ID, impact, owner, validation, and status |
| Hypothesis | A testable expectation, often about cause and effect | Define test, measure, and decision threshold |
| Recommendation | A proposed course of action based on analysis | State rationale, alternatives, trade-offs, and confidence |
| Open question | Information needed but not yet answered | Assign owner or source and target decision point |
| Constraint | A boundary that limits viable options | Identify source, scope, and whether it is fixed or negotiable |
| Dependency | An external input, event, decision, team, or component required for progress | Identify owner, required-by point, and status |
| Risk | An uncertain event or condition that could affect objectives | Record probability, impact, response, owner, and trigger |
| Issue | A condition already occurring that affects objectives | Record impact, owner, action, and target resolution |
| Decision | An approved choice made by an accountable authority | Record status, owner, evidence, consequences, and date |
| Evidence | An observable source used to support or challenge a claim | Record provenance, date, method, and limitations |

## Product and planning terms

| Term | Definition |
|---|---|
| Business goal | A desired organizational result that explains why investment is justified |
| Product outcome | A measurable change in user or business behavior that the product should influence |
| Output | A delivered artifact, feature, service, or activity |
| Success metric | A defined measure used to evaluate progress toward an outcome |
| North Star Metric | A durable measure of recurring customer value, used only when one measure can credibly align the product |
| Scope | The approved boundary of outcomes, deliverables, requirements, and exclusions |
| Non-goal | An outcome or concern explicitly not pursued in the current initiative |
| MVP | The smallest coherent product release capable of testing critical value and risk assumptions; not merely the fewest features |
| Milestone | A meaningful control point or achieved state, not a container for unrelated tasks |
| Baseline | An approved reference for scope, schedule, cost, or quality against which change is controlled |
| Estimate | A conditional forecast based on stated inputs, assumptions, range, and confidence |
| Commitment | An approved obligation accepted by an accountable owner; it is not synonymous with an estimate |
| Confidence | A qualitative or quantitative expression of how likely an estimate or conclusion is to remain valid under stated assumptions |

## Delivery and quality terms

| Term | Definition |
|---|---|
| Acceptance criterion | A testable condition that a work item must satisfy |
| Definition of Ready | Agreed minimum conditions for work to enter a controlled delivery stage |
| Definition of Done | Agreed evidence required for work to be considered complete |
| Quality gate | A controlled decision point with explicit pass criteria |
| Lead time | Elapsed time from request to delivered outcome, with boundaries explicitly defined |
| Cycle time | Elapsed time from work start to work completion, with boundaries explicitly defined |
| Throughput | Number of work items completed per defined period |
| Work in progress | Started work that has not reached the defined completion state |
| Blocked time | Time during which progress cannot continue because a dependency or impediment is unresolved |
| Defect leakage | Defects discovered after the quality stage intended to detect them |
| Change failure rate | Proportion of production changes that cause degraded service or require remediation |
| MTTR | Mean time to restore service after an incident; the exact start and end states must be defined |

## Requirements and decomposition terms

| Term | Definition |
|---|---|
| Requirement | A necessary, traceable, and verifiable condition or capability |
| Business requirement | A business capability, obligation, or outcome needed independently of detailed system behavior |
| Functional requirement | Observable behavior a system must provide under defined conditions |
| Non-functional requirement | A measurable quality characteristic or operating condition |
| Use case | Goal-oriented interaction between actors and a system boundary, including alternate and failure behavior |
| User story | A small negotiable slice of user or operational value; it is not a complete specification by itself |
| Verification | Confirmation that an output satisfies specified requirements |
| Validation | Confirmation that the selected product or solution addresses the intended need in context |
| Requirement baseline | An approved versioned requirement set subject to change control |
| Work Breakdown Structure | Deliverable-oriented hierarchy containing all work within an approved project boundary |
| Work package | Lowest WBS unit managed for ownership, estimate, schedule, cost, and acceptance at the chosen control level |

## Forecast and roadmap terms

| Term | Definition |
|---|---|
| Target | Desired result or timing approved as a planning objective; it may differ from the current forecast |
| Forecast | Current evidence-based prediction of a future result, expressed with range, confidence, and assumptions |
| Deadline | Latest acceptable completion point imposed by an authoritative constraint, with consequence if missed |
| Capacity | Work a role or delivery system can realistically absorb during a period after competing demand and variability |
| Critical path | Current dependency path that determines the earliest forecast completion under the modeled durations, calendars, and resources |
| Total float | Amount an activity can move without changing the current forecast completion under the schedule model |
| Product roadmap | Sequence of product outcomes, problems, learning, and strategic choices across confidence-aware horizons |
| Delivery roadmap | Capacity- and dependency-aware forecast of deliverables, milestones, releases, and decision gates |
| Release | Controlled increment made available to a defined audience or operating environment |

## Delivery operating-model terms

| Term | Definition |
|---|---|
| Sprint Goal | Coherent objective that explains why a Scrum Sprint is valuable and guides adaptation of its work |
| Work-item age | Elapsed time since a current item crossed the defined start or commitment point |
| WIP limit | Explicit maximum number of work items permitted in a defined state, lane, or delivery system |
| Service Level Expectation | Probability-based forecast of elapsed delivery time for a defined historical work population; not a guaranteed SLA |
| Blocked | Overlay indicating that progress cannot continue because a named impediment or dependency is unresolved |
| RAG status | Green, Amber, Red, or Grey interpretation based on predefined evidence and action thresholds |

## Architecture and operations terms

| Term | Definition |
|---|---|
| Architecture driver | A requirement, quality attribute, constraint, risk, or business concern that materially shapes a solution decision |
| System context | Representation of a system boundary, external actors and systems, and the interactions between them |
| Trust boundary | A boundary across which the level of trust, identity, control, ownership, or data handling changes |
| Architecture Decision Record | Versioned record of a material architecture choice, its context, options, authority, consequences, and review triggers |
| Service Level Indicator | Quantitative measure of a defined aspect of service behavior from a user or system perspective |
| Service Level Objective | Target range or threshold for an SLI over a defined population and window; it is not automatically a contractual SLA |
| Recovery Time Objective | Target maximum time to restore an agreed capability after disruption |
| Recovery Point Objective | Target maximum tolerable data-loss interval, expressed as a point in time before disruption |

## AI delivery terms

| Term | Definition |
|---|---|
| AI-enabled system | Product or operational system whose behavior materially depends on a probabilistic model, generated inference, semantic retrieval, or model-directed action |
| Model baseline | Approved, reproducible identity and configuration of a model and its surrounding prompt, context, tools, controls, and environment |
| Prompt specification | Versioned intended instruction behavior, variables, context contract, output contract, examples, constraints, and evaluation references; not merely a text string |
| Context | Information assembled for a model invocation, including authorized instructions, user input, retrieved evidence, state, and tool results with explicit trust and lifecycle boundaries |
| Retrieval-Augmented Generation | Pattern that retrieves external evidence and supplies it to generative behavior under defined source, access, grounding, and lifecycle controls |
| AI agent | AI-enabled system that selects or sequences actions toward a bounded goal using state, tools, or delegation under explicit authority |
| Tool | Bounded callable capability with defined input, output, identity, permission, side-effect, limit, and failure behavior |
| Model Context Protocol | Protocol for exposing or consuming model-facing capabilities; use of the protocol does not itself establish trust or authorization |
| Evaluation set | Versioned collection of cases and metadata used to measure specified AI behavior for a defined decision, population, and configuration |
| Guardrail | Preventive, detective, responsive, or recovery control that keeps AI behavior within an approved boundary |
| Human-in-the-loop | Designed human decision or review point with a trigger, timing, qualified role, evidence, authority, service expectation, and audit record |
| Drift | Material change in inputs, population, data, configuration, behavior, quality, safety, or cost relative to an approved reference; a signal requiring analysis, not automatic proof of cause |

## Metrics and control terms

| Term | Definition |
|---|---|
| Metric contract | Versioned authoritative definition of a measure’s purpose, formula, population, time, source, quality, ownership, thresholds, access, and change history |
| Outcome measure | Measure of the user, business, service, or delivery result a decision seeks to influence |
| Input measure | Measure of a behavior or capability expected to influence an outcome under stated assumptions or evidence |
| Guardrail measure | Measure that constrains unacceptable harm or deterioration while another result is optimized |
| Diagnostic measure | Measure used to explain variation or locate a cause without being the primary success criterion |
| Control measure | Measure tied to a predefined review, alert, stop, escalation, or intervention |
| Cohort | Population grouped by a defined entry event or shared starting condition and compared at an explicit observation age |
| Exposure | Evidence that an eligible entity could experience the product, treatment, release, or risk under analysis |
| Percentile | Value at or below which a stated proportion of observations falls within a defined population and period |
| DORA software-delivery performance | Current source-defined set of five measures covering change lead time, deployment frequency, failed deployment recovery time, change fail rate, and deployment rework rate |
| Incident | Unplanned event or condition that causes or threatens material user, service, data, business, safety, security, privacy, or compliance impact and requires coordinated control |

## Repository artifact terms

| Term | Definition |
|---|---|
| Operational playbook | Outcome-oriented sequence that orchestrates authoritative policies, methods, gates, and records for a recurring situation without replacing their definitions |
| Illustrative example | Fictional worked application of AI PM OS used for learning; it is not policy, evidence, a benchmark, or an approved decision for another initiative |

## Hierarchy

Use only the levels necessary for control:

`Outcome → Initiative → Epic → Feature → User story → Task → Subtask`

An outcome is a measurable change. Initiative, epic, and feature are optional grouping levels. A user story expresses user value in a testable slice. Tasks and subtasks describe implementation work.

## Usage rules

- Do not use risk and issue interchangeably.
- Do not use estimate and commitment interchangeably.
- Do not call an output an outcome without a measurable change.
- Do not call an assumption a fact because stakeholders agree with it.
- Define metric boundaries, populations, windows, and sources before comparison.

## Related modules

- [Evidence policy](evidence-policy.md)
- [Assumptions policy](assumptions-policy.md)
- [Decision policy](decision-policy.md)
- [Requirements management](../lifecycle/requirements.md)
- [Solution outline](../lifecycle/solution-outline.md)
- [Work decomposition](../lifecycle/decomposition.md)
- [Estimation](../lifecycle/estimation.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
- [Delivery setup](../lifecycle/delivery-setup.md)
- [Workflow statuses](../delivery/workflow-statuses.md)
- [AI product discovery](../ai/ai-product-discovery.md)
- [AI evaluation](../ai/evaluation.md)
- [Metric dictionary](../metrics/metric-dictionary.md)
- [Idea to MVP](../playbooks/idea-to-mvp.md)
