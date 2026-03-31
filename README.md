# Omar Jaramillo — Portfolio

Personal portfolio website showcasing projects, work experience, and professional profile.

> Live: https://portfolioomar.onrender.com/

---

## Tech Stack

- **React 18** — UI
- **Vite** — build tool & dev server
- **TailwindCSS** — styling
- **React Router** — client-side routing
- **AOS** — scroll animations
- **Lucide React** — icons
- **Formspree** — contact form (no backend needed)

---

## Project Structure

```
frontend/
├── public/
│   └── img/              ← static images (avatar, project screenshots)
├── src/
│   ├── data/             ← JSON files — single source of truth for all content
│   │   ├── about.json
│   │   ├── about.es.json
│   │   ├── projects.json
│   │   ├── projects.es.json
│   │   ├── experience.json
│   │   ├── experience.es.json
│   │   ├── hobbies.json
│   │   └── hobbies.es.json
│   ├── components/       ← reusable UI components
│   ├── layouts/          ← page wrappers
│   ├── pages/            ← one file per route
│   └── index.css         ← Tailwind + global utility classes
├── vite.config.js
└── package.json
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — intro and featured projects |
| `/projects` | All projects |
| `/experience` | Work history |
| `/about` | About me & hobbies |
| `/contact` | Contact form |

The site supports **English and Spanish** — toggle available in the navbar.

---

## Running Locally

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Updating Content

All content lives in `src/data/`. No hardcoded text inside components.

| File | What it controls |
|---|---|
| `about.json` | Name, title, bio, social links |
| `projects.json` | Project cards |
| `experience.json` | Work history |
| `hobbies.json` | Hobbies section |

Each file has an `.es.json` counterpart for the Spanish version.

---

## Deploy to Render

1. Push this repo to GitHub
2. Create a new **Static Site** on [Render](https://render.com)
3. Configure:

| Field | Value |
|---|---|
| Root Directory | `frontend` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

---

## Contact

- GitHub: [github.com/Reelez](https://github.com/Reelez)
- LinkedIn: [linkedin.com/in/omar-jaramillo-veliz](https://www.linkedin.com/in/omar-jaramillo-veliz/)
- Email: relezjr27@gmail.com
