import { useState, useContext, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import VerificationButton from "./VerificationButton";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";
import { sleep } from "../../../utils/Sleep";
import VerificationRequestSubmittedModal from "./VerificationRequestSubmittedModal";

const TwitterAccountVerification = ({
	nextStep,
	prevStep,
	isRealNameDifferent,
	realNameDifferentTextMessage,
	realNameSameTextMessage,
	uriEncodedRealNameDifferentTextMessage,
	uriEncodedRealNameSameTextMessage,
	isTwitterAccountConnected,
}) => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , setSuccess, setError] = useContext(StatusContext);
	const songLinkRef = useRef(null);

	const [isVerificationRequestSubmittedModalOpen, setVerificationRequestSubmittedModalOpen] = useState(false);

	const router = useRouter();

	const authorizeTwitter = async () => {
		setLoading(true);
		await fetch(process.env.NEXT_PUBLIC_MUSIXVERSE_SERVER_BASE_URL + "/api/twitter-auth/authorize", {
			method: "POST",
		})
			.then((res) => res.json())
			.then((data) => {
				if (typeof window !== "undefined") {
					sessionStorage.setItem("oauth_token", data.responseData.oauth_token);
					sessionStorage.setItem("oauth_token_secret", data.responseData.oauth_token_secret);
				}
				window.open(data.responseData.url, "_self");
				setLoading(false);
			})
			.catch((err) => {
				console.log("authorizeTwitter error:", err);
			});
	};

	const verifyIdentityVerificationTweet = async () => {
		setLoading(true);
		if (!isTwitterAccountConnected) {
			setLoading(false);
			setError({
				title: "Twitter account not connected",
				message: "You need to connect your Twitter account to continue",
				showErrorBox: true,
			});
			return;
		}
		await fetch(process.env.NEXT_PUBLIC_MUSIXVERSE_SERVER_BASE_URL + "/api/twitter-auth/verify-tweet", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: user.id,
			}),
		})
			.then((res) => res.json())
			.then(async (data) => {
				if (data.code === 200) {
					setLoading(false);
					setSuccess({
						title: "You've been verified successfully",
						message: "You'll be redirected to your profile page now",
						showSuccessBox: true,
					});
					await sleep(1500);
					router.replace(`/profile/${user.attributes.username}`, undefined, { shallow: true });
				} else {
					setLoading(false);
					setError({
						title: "Tweet Missing",
						message: "Please send the tweet to complete verification",
						showErrorBox: true,
					});
				}
			})
			.catch((err) => {
				setLoading(false);
				console.log("verifyIdentityVerificationTweet error:", err);
			});
	};

	return (
		<div>
			<Head>
				<title>Musixverse | Artist Profile Verification</title>
				<meta name="description" content="The NFT Marketplace for Musicians and Fans" />
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</Head>

			{/* <p className="text-4xl font-tertiary mb-2">4. Connect Twitter account</p>
			<VerificationButton
				onClick={() => authorizeTwitter()}
				verifiedStatus={isTwitterAccountConnected}
				buttonText="Connect Twitter"
				verifiedText="Twitter account connected successfully"
			/> */}

			{/* <p className="text-4xl font-tertiary mt-16">5. Tweet from your account</p>
			<div className="w-2/3 text-sm mt-1">This is required to verify that you are a real person.</div>
			<Link
				href={
					isRealNameDifferent
						? `https://twitter.com/intent/tweet?text=` + uriEncodedRealNameDifferentTextMessage
						: `https://twitter.com/intent/tweet?text=` + uriEncodedRealNameSameTextMessage
				}
				passHref
			>
				<a target="_blank" rel="noopener noreferrer" className="flex w-fit mt-2">
					<button className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100">
						Send a Tweet
					</button>
				</a>
			</Link> */}

			<form
				onSubmit={async (e) => {
					e.preventDefault();
					setLoading(true);
					if (songLinkRef.current.value === "") {
						setLoading(false);
						setError({
							title: "Song link is missing",
							message: "Please provide a link to any of your song",
							showErrorBox: true,
						});
						songLinkRef.current.focus();
						return;
					}
					setVerificationRequestSubmittedModalOpen(true);
					verifyIdentityVerificationTweet();
					setLoading(false);
				}}
			>
				<p className="text-4xl font-tertiary">4. Song link</p>
				<p className="text-[#777777] font-normal text-sm mb-2">
					Please provide a link to any of your song (Eg. Spotify link, Amazon Music link, YouTube link, etc.)
				</p>
				<input
					className="w-1/2 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
					id="songLink"
					name="songLink"
					type="url"
					placeholder="Please enter a song link"
					autoComplete="off"
					ref={songLinkRef}
					required
				/>

				<p className="text-4xl font-tertiary mt-16">5. Send us a DM</p>
				<p className="text-[#777777] font-normal text-sm">This is required to verify that you are a real person</p>

				<p className="text-xl font-semibold font-primary mt-4">DM us on Twitter</p>
				<div className="flex w-fit mt-1">
					<Link href="https://twitter.com/messages/compose?recipient_id=1473961193618378753&ref_src=twsrc%5Etfw" passHref>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="twitter-dm-button"
							data-size="large"
							data-text={isRealNameDifferent ? realNameDifferentTextMessage : realNameSameTextMessage}
							data-screen-name="musixverse"
							data-show-count="false"
						></a>
					</Link>
				</div>

				<div className="w-1/4 flex justify-center items-center text-[#777777] text-sm my-4">or</div>

				<p className="text-xl font-semibold font-primary">DM us on Instagram</p>
				<button
					onClick={() => {
						if (songLinkRef.current.value === "") {
							setError({
								title: "Song link is missing",
								message: "Please provide a link to any of your song",
								showErrorBox: true,
							});
							songLinkRef.current.focus();
							return;
						}
						nextStep();
					}}
					className="instagram text-light-200 text-[12.5px] px-4 py-1 rounded-2xl mt-1"
				>
					<i className="fab fa-instagram fa-lg mr-2"></i>Message @musixverse
				</button>

				<p className="text-[#777777] font-normal text-sm mt-16 text-center">Please click the submit button only after you have sent the DM</p>

				<div className="w-full flex justify-center">
					<div className="w-2/5 flex justify-between mt-10">
						<button
							onClick={() => prevStep()}
							type="button"
							className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 dark:bg-[#323232] hover:bg-gray-200 text-primary-100"
						>
							Back
						</button>
						<button
							type="submit"
							className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
						>
							Submit
						</button>
					</div>
				</div>
			</form>

			<VerificationRequestSubmittedModal isOpen={isVerificationRequestSubmittedModalOpen} setOpen={setVerificationRequestSubmittedModalOpen} />
		</div>
	);
};

export default TwitterAccountVerification;
