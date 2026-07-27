---
title: Minimum Viable Product
type: product-definition-method
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - scope.md
  - product-outcomes.md
related:
  - product-vision.md
  - user-journey.md
  - ../lifecycle/prioritization.md
  - ../core/quality-gates.md
---

# Minimum Viable Product

## Purpose

Define the smallest coherent product increment that can deliver or test meaningful value while controlling material user, business, operational, and technical risk.

## When to use

Use after product outcomes and a candidate scope direction exist. Use an experiment, prototype, concierge service, or technical spike instead of an MVP when the next uncertainty can be tested credibly without a releasable product.

## Inputs

- vision, outcomes, and scope direction;
- personas, jobs, and journey;
- value, usability, feasibility, viability, and trust assumptions;
- current alternatives and expected adoption behavior;
- operational, security, privacy, legal, compliance, support, and measurement needs;
- constraints, dependencies, risks, and available validation methods.

## MVP tests

An MVP must be:

- **valuable:** enables a meaningful job or outcome for a defined audience;
- **usable:** provides a coherent path including errors, recovery, and accessibility needs;
- **feasible:** can operate with known technology, data, integrations, and team capability;
- **viable:** supports a credible business and operating model;
- **trustworthy enough:** meets proportionate security, privacy, compliance, safety, quality, and transparency controls;
- **measurable:** can produce decision-quality evidence for its hypotheses.

Minimum does not mean omitting mandatory controls.

## Workflow

### 1. Name the decision and hypotheses

State which value, behavior, feasibility, viability, or trust assumptions the MVP must test and what evidence will support continue, adapt, expand, or stop.

### 2. Select the narrowest viable audience and job

Choose a segment and context that can generate meaningful evidence without misrepresenting broader product fitness.

### 3. Define the end-to-end path

Include the trigger, core value moment, completion, failures, recovery, support, administration, measurement, and operational handoffs necessary for coherent use.

### 4. Choose the validation vehicle

Compare a production MVP with lower-cost options such as interview validation, prototype, landing page, manual service, wizard-of-oz test, data analysis, or technical spike. Use the least costly method that can produce credible evidence without unacceptable harm.

### 5. Establish minimum controls

Identify security, privacy, compliance, accessibility, data quality, human review, observability, support, rollback, and fallback requirements. For AI-enabled scope, include evaluation thresholds, guardrails, tool permissions, cost, latency, and failure behavior.

### 6. Define exclusions and staged substitutes

Record deferred segments, journeys, automation, scale, integrations, and polish. State any temporary manual process, its owner, capacity, risk, and exit condition.

### 7. Define evidence and decision rules

Specify participants, baseline, metric definitions, thresholds, guardrails, observation horizon, sample limitations, and the decision each result triggers.

### 8. Review and approve

Use [prioritization](../lifecycle/prioritization.md) to compare candidate capabilities. Record the responsible product decision; retain G3 controls before treating MVP scope, cost, or dates as a delivery baseline.

## MVP record

| Field | Definition |
|---|---|
| MVP ID and status | Stable ID; Exploratory, Proposed, Approved direction, Baselined, Released, or Retired |
| Target audience and job | Narrow segment, context, and linked job |
| Intended outcome | Linked `OUT-###` |
| Critical hypotheses | Value, usability, feasibility, viability, and trust |
| Validation vehicle | Why a production MVP is or is not required |
| Core value path | Trigger through value and completion |
| Required capabilities | User-facing, enabling, operational, measurement, and control needs |
| Exclusions and temporary substitutes | Deferred work and manual controls |
| Evidence plan | Metrics, thresholds, sample, horizon, and limitations |
| Guardrails and stop conditions | Harm, quality, cost, operational, or trust limits |
| Dependencies and assumptions | Owners, status, and validation |
| Rollout and fallback direction | Exposure, recovery, and support assumptions |
| Decision owner and approval | Status and record |

## Decision rules

- An MVP is not the first release by default; prove that a releasable product is the least costly credible test.
- Do not remove security, privacy, compliance, accessibility, data integrity, or recovery controls merely to reduce scope.
- A capability is required when removing it breaks the core value path, decision-quality measurement, or mandatory control.
- Manual work is acceptable only with named ownership, capacity, risk, disclosure where needed, and an exit condition.
- Success thresholds must be declared before observing results.
- Do not generalize results beyond represented users, contexts, or operating conditions.
- A failed MVP hypothesis can be a successful learning outcome.
- “Phase 2 later” is not an exclusion rationale; record the impact and decision.

## Outputs

- MVP record and coherent value path;
- critical hypotheses and validation vehicle;
- required capabilities, controls, exclusions, and substitutes;
- measurement, guardrail, and stop rules;
- dependencies, assumptions, ownership, and approval status.

## Quality checks

- The MVP tests a named decision-critical hypothesis.
- The audience and job are narrow but meaningful.
- The experience includes completion, failure, recovery, operations, and measurement.
- Mandatory trust and compliance controls are included.
- A cheaper credible validation method has been considered.
- Evidence thresholds and next decisions are explicit.
- MVP direction is not represented as a G3 delivery baseline.

## Common mistakes

- defining MVP as the smallest feature count;
- shipping to all users to test a narrow assumption;
- omitting support, admin, analytics, or recovery;
- accepting unbounded manual operations;
- moving quality and security work outside scope;
- measuring sign-ups when the hypothesis concerns recurring value.

## Related modules

- [Product scope](scope.md)
- [Product outcomes](product-outcomes.md)
- [User journey](user-journey.md)
- [Prioritization](../lifecycle/prioritization.md)
