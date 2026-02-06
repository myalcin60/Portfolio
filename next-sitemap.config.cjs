/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://mydevtest.netlify.app",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.8,

    additionalPaths: async (config) => {
        return [
            {
                loc: "/",
                changefreq: "weekly",
                priority: 1.0,
                lastmod: new Date().toISOString(),
            },
        ];
    },
};
