# Nandikha — Portfolio

A fast, dark, single-page developer portfolio built with **React 19 + Vite + Tailwind CSS v4**.
It includes a live GitHub section that pulls repositories from the GitHub API at runtime, so the
site stays current as new projects are published.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with oxlint |

## Making it yours

**All copy lives in one file: [`src/content.js`](src/content.js).** Nothing else needs editing
for normal content changes.

| Export | Controls |
| --- | --- |
| `profile` | Name, role, tagline, intro, email, location, résumé link, GitHub username, social links |
| `stats` | The three numbers under the hero |
| `about` | About paragraphs and the "What I bring" list |
| `skills` | Skill groups and chips |
| `projects` | Project cards (`featured: true` makes a card span two columns) |
| `timeline` | Education / experience entries (`kind: 'education' | 'experience'`) |

Checklist before publishing:

1. Replace `hello@example.com` with your real email (it appears in `profile.email` and in the
   `Email` social link).
2. Update the LinkedIn URL in `profile.socials`.
3. Drop your `resume.pdf` into `public/` (or point `profile.resumeUrl` at a Drive link).
4. Swap the placeholder projects and timeline entries for real ones.
5. Update the title/description meta tags in `index.html`.

## Live GitHub section

`src/components/GithubFeed.jsx` fetches
`https://api.github.com/users/<profile.githubUsername>/repos`, drops forks and archived repos,
sorts by stars then most recent push, and renders the top six. No API key is required
(unauthenticated requests are rate-limited to 60/hour per IP). If the request fails or there are
no public repos yet, the section degrades gracefully to a link to the profile.

## Deploying

### GitHub Pages (workflow included)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. Enable it once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow sets `GITHUB_PAGES=true`, which makes `vite.config.js` use the
`/Nandikha-Portfolio/` base path needed for a project page. For a user page
(`nandikha.github.io`) or a custom domain, remove that env var so the base stays `/`.

### Vercel / Netlify

Build command `npm run build`, output directory `dist`. No env vars needed.

## Structure

```
src/
  App.jsx              layout + section order
  content.js           ← all editable content
  index.css            Tailwind theme, design tokens, animations
  hooks/useReveal.js   scroll-reveal + active-nav-link observers
  components/
    Nav.jsx  Hero.jsx  About.jsx  Skills.jsx
    Projects.jsx  GithubFeed.jsx  Timeline.jsx
    Contact.jsx  Footer.jsx  Section.jsx  Icons.jsx
```

## Notes

- Fully responsive, mobile nav included.
- Accessible: skip link, focus-visible rings, ARIA labels on icon links, semantic landmarks.
- Respects `prefers-reduced-motion` — animations are disabled for users who ask for that.
- Icons are inline SVG; no icon library dependency.
