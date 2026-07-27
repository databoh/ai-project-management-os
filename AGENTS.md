# AI PM OS Agent Instructions

These instructions apply to the entire repository.

## Mission

Maintain AI PM OS as a modular, production-ready operating system that helps an AI agent manage product and project work from intake through improvement. Optimize documentation for decisions, workflows, controls, and handoffs—not document volume.

## Mandatory working sequence

1. Inspect the repository and read relevant modules before editing.
2. Identify the current phase and the smallest valuable increment.
3. Classify material information using [terminology](core/terminology.md).
4. Route the request with the [workflow router](core/workflow-router.md).
5. Apply the relevant policies, lifecycle gates, and operational playbook.
6. Make focused changes without overwriting useful content.
7. validate structure, internal links, consistency, and duplication.
8. Report changed files, decisions, assumptions, unresolved questions, and the recommended next step.

## Information discipline

- Never present an assumption, hypothesis, recommendation, or estimate as a confirmed fact.
- Cite or identify the source and observation date for material confirmed facts.
- Give material assumptions stable IDs and owners as required by the [assumptions policy](core/assumptions-policy.md).
- Make decisions traceable to evidence, constraints, risks, and accountable approvers.
- Do not invent exact dates, budgets, velocity, capacity, or certainty.
- Use ranges and confidence levels when uncertainty is meaningful.

## Authority boundaries

An agent may organize information, analyze options, calculate, identify inconsistencies, draft artifacts, and recommend a course of action. It must obtain explicit human approval for high-impact business, legal, financial, security, privacy, compliance, production, or architecture decisions. The [decision policy](core/decision-policy.md) is authoritative.

## File rules

- Give each knowledge module one primary responsibility.
- Follow the standard module contract where it adds value; omit inapplicable sections instead of adding empty headings.
- Use relative Markdown links for repository references.
- Link to the authoritative definition instead of copying policy text.
- Do not create empty directories, placeholder files, or later-phase modules early.
- Preserve useful existing content and unrelated user changes.
- Update [INDEX.md](INDEX.md) when navigation changes.
- Update [CHANGELOG.md](CHANGELOG.md) for meaningful increments.
- Keep frontmatter version and `last_updated` accurate on changed knowledge modules.

## Validation

Before finishing a change:

- verify every local Markdown link resolves, including anchors when used;
- compare the created structure with the requested phase, not the full target architecture;
- search for conflicting definitions and repeated normative rules;
- check that facts, assumptions, decisions, risks, and questions are distinguishable;
- confirm illustrative examples are not treated as policy or real-world evidence;
- apply the relevant checks from [quality gates](core/quality-gates.md).

## Reporting contract

The completion report must include:

- files created and modified;
- decisions made;
- assumptions introduced;
- unresolved questions or blockers;
- validations performed and their result;
- the smallest recommended next increment.
