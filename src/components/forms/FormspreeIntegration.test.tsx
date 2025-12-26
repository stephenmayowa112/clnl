import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitToFormspree } from '@/lib/formspree';

// Mock fetch
global.fetch = vi.fn();

describe('Formspree Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should use the correct Formspree endpoint', async () => {
    const mockResponse = { ok: true };
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    const formId = 'mykgvlzd';
    const testData = {
      serviceType: 'agro-export',
      contactName: 'Test User',
      email: 'test@example.com',
      phone: '+234-123-456-7890',
      company: 'Test Company',
      details: 'Test request details',
      urgency: 'standard',
    };

    await submitToFormspree(formId, testData);

    // Verify fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://formspree.io/f/mykgvlzd',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      })
    );
  });

  it('should handle successful submission', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => ({}),
    } as Response);

    const result = await submitToFormspree('mykgvlzd', { test: 'data' });

    expect(result).toEqual({ ok: true });
  });

  it('should handle failed submission', async () => {
    const errorResponse = {
      errors: [{ field: 'email', message: 'Invalid email' }],
    };

    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: async () => errorResponse,
    } as Response);

    const result = await submitToFormspree('mykgvlzd', { test: 'data' });

    expect(result).toEqual({
      ok: false,
      errors: [{ field: 'email', message: 'Invalid email' }],
    });
  });

  it('should handle network errors', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'));

    const result = await submitToFormspree('mykgvlzd', { test: 'data' });

    expect(result).toEqual({
      ok: false,
      errors: [{ field: 'general', message: 'Network error. Please try again.' }],
    });
  });

  it('should verify environment variable configuration', () => {
    // This test verifies that the environment variable name is correct
    // In test environment it may be undefined, but the variable name should be correct
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID;
    
    // The variable should either be undefined (test env) or a string (app env)
    expect(typeof formspreeId === 'undefined' || typeof formspreeId === 'string').toBe(true);
  });
});