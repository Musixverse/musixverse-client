module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_MUSIXVERSE_CLIENT_BASE_URL || "https://www.musixverse.com",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${process.env.NEXT_PUBLIC_MUSIXVERSE_CLIENT_BASE_URL}/sitemap.xml`,
			`${process.env.NEXT_PUBLIC_MUSIXVERSE_CLIENT_BASE_URL}/sitemap-0.xml`,
			`${process.env.NEXT_PUBLIC_MUSIXVERSE_CLIENT_BASE_URL}/server-sitemap.xml`,
		],
	},
};
