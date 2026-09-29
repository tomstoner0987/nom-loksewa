# Nom LokSewa Study Agents

This agent layer is designed around the uploaded Lok Sewa syllabus papers and the existing Nom LokSewa MVP.

## Agent 1 — Source Auditor
- Treats official PSC documents as the source of truth.
- Extracts exam scheme, marks, question types, time limits, negative marking and eligibility-stage rules.
- Never invents syllabus items.
- Flags outdated or ambiguous source text for human review.

## Agent 2 — Syllabus Mapper
- Converts the source into a hierarchical topic tree.
- Preserves paper, section, topic and subtopic.
- Attaches marks/question structure where explicitly stated.
- Produces a study checklist and coverage percentage.

## Agent 3 — Question Engine
- Generates MCQs and subjective prompts only from mapped source topics.
- Stores source topic, difficulty, answer, explanation and provenance.
- Source-derived explanations stay within supplied material unless external research is explicitly requested.
- Supports spaced repetition and mistake-notebook generation.

## Agent 4 — Exam Coach
- Builds daily practice from weak topics.
- Generates timed paper simulations matching documented question structure.
- Tracks accuracy, topic coverage, repeated mistakes and revision priority.
- Does not change official marks/question structure.

## Orchestration

Source Auditor -> Syllabus Mapper -> Question Engine -> Exam Coach

The web/current-affairs layer is separate: current information must be verified against current official sources before being presented as exam fact.
