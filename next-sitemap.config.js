/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://client-red-xi-12.vercel.app/",
  generateRobotsTxt: true,
  exclude: ["/admin", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/*"],
      },
    ],
  },
};