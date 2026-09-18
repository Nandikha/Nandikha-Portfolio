# Nandikha — Engineering Portfolio

A dark **HUD / engineering-console** style developer portfolio built with **React 19 + Vite +
Tailwind CSS v4**. Blueprint grid, scanline overlay, corner-bracketed panels, telemetry readouts,
a live GitHub feed and an interactive algorithm workbench.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Lint with oxlint |

## Page modules

| Module | Section | Notes |
| --- | --- | --- |
| — | Hero | Name, badge line, 4-up telemetry grid, ID-card panel, marquee ticker |
| `MODULE_02` | About & Education | Education nodes with CGPA / percentage readouts |
| `MODULE_03` | Skills & Toolchains | Six tagged clusters with chip lists |
| `MODULE_04` | Featured Projects | Metric grids + expandable **BUILD LOG** drawers |
| `MODULE_05` | Open Source | **Live GitHub REST API feed** |
| `MODULE_06` | Algorithm & Complexity Lab | **Interactive** sorting visualiser + Big-O analyser |
| `MODULE_07` | Experience & Milestones | Rising-edge clock-pulse timeline |
| `MODULE_08` | Contact | Form (mailto payload) + direct channel panel |

## Making it yours

**All copy lives in one file: [`src/content.js`](src/content.js).**

| Export | Controls |
| --- | --- |
| `profile` | Name, status line, badges, intro, email, location, résumé, GitHub, LinkedIn |
| `telemetry` | The four hero stat readouts |
| `education` | MODULE_02 cards |
| `skills` | MODULE_03 clusters |
| `projects` | MODULE_04 cards — `metrics` grid and `details` build log |
| `timeline` | MODULE_07 rising-edge entries |

Inside `intro`, `body` and project text, wrapping words in `**double asterisks**` renders them as
highlighted text — that's what produces the underlined-accent effect on key numbers.

### Publish checklist

1. Replace `hello@example.com` in `profile.email`.
2. Update `profile.linkedin`.
3. Drop `resume.pdf` into `public/` (or point `profile.resumeUrl` at a Drive link).
4. Replace the placeholder metrics — **the numbers currently in `content.js` are invented** to
   demonstrate the layout. Swap in real ones or delete those entries.
5. Add a portrait: put an image in `public/` and replace the placeholder block in
   `src/components/Hero.jsx` (marked `IMG_00 // REPLACE_IN_/public`).
6. Update the meta tags in `index.html`.

## Interactive workbench

`src/components/Workbench.jsx` contains two self-contained widgets:

- **Sorting visualiser** — bubble / insertion / selection sort. Every frame is precomputed into an
  array, so play, pause and single-step are just index arithmetic. Live comparison and swap
  counters, plus a best/average/worst/space complexity readout.
- **Big-O growth analyser** — compares six complexity classes at n = 8…1024 on a logarithmic bar
  scale.

## Live GitHub feed

`src/components/GithubFeed.jsx` queries
`https://api.github.com/users/<githubUsername>/repos`, drops forks and archived repos, sorts by
stars then recency, and shows the top six. No API key required (60 requests/hour per IP
unauthenticated). Degrades gracefully to a profile link on error or when there are no public repos.

## Deploying

### GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. Enable it once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow sets `GITHUB_PAGES=true`, which switches `vite.config.js` to the
`/Nandikha-Portfolio/` base path required for a project page. For a user page
(`nandikha.github.io`) or a custom domain, drop that env var so the base stays `/`.

### Vercel / Netlify

Build command `npm run build`, output directory `dist`.

## Design system

Defined in `src/index.css` via Tailwind v4 `@theme` tokens:

- `--color-void` `#04060a` page, `--color-panel` panels, `--color-line` borders
- `--color-cyan` `#22e6d4` primary accent, `--color-amber` metrics, `--color-red` warnings
- `.hud` — panel with animated corner brackets
- `.chip` / `.chip-hot` — tag pills
- `.display` — Rajdhani headings; body text is JetBrains Mono
- `.hl` — highlighted inline text produced by `**bold**`

## Accessibility

Skip link, focus-visible rings, ARIA labels on icon links, `aria-expanded` on disclosures,
semantic landmarks, and full `prefers-reduced-motion` support — scanlines and every animation are
disabled for users who request reduced motion.
