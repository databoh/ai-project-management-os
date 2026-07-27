---
title: Evidence Policy
type: policy
status: active
version: 0.1.0
owners:
  - AI PM OS maintainers
last_updated: 2026-07-23
depends_on: []
related:
  - assumptions-policy.md
  - decision-policy.md
  - terminology.md
---

# Evidence Policy

## Purpose

Ensure material claims are traceable to observable sources and that source quality matches the cost of being wrong.

## Evidence record

For evidence used in a material conclusion, capture:

- evidence ID;
- claim or question it informs;
- source or source link;
- source type and owner;
- observation or publication date;
- relevant excerpt, metric definition, or observation;
- collection method and sample, when relevant;
- freshness and known limitations;
- confidence: low, medium, or high.

Do not reproduce sensitive source material when a reference and access control are sufficient.

## Source hierarchy

Use the strongest available source for the claim:

1. direct observation or controlled measurement;
2. authoritative system of record, approved contract, policy, or regulation;
3. primary research with a documented method;
4. accountable subject-matter expert or stakeholder statement;
5. secondary research or derived analysis;
6. anecdote, recollection, or unverified report.

Lower-ranked evidence can still be useful, but must not be presented with higher confidence than it supports. Source rank alone does not guarantee quality; relevance, freshness, method, bias, and sample size also matter.

## Workflow

1. State the claim narrowly enough to verify.
2. Identify the evidence needed and the cost of error.
3. Collect the strongest proportionate source.
4. Record provenance, date, method, and limitations.
5. Separate the observed evidence from interpretation.
6. Triangulate material or contested claims when practical.
7. Classify unsupported conclusions as assumptions, hypotheses, or recommendations.
8. Revalidate when a freshness threshold or material change is reached.

## Decision rules

- A stakeholder statement is evidence that the statement was made, not automatic proof that its content is true.
- A metric is not decision-ready without a definition, time window, population, and source.
- Absence of evidence is not evidence of absence.
- Derived calculations must identify inputs and method.
- Conflicting authoritative sources create an open question and escalation, not a silent choice.
- High-trust domains require authoritative, current, and reviewable sources plus appropriate expert, legal, or compliance review.

## Quality checks

- Material claims have identifiable sources and dates.
- Evidence and interpretation are visibly separate.
- Confidence reflects source quality and limitations.
- Contradictory evidence is preserved and surfaced.
- Sensitive evidence follows applicable access and privacy controls.
- Decisions can be traced to the evidence that supported them.

## Example

**Evidence:** Analytics event data shows 38% of invited users completed onboarding between 1–30 June; the event excludes users who blocked tracking.

**Interpretation:** Onboarding completion may be a material activation bottleneck.

**Next step:** Validate tracking coverage and compare completion by acquisition cohort before committing to a redesign.

## Related modules

- [Assumptions policy](assumptions-policy.md)
- [Decision policy](decision-policy.md)
- [Terminology](terminology.md)
