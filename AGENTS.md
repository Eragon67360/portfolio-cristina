# AGENTS.md

Guidance for AI agents and contributors working on this repository.

This is the portfolio of **Cristina Andrés**, a product & graphic designer moving into UX/UI. Thomas Moser builds and maintains it for her. The site has two audiences at once: **recruiters** (she is looking for a job in graphic or UX design) and **freelance clients** (services, contact, Calendly). Every design and content decision serves both.

Before any design or content work, read [`docs/brief.md`](docs/brief.md): who Cristina is, how she thinks, what she likes, and the content inventory. It is the single source of truth about her; keep it current.

## Stack

| Concern | Now (2024 site, being replaced) | Target (2026 refresh) |
| --- | --- | --- |
| Framework | Next.js 14 App Router, React 18 | Next.js 16 App Router, React 19 |
| Styling | Tailwind CSS 3, NextUI 2, React Spectrum (unused) | Tailwind CSS 4 (CSS-first), no UI kit unless a variant needs one |
| Runtime | Node 20 (retired on Vercel 2026-10-01) | Node 24 (Vercel project already on 24.x) |
| Content | `public/json/projets.json` + JPG spreads in `public/images/projets/` | Typed content module + real HTML case studies |

Commands (target): `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`, `npm run test:e2e` (Playwright). Add them as the refresh lands.

## Branches and deployment

- `main` → production on Vercel (`portfolio-cristina` project, team `eragon67360s-projects`; always pass `--scope eragon67360s-projects` to the Vercel CLI).
- `dev` → integration branch. Its Vercel preview is **public** (Vercel Authentication is off for this project), so a `dev` link can be sent to Cristina as is.
- Work on a feature branch, open a PR into `dev`. **Never push to `main`.** Releasing is a PR `dev` → `main` that Thomas approves.
- Commit messages: conventional (`feat:`, `fix:`, `docs:`…), one topic per commit.

## Redesign playbook

How a redesign (or any sizeable visual change) is done here. Each step leaves an artefact the next step builds on.

1. **Analyse before designing.** Read `docs/brief.md`, the current site at 390 / 768 / 1440 px, her own work in `public/images/projets/` (look at the images), and her CV (`public/pdf/`). Facts come from her material, never from assumptions. Update the brief with anything new.
2. **Write the brief's direction section.** Two to three directions, each a one-line concept plus the evidence from her work that justifies it (cite project pages). Directions must differ in structure and hierarchy, not only in colour.
3. **Sketch on a Claude Design board.** Mock up each direction on a shared canvas (home + one case study, desktop and mobile). Thomas reviews it; iterate here, it is cheap. Link the board from the brief.
4. **Build the variants for real on `dev`.** All variants live on the real routes, switchable with `?variant=a|b|c` and a small floating switcher (hidden on production). Same content, same routes; only the rendering differs. Each variant must meet the quality bar below, because Cristina judges what she sees on her own phone.
5. **Send the `dev` link to Cristina.** She picks one (or mixes: "B's header with C's colours"). Record the verdict and the reasons in `docs/brief.md` and as an ADR in `docs/adr/`.
6. **Build the chosen design properly.** Remove the losing variants and the switcher from `dev` (keep them on a `prototype/*` branch as reference), then polish, test and release through a `dev` → `main` PR.

## Quality bar (every variant, every page)

- **Responsive is mandatory.** No horizontal scroll at 390 px; designed layouts at 390, 768 and 1440 px. (Her main complaint about the 2024 site.)
- **Accessibility:** WCAG 2.1 AA contrast, keyboard operable, visible focus, real headings, meaningful alt text, dialogs with Escape and focus management. `prefers-reduced-motion` respected.
- **Case studies are real HTML**, not flattened JPG spreads: readable on a phone, indexable, and each project has its own shareable URL.
- **Performance:** optimised images (`next/image`, sized per breakpoint); mobile Lighthouse ≥ 90 as the target.
- Metadata and Open Graph image for the home page and every case study.

## Content accuracy

- Everything the site says about Cristina (projects, roles, dates, tools, languages, clients) must trace to her own material: the case-study pages, her CV, her public profiles she links to. Never invent clients, results, dates or quotes.
- When content is missing (for example the Curefab case study has no pages), leave it out or mark it as needed in the brief's open questions. Do not fill gaps with placeholders like "New project".
- Keep her voice: warm, candid, a little playful ("I like pandas a lot, like… a lot"). Fix typos, don't rewrite her personality.
- The site does not publish her phone number.

## Docs

- `docs/brief.md`: who she is, how she thinks, what she likes, content inventory, directions, open questions, decisions.
- `docs/adr/`: decisions that are hard to reverse (chosen design, stack choices), one short file each, numbered `0001-…`.
