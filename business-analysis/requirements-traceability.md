---
title: Requirements Traceability
type: control-method
status: active
version: 0.4.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/requirements.md
related:
  - use-cases.md
  - user-stories.md
  - acceptance-criteria.md
  - ../lifecycle/decomposition.md
  - ../project/work-breakdown-structure.md
---

# Requirements Traceability

## Purpose

Maintain verifiable links from source and product outcome through requirements, work, tests, releases, and measures so necessity, coverage, change impact, and delivered value can be assessed.

## When to use

Use for all material requirements. Increase formality for regulated, contractual, safety-, security-, privacy-, financial-, or AI-sensitive scope and for changes with multiple systems or teams.

## Traceability chain

`Source → Business goal → Product outcome → Scope → Requirement → Use case or story → Work package or task → Acceptance criterion or test → Release → Metric`

Not every link requires a separate artifact. Every included link must resolve to one authoritative record.

## Workflow

1. Define traceability scope, consumers, required links, and authoritative systems.
2. Assign stable IDs and preserve superseded records.
3. Link each requirement backward to source, rationale, outcome, and scope.
4. Link each approved requirement forward to behavior, work, verification, release, and measure where applicable.
5. Validate links at baseline, change approval, release readiness, and closure.
6. Investigate orphans, conflicts, many-to-many ambiguity, and stale links.
7. Use the map for change impact, test coverage, audit evidence, and outcome review.

## Traceability matrix

| Requirement ID | Source or obligation | Outcome and scope | Use case or story | Work item or WBS | Acceptance or test | Release | Metric | Status and gaps |
|---|---|---|---|---|---|---|---|---|
| Not assigned | Not provided | Not established | Not established | Not established | Not established | Not established | Not established | Proposed |

## Coverage views

- **Backward coverage:** Why is this requirement or work item necessary?
- **Forward coverage:** Where will the requirement be implemented and verified?
- **Verification coverage:** Does every approved requirement have sufficient acceptance or test evidence?
- **Release coverage:** Which approved requirements and controls are included in a release?
- **Outcome coverage:** Which released requirements are expected to influence each outcome and metric?
- **Change coverage:** Which decisions, documents, work, tests, operations, and commitments are affected by a change?

## Orphan rules

Investigate:

- an approved requirement with no source, outcome, obligation, or rationale;
- a work item with no requirement, control, defect, risk, or enabling purpose;
- an approved requirement with no verification method;
- a test with no acceptance, requirement, risk, or regression purpose;
- a released requirement with no release reference;
- an outcome with no product influence hypothesis or measurement path.

An orphan may be valid, but its rationale and owner must be recorded.

## Decision rules

- Traceability is not satisfied by putting all information in one document.
- Stable IDs are immutable; supersede rather than renumber.
- Many-to-many links are acceptable when each relationship has clear meaning.
- Do not copy requirement text into the matrix; reference the authoritative record.
- “Implemented” and “verified” are separate statuses.
- Test coverage quantity does not prove requirement or risk coverage quality.
- Changes to an authoritative source must trigger downstream impact review.
- Access-controlled evidence may be referenced without exposing its contents.

## Outputs

- requirements traceability matrix or equivalent linked model;
- backward, forward, verification, release, outcome, and change coverage;
- orphan and gap report;
- audit and G3/G6 evidence;
- impact analysis inputs for change control.

## Quality checks

- Every approved requirement has a source, owner, and verification path.
- Every controlled work item has a requirement, outcome, risk, defect, or enabling rationale.
- Statuses distinguish approval, implementation, verification, and release.
- Links resolve to current authoritative records.
- Superseded relationships remain historically traceable.
- Sensitive sources preserve access controls.

## Common mistakes

- maintaining a matrix that is never used for decisions;
- copying full requirement text into multiple rows;
- treating one test case as proof of complete behavior coverage;
- losing links when backlog IDs or document titles change;
- tracing to outputs but not outcomes or metrics.

## Related modules

- [Requirements management](../lifecycle/requirements.md)
- [Acceptance criteria](acceptance-criteria.md)
- [Work decomposition](../lifecycle/decomposition.md)
- [Work Breakdown Structure](../project/work-breakdown-structure.md)
