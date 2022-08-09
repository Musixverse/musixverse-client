import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import NameAndIdVerification from "../../components/Profile/Verification/NameAndIdVerification";
import SocialAccountVerification from "../../components/Profile/Verification/SocialAccountVerification";
import InstagramManualVerification from "../../components/Profile/Verification/InstagramManualVerification";
import ScrollToPageTop from "../../utils/ScrollToPageTop";

const Verify = () => {
	const { user } = useMoralis();

	const [step, setStep] = useState(1);
	const [isStageNameDifferent, setIsStageNameDifferent] = useState(false);
	const [artistStageName, setArtistStageName] = useState("");

	const { data: stageName } = useMoralisCloudFunction("getArtistStageName");
	useEffect(() => {
		if (stageName) {
			setIsStageNameDifferent(true);
			setArtistStageName(stageName);
		}
	}, [stageName]);

	// Continue to next step
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};

	// Revert to previous step
	const prevStep = () => {
		setStep((currStep) => currStep - 1);
	};

	// Twitter Auth Check
	const [isTwitterAccountConnected, setIsTwitterAccountConnected] = useState(false);
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
	const router = useRouter();
	const { oauth_token, oauth_verifier } = router.query;
	useEffect(() => {
		if (oauth_token && oauth_verifier) {
			setStep(2);
			verifyTwitterOAuth(oauth_verifier);
		}
	}, [oauth_token, oauth_verifier]);

	const { data: personaInquiryIdData } = useMoralisCloudFunction("getPersonaInquiryId");
	const step1Values = { nextStep, isStageNameDifferent, setIsStageNameDifferent, artistStageName, setArtistStageName, personaInquiryIdData };
	const step2Values = { nextStep, prevStep, isStageNameDifferent, artistStageName, personaInquiryIdData, isTwitterAccountConnected };
	const step3Values = { prevStep, isStageNameDifferent, artistStageName };

	return (
		<>
			<Head>
				<title>Musixverse | Artist Profile Verification</title>
				<meta name="description" content="The NFT Marketplace for Musicians and Fans" />
			</Head>
			<ScrollToPageTop samePage={true} changingValue={step} />

			<div className="flex flex-col p-40 items-center">
				<p className="text-4xl font-semibold text-center">Artist Verification</p>
				<div className="w-2/3 mt-10 p-14 bg-light-300 justify-center rounded-xl">
					{step == 1 ? (
						<NameAndIdVerification {...step1Values} />
					) : step == 2 ? (
						<SocialAccountVerification {...step2Values} />
					) : step == 3 ? (
						<InstagramManualVerification {...step3Values} />
					) : null}
				</div>
			</div>
		</>
	);
};

export default Verify;
