import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import VerificationButton from "./VerificationButton";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";

const SocialAccountVerification = ({ nextStep, prevStep, isStageNameDifferent, artistStageName, isTwitterAccountConnected }) => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , setSuccess, setError] = useContext(StatusContext);

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
		if (!isTwitterAccountConnected) {
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
						message: "Please send the tweet to complete verification",
						showErrorBox: true,
					});
			})
			.catch((err) => {
				console.log("verifyIdentityVerificationTweet error:", err);
			});
	};

	return (
		<>
			<p className="text-4xl font-tertiary mb-2">4. Connect Twitter account</p>

			<VerificationButton
				onClick={() => authorizeTwitter()}
				verifiedStatus={isTwitterAccountConnected}
				buttonText="Connect Twitter"
				verifiedText="Twitter account connected successfully"
			/>

			<p className="text-4xl font-tertiary mt-16">5. Tweet from your account</p>
			<div className="w-2/3 text-sm mt-1">This is required to verify that you are a real person.</div>

			<Link
				href={
					isStageNameDifferent
						? `https://twitter.com/intent/tweet?text=I%2C%20${user.attributes.name}%2C%20am%20verifying%20my%20identity%20on%20%40musixverse%20as%20an%20artist.%20My%20stage%20name%20is%20${artistStageName}.%0A%0AJoin%20%40musixverse%20and%20let's%20revolutionize%20the%20music%20industry%20together!%0Ahttps%3A%2F%2Fwww.musixverse.com%0A%0A%40musixverse%0AHear%20it.%20Own%20it.%20Live%20it.`
						: `https://twitter.com/intent/tweet?text=I%20am%20verifying%20my%20identity%20on%20%40musixverse%20as%20an%20artist.%0A%0AJoin%20%40musixverse%20and%20let's%20revolutionize%20the%20music%20industry%20together!%0Ahttps%3A%2F%2Fwww.musixverse.com%0A%0A%40musixverse%0AHear%20it.%20Own%20it.%20Live%20it.`
				}
				passHref
			>
				<a target="_blank" rel="noopener noreferrer" className="flex w-fit mt-2">
					<button className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100">
						Send a Tweet
					</button>
				</a>
			</Link>
			<p className="text-[#777777] font-normal text-xs mt-2">Please click the submit button once you have sent the tweet</p>

			<p className="text-[#777777] font-normal text-sm mt-16">
				Do not have a Twitter account? &nbsp;
				<span className="text-primary-200 hover:underline cursor-pointer" onClick={() => nextStep()}>
					Request Manual Verification
				</span>
				<br />
				Please note that this can take up to five business days.
			</p>

			<div className="w-full flex justify-center">
				<div className="w-2/5 flex justify-between mt-20">
					<button
						onClick={() => prevStep()}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 hover:bg-gray-200 text-primary-100"
					>
						Back
					</button>
					<button
						onClick={() => verifyIdentityVerificationTweet()}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
					>
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default SocialAccountVerification;
