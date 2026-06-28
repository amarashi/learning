# Notes

## About the learner
- Same person as the `../web-dev/` course. Background: MATLAB, R, Python (strong);
  data analysis + ML is the day job. Reasons in systems, rules, models.
- Makes things (web, charts, slides) but was never taught to *see* design. Wants the
  *why* behind why a design works — concepts/terms/ideas, not tool tricks.

## Teaching preferences (carried over + confirmed session 1)
- **Diagrams & maps first**, then detail. Lead every lesson with a visual.
- Frame design as **rules/systems** (principles), not vague "taste" — plays to his
  analytical strengths. He likes the *why & when*.
- Keep lessons short — one tangible win each. No memorisation drills; use retrieval
  + spacing instead.
- **Practice in Procreate** (iPad). Every skill lesson should end with a small,
  concrete Procreate task that produces a *visible* before/after.

## Conventions
- **Workspace:** `C:\Users\Amir\Downloads\learning\graphic-design\` (sibling of
  `web-dev`). Project-independent. To resume: open Claude Code here, run `/teach`.
- **Backup & versioning:** the `learning\` repo is on GitHub (`amarashi/learning`,
  `origin`/`main`) AND synced to Google Drive. **Commit + push after every session**
  (all subjects). It is safe despite living in Downloads.
- Lessons in `lessons/NNNN-*.html`, share `assets/lesson.css` + `assets/quiz.js`.
- `reference/glossary.html` is the **authoritative** term list — adhere to those
  definitions in every lesson.
- **Course palette** (chosen for the course itself to be a decent design example):
  Ink `#232026`, Vermilion `#E14434` (used for *principles*), Teal `#1F7A8C`
  (used for *elements*), Ochre `#C9962B` (concepts/neutral accent), warm paper.

## Visuals (this is a *visual* subject — always show, don't just tell)
- The `/teach` SKILL.md now has a **Visuals & Examples** ladder. Follow it here:
  1. **Native HTML/CSS/SVG first** — best for design because it's *precise* and
     interactive. Reusable specimen components live in `assets/lesson.css`
     (`.specimens`, `.specimen.before/.after`, `.flyer` demo). Lesson 01 now has a
     live before/after flyer built this way.
  2. **Real web examples** (cited) when authenticity matters — famous posters, real UI.
  3. **Generated images** only for photographic/illustrative needs, never for type or
     precise layout (models render those wrong).
- **Generation backend status (2026-06-28):** no image generator is reliably wired in.
  HF Z-Image-Turbo exists but anonymous quota is exhausted → needs `HF_TOKEN`.
  ChatGPT-image / nano-banana (Gemini) are NOT connected — would need an API key/MCP.
  So treat generation as optional; never let a lesson depend on it.

## Open threads
- Mission set session 1: train the *eye* + vocabulary first; production/tools later.
  Three drivers ranked by him: make own graphics, judge & brief, lift web projects.
- Two pillars chosen for the curriculum spine:
  1. **Elements vs Principles** map (orientation) — Lesson 0001.
  2. **C.R.A.P.** (Contrast, Repetition, Alignment, Proximity — Robin Williams) as the
     first actionable toolkit, then **Gestalt** (grouping/perception), then per-element
     deep-dives (Type, Colour, Space, Hierarchy).
- Candidate next lessons: "Proximity & Alignment — instant tidiness", "Contrast & the
  one-thing-first rule (hierarchy)", "Gestalt: why your eye groups things",
  "Type 101", "Colour: value before hue".
