/**
 * SEO utility functions and schema generators
 */

import { companyInfo, services } from './constants';

/**
 * Generate organization JSON-LD schema
 */
export function generateOrganizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    alternateName: 'CLNL',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: companyInfo.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.contact.phone[0],
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: 'English',
    },
    sameAs: [],
  };
}

/**
 * Generate services JSON-LD schema
 */
export function generateServicesSchema() {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: companyInfo.name,
    },
    description: service.description,
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
  }));
}

/**
 * Generate FAQ JSON-LD schema
 */
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does CLNL provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${companyInfo.name} provides comprehensive logistics solutions including agro exports, freight management (air, sea, and land), customs clearing, logistics & warehousing, and facilities management services across Nigeria.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How can I track my shipment with CLNL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can track your shipment by clicking the "Track Your Shipment" button on our homepage and entering your tracking number. Our system provides real-time updates on your cargo\'s location and status.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does CLNL handle customs clearance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, CLNL provides expert customs brokerage services including import/export clearance, HS code classification, regulatory compliance with NAFDAC, SON, and Quarantine, duty assessment, and documentation processing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What agricultural products does CLNL export?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CLNL exports a wide range of Nigerian agricultural products including cocoa beans, sesame seeds, cashew nuts, ginger, hibiscus, and various spices & grains to global markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does CLNL offer warehousing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, CLNL provides secure warehousing facilities with 24/7 security, CCTV monitoring, access control, standard and temperature-controlled storage options, and professional inventory management services.',
        },
      },
    ],
  };
}

/**
 * Generate breadcrumb JSON-LD schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
