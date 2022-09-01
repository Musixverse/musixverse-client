const withPWA = require("next-pwa");

module.exports = withPWA({
	reactStrictMode: true,
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };
		return config;
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
	images: {
		domains: ["pbs.twimg.com", "img.icons8.com", "gateway.moralisipfs.com", "ipfs.moralis.io", "lh3.googleusercontent.com", "www.artnews.com"],
	},
	// for running with docker
	output: "standalone",
});
