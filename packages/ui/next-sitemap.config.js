/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://chriswhitlam.dev',
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
