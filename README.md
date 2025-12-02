# Complete Logistics Network Limited (CLNL) Website

A modern, responsive corporate website for Complete Logistics Network Limited, showcasing their comprehensive logistics services including agro exports, freight management, customs clearing, logistics & warehousing, and facilities management.

## 🚀 Features

- **Modern Tech Stack:** Built with Next.js 14, React 19, TypeScript, and Tailwind CSS
- **Static Site Generation:** Optimized for performance with static export
- **Responsive Design:** Mobile-first approach with seamless experience across all devices
- **SEO & AEO Optimized:** Structured data, semantic HTML, and optimized meta tags
- **Form Integration:** Formspree-powered contact and quote request forms
- **Accessibility:** WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance:** Lazy loading, image optimization, and code splitting
- **Animations:** Smooth scroll animations with Framer Motion
- **Type Safety:** Full TypeScript implementation with Zod validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** Version 18.x or higher
- **npm:** Version 9.x or higher (comes with Node.js)
- **Git:** For version control

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd clnl-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:
   ```bash
   # Formspree Configuration (Required)
   NEXT_PUBLIC_FORMSPREE_QUOTE_ID=your_quote_form_id_here
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id_here

   # Tracking Portal URL (Required)
   NEXT_PUBLIC_TRACKING_PORTAL_URL=https://track.clnl.com.ng

   # Site URL (Required)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # Google Analytics (Optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

   See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed setup instructions.

## 🏃 Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page auto-updates as you edit files. Start by modifying `src/app/page.tsx`.

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production (static export)
- **`npm start`** - Start production server (not used for static export)
- **`npm run lint`** - Run ESLint
- **`npm run format`** - Format code with Prettier
- **`npm test`** - Run tests once
- **`npm run test:watch`** - Run tests in watch mode
- **`npm run test:ui`** - Run tests with UI

## 🧪 Testing

The project includes comprehensive testing:

### Unit Tests

```bash
npm test
```

Tests are located alongside components with `.test.tsx` extension.

### Property-Based Tests

Property-based tests use `fast-check` to verify correctness properties across many random inputs:

```bash
npm test
```

See test files in `src/lib/` for examples.

## 📁 Project Structure

```
clnl-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── sections/          # Homepage sections
│   │   ├── modals/            # Modal components
│   │   ├── forms/             # Form components
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   ├── constants.ts       # Site content and configuration
│   │   ├── schemas.ts         # Zod validation schemas
│   │   ├── formspree.ts       # Formspree integration
│   │   ├── seo.ts             # SEO utilities
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/                     # Static assets
├── .env.example               # Environment variables template
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── vitest.config.ts           # Vitest configuration
└── DEPLOYMENT_GUIDE.md        # Deployment instructions
```

## 🎨 Customization

### Brand Colors

The website uses CLNL brand colors defined in `tailwind.config.ts`:

- **Primary Blue:** `#0066CC`
- **Secondary Blue:** `#003D7A`
- **Accent Yellow:** `#FFD700`

### Content Updates

All website content is centralized in `src/lib/constants.ts` for easy updates:

```typescript
export const siteContent = {
  company: { /* company info */ },
  services: [ /* services */ ],
  industries: [ /* industries */ ],
  // ... more content
};
```

Edit this file to update text, services, contact information, etc.

## 🚀 Deployment

The website is configured for static export and can be deployed to any static hosting platform.

### Quick Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

### Quick Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Set build command: `npm run build`
5. Set publish directory: `out`
6. Configure environment variables
7. Deploy!

### Manual Build

```bash
npm run build
```

The static files will be in the `out/` directory. Upload these to any static hosting provider.

**For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment instructions
- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - Accessibility features and guidelines
- **[PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md)** - Performance optimization details
- **[SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md)** - SEO and AEO implementation
- **[MODAL_IMPLEMENTATION.md](./MODAL_IMPLEMENTATION.md)** - Modal system documentation
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed project structure

## 🔧 Technology Stack

### Core Technologies

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Libraries & Tools

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[Formspree](https://formspree.io/)** - Form backend service
- **[Vitest](https://vitest.dev/)** - Testing framework
- **[fast-check](https://fast-check.dev/)** - Property-based testing

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Commit changes: `git commit -m "Add your feature"`
7. Push to branch: `git push origin feature/your-feature`
8. Create a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved by Complete Logistics Network Limited.

## 📞 Support

For questions or support, contact:

- **Email:** info@clnl.com.ng
- **Phone:** +234 XXX XXX XXXX
- **Website:** https://www.clnl.com.ng

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Forms powered by [Formspree](https://formspree.io/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ for Complete Logistics Network Limited**
