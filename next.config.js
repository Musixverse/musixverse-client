const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
	runtimeCaching,
	buildExcludes: [/middleware-manifest\.json$/],
});

module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };
		return config;
	},
	images: {
		domains: ["pbs.twimg.com", "gateway.musixverse.com", "ipfs.moralis.io","cdn-images-1.medium.com","royal-io.imgix.net"],
	},
	// for running with docker
	output: "standalone",
});
