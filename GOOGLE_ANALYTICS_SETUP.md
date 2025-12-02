# Google Analytics Setup Guide

This guide provides step-by-step instructions for setting up Google Analytics 4 (GA4) for the CLNL website.

## What is Google Analytics?

Google Analytics is a free web analytics service that tracks and reports website traffic, user behavior, and conversions. It helps you understand:

- How many people visit your website
- Where visitors come from (search engines, social media, direct, etc.)
- What pages they view
- How long they stay
- What devices they use
- What actions they take

## Why Use Google Analytics?

- **Free:** No cost for standard features
- **Comprehensive:** Detailed insights into user behavior
- **Industry Standard:** Most widely used analytics platform
- **Integration:** Works seamlessly with other Google services
- **Real-time Data:** See live visitor activity
- **Custom Reports:** Create reports tailored to your needs

## Prerequisites

- A Google account (Gmail)
- Admin access to the CLNL website
- Ability to modify environment variables in your hosting platform

## Setup Instructions

### Step 1: Create Google Analytics Account

1. **Go to Google Analytics:**
   - Visit [https://analytics.google.com](https://analytics.google.com)
   - Sign in with your Google account

2. **Start Setup:**
   - Click **"Start measuring"** button
   - If you already have an account, click **"Admin"** (gear icon) in the bottom left

3. **Create Account:**
   - Click **"Create Account"** (or **"+ Create"** > **"Account"**)
   - Enter account details:
     - **Account name:** `CLNL` or `Complete Logistics Network Limited`
     - Check the data sharing settings (recommended to keep defaults)
   - Click **"Next"**

### Step 2: Create Property

1. **Property Setup:**
   - **Property name:** `CLNL Website` or `CLNL Production`
   - **Reporting time zone:** Select your timezone (e.g., `(GMT+01:00) West Central Africa`)
   - **Currency:** Select your currency (e.g., `Nigerian Naira (₦)`)
   - Click **"Next"**

2. **Business Information:**
   - **Industry category:** Select `Transportation and Logistics`
   - **Business size:** Select appropriate size (e.g., `Small`, `Medium`, or `Large`)
   - Click **"Next"**

3. **Business Objectives:**
   - Select objectives that match your goals:
     - ✅ **Generate leads** (for quote requests)
     - ✅ **Examine user behavior** (understand how visitors use the site)
     - ✅ **Get baseline reports** (standard analytics)
   - Click **"Create"**

4. **Accept Terms:**
   - Review and accept the Google Analytics Terms of Service
   - Accept Data Processing Terms
   - Click **"I Accept"**

### Step 3: Set Up Data Stream

1. **Choose Platform:**
   - Select **"Web"** as the platform

2. **Configure Web Stream:**
   - **Website URL:** Enter your production URL
     - Example: `https://www.clnl.com.ng`
     - For testing: `http://localhost:3000` (you can add multiple streams)
   - **Stream name:** `CLNL Website - Production`
   - **Enhanced measurement:** Leave enabled (recommended)
     - This automatically tracks:
       - Page views
       - Scrolls
       - Outbound clicks
       - Site search
       - Video engagement
       - File downloads
   - Click **"Create stream"**

3. **Get Measurement ID:**
   - After creating the stream, you'll see the **Web stream details**
   - Find the **Measurement ID** (format: `G-XXXXXXXXXX`)
   - **Copy this ID** - you'll need it for configuration
   - Example: `G-ABC123XYZ`

### Step 4: Configure Environment Variables

#### For Local Development

1. Open `.env.local` in your project root
2. Add the Measurement ID:
   ```bash
   NEXT_PUBLIC_GA_ID=G-ABC123XYZ
   ```
3. Save the file
4. Restart your development server

#### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Click **"Add New"**
4. Add the variable:
   - **Name:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-ABC123XYZ` (your actual Measurement ID)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **"Save"**
6. Redeploy your site:
   - Go to **Deployments** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**

#### For Production (Netlify)

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** > **Environment Variables**
3. Click **"Add a variable"**
4. Add the variable:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-ABC123XYZ` (your actual Measurement ID)
5. Click **"Save"**
6. Trigger a new deployment:
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** > **"Deploy site"**

### Step 5: Verify Installation

#### Method 1: Real-time Reports (Immediate)

1. **Deploy your website** with the GA_ID configured
2. **Visit your website** in a browser
3. **Open Google Analytics:**
   - Go to [https://analytics.google.com](https://analytics.google.com)
   - Select your property (CLNL Website)
4. **Check Real-time Report:**
   - In the left sidebar, click **"Reports"** > **"Realtime"**
   - You should see:
     - Active users (should show "1" or more)
     - Page views
     - Events
     - User location
5. **Navigate around your website** and watch the real-time data update

#### Method 2: Browser Developer Tools

1. **Open your website**
2. **Open Developer Tools:**
   - Chrome/Edge: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - Firefox: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. **Go to Network tab**
4. **Filter by "analytics"** or "google-analytics"
5. **Refresh the page**
6. **Look for requests to:**
   - `www.google-analytics.com`
   - `analytics.google.com`
   - Should see requests with your Measurement ID

#### Method 3: Google Tag Assistant (Chrome Extension)

1. **Install Google Tag Assistant:**
   - Go to Chrome Web Store
   - Search for "Tag Assistant Legacy (by Google)"
   - Click "Add to Chrome"
2. **Use Tag Assistant:**
   - Visit your website
   - Click the Tag Assistant icon in Chrome toolbar
   - Click "Enable" and refresh the page
   - Should show Google Analytics tag is working

### Step 6: Configure Enhanced Tracking (Optional)

#### Track Form Submissions

The website can track when users submit forms. To enable:

1. **In Google Analytics:**
   - Go to **Admin** > **Data display** > **Events**
   - Click **"Create event"**
   - Create custom events for:
     - `quote_request_submitted`
     - `contact_form_submitted`

2. **In the website code** (already implemented):
   - Form submissions automatically trigger events
   - Events include relevant parameters (service type, etc.)

#### Set Up Conversions

1. **In Google Analytics:**
   - Go to **Admin** > **Data display** > **Conversions**
   - Click **"New conversion event"**
   - Add conversion events:
     - `quote_request_submitted` (primary conversion)
     - `contact_form_submitted`
   - These will now be tracked as conversions in reports

#### Configure Goals

1. **In Google Analytics:**
   - Go to **Admin** > **Data display** > **Conversions**
   - Review automatically tracked events
   - Mark important events as conversions

### Step 7: Set Up Custom Reports (Optional)

#### Create a Dashboard

1. **Go to Reports:**
   - Click **"Reports"** in left sidebar
   - Click **"Library"** at the bottom

2. **Create Custom Report:**
   - Click **"Create new report"**
   - Choose **"Blank"** or use a template
   - Add relevant metrics:
     - Page views
     - Users
     - Sessions
     - Bounce rate
     - Conversion rate
     - Form submissions

3. **Save and Share:**
   - Name your report (e.g., "CLNL Monthly Overview")
   - Save to your library
   - Share with team members if needed

## Understanding Key Metrics

### Users
- **Definition:** Number of unique visitors to your site
- **Use:** Understand your audience size

### Sessions
- **Definition:** A group of user interactions within a time frame
- **Use:** Understand how often people visit

### Page Views
- **Definition:** Total number of pages viewed
- **Use:** Understand content popularity

### Bounce Rate
- **Definition:** Percentage of single-page sessions
- **Use:** Identify pages that don't engage visitors

### Average Session Duration
- **Definition:** Average time users spend on your site
- **Use:** Measure engagement quality

### Conversions
- **Definition:** Completed goals (form submissions, etc.)
- **Use:** Measure business objectives

## Important Reports to Monitor

### 1. Acquisition Reports
**Location:** Reports > Acquisition > Traffic acquisition

**Shows:** Where your visitors come from
- Organic Search (Google, Bing)
- Direct (typed URL)
- Referral (other websites)
- Social (social media)
- Paid Search (ads)

**Action:** Focus marketing efforts on top-performing channels

### 2. Engagement Reports
**Location:** Reports > Engagement > Pages and screens

**Shows:** Most viewed pages and user engagement

**Action:** Identify popular content and optimize underperforming pages

### 3. Demographics Reports
**Location:** Reports > User > Demographics

**Shows:** User age, gender, interests, location

**Action:** Understand your audience better

### 4. Technology Reports
**Location:** Reports > Tech > Tech details

**Shows:** Devices, browsers, operating systems

**Action:** Ensure site works well on popular devices

### 5. Conversion Reports
**Location:** Reports > Engagement > Conversions

**Shows:** Form submissions and other conversions

**Action:** Track business goals and ROI

## Best Practices

### 1. Regular Monitoring
- Check analytics weekly
- Review monthly trends
- Set up email reports for key metrics

### 2. Set Up Alerts
1. Go to **Admin** > **Custom definitions** > **Custom alerts**
2. Create alerts for:
   - Sudden traffic drops
   - Spike in form submissions
   - High bounce rate on key pages

### 3. Privacy Compliance
- Add privacy policy to website
- Mention Google Analytics usage
- Provide opt-out option if required by law
- Consider cookie consent banner for EU visitors (GDPR)

### 4. Filter Internal Traffic
1. Go to **Admin** > **Data Settings** > **Data Filters**
2. Create filter to exclude:
   - Your office IP address
   - Development team IPs
   - Testing traffic

### 5. Link to Google Search Console
1. Go to **Admin** > **Product links** > **Search Console links**
2. Click **"Link"**
3. Select your Search Console property
4. This provides search query data in GA4

## Troubleshooting

### No Data Appearing

**Problem:** Real-time reports show no data

**Solutions:**
1. Verify Measurement ID is correct
2. Check environment variable is set correctly
3. Ensure variable is prefixed with `NEXT_PUBLIC_`
4. Rebuild and redeploy after adding variable
5. Clear browser cache and cookies
6. Disable ad blockers (they block GA)
7. Check browser console for errors
8. Wait 24-48 hours for data to appear in standard reports

### Data Looks Wrong

**Problem:** Metrics seem inaccurate

**Solutions:**
1. Check if internal traffic is filtered
2. Verify time zone settings
3. Check for duplicate tracking codes
4. Review data filters
5. Compare with server logs

### Tracking Not Working on Specific Pages

**Problem:** Some pages don't track

**Solutions:**
1. Check if GA code is in root layout (it should be)
2. Verify no JavaScript errors on those pages
3. Check if pages are client-side rendered
4. Test in incognito mode

## Advanced Features (Optional)

### User ID Tracking
Track logged-in users across devices (requires user authentication system)

### E-commerce Tracking
Track product views, add to cart, purchases (if you add e-commerce features)

### Custom Dimensions
Track custom data specific to your business

### Integration with Google Ads
Link GA4 with Google Ads for better campaign tracking

## Data Retention

- **Default:** 2 months for user-level data
- **Maximum:** 14 months for user-level data
- **Aggregate data:** Retained indefinitely

To change:
1. Go to **Admin** > **Data Settings** > **Data Retention**
2. Select retention period
3. Click **"Save"**

## Exporting Data

### Export Reports
1. Open any report
2. Click **"Share"** icon (top right)
3. Choose format:
   - PDF
   - CSV
   - Google Sheets

### API Access
For advanced users, use Google Analytics Data API to programmatically access data

## Support Resources

- **Google Analytics Help:** [https://support.google.com/analytics](https://support.google.com/analytics)
- **GA4 Documentation:** [https://developers.google.com/analytics/devguides/collection/ga4](https://developers.google.com/analytics/devguides/collection/ga4)
- **Google Analytics Academy:** Free courses at [https://analytics.google.com/analytics/academy/](https://analytics.google.com/analytics/academy/)
- **Community Forum:** [https://support.google.com/analytics/community](https://support.google.com/analytics/community)

## Next Steps

After setting up Google Analytics:

1. ✅ Verify tracking is working (real-time reports)
2. ✅ Set up conversions for form submissions
3. ✅ Create custom dashboard for key metrics
4. ✅ Link to Google Search Console
5. ✅ Set up email reports
6. ✅ Filter internal traffic
7. ✅ Add privacy policy mention
8. ✅ Schedule weekly review of analytics data

## Recommended Weekly Review Checklist

- [ ] Check total users and sessions
- [ ] Review top pages
- [ ] Check traffic sources
- [ ] Monitor conversion rate
- [ ] Review bounce rate
- [ ] Check mobile vs desktop traffic
- [ ] Identify any unusual patterns
- [ ] Export data for monthly report

---

**Questions?** Refer to the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for more information or contact your development team.
