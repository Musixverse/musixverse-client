import { useState } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import VerificationButton from "./VerificationButton";

const InstagramManualVerification = ({ prevStep, artistStageName }) => {
	const { user } = useMoralis();

	const [instagramHandle, setInstagramHandle] = useState("");
	const [instagramHandleSave, setInstagramHandleSave] = useState(false);

	return (
		<>
			<p className="text-4xl font-tertiary mb-2">4. Manual Verification</p>

			<p className="text-sm font-semibold font-secondary mt-6">Instagram Handle</p>

			<div className="w-2/3 flex mt-1">
				<span className="absolute ml-3 mt-2">@</span>
				<input
					className="mr-4 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full pl-8 pr-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
					id="instagramHandle"
					name="instagramHandle"
					type="text"
					placeholder="Your instagram username"
					autoComplete="off"
					value={instagramHandle}
					onChange={(e) => {
						setInstagramHandle(e.target.value);
					}}
					onClick={() => {
						setInstagramHandleSave(false);
					}}
				/>
				<VerificationButton onClick={() => setInstagramHandleSave(true)} verifiedStatus={instagramHandleSave} buttonText="Save" verifiedText="Saved" />
			</div>

			<div className="p-10 bg-light-100 rounded-lg mt-8">
				<p className="text-3xl font-tertiary text-center">Musixverse Profile Verification</p>
				<p className="mt-6">
					<b>Real Name:</b> {user.attributes.name}{" "}
				</p>
				<p>
					<b>Stage Name:</b> {artistStageName ? artistStageName : user.attributes.name}{" "}
				</p>
				<p>
					<b>Instagram Handle:</b> {instagramHandle ? "@" + instagramHandle : ""}
				</p>
			</div>

			<div className="mt-6">
				<p className="text-center">
					Click a picture of above text and send a DM to&nbsp;
					<Link href="https://www.instagram.com/musixverse/" passHref>
						<a target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-primary-300 hover:underline">
							@musixverse
						</a>
					</Link>
					&nbsp;on Instagram.
				</p>
				<p className="mt-8">
					<input type="checkbox" /> I confirm that the information above is accurate.
				</p>
			</div>

			<div className="w-full flex justify-center">
				<div className="w-3/5 flex justify-between mt-14">
					<button
						onClick={() => prevStep()}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 hover:bg-gray-200 text-primary-100"
					>
						Back to Twitter Verification
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

export default InstagramManualVerification;
