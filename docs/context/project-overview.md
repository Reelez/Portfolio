# Project Overview

## Propósito

Portafolio profesional estático de Omar Jaramillo.
Desplegado en **GitHub Pages** — sin backend, sin base de datos, sin autenticación.

## Tech Stack

- React 18
- Vite
- TailwindCSS
- Formspree (formulario de contacto)
- React Router DOM (navegación cliente)

## Secciones del portafolio

| Ruta | Descripción |
|---|---|
| `/` | Hero con avatar, nombre, bio, botones. Proyectos destacados. |
| `/projects` | Grilla de todos los proyectos con tech stack y links |
| `/experience` | Timeline de experiencia laboral |
| `/about` | Bio, avatar, hobbies, redes sociales |
| `/contact` | Formulario de contacto vía Formspree |

## Fuente de datos

Todo el contenido viene de `src/data/*.json`:

| Archivo | Qué contiene |
|---|---|
| `about.json` | Nombre, título, bio, email, GitHub, LinkedIn, avatar |
| `projects.json` | Lista de proyectos con tech stack, URLs, featured flag |
| `experience.json` | Historial laboral |
| `hobbies.json` | Hobbies con icono y descripción |

## Componentes UI personalizados

| Componente | Descripción |
|---|---|
| `Button.jsx` / `ButtonLink.jsx` | Botón con animación de círculo, variantes cyan/purple |
| `GitHubStarButton.jsx` | Botón negro estilo GitHub con efecto shine |
| `SocialLinks.jsx` | Iconos LinkedIn/GitHub/Email con animación de borde |

## Roles

- **Visitante** — solo lectura (sin auth)

## Restricciones de arquitectura

- Sin llamadas a API externas (excepto Formspree en submit)
- Sin variables de entorno necesarias
- Sin backend, sin Docker, sin base de datos
- Todo contenido en JSON, nunca hardcodeado en componentes
