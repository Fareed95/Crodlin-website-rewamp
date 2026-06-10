# Crodlin Technology — Next.js Revamp Project

A premium, modern full-stack web application built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Prisma**, and **Supabase (PostgreSQL)**.

---

## 📂 Directory Structure

Here is a map of the current workspace directory layout and its purposes:

```text
crodlin-website-rewamp/
├── prisma/
│   └── schema.prisma                 # Prisma database models (Blog, Inquiry)
├── public/                           # Static assets (images, logos, svgs)
├── src/
│   ├── app/
│   │   ├── (marketing)/              # Public route group sharing Navbar + Footer
│   │   │   ├── about/                # Page: /about
│   │   │   ├── blog/                 # Page: /blog & dynamic /blog/[slug]
│   │   │   ├── contact/              # Page: /contact (includes ContactForm)
│   │   │   ├── services/             # Page: /services & dynamic /services/[slug]
│   │   │   ├── work/                 # Page: /work & dynamic /work/[slug]
│   │   │   └── layout.tsx            # Wraps marketing pages with Navbar and Footer
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API Endpoint: handles Zod validation & Prisma DB entry
│   │   ├── error.tsx                 # Global Next.js error boundary
│   │   ├── globals.css               # Core styling & Tailwind v4 theme variables (@theme)
│   │   ├── layout.tsx                # ROOT layout (html, body, theme, font, providers, toasts)
│   │   ├── loading.tsx               # Global loading skeleton
│   │   ├── not-found.tsx             # Custom branded 404 page
│   │   ├── page.tsx                  # Landing page (Hero, Services Grid)
│   │   ├── robots.ts                 # Dynamic robots.txt generator
│   │   └── sitemap.ts                # Dynamic sitemap.xml generator
│   ├── components/
│   │   ├── common/
│   │   │   └── ThemeProvider.tsx     # Theme utility (next-themes wrapper)
│   │   ├── forms/
│   │   │   └── ContactForm.tsx       # Contact form (react-hook-form + zod resolver)
│   │   ├── layout/
│   │   │   ├── Footer.tsx            # Styled dark footer
│   │   │   └── Navbar.tsx            # Responsive glassmorphic navigation bar
│   │   ├── sections/
│   │   │   └── HeroSection.tsx       # Premium landing page hero with interactive graphic
│   │   └── ui/                       # Reusable shadcn component primitives
│   └── lib/
│       ├── constants.ts              # Nav links, service specifications, process steps
│       ├── metadata.ts               # Dynamic page metadata helpers for SEO
│       ├── prisma.ts                 # Prisma Client singleton initialization
│       ├── supabase.ts               # Supabase Client setups (anon and service role client)
│       └── utils.ts                  # Tailwind classes merger (clsx + tailwind-merge)
├── .env.example                      # Secrets and environment template
├── .gitignore                        # Standard exclusions including .env local secrets
├── .prettierrc                       # Prettier code style settings
├── eslint.config.mjs                 # Flat ESLint rules overriding default Next configs
├── next.config.ts                    # Next.js settings (Supabase image domain, security headers)
├── package.json                      # Dependencies and scripts definitions
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## 🛠️ Technology Stack & Details

- **Next.js 16 (App Router)**: File-based routing, dynamic server-rendering, and layout nested routes.
- **Tailwind CSS v4**: Theme tokens configured in `src/app/globals.css` using the new `@theme` block.
  - **Ember Orange Tokens**: `--color-ember` (`#D85A30`), `--color-ember-light` (`#F5E8E2`), `--color-ember-dark` (`#A03D1A`).
  - **Surface Tokens**: `--color-surface-dark` (`#0D0D0D`), `--color-surface-warm` (`#F9F7F4`).
- **Database Management (Prisma + Supabase)**:
  - `DATABASE_URL` (port 6543 - transaction pooling) is used for runtime app queries.
  - `DIRECT_URL` (port 5432 - direct database connection) is used for Prisma migrations.
- **State & Validation**: React Hook Form paired with Zod validation. Notifications are rendered via the Sonner toaster context.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your connection strings and client keys:

```bash
cp .env.example .env
```

### 3. Generate Database Client & Push Schema

```bash
# Generate type definitions for the Prisma client
npm run db:generate

# Push schema directly to Supabase DB (during development)
npm run db:push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the live site.

---

## 🧪 Formatting & Checks

Run these scripts before making commits to keep the codebase clean:

- `npm run typecheck` — Run TypeScript compiler check.
- `npm run lint` — Run Next.js linting check.
- `npm run format` — Format all code using Prettier.
