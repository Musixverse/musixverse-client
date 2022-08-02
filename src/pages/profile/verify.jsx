import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PersonaVerification from "../../components/Profile/Verification/PersonaVerification";
import VerificationButton from "../../components/Profile/Verification/VerificationButton";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import StatusContext from "../../../store/status-context";

const Verify = () => {
	const { user } = useMoralis();
	const [, , setSuccess, setError] = useContext(StatusContext);
	const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
	const [isTwitterAccountConnected, setIsTwitterAccountConnected] = useState(false);
	const [isStageNameDifferent, setIsStageNameDifferent] = useState(false);
	const [artistStageName, setArtistStageName] = useState("");
	const [artistStageNameSave, setArtistStageNameSave] = useState(false);

	const { data: personaInquiryIdData } = useMoralisCloudFunction("getPersonaInquiryId");
	const { fetch: fetchTwitterAccountConnectionStatus } = useMoralisCloudFunction("getTwitterAccountConnectionStatus");

	useEffect(() => {
		fetchTwitterAccountConnectionStatus({
			onSuccess: async (res) => {
				setIsTwitterAccountConnected(res);
			},
			onError: (error) => {
				console.log("fetchTwitterAccountConnectionStatus Error:", error);
			},
		});
	}, [fetchTwitterAccountConnectionStatus]);

	const authorizeTwitter = async () => {
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
			})
			.catch((err) => {
				console.log("authorizeTwitter error:", err);
			});
	};

	const verifyTwitterOAuth = async (oauth_verifier) => {
		await fetch(process.env.NEXT_PUBLIC_MUSIXVERSE_SERVER_BASE_URL + "/api/twitter-auth/verify-oauth", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				oauth_token: sessionStorage.getItem("oauth_token"),
				oauth_token_secret: sessionStorage.getItem("oauth_token_secret"),
				oauth_verifier: oauth_verifier,
				userId: user.id,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				router.replace("/profile/verify", undefined, { shallow: true });
				setIsTwitterAccountConnected(data.responseData);
			})
			.catch((err) => {
				console.log("verifyTwitterOAuth error:", err);
			});
	};

	const verifyIdentityVerificationTweet = async () => {
		if (!personaInquiryIdData || !personaInquiryIdData.isPersonaVerified) {
			setError({
				title: "KYC is not complete",
				message: "Please finish your KYC to continue",
				showErrorBox: true,
			});
			return;
		} else if (!isTwitterAccountConnected) {
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
			.then((data) => {
				if (data.code === 200)
					setSuccess({
						title: "You've been verified successfully",
						message: "You'll be redirected to your profile page now",
						showSuccessBox: true,
					});
				else
					setError({
						title: "Tweet Missing",
						message: "Please send the tweet to verify your account",
						showErrorBox: true,
					});
			})
			.catch((err) => {
				console.log("verifyIdentityVerificationTweet error:", err);
			});
	};

	const router = useRouter();
	const { oauth_token, oauth_verifier } = router.query;
	useEffect(() => {
		if (oauth_token && oauth_verifier) {
			verifyTwitterOAuth(oauth_verifier);
		}
	}, [oauth_token, oauth_verifier]);

	return (
		<>
			<Head>
				<title>Musixverse | Artist Profile Verification</title>
				<meta name="description" content="The NFT Marketplace for Musicians and Fans" />
			</Head>
			<div className="flex flex-col p-40">
				<p className="text-4xl font-semibold text-center">Artist Verification</p>
				<div className="mt-4">
					<p className="text-4xl font-tertiary mt-16">1. KYC</p>

					<VerificationButton
						onClick={() => setIsVerificationModalOpen(true)}
						verifiedStatus={personaInquiryIdData ? personaInquiryIdData.isPersonaVerified : false}
						buttonText="Verify your profile"
						verifiedText="Verified successfully"
					/>

					<p className="text-4xl font-tertiary mt-16">2. Connect Twitter account</p>

					<VerificationButton
						onClick={() => authorizeTwitter()}
						verifiedStatus={isTwitterAccountConnected}
						buttonText="Connect Twitter"
						verifiedText="Twitter account connected successfully"
					/>

					{/* https://www.instagram.com/musixverse/ */}

					<div className="w-2/3 text-sm mt-10">Is your stage name different from your real name?</div>

					<div className="flex flex-col mb-6">
						<div className="flex items-center mt-2 space-x-10">
							<div className="flex items-center">
								<input
									id="isStageNameDifferent"
									onChange={(e) => {
										setIsStageNameDifferent(true);
									}}
									type="radio"
									name="radio"
									checked={isStageNameDifferent}
									className="hidden"
								/>
								<label htmlFor="isStageNameDifferent" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
									<span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
									Yes
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="isStageNameSame"
									type="radio"
									onChange={(e) => {
										setIsStageNameDifferent(false);
									}}
									name="radio"
									checked={!isStageNameDifferent}
									className="hidden"
								/>
								<label htmlFor="isStageNameSame" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
									<span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
									No
								</label>
							</div>
						</div>
					</div>

					{isStageNameDifferent && (
						<div className="w-1/3 flex flex-col text-xs">
							<p className="text-sm font-semibold font-secondary">Enter your stage name</p>
							<div className="flex">
								<input
									className="mr-4 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
									id="artistStageName"
									name="artistStageName"
									type="text"
									placeholder="Your stage name"
									autoComplete="off"
									value={artistStageName}
									onChange={(e) => {
										setArtistStageName(e.target.value);
									}}
									onClick={() => {
										setArtistStageNameSave(false);
									}}
								/>
								<VerificationButton
									onClick={() => setArtistStageNameSave(true)}
									verifiedStatus={artistStageNameSave}
									buttonText="Save"
									verifiedText="Saved"
								/>
							</div>
						</div>
					)}

					<p className="text-4xl font-tertiary mt-16">3. Tweet from your account</p>
					<div className="w-2/3 text-sm mt-2">You need to do a Tweet to verify that you&apos;re not a bot</div>

					<Link
						href={
							isStageNameDifferent
								? `https://twitter.com/intent/tweet?text=I%2C%20${user.attributes.name}%2C%20am%20verifying%20my%20identity%20on%20%40musixverse%20as%20an%20artist.%20My%20stage%20name%20is%20${artistStageName}.%0A%0AJoin%20%40musixverse%20and%20let's%20revolutionize%20the%20music%20industry%20together!%0Ahttps%3A%2F%2Fwww.musixverse.com%0A%0A%40musixverse%0AHear%20it.%20Own%20it.%20Live%20it.`
								: `https://twitter.com/intent/tweet?text=I%20am%20verifying%20my%20identity%20on%20%40musixverse%20as%20an%20artist.%0A%0AJoin%20%40musixverse%20and%20let's%20revolutionize%20the%20music%20industry%20together!%0Ahttps%3A%2F%2Fwww.musixverse.com%0A%0A%40musixverse%0AHear%20it.%20Own%20it.%20Live%20it.`
						}
						passHref
					>
						<a target="_blank" rel="noopener noreferrer" className="flex w-fit">
							<button className="flex w-fit items-center px-10 py-3 mt-2 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100">
								Send a Tweet
							</button>
						</a>
					</Link>

					<div className="flex justify-center mt-20">
						<button
							onClick={() => verifyIdentityVerificationTweet()}
							className="flex w-fit items-center px-10 py-3 mt-2 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
			<PersonaVerification
				isOpen={isVerificationModalOpen}
				onClose={() => setIsVerificationModalOpen(false)}
				personaInquiryIdData={personaInquiryIdData}
			/>
		</>
	);
};

export default Verify;
