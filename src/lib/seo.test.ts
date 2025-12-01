import { describe, it, expect } from 'vitest';
import { companyInfo, services } from './constants';
import { generateOrganizationSchema, generateServicesSchema, generateFAQSchema, generateBreadcrumbSchema } from './seo';

describe('SEO Utility Functions', () => {
  describe('generateOrganizationSchema', () => {
    it('should generate valid organization schema structure', () => {
      const siteUrl = 'https://clnl.com.ng';
      const organizationSchema = generateOrganizationSchema(siteUrl);

      expect(organizationSchema['@context']).toBe('https://schema.org');
      expect(organizationSchema['@type']).toBe('Organization');
      expect(organizationSchema.name).toBe(companyInfo.name);
      expect(organizationSchema.alternateName).toBe('CLNL');
      expect(organizationSchema.url).toBe(siteUrl);
      expect(organizationSchema.logo).toBe(`${siteUrl}/logo.png`);
      expect(organizationSchema.description).toBe(companyInfo.description);
      expect(organizationSchema.address['@type']).toBe('PostalAddress');
      expect(organizationSchema.address.addressLocality).toBe('Lagos');
      expect(organizationSchema.address.addressCountry).toBe('NG');
      expect(organizationSchema.contactPoint['@type']).toBe('ContactPoint');
      expect(organizationSchema.contactPoint.telephone).toBe(companyInfo.contact.phone[0]);
    });
  });

  describe('generateServicesSchema', () => {
    it('should generate valid service schema for each service', () => {
      const servicesSchema = generateServicesSchema();

      expect(servicesSchema.length).toBe(services.length);
      
      servicesSchema.forEach((schema, index) => {
        expect(schema['@context']).toBe('https://schema.org');
        expect(schema['@type']).toBe('Service');
        expect(schema.serviceType).toBe(services[index].name);
        expect(schema.provider['@type']).toBe('Organization');
        expect(schema.provider.name).toBe(companyInfo.name);
        expect(schema.description).toBe(services[index].description);
        expect(schema.areaServed['@type']).toBe('Country');
        expect(schema.areaServed.name).toBe('Nigeria');
      });
    });
  });

  describe('generateFAQSchema', () => {
    it('should generate valid FAQ schema structure', () => {
      const faqSchema = generateFAQSchema();

      expect(faqSchema['@context']).toBe('https://schema.org');
      expect(faqSchema['@type']).toBe('FAQPage');
      expect(faqSchema.mainEntity).toBeDefined();
      expect(Array.isArray(faqSchema.mainEntity)).toBe(true);
      expect(faqSchema.mainEntity.length).toBeGreaterThanOrEqual(5);

      faqSchema.mainEntity.forEach((item) => {
        expect(item['@type']).toBe('Question');
        expect(item.name).toBeTruthy();
        expect(item.acceptedAnswer['@type']).toBe('Answer');
        expect(item.acceptedAnswer.text).toBeTruthy();
        expect(item.acceptedAnswer.text.length).toBeGreaterThan(20);
      });
    });

    it('should include questions about all major services', () => {
      const faqSchema = generateFAQSchema();
      const questions = faqSchema.mainEntity.map(q => q.name);

      expect(questions.some(q => q.toLowerCase().includes('services'))).toBe(true);
      expect(questions.some(q => q.toLowerCase().includes('track'))).toBe(true);
      expect(questions.some(q => q.toLowerCase().includes('customs'))).toBe(true);
      expect(questions.some(q => q.toLowerCase().includes('agricultural') || q.toLowerCase().includes('export'))).toBe(true);
      expect(questions.some(q => q.toLowerCase().includes('warehousing'))).toBe(true);
    });
  });

  describe('generateBreadcrumbSchema', () => {
    it('should generate valid breadcrumb schema', () => {
      const siteUrl = 'https://clnl.com.ng';
      const items = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Freight Management', url: '/services/freight' },
      ];

      const breadcrumbSchema = generateBreadcrumbSchema(items, siteUrl);

      expect(breadcrumbSchema['@context']).toBe('https://schema.org');
      expect(breadcrumbSchema['@type']).toBe('BreadcrumbList');
      expect(breadcrumbSchema.itemListElement).toBeDefined();
      expect(breadcrumbSchema.itemListElement.length).toBe(3);

      breadcrumbSchema.itemListElement.forEach((item, index) => {
        expect(item['@type']).toBe('ListItem');
        expect(item.position).toBe(index + 1);
        expect(item.name).toBe(items[index].name);
        expect(item.item).toBe(`${siteUrl}${items[index].url}`);
      });
    });
  });
});
