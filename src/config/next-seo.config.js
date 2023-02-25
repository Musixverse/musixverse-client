export const SEO = {
	title: undefined,
	titleTemplate: "Musixverse | %s",
	defaultTitle: "Musixverse",
	description:
		"Musixverse helps independent musicians to grow their audience. Our Music NFT marketplace brings Artists and Fans together like never before and unlock novel models of communications and commerce.",
	canonical: "https://musixverse.com",
	openGraph: {
		siteName: "Musixverse",
		url: "https://musixverse.com",
		title: "Musixverse",
		description:
			"Musixverse helps independent musicians to grow their audience. Our Music NFT marketplace brings Artists and Fans together like never before and unlock novel models of communications and commerce.",
		images: [{ url: "/site_logo.png", width: 640, height: 640, alt: "Logo" }],
	},
	twitter: {
		handle: "@musixverse",
		creator: "@musixverse",
		site: "@musixverse",
		cardType: "summary_large_image",
	},
	facebook: {
		appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
	},
};
