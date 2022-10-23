import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import NameAndIdVerification from "../../../components/Profile/Verification/NameAndIdVerification";
import SendUsADM from "../../../components/Profile/Verification/SendUsADM";
import InstagramVerification from "../../../components/Profile/Verification/InstagramVerification";
import ScrollToPageTop from "../../../utils/ScrollToPageTop";
import VerificationRequestSubmittedModal from "../../../components/Profile/Verification/VerificationRequestSubmittedModal";

const Verify = () => {
	const { user } = useMoralis();

	const router = useRouter();
	const { data: artistVerificationInfo } = useMoralisCloudFunction("getVerificationInfo");
	useEffect(() => {
		if (artistVerificationInfo && artistVerificationInfo.verificationRequested) {
			router.push("/profile/verify/verification-requested");
		}
	}, [artistVerificationInfo]);

	const [step, setStep] = useState(1);
	const [isRealNameDifferent, setIsRealNameDifferent] = useState(false);
	const [artistRealName, setArtistRealName] = useState("");
	const [artistRealNameSave, setArtistRealNameSave] = useState(false);

	const [isVerificationRequestSubmittedModalOpen, setVerificationRequestSubmittedModalOpen] = useState(false);

	const realNameDifferentTextMessage = `I just applied for my artist verification badge on @musixverse! My username is ${user.attributes.username} and my real name is ${artistRealName}.`;
	const realNameSameTextMessage = `I just applied for my artist verification badge on @musixverse! My username is ${user.attributes.username}.}`;

	const { data: realName } = useMoralisCloudFunction("getArtistRealName");
	useEffect(() => {
		if (realName) {
			setIsRealNameDifferent(true);
			setArtistRealName(realName);
			setArtistRealNameSave(true);
		}
	}, [realName]);

	// Continue to next step
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};

	// Revert to previous step
	const prevStep = () => {
		setStep((currStep) => currStep - 1);
	};

	const { data: personaInquiryIdData } = useMoralisCloudFunction("getPersonaInquiryId");
	const step1Values = {
		nextStep,
		isRealNameDifferent,
		setIsRealNameDifferent,
		artistRealName,
		setArtistRealName,
		artistRealNameSave,
		setArtistRealNameSave,
		personaInquiryIdData,
	};
	const step2Values = {
		nextStep,
		prevStep,
		isRealNameDifferent,
		realNameDifferentTextMessage,
		realNameSameTextMessage,
		setVerificationRequestSubmittedModalOpen,
	};
	const step3Values = {
		prevStep,
		isRealNameDifferent,
		artistRealName,
		realNameDifferentTextMessage,
		realNameSameTextMessage,
		setVerificationRequestSubmittedModalOpen,
	};

	return (
		<>
			<Head>
				<title>Musixverse | Artist Profile Verification</title>
				<meta name="description" content="The NFT Marketplace for Musicians and Fans" />
			</Head>
			<ScrollToPageTop samePage={true} changingValue={step} />

			<div className="flex flex-col p-40 items-center bg-light-300 dark:bg-dark-100">
				<p className="text-4xl font-semibold text-center">Artist Verification</p>
				<div className="w-2/3 mt-10 p-14 bg-light-200 dark:bg-dark-200 justify-center rounded-xl">
					{step == 1 ? (
						<NameAndIdVerification {...step1Values} />
					) : step == 2 ? (
						<SendUsADM {...step2Values} />
					) : step == 3 ? (
						<InstagramVerification {...step3Values} />
					) : null}
				</div>
			</div>

			<VerificationRequestSubmittedModal isOpen={isVerificationRequestSubmittedModalOpen} setOpen={setVerificationRequestSubmittedModalOpen} />
		</>
	);
};

export default Verify;
