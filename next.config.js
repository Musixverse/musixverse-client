const withPWA = require("next-pwa");

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
    },
    images: {
        domains: ["img.icons8.com", "gateway.moralisipfs.com", "ipfs.moralis.io", "lh3.googleusercontent.com", "www.artnews.com"],
    },
});
