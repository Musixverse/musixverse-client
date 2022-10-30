import { useState, useContext } from "react";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import PersonaVerification from "./PersonaVerification";
import ConnectionButton from "../../../layout/ConnectionButton";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";

const NameAndIdVerification = ({
	nextStep,
	isRealNameDifferent,
	setIsRealNameDifferent,
	artistRealName,
	setArtistRealName,
	artistRealNameSave,
	setArtistRealNameSave,
	personaInquiryIdData,
}) => {
	const { user } = useMoralis();
	const [, , , setError] = useContext(StatusContext);
	const [, setLoading] = useContext(LoadingContext);

	const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

	const { fetch: setRealName } = useMoralisCloudFunction(
		"setArtistRealName",
		{ userId: user ? user.id : null, artistRealName: artistRealName },
		{ autoFetch: false }
	);

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
				setRealName({
					onSuccess: async (object) => {
						setArtistRealNameSave(true);
						setLoading(false);
					},
					onError: (error) => {
						console.log("setRealName Error:", error);
						setLoading(false);
					},
				});
				nextStep();
			}}
		>
			<p className="text-4xl font-tertiary">1. Verify your Stage Name</p>
			<input
				className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] px-4 py-2 mt-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777]"
				id="artistRealName"
				name="artistRealName"
				type="text"
				value={user ? user.attributes.name : null}
				readOnly
			/>
			<p className="text-[#777777] mt-2 font-normal text-xs">
				The name displayed above is associated with your account on Musixverse. <br />
				Visit&nbsp;
				<Link href="/settings/profile-settings" passHref>
					<a className="text-primary-600 hover:text-primary-700 hover:underline">Profile Settings</a>
				</Link>
				&nbsp;if you want to change this.
			</p>

			<p className="text-4xl font-tertiary mt-16">2. Verify your Real Name</p>
			<p className="text-[#777777] font-normal text-xs">(This is the name on a Government Issued ID)</p>
			<div className="w-2/3 text-sm mt-2">Is your real name different from your stage name?</div>
			<div className="flex flex-col mb-6">
				<div className="flex items-center mt-2 space-x-10">
					<div className="flex items-center">
						<input
							id="isRealNameDifferent"
							onChange={(e) => {
								setIsRealNameDifferent(true);
							}}
							type="radio"
							name="radio"
							checked={isRealNameDifferent}
							className="hidden"
						/>
						<label htmlFor="isRealNameDifferent" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
							<span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
							Yes
						</label>
					</div>
					<div className="flex items-center">
						<input
							id="isRealNameSame"
							type="radio"
							onChange={(e) => {
								setIsRealNameDifferent(false);
								setArtistRealName("");
								setArtistRealNameSave(false);
							}}
							name="radio"
							checked={!isRealNameDifferent}
							className="hidden"
						/>
						<label htmlFor="isRealNameSame" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
							<span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
							No
						</label>
					</div>
				</div>
			</div>

			{isRealNameDifferent && (
				<div className="w-2/3 flex flex-col text-xs">
					<p className="text-sm font-semibold font-secondary">Enter your real name</p>
					<div className="flex mt-1">
						<input
							className="mr-4 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
							id="artistRealName"
							name="artistRealName"
							type="text"
							placeholder="Your real name"
							autoComplete="off"
							value={artistRealName}
							onChange={(e) => {
								setArtistRealName(e.target.value);
							}}
							onClick={() => {
								setArtistRealNameSave(false);
							}}
							required
						/>
						<ConnectionButton
							onClick={() => {
								setLoading(true);
								if (artistRealName == "") {
									setIsRealNameDifferent(false);
								}
								setRealName({
									onSuccess: async (object) => {
										setArtistRealNameSave(true);
										setLoading(false);
									},
									onError: (error) => {
										console.log("setRealName Error:", error);
										setLoading(false);
									},
								});
							}}
							connectionStatus={artistRealNameSave}
							buttonText="Save"
							verifiedText="Saved"
						/>
					</div>
				</div>
			)}

			<p className="text-4xl font-tertiary mt-16 mb-2">3. Verify Government Issued ID</p>

			<ConnectionButton
				onClick={() => setIsVerificationModalOpen(true)}
				connectionStatus={personaInquiryIdData ? personaInquiryIdData.isPersonaVerified : false}
				buttonText="Verify"
				verifiedText="Verified successfully"
			/>

			<div className="flex justify-center mt-20">
				<button
					type="submit"
					connectionStatus={false}
					className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-600 hover:bg-primary-700 text-light-100"
				>
					Continue
				</button>
			</div>

			<PersonaVerification isOpen={isVerificationModalOpen} onClose={() => setIsVerificationModalOpen(false)} />
		</form>
	);
};

export default NameAndIdVerification;
