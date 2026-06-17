
# Clyde Kok — Developer Portfolio

A static portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). No backend, no database — just static HTML/CSS/JS, ready to deploy.

## Stack

- Astro 4 (`output: "static"`)
- Tailwind CSS 3 via `@astrojs/tailwind`
- Vanilla JS for the terminal-typing hero effect and the light/dark theme toggle (no UI framework needed)

## Project structure
```
src/
  components/      Navbar, Hero, About, ProjectCard, Skills, Architecture, Experience, Contact, Footer
  data/             site.ts (contact info), projects.ts, skills.ts — edit these to update content
  layouts/          BaseLayout.astro (head, fonts, no-flash theme script)
  pages/            index.astro (assembles every section)
  styles/           global.css (Tailwind layers + design tokens)
public/
  favicon.svg
  resume.pdf        placeholder — replace with your real resume
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Customize

- **Name, role, email, GitHub, LinkedIn, resume path** → `src/data/site.ts`
- **Project cards** → `src/data/projects.ts`
- **Skill groups** → `src/data/skills.ts`
- **Resume file** → replace `public/resume.pdf` with your actual resume (same filename, or update `site.resume` in `site.ts`)
- **Colors / fonts** → `tailwind.config.mjs` (the `copper`, `cyan`, `violet`, `moss`, `amber` accents) and the Google Fonts link in `src/layouts/BaseLayout.astro` (Space Grotesk / Inter / JetBrains Mono)

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy

This is a fully static site, so all three platforms work with zero configuration:

**Vercel**
1. Push this repo to GitHub.
2. Import it in Vercel — it auto-detects Astro. Build command `npm run build`, output directory `dist`.
3. Deploy.

**Netlify**
- Build command: `npm run build`, publish directory: `dist`.

**Cloudflare Pages**
- Build command: `npm run build`, output directory: `dist`.

No environment variables or adapters are required since the site has no server-rendered routes.
