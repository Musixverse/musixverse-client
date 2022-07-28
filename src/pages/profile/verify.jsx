import { useState } from "react";
import PersonaVerification from "../../components/Profile/Verification/PersonaVerification";

const Verify = () => {
	const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col p-40">
				<p className="text-4xl font-semibold text-center">Artist Verification</p>
				<div className="mt-4">
					<p className="text-4xl font-tertiary mt-16">1. KYC</p>
					<button
						onClick={() => setIsVerificationModalOpen(true)}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
					>
						Verify your profile
					</button>
					ArtistVerification Table.
					<p className="text-4xl font-tertiary mt-16">2. Connect your Twitter account</p>
					<button
						onClick={() => {}}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
					>
						Connect Account
					</button>
					<p className="text-4xl font-tertiary mt-16">3. Tweet from your account</p>
					<div>
						If your stage name is different from your real name, provide proof that you are the person who goes by that stage name. You need to do a
						Tweet to verify that your stage name is the same as on Musixverse.
					</div>
					<button
						onClick={() => {}}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100"
					>
						Send a Tweet
					</button>
				</div>
			</div>
			<PersonaVerification isOpen={isVerificationModalOpen} onClose={() => setIsVerificationModalOpen(false)} />
		</>
	);
};

export default Verify;
