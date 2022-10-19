import { useState, useEffect } from "react";
import { MoralisProvider } from "react-moralis";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import * as ga from "../../lib/google-analytics";
import StatusContext from "../../store/status-context";
import LoadingContext from "../../store/loading-context";
import AuthModalContext from "../../store/authModal-context";
import AccessLevelContext from "../../store/accessLevel-context";
import "../../styles/globals.css";
import ProtectedRoutes from "../auth/ProtectedRoutes";
import Layout from "../layout/WrapLayout/Layout";
import ScrollToPageTop from "../utils/ScrollToPageTop";
import { connectSmartContract } from "../utils/smart-contract/functions";
import "react-datepicker/dist/react-datepicker.css";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../constants";
import AudioPlayerContext from "../../store/audioplayer-context";

function App({ Component, pageProps, router }) {
	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete");
		};
	}, [router.events]);

	const [isLoading, setLoading] = useState(false);
	const [accessLevel, setAccessLevel] = useState(0);
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
	const [authModalOpen, setAuthModalOpen] = useState(false);
	const [audioPlayerProps, setAudioPlayerProps] = useState({
		queue: [],
		// updateQueue to be updated in every play button click on the site
		updateQueue: true,
		// currentlyPlayingIdx to keep an eye on the loadCapacity to reach
		currentlyPlayingIdx: -1,
		// 👇 To be updated from globalAudioPlayer and to be consumed in trackInfo
		currentProgress: "00:00",
		currentDuration: "",
		playerIsLoaded: false,
		isPlaying: false,
	});
	// This is a workaround for the issue with the next-themes package. Without this, the theme was not being applied correctly.
	const [mounted, setMounted] = useState(false);
	// When mounted on client, now we can show the UI
	useEffect(() => {
		setMounted(true);
		connectSmartContract();
	}, []);
	if (!mounted) return null;

	return (
		<>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<Script src="https://kit.fontawesome.com/8f4546bba1.js" crossOrigin="anonymous"></Script>
			<Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
			<Script src="/theme.js" strategy="beforeInteractive" />
			<Script src="https://cdn.withpersona.com/dist/persona-v4.2.0.js"></Script>

			<MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
				<ThemeProvider attribute="class" enableSystem={false}>
					<LoadingContext.Provider value={[isLoading, setLoading]}>
						<AccessLevelContext.Provider value={[accessLevel, setAccessLevel]}>
							<AuthModalContext.Provider value={[authModalOpen, setAuthModalOpen]}>
								<StatusContext.Provider value={[error, success, setSuccess, setError]}>
									<AudioPlayerContext.Provider value={[audioPlayerProps, setAudioPlayerProps]}>
										<ProtectedRoutes router={router}>
											<Layout>
												<ScrollToPageTop />
												<Component {...pageProps} />
											</Layout>
										</ProtectedRoutes>
									</AudioPlayerContext.Provider>
								</StatusContext.Provider>
							</AuthModalContext.Provider>
						</AccessLevelContext.Provider>
					</LoadingContext.Provider>
				</ThemeProvider>
			</MoralisProvider>
		</>
	);
}

export default App;
