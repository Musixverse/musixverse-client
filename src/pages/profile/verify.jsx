import { useState } from "react";
import Head from "next/head";
import { useMoralisCloudFunction } from "react-moralis";
import NameAndIdVerification from "../../components/Profile/Verification/NameAndIdVerification";
import SocialAccountVerification from "../../components/Profile/Verification/SocialAccountVerification";
import InstagramManualVerification from "../../components/Profile/Verification/InstagramManualVerification";
import ScrollToPageTop from "../../utils/ScrollToPageTop";

const Verify = () => {
	const [step, setStep] = useState(1);

	const [isStageNameDifferent, setIsStageNameDifferent] = useState(false);
	const [artistStageName, setArtistStageName] = useState("");

	const { data: personaInquiryIdData } = useMoralisCloudFunction("getPersonaInquiryId");

	// Continue to next step
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};

	// Revert to previous step
	const prevStep = () => {
		setStep((currStep) => currStep - 1);
	};

	const step1Values = { nextStep, isStageNameDifferent, setIsStageNameDifferent, artistStageName, setArtistStageName, personaInquiryIdData };
	const step2Values = { nextStep, prevStep, isStageNameDifferent, artistStageName, personaInquiryIdData };
	const step3Values = { nextStep, prevStep, isStageNameDifferent, artistStageName };

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
