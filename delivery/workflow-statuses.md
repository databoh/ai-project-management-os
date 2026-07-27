---
title: Workflow Statuses
type: delivery-control-method
status: active
version: 0.6.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../lifecycle/delivery-setup.md
related:
  - definition-of-ready.md
  - definition-of-done.md
  - scrum.md
  - kanban.md
  - ../tools/jira.md
  - ../tools/clickup.md
---

# Workflow Statuses

## Purpose

Define a small canonical workflow whose states represent meaningful changes in work condition, ownership, pull eligibility, or completion evidence across delivery tools.

## When to use

Use when configuring or auditing a backlog, project, service, or release workflow. Tailor only when a distinct state creates a decision, queue, policy, permission, or metric boundary.

## Canonical workflow

| Status | Category | Meaning | Entry policy | Exit evidence |
|---|---|---|---|---|
| Proposed | To do | Request exists but has not been accepted into the controlled backlog | Source, requester, and request captured | Triage decision |
| Backlog | To do | Accepted candidate work, not yet eligible to start | Outcome, rationale, owner, and classification exist | Ordered and refined or cancelled |
| Ready | To do | Eligible to be pulled under current readiness policy | Applicable DoR satisfied or exception approved | Capacity and pull decision |
| In progress | In progress | Active work is being performed | Owner, capacity, dependencies, and start timestamp | Review, validation, or completion handoff |
| In review | In progress | Required peer, product, technical, or control review is active | Reviewable output and reviewer assigned | Review outcome and actions |
| In validation | In progress | Acceptance, test, integration, or stakeholder validation is active | Testable integrated output and evidence plan | Acceptance evidence or rework decision |
| Done | Done | Applicable acceptance criteria and DoD are satisfied | Completion evidence linked and owner confirms | Reopen only from new evidence |
| Cancelled | Done | Work will not proceed in the current baseline | Authorized decision and rationale | Reopen through a new decision |

Not every workflow needs both `In review` and `In validation`. Combine them when ownership, queue policy, and measurement do not materially differ.

## Overlay fields

Use fields or flags rather than extra statuses for:

- blocked state and blocker reason;
- expedite or class of service;
- risk, confidence, and health;
- waiting for a named external dependency;
- release or fix version;
- resolution such as completed, duplicate, rejected, or cannot reproduce;
- Sprint, milestone, or roadmap horizon.

Blocked work retains its underlying state so aging and queue location remain visible.

## Workflow design

1. Define work types and start/finish boundaries.
2. Map the actual value flow and queues.
3. Create a status only when entry, exit, owner, WIP, or reporting policy changes.
4. Define allowed transitions and who may perform them.
5. Attach timestamps, required fields, automation, and notifications to control points.
6. Map tool-specific statuses to canonical categories.
7. Test normal, rework, cancellation, reopen, blocked, and dependency paths.
8. Measure state aging and simplify statuses that do not inform decisions.

## Transition policy

| From | To | Required condition | Authority |
|---|---|---|---|
| Proposed | Backlog | Request accepted and classified | Product or service owner |
| Proposed or Backlog | Cancelled | Rejection or withdrawal rationale recorded | Authorized owner |
| Backlog | Ready | DoR or approved exception | Product and delivery policy |
| Ready | In progress | Capacity available and pull policy satisfied | Responsible team |
| In progress | In review | Reviewable output and reviewer available | Work owner |
| In review | In progress | Rework required | Reviewer and work owner |
| In review | In validation | Review passed and integrated evidence exists | Review owner |
| In validation | In progress | Acceptance failed or rework required | Acceptance owner |
| In validation | Done | Acceptance and DoD evidence satisfied | Authorized acceptance owner |
| Done | Backlog or In progress | New evidence justifies reopen and impact is recorded | Product or quality owner |

## Decision rules

- Status describes current work condition, not a person's activity.
- Do not create “Waiting for X” statuses for every dependency; use blocked or dependency fields.
- Done requires evidence, not percentage complete or verbal confidence.
- Cancelled and Done are different outcomes and must remain distinguishable.
- Reopening preserves prior completion and release history.
- A workflow state must not silently change requirement, scope, or approval status.
- Automations may enforce agreed policy but must not make high-impact decisions.
- Tool mappings preserve canonical meaning even when display names differ.

## Outputs

- canonical status model and categories;
- transition, entry, exit, permission, blocked, and reopen policies;
- tool mapping and automation requirements;
- reliable timestamps for flow and aging metrics.

## Quality checks

- Every status has one distinct meaning.
- Entry, exit, and authority are explicit.
- Blocked work remains visible in its flow state.
- Done maps to DoD and acceptance evidence.
- Rework and reopen paths preserve history.
- Tool configurations share canonical categories.

## Common mistakes

- creating statuses for teams or departments;
- hiding wait states and blocked aging;
- using “QA” as a place rather than a controlled activity;
- allowing anyone to mark work Done without evidence;
- building different semantics in Jira and ClickUp.

## Related modules

- [Definition of Ready](definition-of-ready.md)
- [Definition of Done](definition-of-done.md)
- [Kanban](kanban.md)
- [Jira](../tools/jira.md)
- [ClickUp](../tools/clickup.md)
