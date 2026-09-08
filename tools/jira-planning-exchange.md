---
title: Jira Sprint Planning Exchange
type: integration-contract
status: active
version: 1.3.0
owners:
  - AI PM OS maintainers
last_updated: 2026-09-08
depends_on:
  - jira.md
  - ../delivery/scrum.md
  - ../delivery/capacity-planning.md
  - ../core/decision-policy.md
related:
  - ../metrics/delivery-metrics.md
  - ../templates/delivery/jira-planning-input.json
  - ../templates/delivery/jira-export-draft.json
---

# Jira Sprint Planning Exchange

## Purpose

Provide a controlled, file-backed exchange between Jira planning evidence and AI PM OS. The exchange normalizes Sprint history, velocity evidence, team composition, capacity inputs, statuses, and backlog data; produces a conservative Sprint recommendation; and prepares a Jira import package only after a PM explicitly confirms the export draft.

This module owns the integration contract. [Jira delivery configuration](jira.md) remains authoritative for Jira operating-model configuration, while [Scrum](../delivery/scrum.md) and [capacity planning](../delivery/capacity-planning.md) own planning policy.

## Scope and boundary

The initial integration is deliberately file-backed:

- import accepts an authorized Jira export or API-derived dataset in the canonical planning-input contract;
- recommendation is calculated locally and is classified as a recommendation, not a commitment;
- export generates JSON and CSV packages for Jira's reviewed import flow;
- an interactive PM confirmation binds the approval record to the exact export-draft hash;
- the PM reviews Jira's import preview and submits it.

The integration does not store or request Jira credentials, invoke Jira write APIs, create a Sprint, transition an issue, or set a Sprint Goal. A future API adapter is a separate security and authorization decision because it would add external write authority.

## Inputs and provenance

Use [Jira planning input](../templates/delivery/jira-planning-input.json) as the normalized import contract. At minimum record:

| Input | Classification | Required handling |
|---|---|---|
| Jira source, board or query reference, and observation time | Confirmed fact | Preserve the source reference and timestamp; identify permission or export limitation. |
| Closed Sprint commitment, completion, scope change, and comparability | Evidence | Include only the same team and comparable Definition of Done in the velocity sample. |
| Team member or role identifiers and availability | Confirmed fact or assumption | Prefer role or pseudonymous IDs; record availability, non-delivery demand, and buffer observation date. |
| Backlog work type, status category, order, readiness, estimate, blocker, parent, and dependency | Confirmed fact at observation time | Preserve Jira key and source timestamp; do not assume a status means Ready. |
| Capacity limit, scope choice, or Sprint Goal | Decision or assumption | Keep outside the import as an explicit PM or delivery-team decision. |

Do not place API tokens, passwords, emails, customer data, sensitive issue descriptions, or employee performance information in an input file. An account or role identifier is sufficient for planning unless a lawful, approved purpose requires more.

## Recommendation method

The bundled planner first rejects malformed input, then:

1. uses only completed Sprints where `teamComparable` and `definitionOfDoneComparable` are both true;
2. requires at least three comparable Sprints before calculating a velocity range;
3. calculates lower, central, and upper observations using the 25th percentile, median, and 75th percentile of completed points;
4. applies availability, known non-delivery load, and an explicit operating buffer to the lower observation;
5. chooses the lower of that adjusted value and an explicit planning-point limit, when both exist;
6. selects ordered, ready, unblocked, estimated backlog work only while it remains within that conservative limit and all named dependencies are done or selected.

Velocity stays a team-relative planning observation, never an individual KPI or cross-team comparison. The planner deliberately returns insufficient evidence instead of inventing a capacity or point limit. It also cannot assess qualitative coherence: the PM and delivery team must confirm that selected work supports a meaningful Sprint Goal.

## PM-controlled export

Use [Jira export draft](../templates/delivery/jira-export-draft.json) to draft new Epic, Story, Task, and Sub-task records. The contract supports only these parent relations:

| Child | Permitted parent |
|---|---|
| Epic | None |
| Story | Epic or none |
| Task | None |
| Sub-task | Story or Task |

The responsible PM performs the final confirmation in an interactive terminal:

```bash
node plugins/ai-project-management-os/scripts/jira-sprint-planning.mjs approve \
  --input ./jira-export-draft.json \
  --output ./jira-export-approval.json \
  --approved-by "Accountable PM"
```

The command requires the exact phrase `APPROVE JIRA EXPORT`, records the named approver and timestamp, and stores the draft SHA-256 hash. It does not prove identity cryptographically; organizational access control and the PM's Jira review remain authoritative.

Only then generate a package:

```bash
node plugins/ai-project-management-os/scripts/jira-sprint-planning.mjs export \
  --input ./jira-export-draft.json \
  --approval ./jira-export-approval.json \
  --output ./jira-import-package.json
```

The resulting JSON is an audit manifest and the adjacent CSV is the import payload. In Jira, map `Local ID` to an external identifier field and `Parent local ID` to the parent field, inspect the preview, resolve mapping errors, and submit only when the PM accepts the resulting change. Store the returned Jira keys with the approved project decision.

## Workflow

1. Export or retrieve Jira data under approved access; record source and observation date.
2. Create a minimal normalized input and run `import` to validate it.
3. Run `plan`; review sample size, comparability, capacity assumptions, selected work, exclusions, and confidence with the delivery team.
4. Record any material scope, capacity, or delivery-baseline change as a D2 decision for the accountable PM or delivery owner.
5. Draft Epic, Story, and Sub-task records only from approved requirements and decomposition evidence.
6. Obtain interactive PM confirmation, generate the package, review the Jira import preview, and submit it.
7. Reconcile created Jira keys, rejected rows, and actual Sprint scope with the project records; update risks, dependencies, and forecast where material.

## Quality checks

- Source, observation date, field mapping, and data limitations are visible.
- At least three comparable completed Sprints support any velocity bound.
- Availability, non-delivery demand, and buffer are explicit before capacity adjusts velocity.
- Selected work is ready, unblocked, estimated, dependency-aware, and within the stated conservative limit.
- A recommendation is not reported as a committed Sprint scope or Goal.
- Export contains no secrets and uses only valid parent-child relationships.
- PM approval matches the exact draft hash before package generation.
- Jira preview and final created keys are reviewed by the PM before the change is considered complete.

## Related modules

- [Jira delivery configuration](jira.md)
- [Scrum](../delivery/scrum.md)
- [Capacity planning](../delivery/capacity-planning.md)
- [Decision policy](../core/decision-policy.md)
- [Delivery metrics](../metrics/delivery-metrics.md)
