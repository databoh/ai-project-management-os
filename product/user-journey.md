---
title: User Journey
type: product-research-method
status: active
version: 0.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - personas.md
  - jobs-to-be-done.md
related:
  - product-outcomes.md
  - scope.md
  - ../lifecycle/prioritization.md
---

# User Journey

## Purpose

Represent the end-to-end experience of an actor pursuing a job across stages, channels, handoffs, and alternatives so product decisions address the whole outcome rather than isolated screens.

## When to use

Use when value depends on a multi-step experience, cross-channel interaction, operational handoff, lifecycle transition, or repeated use. Use a simpler process description when emotional experience and user decision points are not relevant.

## Inputs

- persona or role and linked job;
- observed current behavior and process evidence;
- touchpoints, channels, systems, teams, and dependencies;
- qualitative feedback, analytics, support, and operational data;
- known opportunities, risks, constraints, and assumptions.

## Journey types

- **Current-state journey:** evidence-backed experience today, including non-product alternatives.
- **Future-state journey:** proposed experience and outcome hypotheses; it must not be labeled as observed.
- **Service journey:** user experience combined with frontstage and backstage operational responsibilities.

Name the type, actor, job, scope, and evidence confidence.

## Workflow

### 1. Define boundaries

Specify actor, job, trigger, start condition, end condition, context, exclusions, and whether the journey is current or future state.

### 2. Gather evidence

Use observation, interviews, analytics, process data, support records, and operational expertise. Record missing segments, inaccessible touchpoints, and measurement gaps.

### 3. Map stages and actions

Describe what the actor tries to achieve and does at each stage. Include channel switches, waits, abandonment, retries, workarounds, and handoffs.

### 4. Add experience and evidence

Record questions, confidence, friction, trust concerns, and decision criteria only where evidence supports them. Link quantitative signals without implying causality.

### 5. Map service dependencies

Identify systems, teams, policies, data, vendors, and backstage processes required at each material step.

### 6. Identify opportunities

Frame opportunities as desired improvements or questions, not predetermined features. Link them to outcomes and prioritize with explicit evidence.

### 7. Validate and maintain

Review with represented users and operational owners. Update when behavior, channels, policy, or product scope changes.

## Journey record

| Field | Definition |
|---|---|
| Journey ID and status | `JRN-###`; Draft, Active, Superseded, or Retired |
| Type and confidence | Current, future, or service journey; evidence confidence |
| Actor and linked persona | One primary actor and applicable segment |
| Job and desired outcome | Linked `JOB-###` and `OUT-###` |
| Trigger, start, and end | Observable journey boundaries |
| Context and exclusions | Conditions where the map applies or does not |
| Evidence base | Sources, dates, methods, sample, and limitations |
| Owner and review trigger | Maintenance accountability |

## Stage map

| Stage | Actor goal | Actions and alternatives | Touchpoints | Friction or questions | Evidence | Backstage dependencies | Opportunity | Measure |
|---|---|---|---|---|---|---|---|---|
| Not established | Not established | Not established | Not established | Not assessed | Not provided | Not established | Not established | Not established |

Replace the default row with evidence-backed stages. Use linked assumption or hypothesis IDs for unvalidated future-state claims.

## Decision rules

- Do not mix multiple primary actors in one row; use connected journeys or a service blueprint where handoffs matter.
- A future-state journey is a design hypothesis, not evidence of user behavior.
- Emotional states require research evidence; do not draw a decorative emotion curve.
- Journey stages follow user progress, not internal department names or application screens.
- Do not optimize one stage if it moves effort, risk, or failure downstream.
- Link opportunities to outcomes before translating them into scope.
- Keep accessibility, recovery, support, and off-product steps visible.

## Outputs

- bounded current- or future-state journey;
- evidence and confidence by stage;
- cross-channel and operational dependencies;
- friction, drop-off, trust, and recovery points;
- outcome-linked opportunities and measurement gaps.

## Quality checks

- Actor, job, trigger, and end state are explicit.
- Current evidence and future hypotheses are visually distinguishable.
- Stages represent user progress.
- Non-product alternatives and operational handoffs are included.
- Opportunities do not prescribe features prematurely.
- Measures have defined sources or are marked gaps.

## Common mistakes

- mapping only the happy path;
- using internal process stages as the user journey;
- inventing emotions;
- omitting waits, recovery, support, and abandonment;
- treating every pain point as equal priority;
- creating a map that never informs scope or measurement.

## Related modules

- [Personas](personas.md)
- [Jobs to Be Done](jobs-to-be-done.md)
- [Product outcomes](product-outcomes.md)
- [Product scope](scope.md)
