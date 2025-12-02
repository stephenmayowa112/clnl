# CLNL Website Deployment Guide

This guide provides step-by-step instructions for deploying the Complete Logistics Network Limited (CLNL) website to production.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Configuration](#environment-configuration)
3. [Formspree Setup](#formspree-setup)
4. [Google Analytics Setup](#google-analytics-setup)
5. [Deployment Options](#deployment-options)
   - [Vercel Deployment](#vercel-deployment)
   - [Netlify Deployment](#netlify-deployment)
   - [Other Static Hosting](#other-static-hosting)
6. [Post-Deployment Checklist](#post-deployment-checklist)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- Node.js 18.x or higher installed
- npm or yarn package manager
- Git repository with the project code
- Access to the hosting platform (Vercel, Netlify, etc.)
- Domain name configured (optional but recommended)

---

## Environment Configuration

The website requires several environment variables to function properly. These are configured differently depending on your hosting platform.

### Required Environment Variables

Create a `.env.local` file in the project root (for local testing) or configure these in your hosting platform:

```bash
# Formspree Configuration (REQUIRED)
NEXT_PUBLIC_FORMSPREE_QUOTE_ID=your_quote_form_id_here
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id_here

# Tracking Portal URL (REQUIRED)
NEXT_PUBLIC_TRACKING_PORTAL_URL=https://track.clnl.com.ng

# Site URL (REQUIRED for SEO)
NEXT_PUBLIC_SITE_URL=https://www.clnl.com.ng

# Google Analytics (OPTIONAL)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Environment Variable Descriptions

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FORMSPREE_QUOTE_ID` | Formspree form ID for quote requests | Yes |
| `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | Formspree form ID for contact form | Yes |
| `NEXT_PUBLIC_TRACKING_PORTAL_URL` | URL to external tracking portal | Yes |
| `NEXT_PUBLIC_SITE_URL` | Production website URL | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID | No |

**Important:** All variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never store sensitive information in these variables.

---

## Formspree Setup

Formspree handles form submissions without requiring a backend server. Follow these steps to set up Formspree:

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create Forms

You need to create two forms:

#### Quote Request Form

1. In your Formspree dashboard, click "New Form"
2. Name it "CLNL Quote Requests"
3. Configure the following settings:
   - **Email notifications:** Add CLNL's business email(s)
   - **Spam filtering:** Enable reCAPTCHA (recommended)
   - **Auto-response:** Optional - configure a thank you message
4. Copy the Form ID (format: `xxxxxxxxxxxxx`)
5. Set this as `NEXT_PUBLIC_FORMSPREE_QUOTE_ID`

#### Contact Form

1. Create another form named "CLNL Contact Form"
2. Configure similar settings as above
3. Copy the Form ID
4. Set this as `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`

### Step 3: Configure Form Fields

Formspree will automatically accept the following fields from the website:

**Quote Form Fields:**
- `serviceType`
- `contactName`
- `email`
- `phone`
- `company`
- `details`
- `urgency`

**Contact Form Fields:**
- `name`
- `email`
- `phone`
- `subject`
- `message`

### Step 4: Test Forms

After deployment, test both forms to ensure:
- Submissions are received in Formspree dashboard
- Email notifications are sent correctly
- Spam filtering works as expected

### Formspree Pricing

- **Free Plan:** 50 submissions/month (suitable for testing)
- **Paid Plans:** Start at $10/month for 1,000 submissions
- Upgrade as needed based on traffic

---

## Google Analytics Setup

Google Analytics is optional but recommended for tracking website performance and user behavior.

### Step 1: Create Google Analytics Account

1. Go to [https://analytics.google.com](https://analytics.google.com)
2. Sign in with a Google account
3. Click "Start measuring"
4. Create an account name (e.g., "CLNL Website")

### Step 2: Set Up Property

1. Create a property named "CLNL Website"
2. Select your timezone and currency
3. Configure business details

### Step 3: Set Up Data Stream

1. Choose "Web" as the platform
2. Enter your website URL (e.g., `https://www.clnl.com.ng`)
3. Enter a stream name (e.g., "CLNL Production")
4. Click "Create stream"

### Step 4: Get Measurement ID

1. After creating the stream, you'll see a Measurement ID (format: `G-XXXXXXXXXX`)
2. Copy this ID
3. Set it as `NEXT_PUBLIC_GA_ID` in your environment variables

### Step 5: Verify Installation

After deployment:
1. Visit your website
2. Go to Google Analytics > Reports > Realtime
3. Verify that your visit is being tracked

---

## Deployment Options

### Vercel Deployment (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers seamless integration.

#### Prerequisites
- GitHub, GitLab, or Bitbucket account with the project repository

#### Deployment Steps

1. **Connect Repository**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "Add New Project"
   - Import your Git repository

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `clnl-website`
   - Build Command: `npm run build` (default)
   - Output Directory: `out` (auto-configured)

3. **Set Environment Variables**
   - In the project settings, go to "Environment Variables"
   - Add all required variables from the [Environment Configuration](#environment-configuration) section
   - Set them for "Production", "Preview", and "Development" environments

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

5. **Configure Custom Domain**
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., `www.clnl.com.ng`)
   - Follow DNS configuration instructions
   - Vercel automatically provisions SSL certificates

#### Vercel-Specific Features

- **Automatic Deployments:** Every push to main branch triggers a deployment
- **Preview Deployments:** Pull requests get unique preview URLs
- **Edge Network:** Global CDN for fast content delivery
- **Analytics:** Built-in performance monitoring
- **Zero Configuration:** Works out of the box with Next.js

---

### Netlify Deployment

Netlify is another excellent option for static site hosting.

#### Deployment Steps

1. **Connect Repository**
   - Go to [https://netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository

2. **Configure Build Settings**
   - Base directory: `clnl-website`
   - Build command: `npm run build`
   - Publish directory: `clnl-website/out`

3. **Set Environment Variables**
   - Go to Site Settings > Environment Variables
   - Add all required variables from the [Environment Configuration](#environment-configuration) section

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://random-name.netlify.app`

5. **Configure Custom Domain**
   - Go to Site Settings > Domain Management
   - Add your custom domain
   - Configure DNS settings as instructed
   - SSL certificate is automatically provisioned

#### Netlify-Specific Configuration

Create a `netlify.toml` file in the `clnl-website` directory:

```toml
[build]
  base = "clnl-website"
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

---

### Other Static Hosting

The website can be deployed to any static hosting provider that supports Next.js static exports.

#### Build for Static Hosting

1. **Build the project:**
   ```bash
   cd clnl-website
   npm run build
   ```

2. **Output location:**
   - The static files will be in `clnl-website/out/`
   - This directory contains all HTML, CSS, JS, and assets

3. **Upload to hosting:**
   - Upload the contents of the `out` directory to your hosting provider
   - Configure your web server to serve `index.html` for the root path

#### Recommended Hosting Providers

- **GitHub Pages:** Free, good for open-source projects
- **AWS S3 + CloudFront:** Scalable, enterprise-grade
- **DigitalOcean App Platform:** Simple, affordable
- **Cloudflare Pages:** Fast, global CDN included
- **Firebase Hosting:** Google infrastructure, easy setup

#### Server Configuration

If using a custom server, ensure:
- Serve `index.html` for the root path (`/`)
- Configure proper MIME types for all file extensions
- Enable gzip/brotli compression
- Set appropriate cache headers:
  - Static assets: `Cache-Control: public, max-age=31536000, immutable`
  - HTML files: `Cache-Control: public, max-age=0, must-revalidate`

---

## Post-Deployment Checklist

After deploying, verify the following:

### Functionality Tests

- [ ] Homepage loads correctly
- [ ] All sections are visible and properly styled
- [ ] Navigation menu works (desktop and mobile)
- [ ] "Request a Quote" button opens the quote modal
- [ ] Quote form submits successfully to Formspree
- [ ] "Track Your Shipment" button opens the tracking modal
- [ ] Tracking form redirects to the tracking portal
- [ ] Contact form submits successfully to Formspree
- [ ] All internal links work correctly
- [ ] Footer links are functional

### Performance Tests

- [ ] Run Lighthouse audit (target: 80+ score)
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Verify images are loading with lazy loading
- [ ] Test page load speed on mobile and desktop
- [ ] Verify no console errors in browser

### SEO Tests

- [ ] Verify meta tags are present on all pages
- [ ] Check structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph tags for social sharing
- [ ] Check robots.txt is accessible

### Accessibility Tests

- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Run axe DevTools accessibility scan
- [ ] Verify all images have alt text

### Cross-Browser Tests

- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Test on mobile browsers (iOS Safari, Chrome Mobile)

### Mobile Tests

- [ ] Test on various screen sizes (320px, 375px, 768px, 1024px, 1440px)
- [ ] Verify touch targets are at least 44x44px
- [ ] Test form inputs on mobile devices
- [ ] Verify no horizontal scrolling

### Analytics Tests

- [ ] Verify Google Analytics is tracking page views
- [ ] Check real-time reports in GA dashboard
- [ ] Verify form submission events are tracked (if configured)

---

## Troubleshooting

### Build Fails

**Problem:** Build fails with TypeScript errors

**Solution:**
```bash
npm run lint
npx tsc --noEmit
```
Fix any TypeScript errors before deploying.

---

**Problem:** Build fails with "Module not found"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

### Forms Not Working

**Problem:** Form submissions not reaching Formspree

**Solution:**
1. Verify environment variables are set correctly
2. Check Formspree dashboard for error logs
3. Ensure form IDs match exactly (no extra spaces)
4. Check browser console for CORS errors
5. Verify Formspree account is active and not over quota

---

**Problem:** Form validation not working

**Solution:**
1. Check browser console for JavaScript errors
2. Verify Zod schemas are correctly defined
3. Test with different input values

---

### Performance Issues

**Problem:** Slow page load times

**Solution:**
1. Run Lighthouse audit to identify bottlenecks
2. Verify images are optimized and using WebP format
3. Check if lazy loading is working for below-fold images
4. Ensure CDN is properly configured
5. Verify compression (gzip/brotli) is enabled

---

**Problem:** Large bundle size

**Solution:**
1. Analyze bundle with `npm run build`
2. Check for duplicate dependencies
3. Ensure tree-shaking is working
4. Consider code splitting for large components

---

### Environment Variables Not Working

**Problem:** Environment variables are undefined in production

**Solution:**
1. Verify all variables are prefixed with `NEXT_PUBLIC_`
2. Rebuild and redeploy after adding variables
3. Check hosting platform's environment variable settings
4. Ensure variables are set for the correct environment (production)

---

### Domain Configuration Issues

**Problem:** Custom domain not working

**Solution:**
1. Verify DNS records are correctly configured
2. Wait for DNS propagation (can take up to 48 hours)
3. Check SSL certificate status
4. Ensure domain is added in hosting platform settings

---

### Google Analytics Not Tracking

**Problem:** No data appearing in Google Analytics

**Solution:**
1. Verify `NEXT_PUBLIC_GA_ID` is set correctly
2. Check if ad blockers are interfering (test in incognito mode)
3. Wait 24-48 hours for data to appear in reports
4. Use Real-time reports for immediate verification
5. Check browser console for GA errors

---

## Support and Maintenance

### Regular Maintenance Tasks

- **Weekly:** Check form submissions in Formspree dashboard
- **Monthly:** Review Google Analytics reports
- **Monthly:** Run Lighthouse audits
- **Quarterly:** Update dependencies (`npm update`)
- **Quarterly:** Review and update content

### Getting Help

- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [https://vercel.com/support](https://vercel.com/support)
- **Netlify Support:** [https://www.netlify.com/support/](https://www.netlify.com/support/)
- **Formspree Support:** [https://help.formspree.io](https://help.formspree.io)

---

## Security Considerations

### Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Environment Variables**
   - Never commit `.env.local` to Git
   - Use different Formspree forms for staging/production
   - Rotate API keys periodically

3. **Content Security**
   - Hosting platforms automatically provide SSL certificates
   - Enable HTTPS-only mode in hosting settings
   - Configure security headers (CSP, X-Frame-Options, etc.)

4. **Monitoring**
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Configure error tracking (Sentry, LogRocket)
   - Monitor form submission patterns for spam

---

## Conclusion

This deployment guide covers the complete process of deploying the CLNL website to production. Follow the steps carefully, and refer to the troubleshooting section if you encounter any issues.

For additional support or questions, consult the official documentation for each service or contact your development team.

**Happy Deploying! 🚀**
