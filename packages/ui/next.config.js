/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const shouldAnalyze = process.env.ANALYZE === 'true';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: shouldAnalyze,
  openAnalyzer: shouldAnalyze
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['media.graphassets.com', 'media.graphcms.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920]
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  typescript: {
    tsconfigPath: './tsconfig.json'
  }
});
