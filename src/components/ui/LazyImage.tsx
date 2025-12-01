'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

/**
 * LazyImage component with optimized loading for below-the-fold images
 * 
 * This component wraps Next.js Image with lazy loading enabled by default.
 * Images are only loaded when they enter the viewport, improving initial page load performance.
 * 
 * @example
 * ```tsx
 * <LazyImage
 *   src="/images/hero-bg.jpg"
 *   alt="Hero background"
 *   width={1920}
 *   height={1080}
 *   priority={false} // Set to true for above-the-fold images
 * />
 * ```
 */
export interface LazyImageProps extends Omit<ImageProps, 'loading'> {
  /**
   * Whether this image is above the fold and should be loaded immediately
   * Set to true for hero images and other critical above-the-fold content
   */
  priority?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  priority = false,
  ...props
}) => {
  return (
    <Image
      {...props}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
    />
  );
};
