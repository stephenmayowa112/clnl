// Core data models for CLNL website

export interface ServiceDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  offerings: string[];
  products?: string[];
  keywords: string[];
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  contact: {
    address: string;
    phone: string[];
    email: string[];
    website?: string;
  };
}

export interface QuoteRequest {
  serviceType: 'agro-export' | 'freight' | 'customs' | 'logistics' | 'facilities';
  contactName: string;
  email: string;
  phone: string;
  company: string;
  details: string;
  urgency: 'standard' | 'urgent';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface TrackingQuery {
  trackingNumber: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  structuredData: object;
}

export interface FAQItem {
  question: string;
  answer: string;
}
