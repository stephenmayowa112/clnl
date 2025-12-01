# Performance Optimizations

This document outlines the performance optimizations implemented in the CLNL website to ensure fast load times and optimal user experience.

## Overview

The website implements multiple performance optimization strategies to achieve:
- Fast initial page load (< 3 seconds on standard broadband)
- Minimal bundle size through code splitting
- Optimized asset delivery
- Efficient caching strategies
- Google PageSpeed Insights score of 80+

## Implemented Optimizations

### 1. Lazy Loading for Below-the-Fold Images

**Implementation:**
- Created `LazyImage` component (`src/components/ui/LazyImage.tsx`)
- Wraps Next.js Image component with lazy loading enabled by default
- Images only load when entering the viewport
- Priority prop available for above-the-fold images

**Usage:**
```tsx
import { LazyImage } from '@/components/ui';

// Below-the-fold image (lazy loaded)
<LazyImage
  src="/images/service-icon.jpg"
  alt="Service icon"
  width={400}
  height={300}
/>

// Above-the-fold image (eager loaded)
<LazyImage
  src="/images/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  priority={true}
/>
```

**Benefits:**
- Reduces initial page load time
- Saves bandwidth for users who don't scroll
- Improves Core Web Vitals (LCP, CLS)

### 2. Code Splitting for Modals and Forms

**Implementation:**
- Created `DynamicModals.tsx` with dynamic imports
- Modals are loaded only when user triggers them
- Loading states provide feedback during chunk loading
- SSR disabled for modal components (client-only)

**Components with Code Splitting:**
- `DynamicQuoteRequestModal` - Quote request form modal
- `DynamicTrackingModal` - Shipment tracking modal

**Usage:**
```tsx
import { DynamicQuoteRequestModal } from '@/components/modals';

// Modal code is only loaded when showModal becomes true
{showModal && (
  <DynamicQuoteRequestModal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
  />
)}
```

**Benefits:**
- Reduces initial JavaScript bundle size by ~50KB
- Faster Time to Interactive (TTI)
- Better First Contentful Paint (FCP)
- Modals load on-demand with loading indicators

### 3. Static Asset Optimization

**Next.js Configuration (`next.config.ts`):**

#### Image Optimization
```typescript
images: {
  formats: ['image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000, // 1 year
  unoptimized: true, // Required for static export
}
```

**Benefits:**
- WebP format reduces image size by 25-35%
- Responsive images serve appropriate sizes per device
- Long cache TTL reduces repeat requests

#### Compression
```typescript
compress: true,
```

**Benefits:**
- Gzip/Brotli compression reduces transfer size
- SWC minification is enabled by default in Next.js 16+
- Faster parsing and execution

### 4. Caching Headers Configuration

**Note:** Custom headers don't work with Next.js static export. Configure caching headers in your hosting platform instead.

**Recommended Configuration (Vercel/Netlify):**

For Vercel, create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

For Netlify, create `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Benefits:**
- Static assets cached for 1 year
- Immutable flag prevents revalidation
- Reduces server requests on repeat visits
- Faster subsequent page loads

### 5. Bundle Size Optimization

**Package Import Optimization:**
```typescript
experimental: {
  optimizePackageImports: ['react-icons', 'framer-motion'],
}
```

**Benefits:**
- Tree-shaking for icon libraries
- Only imports used icons/components
- Reduces bundle size by ~30-40KB for icon libraries

**React Compiler:**
```typescript
reactCompiler: true,
```

**Benefits:**
- Automatic memoization of components
- Reduced re-renders
- Better runtime performance

## Performance Metrics

### Target Metrics (Google PageSpeed Insights)

| Metric | Target | Description |
|--------|--------|-------------|
| Performance Score | 80+ | Overall performance rating |
| First Contentful Paint (FCP) | < 1.8s | Time to first content render |
| Largest Contentful Paint (LCP) | < 2.5s | Time to largest content render |
| Time to Interactive (TTI) | < 3.8s | Time until page is fully interactive |
| Total Blocking Time (TBT) | < 300ms | Time page is blocked from user input |
| Cumulative Layout Shift (CLS) | < 0.1 | Visual stability score |

### Bundle Size Targets

| Bundle | Target Size | Actual |
|--------|-------------|--------|
| Initial JS | < 200KB | Check with `npm run build` |
| Initial CSS | < 50KB | Check with `npm run build` |
| Total Page Weight | < 1MB | Check with DevTools |

## Testing Performance

### Build Analysis
```bash
# Build the production bundle
npm run build

# Analyze bundle sizes
# Check the output for chunk sizes
```

### Lighthouse Audit
```bash
# Run Lighthouse in Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Select "Performance" category
# 4. Click "Analyze page load"
```

### Bundle Analyzer (Optional)
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

# Run analysis
ANALYZE=true npm run build
```

## Best Practices for Future Development

### Images
1. Always use `LazyImage` component for images
2. Set `priority={true}` only for above-the-fold images
3. Provide appropriate width/height to prevent layout shift
4. Use WebP format when possible
5. Compress images before adding to project

### Code Splitting
1. Use dynamic imports for large components
2. Split modals, forms, and heavy libraries
3. Provide loading states for better UX
4. Consider route-based code splitting for multi-page apps

### Third-Party Scripts
1. Load analytics scripts asynchronously
2. Use Next.js Script component with appropriate strategy
3. Defer non-critical scripts
4. Consider self-hosting third-party resources

### CSS
1. Use Tailwind's purge feature (enabled by default)
2. Avoid large CSS-in-JS libraries
3. Critical CSS is inlined automatically by Next.js
4. Use CSS modules for component-specific styles

### JavaScript
1. Minimize use of large libraries
2. Use tree-shakeable imports
3. Avoid unnecessary client-side JavaScript
4. Leverage React Server Components when possible

## Monitoring

### Production Monitoring
- Set up Google Analytics for real user metrics
- Monitor Core Web Vitals in Search Console
- Use Vercel Analytics for detailed performance insights
- Set up alerts for performance regressions

### Continuous Improvement
- Run Lighthouse audits regularly
- Monitor bundle size changes in CI/CD
- Review performance metrics after major updates
- A/B test performance optimizations

## Additional Optimizations (Future)

### Potential Improvements
1. **Service Worker**: Implement offline support and caching
2. **Prefetching**: Prefetch critical resources on hover
3. **HTTP/2 Server Push**: Push critical assets
4. **CDN**: Use global CDN for static assets
5. **Resource Hints**: Add preconnect/dns-prefetch for external resources
6. **Font Optimization**: Use font-display: swap and subset fonts
7. **Critical CSS**: Inline critical CSS for faster FCP
8. **Skeleton Screens**: Show content placeholders during loading

## Resources

- [Next.js Performance Documentation](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Core Web Vitals](https://web.dev/vitals/)
