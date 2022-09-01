import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import StatusContext from "../../../store/status-context";
import AuthModalContext from "../../../store/authModal-context";
import mxvverified from "../../../public/assets/mxv_verified.svg";

const Actions = ({ tokenId, artistName, title }) => {
	const { isAuthenticated, user } = useMoralis();
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	/*******************************
	 *********  FAVOURITE  *********
	 *******************************/
	const [isTokenFavourite, setIsTokenFavourite] = useState(false);
	const { fetch: fetchIsTokenFavourite } = useMoralisCloudFunction("fetchIsTokenFavourite", { tokenId: tokenId }, []);

	useEffect(() => {
		if (user) {
			fetchIsTokenFavourite({
				onSuccess: async (object) => {
					setIsTokenFavourite(object);
				},
				onError: (error) => {
					console.log("fetchIsTokenFavourite Error:", error);
				},
			});
		}
	}, [user, fetchIsTokenFavourite]);

	const { fetch: markTokenAsFavourite } = useMoralisCloudFunction("markTokenAsFavourite", { tokenId: tokenId }, { autoFetch: false });
	const markTokenFavourite = () => {
		if (user) {
			markTokenAsFavourite({
				onSuccess: async (object) => {
					if (object) {
						setIsTokenFavourite(true);
					} else {
						setIsTokenFavourite(false);
					}
				},
				onError: (error) => {
					console.log("markTokenAsFavourite Error:", error);
				},
			});
		} else {
			setAuthModalOpen(true);
		}
	};

	/*******************************
	 *******  SHARE BUTTONS  *******
	 *******************************/
	const { asPath } = useRouter();
	const [, , setSuccess] = useContext(StatusContext);
	const [currentPageLink, setCurrentPageLink] = useState("");

	useEffect(() => {
		if (isAuthenticated && user) {
			setCurrentPageLink(window.location.origin + asPath + "?ref=" + user.attributes.username);
		} else {
			setCurrentPageLink(window.location.origin + asPath);
		}
	}, [isAuthenticated, user, asPath]);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(currentPageLink);
		setSuccess((prevState) => ({
			...prevState,
			title: "Referral Link Copied!",
			message: "Your referral link has been copied to clipboard",
			showSuccessBox: true,
		}));
	};

	const sharableMessage = `Invest in ${title} by ${artistName}!\nOwn music NFTs and connect with the artists you love!\nShare NFTs and get a referral bonus every time the NFT gets traded using your link!\n\nCheck out this track on @musixverse- ${currentPageLink}`;
	const uriEncodedSharableText = encodeURI(sharableMessage);

	return (
		<div className="flex flex-row space-x-4 text-xs">
			<button
				onClick={() => {
					markTokenFavourite();
				}}
				className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-light-300 dark:hover:bg-dark-100"
			>
				{isTokenFavourite ? (
					<>
						<i className="fa-solid fa-heart text-lg text-primary-200"></i>
						<span>Added to Favourites</span>
					</>
				) : (
					<>
						<i className="fa-solid fa-heart text-lg text-zinc-300"></i>
						<span>Add to Favourites</span>
					</>
				)}
			</button>

			<button className="flex justify-center items-center px-4 py-2 rounded-lg cursor-default hover:bg-light-300 dark:hover:bg-dark-100 relative group">
				<div className="flex space-x-2">
					<i className="fa-solid fa-share-nodes text-lg"></i>
					<span>Share</span>
				</div>

				<ul className="absolute pt-10 bg-transparent hidden left-0 top-0 z-10 text-sm font-medium text-left list-none border-none rounded-xl min-w-[250px] group-hover:block">
					<ul className="rounded-xl shadow-lg bg-light-100 dark:bg-dark-100">
						<li onClick={copyToClipboard}>
							<div className="flex items-center w-full rounded-t-xl px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
								<i className="fa-solid fa-copy text-lg"></i>
								<span className="ml-2">Copy Link</span>
							</div>
						</li>
						<li>
							<Link href={"https://twitter.com/intent/tweet?url=" + uriEncodedSharableText} passHref={true}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
								>
									<i className="fa-brands fa-twitter text-lg"></i>
									<span className="ml-2">Share on Twitter</span>
								</a>
							</Link>
						</li>
						<li>
							<Link
								href={`https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${currentPageLink}&redirect_uri=${currentPageLink}&hashtag=%23Musixverse`}
								passHref={true}
							>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
								>
									<i className="fa-brands fa-facebook text-lg"></i>
									<span className="ml-2">Share on Facebook</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href={`https://web.whatsapp.com/send?text=` + uriEncodedSharableText} passHref={true}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
								>
									<i className="fa-brands fa-whatsapp text-lg"></i>
									<span className="ml-2">Share on WhatsApp</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href={`https://telegram.me/share/url?url=` + uriEncodedSharableText} passHref={true}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
								>
									<i className="fa-brands fa-telegram text-lg"></i>
									<span className="ml-2">Share on Telegram</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPageLink}&title=${sharableMessage}`} passHref={true}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200 rounded-b-xl"
								>
									<i className="fa-brands fa-linkedin text-lg"></i>
									<span className="ml-2">Share on LinkedIn</span>
								</a>
							</Link>
						</li>
					</ul>
				</ul>
			</button>

			<button className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg cursor-none">
				<Image src={mxvverified} width={18} height={18} alt="Authentic License"></Image>
				<span>MXV Cerified</span>
			</button>
		</div>
	);
};

export default Actions;
