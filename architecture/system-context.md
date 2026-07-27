---
title: System Context
type: architecture-method
status: active
version: 0.7.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - architecture-discovery.md
related:
  - data-and-integrations.md
  - security.md
  - solution-options.md
  - observability.md
---

# System Context

## Purpose

Define the system of interest, its actors, external systems, responsibilities, trust boundaries, major interactions, ownership, and excluded concerns before internal component design.

## When to use

Use for every material solution outline, integration, platform change, acquisition, migration, security review, or operational handoff. Maintain separate current-state and proposed-state contexts when both are needed.

## Inputs

- approved scope, use cases, and interface requirements;
- architecture discovery inventory and ownership;
- actors, user roles, external organizations, systems, and vendors;
- data classifications, trust zones, environments, and network boundaries;
- operational, support, legal, security, privacy, and compliance constraints.

## Workflow

1. Name the system of interest and the decision the context must support.
2. Define included responsibilities and explicit exclusions.
3. Identify human actors, roles, organizations, external systems, devices, and timed events.
4. Record each interaction's purpose, direction, data classification, protocol category, frequency, criticality, and owner.
5. Draw trust, network, organizational, and data-residency boundaries where material.
6. Mark current, proposed, transitional, and unknown elements distinctly.
7. Validate with product, engineering, data, security, operations, support, and external owners.
8. Link detailed contracts and decisions without overloading the context view.

## Context record

| Field | Definition |
|---|---|
| Context ID, version, and state | Current, Proposed, Transitional, or Superseded |
| System of interest | Name, purpose, and accountable owner |
| Included responsibilities | Capabilities owned inside the boundary |
| Exclusions | Responsibilities owned elsewhere |
| Human actors and roles | Goals and access relationship |
| External systems and organizations | Purpose and accountable owner |
| Interactions and data | Direction, classification, criticality, and contract |
| Trust and network boundaries | Changes in authority, control, or exposure |
| Environments and regions | Runtime and data-location relevance |
| Dependencies and assumptions | Controlled references |
| Evidence and approval | Sources, date, reviewers, and status |

## Interaction register

| Interaction ID | Source | Destination | Purpose | Data classification | Mode and frequency | Criticality | Owner | Contract status |
|---|---|---|---|---|---|---|---|---|
| CTX-001 | Not established | Not established | Not established | Not assessed | Not established | Not assessed | Not assigned | Not established |

## Diagram rules

- Place one system of interest at the center.
- Show people and external systems, not internal classes or tables.
- Label every relationship with a purpose, not only a technology.
- Make direction and trust-boundary crossings unambiguous.
- Use a legend for state, confidence, data classification, and ownership.
- Do not put secrets, internal addresses, credentials, or exploitable detail in broadly shared diagrams.
- Link to authoritative interface, data, security, and ADR records.

## Decision rules

- Boundary ownership must match operational and security accountability.
- An external system is outside the selected control boundary even if owned by the same organization.
- A vendor logo is not an interface contract.
- Current and proposed states must not be visually indistinguishable.
- Do not imply direct communication where an intermediary or asynchronous channel exists.
- Unknown ownership or data classification is a risk and open question.
- Context changes require impact review on requirements, trust, data, operations, and estimates.

## Outputs

- current and proposed context diagrams;
- system responsibility and exclusion statement;
- actor, external-system, interaction, trust-boundary, and ownership registers;
- inputs to data, integration, security, cloud, observability, options, and ADRs.

## Quality checks

- System of interest and purpose are explicit.
- All material actors and external dependencies are represented.
- Relationships state purpose, direction, data, criticality, and owner.
- Trust and organizational boundaries are visible.
- Current, proposed, transitional, and unknown states differ clearly.
- Detailed design is referenced rather than embedded.

## Common mistakes

- drawing only internal services;
- omitting people, vendors, and operational actors;
- showing technology without interaction purpose;
- hiding trust-boundary crossings;
- mixing current and future state in one unlabeled view.

## Related modules

- [Architecture discovery](architecture-discovery.md)
- [Data and integrations](data-and-integrations.md)
- [Security](security.md)
- [Solution options](solution-options.md)
