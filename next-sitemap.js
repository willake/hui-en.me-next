module.exports = {
    siteUrl: 'https://hui-en.me',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://hui-en.me/server-sitemap.xml', // <==== Add here
      ],
    },
}