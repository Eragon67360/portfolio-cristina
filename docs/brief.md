# Design brief: Cristina Andrés

The single source of truth about Cristina for anyone designing or writing this site. Every claim cites her own material. Page references `pNN` are `public/images/projets/Portfolio_cristina_page-00NN.jpg` (her 20-page portfolio export); "CV" is `public/pdf/CV.pdf`.

_Last updated 2026-09-28 (initial analysis for the 2026 refresh)._

## Who she is

- **Role, in her words:** "Product & Graphic Designer" (`public/images/main_logo.svg`, CV). About page: a "passionate product and graphic designer" with a "foundation in industrial design engineering", seeking "balance between form and function" (`app/about/page.tsx`).
- **Background (CV):** Industrial Design Engineering, UPV Valencia (2023); Erasmus at HE-Arc Neuchâtel and Hochschule Augsburg (interactive media / UX). Graphic designer at Future Fibres Rigging Systems / NTG Group (2022). Freelance UX/UI designer since November 2023 (Curefab Technologies website, MOCA website).
- **Tools:** Figma, Photoshop, Lightroom, Illustrator, InDesign (About); Canva and SolidWorks (CV).
- **Languages (CV):** Spanish, Catalan, English and French fluent; German basic. The current site is English only.
- **Audience (confirmed by Thomas, 2026-09-28):** both **recruiters** (p2 and CV: looking for a job in graphic or UX design) and **freelance clients** (Services page, Calendly).
- **Her own feedback on the 2024 site:** it isn't responsive enough. Responsiveness is therefore non-negotiable.

## How she thinks

- **An engineer's rigour.** She shows the making, not only the result: dielines with dimensions (p11, p15), exploded dispenser mechanics (p15), a full technical drawing of a watch movement (p20).
- **Brief first, then a system.** Requirements before solutions (Smurfit p15, Montezuma p10). She delivers whole identity systems: palettes with Pantone/RGB/CMYK, type specimens, logo variants, patterns, mockups (Ares Domus p5–6, MOCA p8).
- **Research, concept, story.** Brand study and moodboards (p4–5, p16); she wants a design to carry "the emotional background" (p19).
- **Experience-minded**, which is her path into UX: Montezuma covers "the entire user experience", from unboxing to a web and mobile travel quiz (p10–12).
- **Voice:** warm, candid, playful. "I like pandas a lot, like… a lot" (p8); "definitely the project I enjoyed the most" (p18); she credits collaborators (p18) and is honest about scope (p13).

## What she likes visually (from her work)

- **Base palette: muted earthy greens.** Sage `#91A399`, olive `#7E8C6E`, MOCA green `#6B8E78`; deep teal-slate `#33545A`; ink navy `#1D252D`; cream `#F7EBCF`.
- **Accents:** apricot `#FFB25B` / `#F59E46`, terracotta `#9A6A4F`, raspberry `#A94F5A`, gold line work on dark grounds (p4, p18).
- **Personal palette:** periwinkle / lavender stripes on warm off-white `#E8E4E0` (p1–3); CV in butter yellow `#F5C66E` on cream `#F8EFE3`.
- **Type:** a soft geometric sans for text (Poppins-like; Montserrat Alternates for MOCA p8; Geometria for Ares Domus p5) with a characterful retro outlined or chunky serif for display (p1–3, p16); wide-tracked caps for labels.
- **Illustration over photography:** self-portrait avatar, panda mascot, Montezuma mask, koi line art, icons (p2, p8, p9–10, p18). Photos only as moodboard or mockup context.
- **Patterns:** vertical bars (p4), seigaiha and fish scales (p19–20), pandas and bamboo (p8), postage stamps (p10).
- **Layout grammar she already uses:** landscape spreads (text left, imagery right); a numbered circle badge with a two-line title ("3 Montezuma / Packaging"); discipline chips ("● Logo Design ● Branding") with a year; rounded tiles with thick pastel borders (Contents, p3); flat colour fields, soft shadows, wavy organic dividers (p1, p16).
- **Tone:** calm, nostalgic, crafted, with a wink.

## Content inventory

`public/json/projets.json` has 9 entries:

| # | Project | What she did | Pages | Status |
|---|---|---|---|---|
| 1–3 | "New project" | placeholders reusing Ares Domus pages | p4–6 | **remove** |
| 4 | Curefab Technologies website | freelance UX/UI (CV) | none (points at Ares Domus) | **case study content needed** |
| 5 | Sakana, Swiss watch (HE-Arc, 2022) | product + graphic design, technical drawings; phase 1 with a classmate | p18–20 | ready |
| 6 | Smurfit Kappa packaging (2022, class competition, group) | 5 kg bulk dispenser box, retro graphics | p14–17 | ready |
| 7 | Montezuma marketing strategy + packaging (Dreamland, 2022) | packaging, unboxing, quiz UI (web + mobile), launch campaign | p9–13 | ready |
| 8 | MOCA Studio (personal brand, 2022) | brand identity | p7–8 | ready |
| 9 | Ares Domus (fictional luxury resort on Mars, 2022) | logo, brand book, merchandise | p4–6 | ready |

Also available: cover, "Hello!" and Contents pages (p1–3); the avatar (`main_logo.svg`); tool logos (`components/Logos/`). On Behance but not on the site: **YOKOHAMA | Product Design**.

- **About:** background, experience, studies, languages (`app/about/page.tsx`).
- **Services:** Graphic Design (logos, branding, slide decks, brand guides, blog graphics); UX/UI Design (landing pages, mobile apps, websites); R&D Design (3D modelling, product development, design concept) (`app/services/page.tsx`).
- **Contact:** email `cristina.andresrr@gmail.com`, Calendly `calendly.com/cristina-andresrr/30min`, Behance `behance.net/cristinaandrs`, LinkedIn `linkedin.com/in/cristinaandrs`. The phone number is in the CV only and is not published on the site.

## What's wrong with the 2024 site

- Every page scrolls sideways at 390 px (home 537 px, About 915 px, Services 615 px wide); About is hard-coded to 1440 px.
- Case studies are flattened JPG spreads (up to 2.4 MB): unreadable on a phone, invisible to search and screen readers, no per-project URL.
- Three placeholder projects; the one real client UX project (Curefab) has no case study.
- The project modal has no Escape, focus trap or dialog role, and its close button is off-screen; cards aren't focusable; alt text is generic.
- Stark black-and-white Inter: nothing of her warm, illustrated, colourful taste.
- Typos ("Grapic Design", "a amazing brand"); minimal metadata; unused React Spectrum dependencies; Node 20.

## Design directions (2026 refresh)

Three genuinely different directions, each grounded in her work. Same content, same routes.

- **A. "Cuaderno", the designer's sketchbook.** Cream paper with sage and olive fields, a retro outlined serif for display with a soft geometric sans, her avatar and panda as hand-drawn guides; case studies read as sketchbook spreads with dielines and sketches as process. _Why:_ illustration-first work (p2, p8, p10, p18), nostalgic retro taste (p16), playful voice (p8).
- **B. "Ficha técnica", the engineered spec sheet.** Precise grid on off-white, hairline rules and dimension-line ornaments, numbered sections (her badge circles), navy `#1D252D` with apricot `#FFB25B`; every project told as brief → requirements → system → result. _Why:_ engineering rigour (p11, p15, p20), requirement-first thinking (p10, p15), brand books (p5, p8); speaks directly to UX and product recruiters.
- **C. "Estudio de color", colour-field brand studio.** Full-bleed tiles in each project's brand colour, rounded pastel-bordered cards like her Contents page (p3), wide-tracked labels, discipline chips with years, her patterns as hover and transition textures. _Why:_ each project is a strong flat-colour identity (p4, p7, p9, p18) and it reuses her own layout grammar (p4–18).

Claude Design board: _to be linked here._

## Open questions for Cristina

1. Curefab case study: can she share screens, the brief and her role, so her only client UX project gets a real page?
2. Languages: English only, or English + Spanish (she also writes in French and Catalan)?
3. Should YOKOHAMA (Behance) join the site?
4. Avatar illustration or a photo on the About page?
5. Instagram: is there a professional account to link?

## Decisions

- 2026-09-28 (Thomas): redesign **and** stack refresh (Next 16, React 19, Tailwind 4, Node 24; NextUI and React Spectrum removed).
- 2026-09-28 (Thomas): `dev` previews are public so Cristina can open them without a Vercel account.
- 2026-09-28 (Thomas): directions are first sketched on a Claude Design board, then built as switchable variants on `dev`.
