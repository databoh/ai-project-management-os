---
title: Discovery Questionnaire
type: interview-guide
status: active
version: 0.2.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on:
  - ../../lifecycle/discovery.md
related:
  - ../../business-analysis/problem-framing.md
  - ../../business-analysis/stakeholder-analysis.md
  - discovery-report.md
---

# Discovery Questionnaire

## Purpose

Provide a modular question bank for decision-focused discovery. It is not a script and should not be sent wholesale to every participant.

## How to use

1. Name the decision the session must inform.
2. Select only questions relevant to the participant's knowledge and role.
3. Ask for specific recent examples before opinions or solutions.
4. Distinguish observed behavior, system data, interpretation, and preference.
5. Record source, session date, consent or access restrictions, and limitations.
6. Convert unresolved material claims into evidence requests, assumptions, or open questions.

## Core questions

Use these in most discoveries:

- What decision must this work enable, and who is accountable for it?
- What is happening today? Please describe the most recent specific example.
- Who experiences the situation directly, and in what context?
- What consequence does it create for users, operations, or the business?
- What evidence shows the scale, frequency, severity, or trend?
- How is the need handled today, including workarounds and non-action?
- What outcome would indicate meaningful improvement?
- Which constraints are fixed, and which are preferences?
- What would make us stop, reframe, or defer the initiative?
- Which belief would be most damaging if it proved false?

## Business and strategy

- Which business goal or value stream does this support?
- What benefit is expected: revenue, cost, risk reduction, retention, speed, quality, or strategic option?
- How is that benefit calculated, and which inputs remain assumptions?
- Why act now? What happens if nothing changes?
- Who owns the outcome and the investment decision?
- Are there commercial promises, contracts, or partner obligations?
- What is explicitly a non-goal for this initiative?

## Users and current behavior

- Which user or customer segments are affected, and how were they identified?
- What job are they trying to complete when the problem occurs?
- What triggers the process, and what indicates completion?
- Where do users abandon, delay, retry, seek help, or create workarounds?
- Which groups may be indirectly or disproportionately affected?
- What qualitative and behavioral evidence is available?
- How do needs differ by role, segment, geography, device, or accessibility requirement?
- What would users consider a worse outcome even if the target metric improved?

## Process and operations

- Walk through the current process from trigger to outcome.
- Which steps are manual, duplicated, delayed, or error-prone?
- Who owns each handoff and exception?
- What volumes, peaks, service levels, and operational hours apply?
- Which failure modes occur, and how are they detected and recovered?
- What support, training, reconciliation, audit, or reporting work is required?
- What changes would affect staffing, responsibilities, or downstream teams?

## Data and measurement

- Which metric best represents the intended outcome?
- What is its definition, population, time window, source, owner, and baseline?
- What event or data quality gaps could bias the result?
- Which leading, guardrail, and operational metrics are needed?
- Can segments and cohorts be compared reliably?
- What data is sensitive, regulated, inferred, or subject to retention limits?
- How will we distinguish product impact from seasonality or external factors?

## Technology and feasibility

- Which systems, APIs, environments, and data stores are involved?
- Which integrations, vendors, teams, or approvals are dependencies?
- What performance, availability, scalability, recovery, and observability needs apply?
- What authentication, authorization, audit, security, and privacy controls are required?
- Which architecture choices are constrained, and by what authoritative source?
- What unknown warrants a technical spike?
- What migration, compatibility, rollback, or operational support concerns exist?
- Which technical debt or platform roadmap could change feasibility?

## Delivery and governance

- What scope, date, cost, or quality commitments already exist, and who approved them?
- Which roles and capacity are actually available?
- What review, QA, security, legal, compliance, release, and training work is required?
- Which dependencies control the critical path?
- How will scope and baseline changes be approved?
- What decision cadence, reporting, and escalation path are expected?
- What confidence is required before estimation or commitment?

## Risk, legal, and trust

- What user, financial, legal, compliance, security, privacy, or reputational harm is possible?
- Which regulations, policies, contracts, licenses, or terms apply?
- Who has authority to interpret and approve those obligations?
- What information must be traceable, reviewable, or auditable?
- Which risks cannot be accepted by the delivery team or agent?
- What contingency or fallback is required?

## AI-enabled scope

Use when a model, agent, RAG system, or AI automation is involved:

- Why is AI preferable to deterministic rules, search, or process change?
- What output quality dimensions matter, and how will each be evaluated?
- What representative evaluation set and acceptance threshold are required?
- What are the consequences of inaccurate, biased, delayed, or unavailable output?
- What prompt-injection, data-leakage, unauthorized-tool, or harmful-automation paths exist?
- Which data may enter prompts, context, retrieval, logs, or vendor systems?
- What human review is required, at which risk level, and with what override?
- What fallback behavior applies when confidence, latency, cost, or availability is unacceptable?
- What model, token, infrastructure, and review costs must be forecast?
- How will drift, hallucination, tool actions, latency, cost, and user feedback be observed?
- What vendor dependency, context-window, rate-limit, or model-change risks exist?

## Session close

- What did we treat as fact that still needs evidence?
- Which new assumption, risk, dependency, or conflict emerged?
- Which source should be reviewed next, and who owns access?
- What did we misunderstand or fail to ask?
- What decision can now be made, and what still blocks it?

## Quality checks

- Questions were tailored to the decision and participant.
- Specific examples and source evidence were requested.
- Leading questions and confirmation bias were actively controlled.
- Participant statements are not mislabeled as verified user behavior.
- Sensitive information and consent restrictions are recorded.
- Results update the problem frame, stakeholder analysis, assumptions log, or discovery report.

## Related modules

- [Discovery workflow](../../lifecycle/discovery.md)
- [Problem framing](../../business-analysis/problem-framing.md)
- [Stakeholder analysis](../../business-analysis/stakeholder-analysis.md)
