/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['media.graphassets.com', 'media.graphcms.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920]
  }
};

module.exports = nextConfig;
