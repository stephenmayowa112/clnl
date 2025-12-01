/**
 * Zod validation schemas for forms
 */

import { z } from 'zod';

// Quote Request Form Schema
export const quoteRequestSchema = z.object({
  serviceType: z.enum(['agro-export', 'freight', 'customs', 'logistics', 'facilities'], {
    message: 'Please select a service type',
  }),
  contactName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  details: z.string().min(10, 'Please provide more details about your request'),
  urgency: z.enum(['standard', 'urgent']),
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Tracking Query Schema
export const trackingQuerySchema = z.object({
  trackingNumber: z
    .string()
    .min(5, 'Tracking number must be at least 5 characters')
    .regex(/^[A-Z0-9-]+$/i, 'Tracking number can only contain letters, numbers, and hyphens'),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type TrackingQueryInput = z.infer<typeof trackingQuerySchema>;
