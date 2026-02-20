# Cybersecurity Portfolio (Next.js)

This is a personal cybersecurity portfolio built with Next.js (App Router), Tailwind CSS, and shadcn/ui-style components.

## Overview

The site renders portfolio sections from `public/portfolio-data.json`:
- Hero
- About
- Skills
- Education
- Projects
- CTF Profiles
- Certificates
- Contact

Data is loaded server-side in `lib/portfolio.js` and passed into section components in `app/page.js`.

## Tech Stack

- Next.js 16 (App Router)
- React 18
- Tailwind CSS
- next-themes (theme switching)
- GSAP (animations)
- Radix UI primitives
- Lucide React icons

## Project Structure

```text
Portfolio/
  app/
    globals.css
    layout.js
    page.js
  components/
    Navigation.js
    HeroSection.js
    AboutSection.js
    SkillsSection.js
    EducationSection.js
    ProjectsSection.js
    CTFSection.js
    CertificatesSection.js
    ContactSection.js
    Footer.js
    ...
  contexts/
  hooks/
  lib/
    portfolio.js
    gsap.js
  public/
    portfolio-data.json
    profile.jpeg
  next.config.js
  package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint

## Updating Portfolio Content

Edit `public/portfolio-data.json` to update:
- Personal info (`personal`)
- Social links (`social`)
- Skills (`skills`)
- Projects (`projects`)
- Certificates (`certificates`)
- Education (`education`)
- CTF profiles (`ctfProfiles`)

After saving, refresh the site.

## Images

- Local images: place in `public/` and reference with `/file-name.ext`
- Remote images: currently configured for `images.unsplash.com` in `next.config.js`

If you use another remote host, add it in `next.config.js` under `images.remotePatterns`.

## Theming

Theme switching is handled with `next-themes` in `app/layout.js` and used by `components/Navigation.js`.

## Notes

- Main page composition: `app/page.js`
- Not found page: `app/not-found.js`
- Global styles and design tokens: `app/globals.css`
