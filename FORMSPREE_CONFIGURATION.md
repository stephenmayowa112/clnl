# Formspree Configuration Guide

This guide will help you configure form submissions to be sent to `info@completelogisticsnetwork.com`

## Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up using the email: `info@completelogisticsnetwork.com`
3. Verify your email address

## Step 2: Create Forms

### Create Quote Request Form
1. In your Formspree dashboard, click "New Form"
2. Name it: "CLNL Quote Requests"
3. Copy the Form ID (looks like: `abc123xyz`)

### Create Contact Form
1. Click "New Form" again
2. Name it: "CLNL Contact Form"
3. Copy the Form ID

## Step 3: Configure Environment Variables

1. In the `clnl-website` folder, create a file named `.env.local`
2. Add the following content (replace with your actual Form IDs):

```
# Formspree Configuration
NEXT_PUBLIC_FORMSPREE_QUOTE_ID=your_quote_form_id_here
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.completelogisticsnetwork.com
NEXT_PUBLIC_TRACKING_PORTAL_URL=https://track.completelogisticsnetwork.com
```

3. Save the file

## Step 4: Restart Development Server

After creating the `.env.local` file:
1. Stop the development server (Ctrl+C)
2. Start it again: `npm run dev`

## Step 5: Test the Forms

1. Go to your website
2. Fill out the Quote Request form
3. Fill out the Contact form
4. Check `info@completelogisticsnetwork.com` for the submissions

## Formspree Features

- **Email Notifications**: All submissions will be sent to `info@completelogisticsnetwork.com`
- **Spam Protection**: Built-in spam filtering
- **Submission Archive**: View all submissions in your Formspree dashboard
- **Free Tier**: 50 submissions per month (upgrade for more)

## Troubleshooting

If forms aren't working:
1. Check that `.env.local` file exists and has correct Form IDs
2. Verify Form IDs in Formspree dashboard
3. Check browser console for errors
4. Ensure development server was restarted after creating `.env.local`

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):
1. Add the environment variables in your hosting platform's dashboard
2. Use the same Form IDs from Formspree
3. Update `NEXT_PUBLIC_SITE_URL` to your production domain
