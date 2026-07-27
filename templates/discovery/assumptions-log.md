---
title: Assumptions Log Template
type: control-template
status: active
version: 0.2.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../../core/assumptions-policy.md
related:
  - ../../lifecycle/discovery.md
  - discovery-report.md
---

# Assumptions Log Template

## Purpose

Maintain a decision-oriented inventory of material assumptions and their validation status. The governing definitions and rules live in the [assumptions policy](../../core/assumptions-policy.md).

## Document control

| Field | Value |
|---|---|
| Initiative or product | Not provided |
| Log owner | Not assigned |
| Last reviewed | Not provided |
| Next review trigger | Not established |

## Assumptions register

| ID | Falsifiable assumption | Category | Rationale or source | Affected decision or artifact | Impact if false | Uncertainty | Owner | Validation method and threshold | Validation point | Status | Last reviewed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ASM-001 | Not established | Not classified | Not provided | Not established | Not assessed | Not assessed | Not assigned | Not established | Not established | Open | Not provided |

Allowed statuses: `Open`, `Validating`, `Confirmed`, `Invalidated`, `Expired`, and `Accepted risk`.

## Prioritization view

Use this view to decide validation order; it does not replace the full register.

| Assumption ID | Impact if false | Uncertainty | Decision deadline | Validation cost | Priority and rationale |
|---|---|---|---|---|---|
| ASM-001 | Not assessed | Not assessed | Not established | Not assessed | Not established |

Default priority is highest where both impact and uncertainty are high and the dependent decision is near or difficult to reverse.

## Validation evidence

| Assumption ID | Evidence ID or source | Observation date | Result | Limitations | Status change | Approved by |
|---|---|---|---|---|---|---|
| ASM-001 | Not provided | Not provided | Inconclusive | Not assessed | None | Not applicable |

## Invalidated-assumption impact

Complete when an assumption is invalidated or materially weakened.

| Assumption ID | Affected scope, decision, estimate, risk, or artifact | Required change | Owner | Due point | Completion evidence |
|---|---|---|---|---|---|
| Not applicable | No invalidated assumption recorded | Not applicable | Not assigned | Not applicable | Not applicable |

## Accepted residual risk

Use only when an authorized human accepts proceeding without confirmation.

| Assumption ID | Residual risk | Reason to proceed | Accountable approver | Approval date and reference | Expiry or review trigger |
|---|---|---|---|---|---|
| Not applicable | None accepted | Not applicable | Not applicable | Not applicable | Not applicable |

## Maintenance rules

- Use a stable ID; never recycle deleted or superseded IDs.
- State a condition that evidence could prove false.
- Link all decision-critical assumptions to the affected decision or artifact.
- Update status only from evidence or explicit risk acceptance.
- Reassess estimates and plans when supporting assumptions change.
- Preserve invalidated assumptions and impact history instead of deleting them.

## Completion checks

- Every high-impact assumption has an owner and validation point.
- Validation methods include an evidence threshold.
- High-impact, high-uncertainty assumptions are visible before irreversible decisions.
- Confirmed assumptions reference evidence.
- Invalidated assumptions have impact analysis.
- Accepted risks include approver, date, and review trigger.

## Related modules

- [Assumptions policy](../../core/assumptions-policy.md)
- [Discovery workflow](../../lifecycle/discovery.md)
- [Discovery report](discovery-report.md)
