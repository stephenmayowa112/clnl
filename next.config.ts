import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  
  // Image optimization
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Compression (enabled by default in production)
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  // Note: Custom headers don't work with static export
  // Configure caching headers in your hosting platform (Vercel, Netlify, etc.)
  // Recommended cache headers:
  // - Static assets (images, fonts): Cache-Control: public, max-age=31536000, immutable
  // - HTML files: Cache-Control: public, max-age=0, must-revalidate
};

export default nextConfig;
