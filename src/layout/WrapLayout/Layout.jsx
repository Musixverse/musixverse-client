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
import AudioPlayerContext from "../../../store/audioplayer-context";

const Layout = ({ children }) => {
	const { user, authError, Moralis, logout, isInitialized } = useMoralis();
	const [error, success, , setError] = useContext(StatusContext);
	const [isLoading, setLoading] = useContext(LoadingContext);
	const [authModalOpen, setAuthModalOpen] = useContext(AuthModalContext);
	const [audioPlayerProps, setAudioPlayerProps] = useContext(AudioPlayerContext);

	const router = useRouter();
	const { theme } = useTheme();

	if (router && router.events) {
		router.events.on("routeChangeStart", () => setLoading((prevState) => ({ ...prevState, status: true })));
		router.events.on("routeChangeComplete", () => setLoading((prevState) => ({ ...prevState, status: false })));
		router.events.on("routeChangeError", () => setLoading((prevState) => ({ ...prevState, status: false })));
	}

	// if (typeof window !== "undefined" && window && window.ethereum) {
	// 	window.ethereum.on("accountsChanged", (accounts) => {
	// 		if (user && user.attributes.ethAddress !== accounts[0]) {
	// 			setError((prevState) => ({
	// 				...prevState,
	// 				title: "User is not connected to the same wallet",
	// 				message: "Please connect to the same wallet as your Musixverse account.",
	// 				showErrorBox: true,
	// 			}));

	// 			window.ethereum.request({
	// 				method: "wallet_requestPermissions",
	// 				params: [
	// 					{
	// 						eth_accounts: {},
	// 					},
	// 				],
	// 			});
	// 		}
	// 	});
	// }

	useEffect(() => {
		if (isInitialized) {
			const fetchTracks = async () => {
				if (audioPlayerProps.updateQueue) {
					const audios = await Moralis.Cloud.run("fetchTracksForAudioPlayer").then((data) => {
						return data.map((item) => {
							// Temporarily mapping fake data, need to be replaced
							return {
								artistName: item.artist,
								audioURL: item.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL),
								nftCover: item.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL),
								songName: item.title,
								tokenId: item.tokenId,
								price: item.price ? item.price : "70000000000000000",
								isArtistVerified: item.isArtistVerified ? item.isArtistVerified : true,
								trackId: item.trackId ? item.trackId : 2,
							};
						});
					});
					setAudioPlayerProps((prevprops) => {
						const newQueue = [...prevprops.queue, ...audios];
						return {
							...prevprops,
							queue: newQueue,
							updateQueue: false,
						};
					});
				}
			};

			fetchTracks();
		}
	}, [Moralis.Cloud, isInitialized, setAudioPlayerProps, audioPlayerProps.updateQueue]);

	useEffect(() => {
		const handleLogout = async () => {
			if (router.pathname != "/") router.push("/");
			await logout();
			if (window.localStorage.walletconnect) {
				window.localStorage.removeItem("walletconnect");
			}
			await fetch("/api/auth/logout", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({}),
			});
			router.reload(window.location.pathname);
		};

		if (authError) {
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
				return;
			}
			if (authError.message === "Moralis auth failed, invalid data") {
				handleLogout();
				return;
			}
			if (
				authError.message !== "Web3Auth: User closed login modal." &&
				authError.message !==
					"Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet " &&
				authError.message !== "MetaMask Message Signature: User denied message signature." &&
				authError.message !== "User closed modal"
			) {
				setError((prevState) => ({
					...prevState,
					title: "Auth failed!",
					message: authError.message,
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
			{isLoading.status && theme === "dark" ? <LoadingDark /> : <Loading />}
			{!router.pathname.startsWith("/admin") && <FloatingHelp />}
			<NewAudioPlayer />
			<ErrorBox />
			<SuccessBox />
			{!router.pathname.startsWith("/admin") && <Footer />}
		</>
	);
};

export default Layout;
