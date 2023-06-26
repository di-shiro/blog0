/**
 * @type {import('next-sitemap)}.IConfig}
 */

const config = {
  siteUrl: 'https://**********',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://**********/server-sitemap.xml'],
  },
  // ourDir: './out',
}

module.exports = config
