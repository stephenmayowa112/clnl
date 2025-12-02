# Pre-Deployment Checklist

Use this checklist to ensure everything is ready before deploying the CLNL website to production.

---

## ✅ Code Quality & Testing

- [x] All unit tests passing (70/70)
- [x] No TypeScript errors
- [x] Production build successful
- [x] Static export working
- [x] Critical linting errors fixed
- [x] Code follows best practices
- [x] No console errors in browser

---

## ⚠️ Environment Configuration

- [ ] Formspree account created
- [ ] Quote form created in Formspree
- [ ] Contact form created in Formspree
- [ ] Form IDs documented
- [ ] `.env.local` file created with all variables
- [ ] Environment variables added to hosting platform
- [ ] Tracking portal URL configured (if available)

**Required Environment Variables:**
```
NEXT_PUBLIC_FORMSPREE_QUOTE_ID=
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=
NEXT_PUBLIC_TRACKING_PORTAL_URL=
NEXT_PUBLIC_SITE_URL=
```

---

## ⚠️ Assets & Content

- [ ] CLNL logo added to `/public/logo.svg`
- [ ] Hero background images added (if needed)
- [ ] All images optimized (compressed)
- [ ] Favicon added
- [ ] Company contact information verified in `constants.ts`
- [ ] All service descriptions reviewed
- [ ] All industry information reviewed

---

## ⚠️ Hosting Setup

- [ ] Hosting platform account created (Vercel/Netlify)
- [ ] Git repository connected
- [ ] Build settings configured
- [ ] Environment variables added to hosting platform
- [ ] Custom domain configured (optional)
- [ ] SSL certificate enabled (automatic)
- [ ] DNS records configured (if using custom domain)

---

## 📋 Post-Deployment Testing

### Forms Testing
- [ ] Submit quote request form
- [ ] Verify email received from Formspree
- [ ] Submit contact form
- [ ] Verify email received from Formspree
- [ ] Test tracking form redirect
- [ ] Test form validation (try invalid inputs)

### Navigation Testing
- [ ] Click all navigation links
- [ ] Test smooth scrolling
- [ ] Test mobile hamburger menu
- [ ] Test services dropdown
- [ ] Test all CTA buttons
- [ ] Verify sticky header works

### Responsive Testing
- [ ] Test on mobile device (real device preferred)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify no horizontal scrolling
- [ ] Check touch targets on mobile
- [ ] Verify images scale properly

### Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on iOS Safari
- [ ] Test on Chrome Mobile

### Performance Testing
- [ ] Run Lighthouse audit (target: 80+ all categories)
- [ ] Check First Contentful Paint (< 1.5s)
- [ ] Check Largest Contentful Paint (< 2.5s)
- [ ] Check Cumulative Layout Shift (< 0.1)
- [ ] Verify images lazy load
- [ ] Check page load time

### SEO Testing
- [ ] Verify page title displays correctly
- [ ] Check meta description
- [ ] Verify Open Graph tags (share on social media)
- [ ] Check heading hierarchy (h1 → h2 → h3)
- [ ] Verify structured data (use Google Rich Results Test)
- [ ] Submit sitemap to Google Search Console

### Accessibility Testing
- [ ] Test keyboard navigation (Tab key)
- [ ] Test with screen reader (if possible)
- [ ] Verify focus indicators visible
- [ ] Check color contrast
- [ ] Verify all images have alt text
- [ ] Test form labels and error messages

---

## 🔒 Security Checklist

- [x] HTTPS enabled (automatic with Vercel/Netlify)
- [x] Environment variables not in code
- [ ] Formspree spam protection enabled
- [x] No sensitive data in client-side code
- [x] Content Security Policy headers configured
- [ ] Dependencies up to date (`npm audit`)

---

## 📊 Monitoring Setup (Optional but Recommended)

- [ ] Google Analytics configured
- [ ] Google Search Console set up
- [ ] Error tracking configured (Sentry)
- [ ] Uptime monitoring configured
- [ ] Performance monitoring enabled

---

## 📝 Documentation

- [x] QA Test Report created
- [x] Deployment Guide created
- [x] Testing Summary created
- [x] Environment variables documented
- [ ] Deployment credentials documented (secure location)
- [ ] Formspree login credentials saved (secure location)
- [ ] Hosting platform credentials saved (secure location)

---

## 🚀 Deployment Steps

1. **Pre-Deployment**
   - [ ] Complete all items in "Environment Configuration"
   - [ ] Complete all items in "Assets & Content"
   - [ ] Complete all items in "Hosting Setup"

2. **Deploy**
   - [ ] Push code to Git repository
   - [ ] Trigger deployment on hosting platform
   - [ ] Wait for build to complete
   - [ ] Verify deployment successful

3. **Post-Deployment**
   - [ ] Complete all items in "Post-Deployment Testing"
   - [ ] Complete all items in "SEO Testing"
   - [ ] Complete all items in "Accessibility Testing"
   - [ ] Complete all items in "Security Checklist"

4. **Go Live**
   - [ ] Announce website launch
   - [ ] Monitor for errors
   - [ ] Check analytics tracking
   - [ ] Respond to any issues

---

## 🆘 Troubleshooting

### Build Fails
```bash
cd clnl-website
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Forms Not Working
- Check Formspree IDs in environment variables
- Verify Formspree account is active
- Check browser console for errors
- Test with Formspree dashboard

### Images Not Loading
- Verify images exist in `/public` folder
- Check image paths in code
- Ensure images are committed to Git
- Clear browser cache

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+R)
- Check build logs for CSS errors
- Verify Tailwind config is correct

---

## 📞 Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Formspree Help:** https://help.formspree.io
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## ✅ Final Sign-Off

Before going live, confirm:

- [ ] All automated tests passing
- [ ] All manual tests completed
- [ ] Forms working in production
- [ ] Lighthouse score 80+ (all categories)
- [ ] Tested on multiple browsers
- [ ] Tested on multiple devices
- [ ] No critical errors in console
- [ ] Analytics tracking verified
- [ ] Team has reviewed the site
- [ ] Client has approved the site

**Deployment Date:** _______________

**Deployed By:** _______________

**Approved By:** _______________

---

**Last Updated:** December 2, 2025
