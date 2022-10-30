export const SEO = {
	title: undefined,
	titleTemplate: "Musixverse | %s",
	defaultTitle: "Musixverse",
	description:
		"Musixverse is a Music NFT marketplace that will bring Artists and Fans together like never before and unlock novel models of communications and commerce.",
	canonical: "https://www.musixverse.com",
	openGraph: {
		siteName: "Musixverse",
		url: "https://www.musixverse.com",
		title: "Musixverse",
		description:
			"Musixverse is a Music NFT marketplace that will bring Artists and Fans together like never before and unlock novel models of communications and commerce.",
		images: [{ url: "/site_logo.png" }],
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
