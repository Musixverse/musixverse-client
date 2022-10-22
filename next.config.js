const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };
		return config;
	},
	images: {
		domains: ["pbs.twimg.com", "gateway.moralisipfs.com", "ipfs.moralis.io"],
	},
	// for running with docker
	output: "standalone",
});
