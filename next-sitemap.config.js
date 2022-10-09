/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.SITE_URL || "https://beta.musixverse.com",
	generateRobotsTxt: true, // (optional)
	// ...other options
};

// TODO: add Additionals sitemap link to this component