# Huzaifa Mumtaz — Portfolio

A personal developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS — featuring dark/light themes, scroll-triggered animations, and an animated particle-network hero background.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) for scroll/entrance animations
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [Lucide](https://lucide.dev) for icons
- [Bun](https://bun.sh) as package manager & runtime

## Getting Started

From the repo root, using the included [Makefile](../Makefile):

```bash
make install   # bun install
make dev       # start the dev server
make build     # production build
make start     # run the production build
make lint      # eslint
```

Or directly, from this directory:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The dev server hot-reloads as you edit files.

## Project Structure

```
app/                  Root layout, global styles, the single page route
components/
  navbar/              Sticky navbar + mobile menu
  hero/                Hero section, animated background, particle field
  about/               About + stats
  experience/          Experience timeline
  projects/            Project cards/grid
  skills/              Skills grid + tech-stack orbit visual
  contact/             Contact CTA
  footer/               Footer
  ui/                  Shared primitives (Button, Badge, Container, Reveal, ...)
data/content.ts        All personal/resume content — edit this to update the site
lib/utils.ts           Small shared helpers (cn)
public/                Static assets, incl. resume PDF
```

## Editing Content

All personal info, experience, projects, and skills live in a single typed file: [`data/content.ts`](./data/content.ts). Update that file rather than editing components directly.

To swap the downloadable resume, replace the PDF in `public/` and update `resumeUrl` in `data/content.ts` to match its filename.

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new), from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
