# Delivered: the component tree, JSX, and props

**Lesson 03** (`lessons/0003-reading-a-component.html`) paid off Lesson 02's cliffhanger
("the page lives in `.tsx`") by reading Amir's real components — still *reading*, not
writing, per [[MISSION.md]].

Anchored entirely in real FHA code (pulled from git): `src/main.tsx` (the
`createRoot(...).render(<LandingPage />)` bridge from `#root` into React), the real
component tree of `LandingPage` (Header / FutureHealthHero / Section / Heading / Stat /
Button → bottoming out in `<button>`), and a simplified `Button.tsx`.

Core skills taught (kept to ~4 to respect working memory):
1. **A React app is a tree of components**; components nest until they bottom out in real
   HTML tags.
2. **The Capitalised-vs-lowercase rule** — Capitalised tag = a component you/library wrote
   (go open its `.tsx`); lowercase = built-in HTML (Browser ③). Reinforced with the
   lesson-01 colour language (pink = Author ①, azure = Browser ③).
3. **A component is a function that returns JSX**; `{ }` is the escape hatch back into
   JavaScript; `className` not `class`; tags must close.
4. **Props** = a component's inputs, written like attributes, received like function args;
   `children` = the content between the tags. Tweak example: `variant="accent"` →
   `"primary"` flips the button navy (first concrete "safe tweak" framing).

Deliberately **named-and-deferred**: TypeScript types (`interface ButtonProps`), default
prop values, `{...rest}` spread, the `cx()` helper. Told him to skip past these to the
`return` when reading. TypeScript is the obvious future lesson.

**Glossary addition** (authoritative): props. **New reusable asset**: `.tree` component
tree styling in `assets/lesson.css`.

**Retention status:** still *delivered*, not confirmed retained. Quiz interleaves L02
(attributes ↔ props mapping) as light spaced practice. No live demonstration yet.

**Next session candidates** (ZPD):
- **The first hands-on tweak** — start `npm run dev`, change a real prop or text and predict
  + verify the result. This converts everything so far from reading to doing and would be
  his first true skill-with-feedback-loop. Strong candidate; needs the dev server running.
- **CSS / the `className` thread** — we keep seeing `className="fha-button--accent"` and
  `--fha-*` tokens; a lesson on "how a class becomes a colour" (Layer ③ CSS + design
  tokens) is well-grounded and overdue.
- **TypeScript** — the deferred noise from this lesson; explain types as a safety net.
- Before any of these, a 2-minute retrieval warm-up across L01–L03 (sort tags/files into
  buckets; element vs component vs prop) to push delivered → retained.
