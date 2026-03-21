# Session Progress — Portfolio Static Site

## What Was Built

This portfolio went from a FastAPI + React app to a **100% static site** (React + Vite + TailwindCSS) deployable on GitHub Pages.

---

## Architecture

- **No backend** — all data lives in `src/data/*.json`
- **No auth** — public read-only portfolio
- **Deploy target** — GitHub Pages via `npm run deploy`

### Data files (`frontend/src/data/`)
| File | Content |
|---|---|
| `about.json` | Name, title, bio, location, email, GitHub, LinkedIn, avatar path |
| `projects.json` | Project list with tech stack, GitHub/live URLs, featured flag |
| `experience.json` | Work history with company, role, dates, technologies |
| `hobbies.json` | Hobbies with icon, name, description |

### Pages
| Route | Page |
|---|---|
| `/` | HomePage — hero + featured projects |
| `/projects` | ProjectsPage — full project grid |
| `/experience` | ExperiencePage — vertical timeline |
| `/about` | AboutPage — bio + hobbies |
| `/contact` | ContactPage — Formspree contact form |

---

## Components Built

### `src/components/ui/GitHubStarButton.jsx`
Black button with GitHub icon, "Star on GitHub" text, star count badge, and shine sweep animation on hover.

### `src/components/ui/Button.jsx`
Exports `Button` (renders `<button>`) and `ButtonLink` (renders `<a>`).
Variants: `cyan` (default) and `purple`.

### `src/components/ui/SocialLinks.jsx`
Displays LinkedIn, GitHub, and Email icons with a border-line hover animation:
- Top/bottom lines retract on hover
- Left/right lines appear on hover
- Each platform has its own hover color (LinkedIn: #0274b3, GitHub: #e5e7eb, Email: #ea4335)

### `src/components/SectionTitle.jsx`
Reusable section header with label (monospace, cyan) + title.

### `src/components/ProjectCard.jsx`
Card with title, description, tech stack badges, GitHub/live links.

---

## CSS System (`src/index.css`)

### Button variants
- `.btn-animated` — small compact button, circle 220×200px sweeps from bottom-right to top-left
- `.btn-animated-full` — modifier for wide/full-width buttons, larger circle 600×400px
- `.btn-animated.btn-purple` — purple color variant

### Social icons
- `.social-list` — flex list with border-line animation on hover

### Utilities
- `.gradient-text` — cyan → purple gradient text
- `.card` — dark surface card
- `.card-hover` — card with hover glow
- `.section` — page wrapper with padding

---

## Contact Form

Uses **Formspree** (`@formspree/react`).
- Form ID: `xbdzokql`
- Fields: name, email, message
- Success state shows confirmation card
- No backend required

---

## Avatar

- File: `frontend/public/avatar.png` (anime-style developer illustration, transparent PNG)
- Used in: HomePage hero (right side, `-mt-16` to compensate transparent top padding) and AboutPage
- Set via `about.json` → `"avatar": "./avatar.png"`

---

## Design System

| Token | Value |
|---|---|
| Background | `gray-950` (#030712) |
| Surface | `gray-900` (#111827) |
| Border | `gray-800` (#1f2937) |
| Primary | `cyan-400` (#22d3ee) |
| Secondary | `purple-500` (#a855f7) |
| Text primary | `gray-100` |
| Text secondary | `gray-400` |

---

## Running Locally

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

## Deploy

```bash
cd frontend
npm run build
npm run deploy
```
