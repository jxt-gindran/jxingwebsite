# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JXING Tech is a React-based corporate website for a digital solutions company. It features multi-language support (English, Malay, Chinese, Hindi, Spanish, Arabic with RTL support), service pages with pricing, career listings, and a quote request system.

## Commands

```bash
# Install dependencies (use --legacy-peer-deps due to React 19 compatibility)
npm install --legacy-peer-deps

# Run development server (port 3000)
npm run dev

# Build for production (includes TypeScript check)
npm run build

# TypeScript type check only
npm run type-check

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- React 19 with TypeScript
- Vite 6 for bundling
- React Router DOM (HashRouter) for client-side routing
- Framer Motion for animations
- i18next for internationalization (6 languages)
- Tailwind CSS via CDN (configured in index.html)
- Lucide React for icons

### Key Files and Patterns

**Entry Points:**
- `index.tsx` - React root mount
- `App.tsx` - Main app with routing, Layout component handles language detection from URL params

**Data Layer:**
- `constants.ts` - All static data (services, pricing, team, blog posts, FAQs, career openings)
- `types.ts` - TypeScript interfaces (`ServiceItem`, `SubServiceItem`, `BlogPost`, `CareerOpening`, etc.)
- `hooks/useTranslatedData.ts` - Hook that wraps constant data with i18next translations

**Internationalization:**
- `i18n.ts` - i18next configuration with inline translations for 6 languages
- URL structure: `/#/` (English default) or `/#/:lang/` (language-prefixed)
- Language detection order: path > localStorage > browser navigator
- RTL support for Arabic (`dir: 'rtl'`)

**Routing:**
- Uses HashRouter for static hosting compatibility
- Routes defined in `routeConfig` array in App.tsx
- Services have nested routes: `/services/:id` and `/services/:id/:subId`

### Data Flow for Services

Services are defined in `constants.ts` with a hierarchical structure:
```
ServiceItem
  └── subServices: SubServiceItem[]
```

The `useTranslatedData` hook provides translated versions of all data, falling back to English constants if translation keys are missing.

### CI/CD

GitHub Actions workflow in `.github/workflows/ci-cd.yml`:
- **Build job**: Runs on all pushes/PRs to `main` and `develop`
- **Deploy job**: SSH deployment to VPS on push to `main` only

Required GitHub Secrets for deployment:
- `VPS_HOST`, `VPS_PORT`, `VPS_USERNAME`, `VPS_SSH_KEY`, `VPS_TARGET_PATH`

### Path Aliases

- `@/*` maps to project root (configured in both `tsconfig.json` and `vite.config.ts`)

### Styling Notes

- Tailwind CSS is loaded via CDN in `index.html` with custom brand colors configured
- Brand colors: `brand-azure`, `brand-marian`, `brand-oxford`, `brand-ghost`, `brand-xanthous`, `brand-robin`
- Dark mode uses Tailwind's `dark:` classes with `class` strategy
- Custom animations defined in `index.html` style block: `animate-pulse-gentle`, `animate-ping-slow`, `animate-spin-slow`, `animate-fade-in-up`, `animate-fade-in`
