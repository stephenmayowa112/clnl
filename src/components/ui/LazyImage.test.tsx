import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LazyImage } from './LazyImage';

describe('LazyImage', () => {
  it('should render with lazy loading by default', () => {
    const { container } = render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image"
        width={100}
        height={100}
      />
    );

    const img = container.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('loading')).toBe('lazy');
  });

  it('should render with eager loading when priority is true', () => {
    const { container } = render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image"
        width={100}
        height={100}
        priority={true}
      />
    );

    const img = container.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('loading')).toBe('eager');
  });

  it('should pass through other Image props', () => {
    const { container } = render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image description"
        width={200}
        height={150}
        className="custom-class"
      />
    );

    const img = container.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('Test image description');
    expect(img?.className).toContain('custom-class');
  });
});
