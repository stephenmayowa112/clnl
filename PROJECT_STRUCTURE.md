# CLNL Website Project Structure

## Directory Structure

```
clnl-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Layout components (Header, Footer, Navigation)
│   │   ├── sections/           # Page sections (Hero, About, Services, etc.)
│   │   ├── ui/                 # Reusable UI components (Button, Card, Modal, Form)
│   │   └── forms/              # Form components (QuoteForm, ContactForm, TrackingForm)
│   ├── lib/                    # Utility functions and constants
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
└── vitest.config.ts           # Vitest configuration
```

## Technology Stack

- **Framework**: Next.js 16 with App Router (Static Site Generation)
- **Styling**: Tailwind CSS 4 with custom CLNL brand colors
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: React Icons
- **Testing**: Vitest with fast-check for property-based testing
- **TypeScript**: Strict mode enabled

## CLNL Brand Colors

- Primary Blue: `#0066CC`
- Secondary Blue: `#003D7A`
- Accent Yellow: `#FFD700`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI

## Configuration Files

- `next.config.ts` - Next.js configuration (static export enabled)
- `tailwind.config.ts` - Tailwind CSS configuration with CLNL brand colors
- `tsconfig.json` - TypeScript configuration (strict mode)
- `vitest.config.ts` - Vitest testing configuration
- `eslint.config.mjs` - ESLint configuration
- `.prettierrc` - Prettier code formatting configuration
