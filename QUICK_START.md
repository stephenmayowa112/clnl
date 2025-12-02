# Quick Start Guide

Get the CLNL website up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Text editor (VS Code recommended)

## Installation

### 1. Install Dependencies

```bash
cd clnl-website
npm install
```

### 2. Set Up Environment Variables

Copy the example file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your values:

```bash
# Formspree - Get from https://formspree.io
NEXT_PUBLIC_FORMSPREE_QUOTE_ID=your_quote_form_id
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id

# Your tracking portal URL
NEXT_PUBLIC_TRACKING_PORTAL_URL=https://track.clnl.com.ng

# Your website URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Don't have Formspree IDs yet?** See [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md)

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Build for production

# Testing
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Check for errors
npm run format       # Format code
```

## Project Structure

```
clnl-website/
├── src/
│   ├── app/              # Pages and layouts
│   ├── components/       # React components
│   ├── lib/             # Utilities and constants
│   └── types/           # TypeScript types
├── public/              # Static files
└── .env.local          # Your environment variables
```

## Editing Content

All website content is in `src/lib/constants.ts`. Edit this file to update:

- Company information
- Services
- Industries
- Contact details
- And more!

## Next Steps

1. **Customize content** in `src/lib/constants.ts`
2. **Set up Formspree** - See [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md)
3. **Set up Google Analytics** - See [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)
4. **Deploy** - See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## Need Help?

- **Full Documentation:** [README.md](./README.md)
- **Deployment:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Formspree Setup:** [FORMSPREE_SETUP.md](./FORMSPREE_SETUP.md)
- **Google Analytics:** [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)

## Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Working

1. Ensure file is named `.env.local` (not `.env`)
2. Restart dev server after changes
3. Variables must start with `NEXT_PUBLIC_`

---

**Happy coding! 🚀**
