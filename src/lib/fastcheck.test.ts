import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

describe('Fast-check Setup Verification', () => {
  it('should verify fast-check is configured correctly', () => {
    fc.assert(
      fc.property(fc.integer(), (num) => {
        expect(typeof num).toBe('number');
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('should verify property-based testing with strings', () => {
    fc.assert(
      fc.property(fc.string(), (str) => {
        expect(typeof str).toBe('string');
        return true;
      }),
      { numRuns: 100 }
    );
  });
});
