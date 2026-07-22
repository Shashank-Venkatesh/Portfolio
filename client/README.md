# Shashank Venkatesh — Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS v4,
and Framer Motion. Five routed pages (Home, Work, Stack, About, Contact), a
fully data-driven content layer, and a small, reusable component library.

## Tech Stack

- **React 19** + **Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility-first styling, theme
  tokens defined in `src/index.css`
- **React Router v7** — client-side routing across five pages
- **Framer Motion** — scroll reveals, page transitions, hover/tap micro-interactions
- **React Icons** (Feather set) — iconography

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run in development
```bash
npm run dev
```
Opens on `http://localhost:5173` by default.

### Build for production
```bash
npm run build
```
Outputs a static build to `dist/`.

### Preview the production build locally
```bash
npm run preview
```

## Deploying

The `dist/` folder is a static site and can be deployed as-is to Vercel,
Netlify, GitHub Pages, or any static host. Because routing is handled
client-side, configure your host to redirect all paths to `index.html`
(a SPA fallback):
- **Vercel**: works out of the box.
- **Netlify**: add a `_redirects` file with `/* /index.html 200`.
- **GitHub Pages**: use a 404.html fallback or a hash router if you prefer
  not to configure rewrites.

## Project Structure

```text
src/
├── assets/
│   ├── images/
│   │   ├── profile/       # Portrait used on the About page
│   │   └── projects/      # Project thumbnails (QuickGPT, SyncTroop)
│   └── fonts/              # Fonts are loaded via Google Fonts in index.html;
│                            # drop files here if you'd rather self-host them
│
├── components/
│   ├── common/             # Button, Badge, Chip, SectionHeading, CtaBanner...
│   ├── layout/              # Navbar, Container
│   ├── ui/                  # Card, EmphasisText (base visual primitives)
│   ├── hero/                 # Home page hero + status card
│   ├── about/                # Philosophy, Trajectory, FocusGrid, Quote
│   ├── skills/                # Stack page panels
│   ├── projects/              # Work page project cards, open source card
│   ├── contact/                # Contact form, channels, location card
│   └── footer/                  # Site footer
│
├── data/                    # All copy & content — edit these, not components
│   ├── site.js               # Name, tagline, resume link, hero stats
│   ├── socials.js             # Email/LinkedIn/GitHub/Twitter links
│   ├── navigation.js           # Nav link labels & routes
│   ├── projects.js              # Featured projects + open source stats
│   ├── skills.js                 # Languages, frontend/backend, tools, DBs
│   ├── education.js               # Education timeline entry
│   └── experience.js               # Achievement, quote, philosophy copy
│
├── hooks/
│   ├── useDocumentTitle.js   # Per-page <title> for SEO
│   └── useScrollToTop.js      # Resets scroll position on route change
│
├── utils/
│   └── cn.js                  # Tiny classnames helper
│
├── layouts/
│   └── MainLayout.jsx           # Navbar + animated outlet + footer shell
│
├── pages/
│   ├── Home.jsx, Work.jsx, Stack.jsx, About.jsx, Contact.jsx, NotFound.jsx
│
├── App.jsx                     # Route definitions
├── main.jsx                     # App entry, wraps App in BrowserRouter
└── index.css                     # Design tokens (@theme) + base styles
```

## Editing Content

Almost everything on the site is sourced from `src/data/*.js`. To update
copy, links, stats, or add a new project, edit the relevant data file —
no component changes required. For example, to add a third project card,
add a new object to the `projects` array in `src/data/projects.js` and
drop its thumbnail in `src/assets/images/projects/`.

## Swapping the Resume

The Resume button links to `public/resume.pdf`. Replace that file with an
updated export of your resume (same filename) to update it everywhere.

## Design Tokens

Colors, fonts, and spacing conventions live in `src/index.css` under the
`@theme` block — a near-black canvas, off-white primary text, muted grays
for secondary content, and a single emerald "signal" color reserved for
live/availability indicators. Update these variables to re-theme the whole
site from one place.

## Accessibility Notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and heading order
- Skip-to-content link for keyboard users
- Visible focus rings (`:focus-visible`) throughout
- Form fields have associated `<label>`s and `aria-invalid`/`aria-describedby`
  wiring for validation errors
- Respects `prefers-reduced-motion`
