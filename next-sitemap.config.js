module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.musixverse.com",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
			`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap-0.xml`,
			`${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
		],
	},
};
