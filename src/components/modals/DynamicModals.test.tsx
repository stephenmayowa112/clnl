import { describe, it, expect } from 'vitest';
import { DynamicQuoteRequestModal, DynamicTrackingModal } from './DynamicModals';

describe('DynamicModals', () => {
  it('should export DynamicQuoteRequestModal as a dynamic component', () => {
    expect(DynamicQuoteRequestModal).toBeDefined();
    // Dynamic imports return objects with component properties
    expect(typeof DynamicQuoteRequestModal).toBe('object');
  });

  it('should export DynamicTrackingModal as a dynamic component', () => {
    expect(DynamicTrackingModal).toBeDefined();
    // Dynamic imports return objects with component properties
    expect(typeof DynamicTrackingModal).toBe('object');
  });
});
