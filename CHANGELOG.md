# Changelog

All notable changes to AI PM OS are recorded here. The format follows Keep a Changelog principles, and versions follow Semantic Versioning.

## [1.3.0] - 2026-09-08

### Added

- controlled Jira Sprint Planning Exchange with normalized import for Sprint history, velocity evidence, team capacity, statuses, and backlog;
- capacity- and comparability-aware Sprint recommendation with explicit insufficient-evidence handling;
- PM-confirmed JSON and CSV export package for new Epic, Story, Task, and Sub-task records;
- `ai-pm-jira-sprint` plugin skill, JSON input and export-draft templates, and dependency-free planning commands.

## [1.2.0] - 2026-07-27

### Security

- gate `pass` and `conditional-pass` now require an accountable human to run an interactive approval command;
- approvals are stored separately and bound to the active gate-review artifact with SHA-256 evidence integrity;
- lifecycle transitions now enforce mapped stages, gates, completion, and approval prerequisites;
- active artifacts reject absolute paths, traversal, symbolic links, non-regular files, and project-root escape;
- project initialization uses exclusive final-directory creation and safer rollback semantics;
- generated instructions and runtime skills treat project artifacts, links, quoted sources, and embedded commands as untrusted data;
- repository CI scans tracked content and Git history for common secrets, personal home paths, sensitive filenames, symlinks, and oversized files;
- expanded ignore rules reduce accidental credential and local-state commits.

### Added

- gate approval register and schema;
- interactive `approve-gate.mjs` command;
- security policy, CODEOWNERS, pinned security workflow, Dependabot configuration, and dependency-free package validator.

### Changed

- installation and release verification use immutable tag `v1.2.0` instead of `main`;
- public-distribution documentation now describes security boundaries and private vulnerability reporting.

## [1.1.0] - 2026-07-23

### Added

- Phase 11 distribution and project-runtime architecture;
- installable Codex plugin with start, resume, run-phase, gate-review, and status skills;
- beginner-friendly adaptive onboarding with explicit path and Git confirmation;
- safe, dependency-free initialization, validation, status, and controlled state-update scripts;
- project, state, and onboarding schemas plus generated project-specific `AGENTS.md`;
- file-backed lifecycle state, assumption and decision registers, and append-only runtime events;
- machine-readable stage-to-method, gate, artifact-directory, and transition map;
- generated offline methodology snapshot with SHA-256 integrity and source-freshness validation;
- repository-local plugin marketplace entry and end-to-end runtime verification.
- English installation, automated-validation, beginner smoke-test, safety, and troubleshooting guidance for GitHub users.

### Changed

- repository entry points now support installation and project creation rather than documentation-only use;
- lifecycle guidance now routes generated projects through persistent runtime state;
- canonical knowledge modules remain the only policy-authoring surface while the plugin carries a validated distribution snapshot.

## [1.0.0] - 2026-07-23

### Added

- operational playbooks for idea-to-MVP, client kickoff, existing-project audit, delayed-project recovery, scope change, production release, incident response, AI feature delivery, and product-metrics review;
- complete illustrative AI SaaS, eCommerce, FinTech, SEO-platform, and automation examples;
- example-level facts, assumptions, hypotheses, gate states, requirements, solution direction, plan ranges, release controls, metrics, decisions, risks, and traceability.

### Changed

- repository overview, index, workflow routing, lifecycle navigation, and agent instructions now route work through reusable playbooks;
- repository status now reflects completion of the planned Phase 1–10 operating system.

## [0.9.0] - 2026-07-23

### Added

- canonical metric dictionary with selection, contract, validation, baseline, target, versioning, and retirement controls;
- product and business measurement methods covering value, cohorts, journeys, economics, reconciliation, and decision thresholds;
- engineering and delivery measurement systems balancing outcomes, quality, stability, forecast, dependencies, sustainability, and risk;
- governed flow measures, the current five-measure DORA model, and incident impact, response, recovery, learning, and closure control.

### Changed

- repository overview, index, terminology, product outcomes, reporting, observability, Kanban, lifecycle, and quality gates now use Phase 9 metric contracts;
- the former reporting-local metric contract now delegates to the canonical metric dictionary.

## [0.8.0] - 2026-07-23

### Added

- AI product discovery and use-case assessment with non-AI comparison, impact classification, and initial AI risk control;
- evidence-based model selection and reproducible AI evaluation with representative data, slices, mandatory thresholds, and regression;
- RAG, agent and tool, and MCP architecture methods with explicit trust, permission, side-effect, lifecycle, and recovery controls;
- layered guardrails, human-review policy, AI privacy and security, full-cost management, and AI production observability.

### Changed

- repository overview, index, terminology, workflow routing, lifecycle tailoring, requirements, solution outline, quality gates, readiness, completion, and release planning now apply the Phase 8 AI overlay;
- AI reliability claims are now explicitly bounded to evaluated use, data, configuration, and time.

## [0.7.0] - 2026-07-23

### Added

- solution-outline workflow and explicit solution portion of the G3 readiness assessment;
- architecture discovery, current and proposed system context, and comparable solution-option analysis;
- data and integration, cloud and infrastructure, security, scalability, and observability methods;
- governed Architecture Decision Records with explicit human approval and supersession history.

### Changed

- repository overview, index, terminology, lifecycle, requirements, estimation, and quality gates now cover Phase 7;
- solution maturity is now an explicit handoff condition between requirements, responsible estimation, and plan commitment.

## [0.6.0] - 2026-07-23

### Added

- delivery-setup workflow and G5 assessment;
- Scrum, Kanban, and deliberately designed hybrid-delivery methods;
- canonical workflow states and transition policies;
- proportionate Definition of Ready and evidence-based Definition of Done;
- purpose-driven ceremony and delivery-reporting systems;
- governed Jira and ClickUp implementation guides based on current official platform concepts.

### Changed

- repository overview, index, terminology, lifecycle, roadmap, release planning, quality gates, and user-story handoff now cover Phase 6;
- blocked work is modeled as an overlay that preserves its flow state;
- tool configurations now map to one canonical operating model.

## [0.5.0] - 2026-07-23

### Added

- ROM, planning, and commitment estimation model with three-point ranges, scenarios, reserve, and confidence;
- dependency and role-based capacity planning controls;
- critical and near-critical path analysis;
- evidence-based milestone planning;
- outcome-based product roadmap and capacity-aware delivery roadmap;
- release planning with rollout, recovery, support, traceability, and G6 handoff.

### Changed

- repository overview, index, terminology, lifecycle, decomposition, WBS, and product outcomes now link Phase 5 planning;
- lifecycle roadmap now provides an explicit G4 assessment without converting a forecast into a commitment.

## [0.4.0] - 2026-07-23

### Added

- requirements-management workflow with stable types, IDs, statuses, baselines, and change control;
- work-decomposition workflow separating product, delivery, and WBS views;
- use-case, user-story, acceptance-criteria, and requirements-traceability methods;
- deliverable-oriented Work Breakdown Structure method and dictionary;
- production-ready BRD, PRD, FRD, and SRS templates.

### Changed

- repository overview, index, terminology, and lifecycle now cover Phase 4;
- product scope now hands approved direction into requirements and decomposition.

## [0.3.0] - 2026-07-23

### Added

- evidence-based product vision and outcome-definition methods;
- persona, Jobs to Be Done, and user-journey methods;
- product scope and Minimum Viable Product controls;
- framework-selection and decision process for product prioritization.

### Changed

- repository overview, canonical index, and lifecycle overview now cover Phase 3;
- discovery handoff now routes sufficient evidence into product definition;
- discovery report distinguishes its measurement direction from an approved product-definition baseline.

## [0.2.0] - 2026-07-23

### Added

- project intake workflow and G0 handoff;
- decision-focused discovery workflow and G1 exit controls;
- problem-framing and stakeholder-analysis methods;
- reusable project brief, discovery questionnaire, assumptions log, and discovery report templates.

### Changed

- repository overview and canonical index now cover Phase 2;
- lifecycle overview now links to the implemented intake and discovery workflows.

## [0.1.0] - 2026-07-23

### Added

- repository overview and Phase 1 navigation index;
- repository-wide agent instructions;
- operating principles and agent authority boundaries;
- decision, evidence, and assumptions policies;
- workflow router for seven operating modes;
- shared terminology and information classifications;
- lifecycle overview covering stages 0–12;
- quality gates for intake, discovery, definition, commitment, delivery, release, and improvement.
