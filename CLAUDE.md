# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 project for "Alife" - an insurance business community website featuring mentorship programs. It's built with TypeScript, Tailwind CSS, and incorporates modern UI components with Framer Motion animations and 3D elements using React Three Fiber.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations and CSS variables
- **UI Library**: Radix UI components with shadcn/ui
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: React Three Fiber with Drei utilities
- **Icons**: Lucide React, Tabler Icons, React Icons
- **Email**: EmailJS integration for contact forms
- **Charts**: Recharts for data visualization
- **Image Processing**: Browser image compression, Cloudinary integration
- **Effects**: Canvas confetti, particle systems

### Project Structure
- `src/app/` - App Router pages and layouts
  - `(auth)/` - Authentication pages (login, signup)
  - `(marketing)/` - Marketing pages including blog
  - `contact/` - Contact page
- `src/components/` - Reusable UI components
  - `sections/` - Page section components (hero, testimonials, etc.)
  - `magicui/` - Custom animated UI components
  - `ui/` - Base UI components (shadcn/ui)
- `src/lib/` - Utilities and configuration
- `public/` - Static assets and images

### Key Components
- **HeroVideoDialog**: Interactive video player component with animations
- **Theme System**: Dark/light mode with next-themes
- **Blog System**: MDX-based blog with content management
- **Contact Form**: EmailJS integration for form submissions
- **Responsive Design**: Mobile-first approach with Tailwind

### Configuration
- TypeScript with strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- Tailwind with custom theme colors, animations, and extensive keyframes
- Next.js image optimization for localhost, randomuser.me, and Unsplash
- shadcn/ui configuration with slate base color and CSS variables

### SEO & Metadata
- Comprehensive metadata setup for insurance business community
- OpenGraph and Twitter card optimization
- Schema.org structured data
- Indonesian locale support (id_ID)

## Development Notes

### Styling Patterns
- Uses CSS custom properties for theming with HSL color values
- Extensive custom animations (marquee, ripple, shimmer, glow, etc.)
- Component-based styling with shadcn/ui patterns and cn() utility
- Responsive design with mobile-first approach and container queries
- Custom keyframe animations for interactive elements

### Component Architecture
- Server and client components appropriately separated
- Reusable UI components in `components/ui/`
- Section-based page composition
- Consistent styling with cn() utility function

### Content Management
- Blog posts as MDX files in `content/` directory
- Static image assets in `public/` directory
- Site configuration centralized in `src/lib/config.ts`