---
title: Delayed Project Recovery Playbook
type: operational-playbook
status: active
version: 1.0.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - existing-project-audit.md
  - ../metrics/delivery-metrics.md
related:
  - ../lifecycle/estimation.md
  - ../lifecycle/roadmap.md
  - ../delivery/capacity-planning.md
  - ../delivery/dependency-management.md
  - scope-change.md
---

# Delayed Project Recovery Playbook

## Purpose

Restore evidence, decision flow, and a credible forecast for delayed or deteriorating work while protecting users, quality, team sustainability, and contractual truth.

## When to use

Use when a milestone, release, budget, or outcome is materially off forecast; confidence has collapsed; status is disputed; blocked work accumulates; repeated re-planning fails; or commitments no longer match capacity and evidence.

## Inputs

- approved baseline, target, commitment, scope, acceptance, and change history;
- historical forecasts, actuals, milestones, work state, flow, defects, incidents, decisions, and dependencies;
- current team, skills, capacity, calendars, turnover, and competing demand;
- technical, environment, vendor, client, approval, and operational constraints;
- commercial, legal, communication, and trust consequences.

## Workflow

### 1. Stabilize truth and immediate risk

Stop unsupported percentage-complete and date claims. Preserve the last approved baseline and historical forecasts. Contain active production, security, financial, legal, or people risks before schedule optimization.

### 2. Define the recovery decision

Name the outcome or commitment at risk, accountable sponsor, latest decision point, available levers, non-negotiable constraints, and cost of delay or failed recovery.

### 3. Reconstruct current state

Use accepted completion evidence, not reported effort. Inventory remaining scope, defects, rework, environment and release work, dependencies, decisions, capacity, and unknowns.

### 4. Diagnose the system

Analyze:

- unclear or changing outcome and scope;
- missing requirement or solution evidence;
- optimistic estimates or hidden work;
- capacity, skill, multitasking, queue, and WIP constraints;
- dependency, review, decision, access, and environment delay;
- quality, integration, migration, release, and operational rework;
- governance, incentives, communication, and forecast behavior.

Avoid forcing one root cause when interacting conditions explain the delay.

### 5. Re-estimate and reforecast

Estimate remaining work with current evidence, role capacity, dependencies, critical and near-critical paths, quality and release work, uncertainty, and scenarios. Separate target, commitment, and forecast.

### 6. Build recovery options

At minimum consider:

- protect scope and change target or funding;
- protect target and reduce or phase scope;
- change sequence, dependency, or solution;
- add specific capability or capacity after onboarding delay;
- stop, pause, or return to discovery;
- accept a controlled risk only through proper authority.

### 7. Select and approve

Compare outcome, timing range, cost, quality, trust, team sustainability, dependency, reversibility, and confidence. Route scope, budget, contract, architecture, production, or risk decisions to authorized humans.

### 8. Reset control

Baseline the approved option, milestones, release, scope, assumptions, actions, capacity, dependencies, reporting, and change path. Do not rewrite prior history.

### 9. Run recovery checkpoints

Use leading evidence for dependency removal, WIP, aging, acceptance, defect and rework, path movement, forecast range, and decisions. Exit recovery mode only when the normal control system is reliable.

## Recovery assessment

| Area | Current evidence | Impact | Recovery option | Owner | Decision point |
|---|---|---|---|---|---|
| Outcome and scope | Not established | Not assessed | Not established | Not assigned | Not established |
| Remaining work and quality | Not established | Not assessed | Not established | Not assigned | Not established |
| Capacity and flow | Not established | Not assessed | Not established | Not assigned | Not established |
| Dependencies and decisions | Not established | Not assessed | Not established | Not assigned | Not established |
| Solution and operations | Not established | Not assessed | Not established | Not assigned | Not established |
| Forecast and commitments | Not established | Not assessed | Not established | Not assigned | Not established |

## Decision rules

- A deadline cannot be recovered by deleting verification, security, migration, recovery, or support work silently.
- Adding people has onboarding, communication, and task-partition costs and is not an instant schedule reduction.
- Overtime is not a routine capacity plan.
- Scope reduction requires outcome, coherence, acceptance, dependency, and release analysis.
- Reforecasting is not failure; hiding current evidence is.
- Recovery status ends through evidence, not a Green label.

## Outputs

- verified current state and delay diagnosis;
- remaining-work estimate and scenario forecasts;
- comparable recovery options and accountable decision;
- revised baseline and control model;
- stakeholder communication, checkpoints, and exit criteria.

## Quality checks

- Historical baselines and forecasts remain preserved.
- Remaining work includes quality, integration, release, and operations.
- Causes are evidenced and systemic.
- Options expose outcome, cost, risk, and sustainability effects.
- Approval matches the changed commitment.
- Recovery measures cannot reward hidden work or premature completion.

## Related modules

- [Existing project audit](existing-project-audit.md)
- [Estimation](../lifecycle/estimation.md)
- [Delivery roadmap](../lifecycle/roadmap.md)
- [Delivery metrics](../metrics/delivery-metrics.md)
- [Scope change](scope-change.md)
