import { useState, useEffect, useContext } from "react";
import Modal from "../../../layout/Modal/Modal";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import successLogo from "/public/assets/success-failure-modals/success.svg";
import StatusContext from "../../../../store/status-context";
import CustomButton from "../../../layout/CustomButton";

const ShareTrackNftModal = ({ isOpen, setOpen, artistName, title, setAuthModalOpen }) => {
	/*******************************
	 *******  SHARE BUTTONS  *******
	 *******************************/
	const { isAuthenticated, user } = useMoralis();

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

	const sharableMessage = `Invest in ${title} by ${artistName}!\n\nOwn music NFTs and connect with the artists you love!\nShare NFTs and get a 10% referral bonus every time the NFT gets traded using your link!\n\nCheck out this track on @musixverse- ${currentPageLink}`;
	const uriEncodedSharableText = encodeURI(sharableMessage);

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24">
					<Image src={successLogo} layout="fill" alt="Success" />
				</div>
			}
			title={
				<div className="text-2xl">
					Share and earn <span className="text-primary-100 text-4xl">10%</span>
					<p className="text-xs">of the transaction fee whenever someone</p>
					<p className="text-xs">
						purchases this NFT using your link.&nbsp;
						<Link href="/faq" passHref>
							<a target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary-100">
								Learn more
							</a>
						</Link>
					</p>
				</div>
			}
			content={
				<div>
					{user ? (
						<div className="flex items-center justify-between flex-1 px-4 py-2 rounded-lg bg-light-200 dark:bg-[#323232]">
							<span className="max-w-[180px] md:max-w-[280px] truncate md:text-base align-bottom text-sm font-secondary xl:max-w-none">
								{currentPageLink}
							</span>
							<button className="w-fit h-fit" onClick={copyToClipboard}>
								<i className="far fa-clipboard text-primary-100"></i>
							</button>
						</div>
					) : (
						<div className="w-full flex items-center justify-center">
							<CustomButton
								onClick={() => {
									setOpen(false);
									setAuthModalOpen(true);
								}}
								green={true}
								classes="text-sm px-8 py-3"
							>
								Sign up to get your referral link <i className="ml-1 fa-solid fa-right-to-bracket"></i>
							</CustomButton>
						</div>
					)}

					<div className="flex justify-between mt-8">
						<div onClick={copyToClipboard}>
							<div className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-light-300 dark:bg-[#323232] dark:hover:bg-dark-200">
								<i className="fa-solid fa-copy text-2xl"></i>
							</div>
						</div>

						<Link href={"https://twitter.com/intent/tweet?url=" + uriEncodedSharableText} passHref={true}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-light-300 dark:bg-[#323232] dark:hover:bg-dark-200"
							>
								<i className="fa-brands fa-twitter text-2xl"></i>
							</a>
						</Link>

						<Link
							href={`https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${currentPageLink}&redirect_uri=${currentPageLink}&hashtag=%23Musixverse`}
							passHref={true}
						>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-light-300 dark:bg-[#323232] dark:hover:bg-dark-200"
							>
								<i className="fa-brands fa-facebook text-2xl"></i>
							</a>
						</Link>

						<Link href={`https://web.whatsapp.com/send?text=` + uriEncodedSharableText} passHref={true}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-light-300 dark:bg-[#323232] dark:hover:bg-dark-200"
							>
								<i className="fa-brands fa-whatsapp text-2xl"></i>
							</a>
						</Link>

						<Link href={`https://telegram.me/share/url?url=` + uriEncodedSharableText} passHref={true}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-light-300 dark:bg-[#323232] dark:hover:bg-dark-200"
							>
								<i className="fa-brands fa-telegram text-2xl"></i>
							</a>
						</Link>

						<Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPageLink}&title=${sharableMessage}`} passHref={true}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center rounded-lg p-3 cursor-pointer whitespace-nowrap bg-light-200 hover:bg-light-300 dark:bg-[#323232] dark:hover:bg-dark-200"
							>
								<i className="fa-brands fa-linkedin text-2xl"></i>
							</a>
						</Link>
					</div>
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
		></Modal>
	);
};

export default ShareTrackNftModal;
