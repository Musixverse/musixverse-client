import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import * as ga from "../../lib/google-analytics";
import StatusContext from "../../store/status-context";
import Script from "next/script";
import "../../styles/globals.css";
import Layout from "../layout/WrapLayout/Layout";
import ScrollToTop from "../utils/ScrollToTop";

function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete");
		};
	}, [router.events]);

	const [error, setError] = useState({
		title: "",
		message: "",
		showErrorBox: false,
	});
	const [success, setSuccess] = useState({
		title: "",
		message: "",
		showSuccessBox: false,
	});

	// This is a workaround for the issue with the next-themes package. Without this, the theme was not being applied correctly.
	const [mounted, setMounted] = useState(false);
	// When mounted on client, now we can show the UI
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return (
		<>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
				strategy="afterInteractive"
				onError={(err) => {
					console.error("Google Tag Manager Script Error:", err);
				}}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				onError={(err) => {
					console.error("Google Analytics Script Error:", err);
				}}
			>
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<Script
				src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
				onError={(err) => {
					console.error("Tailwind Elements Script Error:", err);
				}}
			></Script>
			<Script
				src="https://cdn.withpersona.com/dist/persona-v4.2.0.js"
				strategy="lazyOnload"
				onError={(err) => {
					console.error("Persona Script Error:", err);
				}}
			></Script>
			<Script src="https://kit.fontawesome.com/8f4546bba1.js" crossOrigin="anonymous"></Script>

			<ThemeProvider attribute="class" enableSystem={false}>
				<StatusContext.Provider value={[error, success, setSuccess, setError]}>
					<Layout>
						<ScrollToTop />
						<Component {...pageProps} />
					</Layout>
				</StatusContext.Provider>
			</ThemeProvider>
		</>
	);
}

export default App;
