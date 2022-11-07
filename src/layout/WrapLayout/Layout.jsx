import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useMoralis } from "react-moralis";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";
import AuthModalContext from "../../../store/authModal-context";
import Loading from "../Loading/Loading";
import LoadingDark from "../Loading/LoadingDark";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuthModal from "../Modal/AuthModal";
import BrowserNotSupportedModal from "../Modal/BrowserNotSupportedModal";
import FloatingHelp from "./FloatingHelp";
import NewAudioPlayer from "../AudioPlayer/NewAudioPlayer";

const Layout = ({ children }) => {
	const { user, authError, Moralis, isInitialized } = useMoralis();
	const [error, success, , setError] = useContext(StatusContext);
	const [isLoading, setLoading] = useContext(LoadingContext);
	const [authModalOpen, setAuthModalOpen] = useContext(AuthModalContext);

	const router = useRouter();
	const { theme } = useTheme();

	if (router && router.events) {
		router.events.on("routeChangeStart", () => setLoading(true));
		router.events.on("routeChangeComplete", () => setLoading(false));
		router.events.on("routeChangeError", () => setLoading(false));
	}

	if (typeof window !== "undefined" && window && window.ethereum) {
		window.ethereum.on("accountsChanged", (accounts) => {
			if (user && user.attributes.ethAddress !== accounts[0]) {
				setError((prevState) => ({
					...prevState,
					title: "User is not connected to the same wallet",
					message: "Please connect to the same wallet as your Musixverse account.",
					showErrorBox: true,
				}));

				window.ethereum.request({
					method: "wallet_requestPermissions",
					params: [
						{
							eth_accounts: {},
						},
					],
				});
			}
		});
	}

	useEffect(() => {
		if (isInitialized) {
			const fetchTracks = async () => {
				const audios = await Moralis.Cloud.run("fetchTracksForAudioPlayer").then((data) => console.log(data));
				return audios;
			};

			const tracks = fetchTracks();
		}
	}, [Moralis.Cloud, isInitialized]);

	useEffect(() => {
		if (authError) {
			if (
				authError.message !== "Web3Auth: User closed login modal." &&
				authError.message !==
					"Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet " &&
				authError.message !== "MetaMask Message Signature: User denied message signature." &&
				authError.message !== "User closed modal" &&
				authError.message !== "Non ethereum enabled browser"
			) {
				setError((prevState) => ({
					...prevState,
					title: "Auth failed!",
					message: authError.message,
					showErrorBox: true,
				}));
			}
			if (authError.message === "Non ethereum enabled browser") {
				setError((prevState) => ({
					...prevState,
					title: "Auth failed! Metamask not found",
					message: (
						<>
							Please download Metamask by clicking here-{" "}
							<a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
								https://metamask.io/download/
							</a>
						</>
					),
					showErrorBox: true,
				}));
			}
		}
	}, [authError, setError]);

	return (
		<>
			{!router.pathname.startsWith("/admin") && <Navbar authModalOpen={authModalOpen} setAuthModalOpen={setAuthModalOpen} />}
			<AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
			<BrowserNotSupportedModal />
			{children}
			{isLoading && theme === "dark" ? <LoadingDark /> : <Loading />}
			{!router.pathname.startsWith("/admin") && <FloatingHelp />}
			<NewAudioPlayer />
			<ErrorBox />
			<SuccessBox />
			{!router.pathname.startsWith("/admin") && <Footer />}
		</>
	);
};

export default Layout;
