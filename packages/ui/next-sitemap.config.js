/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://localhost:3000',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: 'Googlebot-Image', disallow: '/' },
      { userAgent: '*', allow: '/' }
    ]
  }
};

module.exports = config;
