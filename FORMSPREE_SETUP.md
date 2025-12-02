# Formspree Setup Guide

This guide provides step-by-step instructions for setting up Formspree to handle form submissions for the CLNL website.

## What is Formspree?

Formspree is a form backend service that handles form submissions without requiring you to build a backend server. It receives form data, validates it, sends email notifications, and provides a dashboard to manage submissions.

## Why Formspree?

- **No Backend Required:** Works with static sites
- **Spam Protection:** Built-in spam filtering and reCAPTCHA
- **Email Notifications:** Automatic email delivery
- **Easy Integration:** Simple API, no complex setup
- **Reliable:** Enterprise-grade infrastructure
- **Affordable:** Free tier available, paid plans start at $10/month

## Setup Instructions

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Sign Up"** in the top right corner
3. Choose a sign-up method:
   - Sign up with Google
   - Sign up with GitHub
   - Sign up with email
4. Complete the registration process
5. Verify your email address (if using email sign-up)

### Step 2: Create the Quote Request Form

1. **Log in to your Formspree dashboard**
2. Click **"New Form"** button
3. **Configure the form:**
   - **Form Name:** `CLNL Quote Requests`
   - **Form Endpoint:** This will be auto-generated (e.g., `https://formspree.io/f/xxxxxxxxxxxxx`)

4. **Configure Email Settings:**
   - Click on the form you just created
   - Go to **"Settings"** tab
   - Under **"Email Notifications"**:
     - Add CLNL business email(s) that should receive quote requests
     - Example: `quotes@clnl.com.ng`, `sales@clnl.com.ng`
   - Configure email subject line (optional):
     - Example: `New Quote Request from CLNL Website`

5. **Enable Spam Protection (Recommended):**
   - In Settings, go to **"Spam Protection"**
   - Enable **reCAPTCHA** (recommended)
   - Or enable **Honeypot** for invisible spam protection

6. **Configure Auto-Response (Optional):**
   - In Settings, go to **"Auto-Response"**
   - Enable auto-response
   - Customize the thank you message:
     ```
     Thank you for your quote request!
     
     We have received your inquiry and will get back to you within 24 hours.
     
     Best regards,
     Complete Logistics Network Limited
     ```

7. **Copy the Form ID:**
   - The Form ID is the last part of the endpoint URL
   - Example: If endpoint is `https://formspree.io/f/mrbgabcd`, the ID is `mrbgabcd`
   - Copy this ID - you'll need it for the environment variable

### Step 3: Create the Contact Form

1. Click **"New Form"** again
2. **Configure the form:**
   - **Form Name:** `CLNL Contact Form`

3. **Configure Email Settings:**
   - Add CLNL business email(s) for general inquiries
   - Example: `info@clnl.com.ng`, `contact@clnl.com.ng`
   - Configure email subject line:
     - Example: `New Contact Form Submission from CLNL Website`

4. **Enable Spam Protection:**
   - Same as Step 2 above

5. **Configure Auto-Response (Optional):**
   - Customize message for contact form:
     ```
     Thank you for contacting us!
     
     We have received your message and will respond as soon as possible.
     
     Best regards,
     Complete Logistics Network Limited
     ```

6. **Copy the Form ID:**
   - Copy the Form ID from the endpoint URL

### Step 4: Configure Environment Variables

1. **For Local Development:**
   - Open `.env.local` in your project root
   - Add the Form IDs:
     ```bash
     NEXT_PUBLIC_FORMSPREE_QUOTE_ID=mrbgabcd
     NEXT_PUBLIC_FORMSPREE_CONTACT_ID=mrbgefgh
     ```

2. **For Production (Vercel):**
   - Go to your Vercel project dashboard
   - Navigate to **Settings** > **Environment Variables**
   - Add both variables:
     - Name: `NEXT_PUBLIC_FORMSPREE_QUOTE_ID`
     - Value: Your quote form ID
     - Environment: Production, Preview, Development
   - Add second variable:
     - Name: `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`
     - Value: Your contact form ID
     - Environment: Production, Preview, Development
   - Redeploy your site for changes to take effect

3. **For Production (Netlify):**
   - Go to your Netlify site dashboard
   - Navigate to **Site Settings** > **Environment Variables**
   - Click **"Add a variable"**
   - Add both variables with their respective values
   - Redeploy your site

### Step 5: Test the Forms

1. **Deploy your website** with the new environment variables
2. **Test the Quote Form:**
   - Go to your website
   - Click "Request a Quote"
   - Fill out the form with test data
   - Submit the form
   - Check:
     - ✅ Success message appears on the website
     - ✅ Submission appears in Formspree dashboard
     - ✅ Email notification is received

3. **Test the Contact Form:**
   - Scroll to the Contact section
   - Fill out the contact form
   - Submit the form
   - Check:
     - ✅ Success message appears
     - ✅ Submission appears in Formspree dashboard
     - ✅ Email notification is received

4. **Test Spam Protection:**
   - Try submitting with obvious spam content
   - Verify it's blocked or flagged

## Form Field Mapping

### Quote Request Form

The website sends these fields to Formspree:

| Field Name | Type | Description |
|------------|------|-------------|
| `serviceType` | String | Selected service (agro-export, freight, customs, logistics, facilities) |
| `contactName` | String | Customer's full name |
| `email` | String | Customer's email address |
| `phone` | String | Customer's phone number |
| `company` | String | Customer's company name |
| `details` | String | Additional details about the request |
| `urgency` | String | Request urgency (standard, urgent) |

### Contact Form

The website sends these fields to Formspree:

| Field Name | Type | Description |
|------------|------|-------------|
| `name` | String | Sender's full name |
| `email` | String | Sender's email address |
| `phone` | String | Sender's phone number |
| `subject` | String | Message subject |
| `message` | String | Message content |

## Formspree Dashboard Features

### Viewing Submissions

1. Log in to Formspree dashboard
2. Click on a form to view submissions
3. See all submissions with:
   - Submission date and time
   - All form fields
   - Spam score
   - IP address (if enabled)

### Exporting Data

1. Go to form dashboard
2. Click **"Export"**
3. Choose format (CSV, JSON)
4. Download submissions for record-keeping

### Managing Spam

1. Review submissions marked as spam
2. Mark false positives as "Not Spam"
3. Adjust spam protection settings if needed

### Email Templates

Customize email notifications:
1. Go to form Settings
2. Navigate to "Email Notifications"
3. Customize email template with variables:
   - `{{field_name}}` - Insert form field value
   - `{{submission_date}}` - Insert submission date

Example template:
```
New Quote Request Received

Service Type: {{serviceType}}
Name: {{contactName}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}
Urgency: {{urgency}}

Details:
{{details}}

---
Submitted on {{submission_date}}
```

## Pricing Plans

### Free Plan
- **50 submissions/month**
- Email notifications
- Basic spam filtering
- Suitable for: Testing, low-traffic sites

### Gold Plan ($10/month)
- **1,000 submissions/month**
- Everything in Free
- Advanced spam filtering
- File uploads
- Custom email templates
- Suitable for: Small to medium businesses

### Platinum Plan ($40/month)
- **10,000 submissions/month**
- Everything in Gold
- Priority support
- Custom integrations
- Suitable for: High-traffic sites, enterprises

**Recommendation for CLNL:** Start with the Free plan for testing. Upgrade to Gold plan ($10/month) before launch to handle expected traffic.

## Troubleshooting

### Forms Not Submitting

**Problem:** Form submission fails with error

**Solutions:**
1. Check browser console for errors
2. Verify Form IDs are correct in environment variables
3. Ensure environment variables are prefixed with `NEXT_PUBLIC_`
4. Rebuild and redeploy after changing environment variables
5. Check Formspree dashboard for error logs

### Not Receiving Emails

**Problem:** Submissions appear in dashboard but no emails received

**Solutions:**
1. Check spam/junk folder
2. Verify email addresses in Formspree settings
3. Ensure email notifications are enabled
4. Check email delivery logs in Formspree dashboard
5. Try adding a different email address

### Spam Issues

**Problem:** Receiving too much spam

**Solutions:**
1. Enable reCAPTCHA in Formspree settings
2. Enable Honeypot protection
3. Adjust spam sensitivity settings
4. Review and block specific IP addresses
5. Consider upgrading to paid plan for better spam filtering

### Rate Limiting

**Problem:** "Too many requests" error

**Solutions:**
1. Check if you've exceeded monthly submission limit
2. Upgrade to higher plan if needed
3. Implement client-side rate limiting
4. Contact Formspree support for assistance

## Security Best Practices

1. **Never expose Form IDs in public repositories**
   - Use environment variables
   - Add `.env.local` to `.gitignore`

2. **Enable spam protection**
   - Use reCAPTCHA or Honeypot
   - Review spam submissions regularly

3. **Validate on client-side**
   - Use Zod schemas (already implemented)
   - Provide clear error messages

4. **Monitor submissions**
   - Check dashboard regularly
   - Set up email notifications
   - Export data for backup

5. **Use HTTPS only**
   - Formspree requires HTTPS in production
   - Hosting platforms provide SSL automatically

## Support Resources

- **Formspree Documentation:** [https://help.formspree.io](https://help.formspree.io)
- **Formspree Support:** [support@formspree.io](mailto:support@formspree.io)
- **Status Page:** [https://status.formspree.io](https://status.formspree.io)

## Next Steps

After setting up Formspree:

1. ✅ Test both forms thoroughly
2. ✅ Configure email notifications
3. ✅ Enable spam protection
4. ✅ Set up auto-responses
5. ✅ Monitor submissions for first few days
6. ✅ Upgrade plan if needed based on traffic
7. ✅ Document Form IDs securely for team reference

---

**Questions?** Refer to the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for more information or contact your development team.
