---
title: Definition of Done
type: delivery-policy
status: active
version: 0.8.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - workflow-statuses.md
  - definition-of-ready.md
  - ../business-analysis/acceptance-criteria.md
  - release-management.md
  - ../ai/evaluation.md
  - ../ai/guardrails.md
---

# Definition of Done

## Purpose

Define shared evidence that a work item or Increment meets the required quality, integration, documentation, control, and operational standard.

## When to use

Use for all controlled delivery work. Maintain a common minimum DoD and add proportionate work-type or product extensions. Release readiness remains a separate G6 decision.

## Policy layers

- **Common DoD:** minimum quality evidence for all applicable completed work.
- **Work-type extension:** additional evidence for software, data, infrastructure, content, research, compliance, or AI scope.
- **Release criteria:** evidence required to authorize a particular release; maintained in release management.
- **Acceptance criteria:** item-specific behavior; maintained with the requirement or story.

An item must satisfy both applicable acceptance criteria and DoD.

## Common completion evidence

As applicable:

- approved acceptance criteria are satisfied and evidenced;
- implementation, analysis, configuration, or content is reviewed by the required owner;
- automated and manual verification appropriate to risk passes;
- integration with the controlled baseline is complete;
- known defects, deviations, and residual risks are recorded and authorized;
- security, privacy, compliance, accessibility, and data controls are satisfied;
- observability, error handling, recovery, and support implications are addressed;
- documentation, decision, requirement, test, and traceability records are updated;
- no secrets, prohibited data, temporary access, or unowned manual process remain;
- the result is deployable or usable within the declared Increment boundary.

## Work-type extensions

| Work type | Additional completion evidence |
|---|---|
| Software | Review, tests, integration, configuration, versioning, error handling, telemetry, and maintainability |
| Data or integration | Contract, quality checks, lineage, access, reconciliation, retry, retention, and schema compatibility |
| Infrastructure or migration | Reproducibility, access control, monitoring, capacity, backup, rollback or recovery, and runbook |
| Defect | Expected behavior restored, regression coverage, affected versions, and cause or prevention action where material |
| Research or spike | Decision question answered, evidence and limitations recorded, options updated, and temporary assets handled |
| Security or compliance | Required review, control evidence, audit reference, exception status, and accountable approval |
| AI-enabled behavior | Reproducible representative evaluation, mandatory threshold and slice results, guardrails, injection and tool tests, privacy, human review, fallback, version identity, latency, cost, and observability |

## Done evidence record

| Criterion area | Result | Evidence | Reviewer or owner | Exception reference |
|---|---|---|---|---|
| Acceptance and functional behavior | Not assessed | Not provided | Not assigned | None |
| Quality and regression | Not assessed | Not provided | Not assigned | None |
| Security, privacy, compliance, and accessibility | Not assessed | Not provided | Not assigned | None |
| Integration, data, and compatibility | Not assessed | Not provided | Not assigned | None |
| Observability, recovery, and support | Not assessed | Not provided | Not assigned | None |
| Documentation and traceability | Not assessed | Not provided | Not assigned | None |

## Decision rules

- Done is binary for the declared boundary; percentage complete belongs in forecast, not completion.
- Do not mark incomplete work Done because a Sprint or reporting period ends.
- “Code complete” is not Done when integration, verification, documentation, or controls remain.
- A known deviation requires explicit risk acceptance by the appropriate authority; the exception stays visible.
- DoD may become stronger as capability improves, but must not be weakened silently to meet a date.
- Release to production requires G6 even when all included items are Done.
- Reopened work preserves prior completion evidence and records the new failure.
- Automation supports evidence but does not replace accountable review where required.

## Outputs

- shared and work-type-specific completion policy;
- consistent Done decision with evidence and reviewers;
- explicit defects, exceptions, and residual-risk approvals;
- reliable flow, quality, release, and traceability data.

## Quality checks

- DoD and acceptance criteria have distinct ownership.
- Criteria are observable and proportionate to risk.
- Integration, trust, operational, and documentation work is included.
- Exceptions include authority, impact, expiry, and follow-up.
- Tool transitions to Done require evidence.
- Release authorization remains separate.

## Common mistakes

- treating developer completion as product completion;
- copying the same acceptance criteria into DoD;
- excluding testing or documentation to improve velocity;
- allowing tool automation to close work without evidence;
- using different hidden DoD standards across teams.

## Related modules

- [Definition of Ready](definition-of-ready.md)
- [Workflow statuses](workflow-statuses.md)
- [Acceptance criteria](../business-analysis/acceptance-criteria.md)
- [Release planning](release-management.md)
- [AI evaluation](../ai/evaluation.md)
- [AI guardrails](../ai/guardrails.md)
