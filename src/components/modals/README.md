# Modal Components

This directory contains modal components for the CLNL website with Formspree integration.

## Components

### QuoteRequestModal

A modal that displays a multi-step quote request form with Formspree integration.

**Features:**
- Multi-step form with progress indicator
- Formspree integration for form submission
- Success/error handling
- Focus management and keyboard navigation
- Smooth animations

**Usage:**

```tsx
import { QuoteRequestModal } from '@/components/modals';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Request a Quote
      </button>

      <QuoteRequestModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID}
        initialServiceType="freight" // Optional: pre-select a service
      />
    </>
  );
}
```

### TrackingModal

A modal that allows users to track their shipments by redirecting to an external tracking portal.

**Features:**
- Tracking number validation
- Redirects to external tracking portal
- Contact information for support
- Focus management and keyboard navigation
- Smooth animations

**Usage:**

```tsx
import { TrackingModal } from '@/components/modals';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Track Your Shipment
      </button>

      <TrackingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        trackingPortalUrl={process.env.NEXT_PUBLIC_TRACKING_PORTAL_URL}
      />
    </>
  );
}
```

## Environment Variables

Make sure to set the following environment variables:

```env
NEXT_PUBLIC_FORMSPREE_QUOTE_ID=your_quote_form_id
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
NEXT_PUBLIC_TRACKING_PORTAL_URL=https://track.clnl.com.ng
```

## Formspree Setup

1. Create a Formspree account at https://formspree.io
2. Create two forms:
   - Quote Request Form
   - Contact Form
3. Copy the form IDs and add them to your environment variables
4. Configure form settings in Formspree dashboard (spam protection, notifications, etc.)

## Accessibility

All modals include:
- Proper ARIA attributes
- Focus management (focus trap)
- Keyboard navigation (Tab, Shift+Tab, Escape)
- Screen reader support
- Focus restoration when closed

## Animations

Modals use CSS animations defined in `globals.css`:
- `fadeIn`: Overlay fade-in effect
- `slideUp`: Modal slide-up effect
