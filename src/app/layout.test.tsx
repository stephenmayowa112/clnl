import { describe, it, expect, vi } from 'vitest';

// Mock Next.js font imports
vi.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
  }),
}));

import { metadata } from './layout';
import { companyInfo, services } from '@/lib/constants';

describe('SEO Metadata', () => {
  it('should have proper title configuration', () => {
    expect(metadata.title).toBeDefined();
    if (typeof metadata.title === 'object' && metadata.title !== null) {
      expect(metadata.title.default).toContain(companyInfo.name);
      expect(metadata.title.default).toContain('CLNL');
      expect(metadata.title.template).toContain('%s');
      expect(metadata.title.template).toContain(companyInfo.name);
    }
  });

  it('should have a comprehensive description', () => {
    expect(metadata.description).toBe(companyInfo.description);
    expect(metadata.description).toBeTruthy();
    expect(metadata.description!.length).toBeGreaterThan(50);
  });

  it('should include relevant SEO keywords', () => {
    expect(metadata.keywords).toBeDefined();
    expect(Array.isArray(metadata.keywords)).toBe(true);
    
    const keywords = metadata.keywords as string[];
    expect(keywords.length).toBeGreaterThan(5);
    expect(keywords).toContain('logistics company Nigeria');
    expect(keywords).toContain('freight forwarding Lagos');
    expect(keywords).toContain('customs clearing agent');
  });

  it('should have proper Open Graph metadata', () => {
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.type).toBe('website');
    expect(metadata.openGraph?.locale).toBe('en_NG');
    expect(metadata.openGraph?.siteName).toBe(companyInfo.name);
    expect(metadata.openGraph?.title).toContain(companyInfo.name);
    expect(metadata.openGraph?.description).toBe(companyInfo.description);
    expect(metadata.openGraph?.images).toBeDefined();
    expect(Array.isArray(metadata.openGraph?.images)).toBe(true);
  });

  it('should have Twitter card metadata', () => {
    expect(metadata.twitter).toBeDefined();
    expect(metadata.twitter?.card).toBe('summary_large_image');
    expect(metadata.twitter?.title).toContain(companyInfo.name);
    expect(metadata.twitter?.description).toBe(companyInfo.description);
    expect(metadata.twitter?.images).toBeDefined();
  });

  it('should have proper robots configuration', () => {
    expect(metadata.robots).toBeDefined();
    expect(metadata.robots?.index).toBe(true);
    expect(metadata.robots?.follow).toBe(true);
    expect(metadata.robots?.googleBot).toBeDefined();
    expect(metadata.robots?.googleBot?.index).toBe(true);
    expect(metadata.robots?.googleBot?.follow).toBe(true);
  });

  it('should have author and publisher information', () => {
    expect(metadata.authors).toBeDefined();
    expect(metadata.creator).toBe(companyInfo.name);
    expect(metadata.publisher).toBe(companyInfo.name);
  });
});
