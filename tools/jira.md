---
title: Jira Delivery Configuration
type: tool-implementation-guide
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-09-08
depends_on:
  - ../lifecycle/delivery-setup.md
  - ../delivery/workflow-statuses.md
related:
  - clickup.md
  - jira-planning-exchange.md
  - ../delivery/scrum.md
  - ../delivery/kanban.md
  - ../delivery/reporting.md
---

# Jira Delivery Configuration

## Purpose

Implement the approved AI PM OS operating model in Jira without allowing Jira hierarchy, workflows, fields, boards, or automation to become conflicting sources of process truth.

## Platform notes

Jira Cloud documentation currently describes a default work-type hierarchy of Epic, standard work items, and Subtask; additional hierarchy levels depend on product edition and configuration. Workflow schemes associate workflows with company-managed spaces, and boards map workflow statuses to columns. Verify capabilities, terminology, and permissions in the actual Jira deployment before configuring.

Official references:

- [Configure the work type hierarchy](https://support.atlassian.com/jira-cloud-administration/docs/configure-the-issue-type-hierarchy/)
- [Enable and associate workflows](https://support.atlassian.com/jira-cloud-administration/docs/manage-issue-workflows/)
- [Configure a company-managed board](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/)
- [Jira Cloud automation](https://support.atlassian.com/cloud-automation/docs/jira-cloud-automation/)
- [Create and edit dashboards](https://support.atlassian.com/jira-software-cloud/docs/create-and-edit-dashboards/)

## Preconditions

- Delivery method, work hierarchy, canonical statuses, DoR, DoD, reporting, and decision rights are approved.
- Jira deployment, edition, administration model, data residency, access, and integration constraints are known.
- Existing schemes, fields, automations, filters, permissions, and reporting consumers have been audited.
- A configuration owner and change process are named.

## Canonical hierarchy mapping

| AI PM OS concept | Typical Jira representation | Rule |
|---|---|---|
| Outcome or initiative | Higher hierarchy level where available, otherwise linked record or external product source | Do not fake hierarchy with labels |
| Epic or major deliverable | Epic-level work type | One coherent outcome or capability boundary |
| Feature, story, task, enabler, defect | Standard work types | Use honest work type and shared traceability fields |
| Subtask | Subtask work type | Implementation coordination beneath one parent; not independent product value |
| Requirement, risk, decision, dependency | Dedicated work type or governed linked record | Choose one authoritative representation |
| Release | Version or governed release record | Scope by stable IDs and release policy |

Keep hierarchy as shallow as control permits. Do not change a shared hierarchy without impact analysis because parent-child relationships and reporting may be affected.

## Work types and fields

Use the smallest set that drives distinct workflows or reports:

- Epic or deliverable;
- Story;
- Task or enabler;
- Bug or defect;
- Spike or research;
- Subtask;
- optional risk, decision, dependency, or change record where Jira is authoritative.

Recommended governed fields:

| Field | Purpose |
|---|---|
| Outcome and scope IDs | Product traceability |
| Requirement and acceptance IDs | Behavior and verification traceability |
| Work type and service class | Correct workflow and policy |
| Priority decision reference | Preserve rationale and authority |
| Blocked flag, reason, owner, and since | Aging and escalation |
| Dependency links and need-by point | Provider-consumer control |
| Estimate maturity, range, and confidence | Avoid false point precision |
| Milestone and release reference | Forecast and scope |
| Risk, assumption, and decision links | Governance |
| DoR and DoD evidence | Transition control |

Avoid free-text duplicates of authoritative requirements and decisions.

## Workflow mapping

Map tool statuses to the [canonical workflow](../delivery/workflow-statuses.md):

| Canonical status | Jira status category | Board column |
|---|---|---|
| Proposed | To do | Intake |
| Backlog | To do | Backlog |
| Ready | To do | Ready |
| In progress | In progress | In progress |
| In review | In progress | Review |
| In validation | In progress | Validation |
| Done | Done | Done |
| Cancelled | Done | Cancelled or filtered resolution |

Combine review and validation when separate queues, ownership, or measurement do not add value. Use a blocked field or flag rather than proliferating wait statuses.

## Configuration workflow

1. Inventory existing company-managed and team-managed configurations and shared dependencies.
2. Map AI PM OS work types, hierarchy, statuses, fields, links, and resolutions.
3. Configure work-type and field schemes with the narrowest applicable scope.
4. Configure workflows, validators or conditions, and permission boundaries.
5. Configure Scrum or Kanban boards as views over saved filters; confirm all statuses map to a column.
6. Add backlog, release, dependency, aging, quality, and decision views.
7. Configure dashboards from metric contracts, not gadget availability.
8. Add automations only for deterministic policy enforcement or low-risk administration.
9. Test normal, blocked, rework, cancellation, reopen, release, permission, and automation-failure paths in a safe environment.
10. Publish configuration ownership, version, support, and change procedure.

## Automation policy

Jira Cloud automation uses triggers, conditions, and actions and provides activity or audit information. For every automation record:

- owner and business purpose;
- trigger, conditions, actions, and scope;
- actor and permissions;
- failure and retry behavior;
- audit and alert path;
- rate or service-limit sensitivity;
- test cases and rollback;
- review date.

Automation may validate fields, notify owners, synchronize safe metadata, or flag aging. It must not silently approve scope, accept risk, close work without evidence, or make production decisions.

## Board and dashboard rules

- A board is a view, not a separate backlog.
- Board filters, shares, and administrators are governed.
- Columns reflect flow states; swimlanes and quick filters serve explicit decisions.
- WIP limits and aging views follow the Kanban policy where applicable.
- Dashboards identify source, formula, population, period, and freshness.
- Restrict sharing of sensitive security, employee, client, or commercial data.

## Permissions and governance

Apply least privilege to configuration, workflow transitions, releases, automation, filters, dashboards, and sensitive fields. Separate administration from product approval. Review dormant accounts, shared credentials, automation actors, anonymous access, and external-user visibility.

## Outputs

- governed Jira hierarchy, work types, fields, workflows, boards, dashboards, and automations;
- canonical status and traceability mapping;
- tested permissions, transition paths, and evidence capture;
- configuration owner, version, support, and change-control record.

## Quality checks

- Jira implements the approved operating model.
- Hierarchy and work types have distinct purposes.
- Every workflow status maps to a canonical meaning and board column.
- Blocked, dependency, acceptance, release, and completion evidence are reportable.
- Automations are permissioned, tested, observable, and reversible where possible.
- Dashboards use governed metric definitions.

## Common mistakes

- creating a custom workflow for every team;
- adding fields without owners or consumers;
- using labels as uncontrolled hierarchy;
- making board columns represent departments;
- automating Done transitions without acceptance evidence;
- treating Jira administration rights as decision authority.

## Related modules

- [Delivery setup](../lifecycle/delivery-setup.md) — approved operating model Jira must implement.
- [Workflow statuses](../delivery/workflow-statuses.md) — canonical meanings for Jira statuses and board columns.
- [Scrum](../delivery/scrum.md) — Sprint and backlog controls.
- [Kanban](../delivery/kanban.md) — pull, WIP, aging, and flow controls.
- [Reporting](../delivery/reporting.md) — governed definitions for Jira dashboards.
- [Jira Sprint Planning Exchange](jira-planning-exchange.md) — controlled import, Sprint recommendation, and PM-reviewed work-item export.
