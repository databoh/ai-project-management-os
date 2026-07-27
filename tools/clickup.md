---
title: ClickUp Delivery Configuration
type: tool-implementation-guide
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
  - ../delivery/workflow-statuses.md
related:
  - jira.md
  - ../delivery/scrum.md
  - ../delivery/kanban.md
  - ../delivery/reporting.md
---

# ClickUp Delivery Configuration

## Purpose

Implement the approved AI PM OS operating model in ClickUp using a consistent hierarchy, task types, statuses, fields, views, permissions, and automations.

## Platform notes

ClickUp documentation currently organizes work through Workspace hierarchy locations such as Spaces, Folders, Subfolders, and Lists, with tasks and subtasks inside them. Statuses can be configured at several hierarchy levels and inherited; Custom Fields, views, automations, and permissions are also hierarchy-sensitive. Feature availability and permission depth vary by plan, so verify the actual Workspace before design.

Official references:

- [Hierarchy best practices](https://help.clickup.com/hc/en-us/articles/20480724378135-Hierarchy-best-practices)
- [Manage task statuses](https://help.clickup.com/hc/en-us/articles/6309452618647-Manage-task-statuses)
- [Create Custom Fields](https://help.clickup.com/hc/en-us/articles/6303481086487-Create-Custom-Fields)
- [Intro to Automations](https://help.clickup.com/hc/en-us/articles/6312102752791-Intro-to-Automations)
- [Permissions in detail](https://help.clickup.com/hc/en-us/articles/6309221065495-Permissions-in-detail)

## Preconditions

- Delivery method, canonical workflow, work-item model, DoR, DoD, reporting, and authority are approved.
- Workspace plan, hierarchy, guests, permissions, sensitive data, and integration constraints are known.
- Existing Spaces, Folders, Lists, statuses, fields, templates, automations, and dashboards have been audited.
- A configuration owner and controlled change path are named.

## Canonical hierarchy mapping

| AI PM OS concept | Typical ClickUp representation | Rule |
|---|---|---|
| Organization or portfolio | Workspace or governed portfolio view | Avoid using Workspace as a project |
| Team, product, or controlled domain | Space | Keep ownership and access coherent |
| Project, initiative, or major program | Folder or project-level object chosen by governance | Use one consistent convention |
| Workstream, release, service, or backlog | List | Choose by workflow and reporting boundary |
| Epic, feature, story, task, defect, spike | Task with governed task type and parent links | Do not encode type only in the title |
| Implementation step | Subtask or checklist item | Use Subtask when ownership, status, or evidence differs |
| Requirement, risk, decision, or dependency | Governed task type, relationship, or authoritative external record | Avoid duplicate sources of truth |

Use Docs for supporting knowledge only when ownership, approval, access, and link durability are defined.

## Status inheritance

ClickUp statuses can be defined at Space, Folder, Subfolder, or List level. Prefer a shared status template mapped to the [canonical workflow](../delivery/workflow-statuses.md). Create local variation only when the service boundary genuinely requires different states or policies.

| Canonical status | ClickUp status group | Display status |
|---|---|---|
| Proposed | To do or Not Started where enabled | Proposed |
| Backlog | To do | Backlog |
| Ready | To do | Ready |
| In progress | Active | In progress |
| In review | Active | In review |
| In validation | Active | In validation |
| Done | Complete or Closed as configured | Done |
| Cancelled | Closed or governed completion state | Cancelled |

Tasks in multiple Lists follow their primary home List's statuses. Validate cross-List behavior before using multiple Lists for portfolio reporting.

## Task types and Custom Fields

Use task types for semantic distinctions and Custom Fields for governed attributes:

| Field | Purpose |
|---|---|
| Outcome, scope, and requirement IDs | Product traceability |
| Work type or service class | Workflow and policy |
| Priority decision reference | Authority and rationale |
| Blocked flag, reason, owner, and since | Aging and escalation |
| Dependency, provider, consumer, and need by | Cross-boundary control |
| Estimate range, maturity, and confidence | Forecast transparency |
| Milestone, release, and roadmap reference | Planning traceability |
| Risk, assumption, decision, and acceptance links | Governance and evidence |
| DoR and DoD evidence | Transition control |

Create fields at the narrowest hierarchy level that still preserves consistency. Field permissions and visibility must protect sensitive information.

## Configuration workflow

1. Inventory the current hierarchy, inherited statuses, fields, permissions, views, templates, and automations.
2. Select the Space, Folder, List, task-type, and subtask conventions.
3. Apply canonical status templates at the highest safe shared level.
4. Create governed Custom Fields with owner, type, allowed values, scope, and permission.
5. Configure List and Board views for work, Gantt or Timeline only for evidence-backed schedules, Workload for capacity signals, and dashboards for governed reporting.
6. Configure dependencies, relationships, release, and traceability views.
7. Add templates for recurring work types without pre-populating unverified facts.
8. Add automations for low-risk administration and policy reminders.
9. Test inherited status, multiple-List, permission, guest, automation, reopen, cancellation, and reporting behavior.
10. Publish configuration ownership, version, support, and change procedure.

## Automation policy

ClickUp automations apply through hierarchy scope and use triggers, conditions, and actions. Record:

- owner and intended control;
- hierarchy scope and affected task types;
- trigger, conditions, and actions;
- permissions and sensitive-field access;
- failure visibility and manual fallback;
- test cases and reversal;
- usage or plan-limit dependency;
- review date.

Use automation to apply templates, validate deterministic fields, flag aging, notify owners, or synchronize safe metadata. Do not automate product approval, risk acceptance, high-impact assignment, or Done without evidence.

## Views and dashboards

- List view supports detailed filtering and controlled fields.
- Board view visualizes status flow and WIP.
- Gantt and Timeline views display schedule assumptions; they do not validate them.
- Workload views support capacity discussion but do not replace the role-capacity model.
- Dashboards use shared metric definitions and explicit hierarchy scope.
- Protect views and fields containing restricted client, employee, security, financial, or compliance information.

## Permissions and guests

Design access from least privilege, hierarchy inheritance, item-specific exceptions, and guest boundaries. Verify who can edit statuses, Custom Fields, automations, templates, dashboards, and private items. Configuration authority does not grant business approval authority.

## Outputs

- governed ClickUp hierarchy, task types, statuses, fields, views, dashboards, templates, and automations;
- canonical workflow and traceability mapping;
- tested inheritance, multiple-List, permission, and guest behavior;
- configuration owner, version, support, and change-control record.

## Quality checks

- Hierarchy follows ownership and reporting boundaries.
- Shared statuses retain canonical meaning.
- Task types and fields are not duplicated through names or tags.
- Automations are scoped, permissioned, tested, and observable.
- Views represent evidence rather than creating new baselines.
- Sensitive data and guest access are controlled.

## Common mistakes

- creating a Space or status set for every small project;
- placing the same task in multiple Lists without testing status semantics;
- creating duplicate Custom Fields at several hierarchy levels;
- treating Workload view as proof of real capacity;
- automating completion without DoD evidence;
- allowing inherited permissions to expose sensitive fields.

## Related modules

- [Delivery setup](../lifecycle/delivery-setup.md) — approved ownership and hierarchy ClickUp must implement.
- [Workflow statuses](../delivery/workflow-statuses.md) — canonical meanings for inherited and List-level statuses.
- [Scrum](../delivery/scrum.md) — Sprint, backlog, and Increment controls.
- [Kanban](../delivery/kanban.md) — pull, WIP, aging, and flow controls across views.
- [Reporting](../delivery/reporting.md) — governed definitions for Dashboards and Workload views.
