import { useState, useContext } from "react";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import PersonaVerification from "./PersonaVerification";
import VerificationButton from "./VerificationButton";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";

const NameAndIdVerification = ({ nextStep, isStageNameDifferent, setIsStageNameDifferent, artistStageName, setArtistStageName, personaInquiryIdData }) => {
	const { user } = useMoralis();
	const [, , , setError] = useContext(StatusContext);
	const [, setLoading] = useContext(LoadingContext);

	const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
	const [artistStageNameSave, setArtistStageNameSave] = useState(false);

	const { fetch: setStageName } = useMoralisCloudFunction("setArtistStageName", { userId: user.id, artistStageName: artistStageName }, { autoFetch: false });

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				if (!personaInquiryIdData || !personaInquiryIdData.isPersonaVerified) {
					setError({
						title: "Government ID verification is not complete",
						message: "Please finish your ID verification to continue",
						showErrorBox: true,
					});
					return;
				}
				nextStep();
			}}
		>
			<p className="text-4xl font-tertiary">1. Verify your Real Name</p>
			<p className="text-[#777777] font-normal text-xs">(This is the name on a Government Issued ID)</p>

			<input
				className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] px-4 py-2 mt-4 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777]"
				id="artistRealName"
				name="artistRealName"
				type="text"
				value={user.attributes.name}
				readOnly
			/>
			<p className="text-[#777777] mt-1 font-normal text-xs">
				The name displayed above is associated with your account on Musixverse. <br />
				Visit&nbsp;
				<Link href="/settings/profile-settings" passHref>
					<a className="text-primary-200 hover:text-primary-300 hover:underline">Profile Settings</a>
				</Link>
				&nbsp;if you want to change this.
			</p>

			<p className="text-4xl font-tertiary mt-16">2. Verify your Stage Name</p>
			<div className="w-2/3 text-sm mt-2">Is your stage name different from your real name?</div>
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
				<div className="w-2/3 flex flex-col text-xs">
					<p className="text-sm font-semibold font-secondary">Enter your stage name</p>
					<div className="flex mt-1">
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
							required
						/>
						<VerificationButton
							onClick={() => {
								setLoading(true);
								if (artistStageName == "") {
									setIsStageNameDifferent(false);
								}
								setStageName({
									onSuccess: async (object) => {
										setArtistStageNameSave(true);
										setLoading(false);
									},
									onError: (error) => {
										console.log("setStageName Error:", error);
										setLoading(false);
									},
								});
							}}
							verifiedStatus={artistStageNameSave}
							buttonText="Save"
							verifiedText="Saved"
						/>
					</div>
				</div>
			)}

			<p className="text-4xl font-tertiary mt-16 mb-2">3. Verify Government Issued ID</p>

			<VerificationButton
				onClick={() => setIsVerificationModalOpen(true)}
				verifiedStatus={personaInquiryIdData ? personaInquiryIdData.isPersonaVerified : false}
				buttonText="Verify"
				verifiedText="Verified successfully"
			/>

			<div className="flex justify-center mt-20">
				<button
					type="submit"
					verifiedStatus={false}
					className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
				>
					Continue
				</button>
			</div>

			<PersonaVerification isOpen={isVerificationModalOpen} onClose={() => setIsVerificationModalOpen(false)} />
		</form>
	);
};

export default NameAndIdVerification;
