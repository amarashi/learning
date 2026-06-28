# Delivered: HTML's one shape + the "empty index.html" reveal

**Lesson 02** (`lessons/0002-reading-an-html-page.html`) taught Layer ③ HTML by way of
*reading*, not writing — aligned with the [[MISSION.md]] "read & tweak" goal.

Two ideas, both anchored in Amir's **real** `fha/index.html` (pulled from git; the
working tree is OneDrive cloud-only and doesn't enumerate locally — read project files
via `git --git-dir=.../fha/.git show HEAD:<path>`):

1. **The one shape** — element = content wrapped in matching tags; attributes are
   `name="value"` configs in the opening tag; elements nest into a tree. Analogy that
   should land hard: an element is a function call, attributes are keyword args,
   nesting is nested lists/JSON. `head` (machine) vs `body` (human) is the first split.
2. **The reveal** — his `index.html` body is just `<div id="root"></div>` +
   `<script src="/src/main.tsx">`. A React app's HTML is a near-empty *launchpad*; the
   real structure is authored in `.tsx` (Layer ①) and injected at runtime. Framed as
   "knowing where NOT to look is half of reading code." This directly ties back to
   Lesson 01's bucket map.

**Glossary additions** (now authoritative): element, tag, attribute, head-vs-body.
**New reusable assets**: `.code` code-block style + `.anatomy` element-anatomy diagram
in `assets/lesson.css` — future code-reading lessons (CSS, JS, TSX) should reuse these.

**Retention status:** Lesson 01 was never demonstrated before this session (delivered
only). Lesson 02's quiz interleaves a Lesson-01 recall (the npm/toolchain bucket in
Q3) as light spaced practice, but again this is *delivered*, not yet confirmed retained.

**Next session candidates** (zone of proximal development):
- Natural next step: open a real `.tsx` component (e.g. `src/components/Button/Button.tsx`
  or whatever renders into `root`) and read JSX — "where the page actually lives." This
  is the promised payoff of the L02 reveal and keeps the read-the-real-project momentum.
- Alternative if he wants to *tweak*: live-edit the `<title>` or a piece of visible text
  and predict the result (first hands-on win) — needs `npm run dev` running.
- Before drilling deeper, do a quick retrieval warm-up on L01 buckets + L02 element parts
  (sort a few unfamiliar tags/files) to convert delivered → retained.
