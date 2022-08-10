import { useState, useEffect, useContext } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import Link from "next/link";
import { useRouter } from "next/router";
import VerificationButton from "./VerificationButton";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";
import { sleep } from "../../../utils/Sleep";

const InstagramManualVerification = ({ prevStep, artistStageName, stageNameDifferentTextMessage, stageNameSameTextMessage }) => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , setSuccess, setError] = useContext(StatusContext);
	const router = useRouter();

	const [instagramHandle, setInstagramHandle] = useState("");
	const [instagramHandleSave, setInstagramHandleSave] = useState(false);

	const { fetch: setInstagramUsername } = useMoralisCloudFunction("setInstagramUsername", { instagramHandle: instagramHandle }, { autoFetch: false });
	const { fetch: getInstagramUsername } = useMoralisCloudFunction("getInstagramUsername");
	const { fetch: requestForInstagramVerification } = useMoralisCloudFunction("requestForInstagramVerification", { autoFetch: false });

	useEffect(() => {
		if (user) {
			getInstagramUsername({
				onSuccess: async (object) => {
					setInstagramHandle(object);
					if (object) {
						setInstagramHandleSave(true);
					}
				},
				onError: (error) => {
					console.log("getInstagramUsername Error:", error);
				},
			});
		}
	}, [user]);

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				setLoading(true);
				if (!instagramHandle || !instagramHandleSave) {
					setLoading(false);
					setError({
						title: "Instagram username is missing",
						message: "Please enter and save your instagram username to continue",
						showErrorBox: true,
					});
					return;
				}
				requestForInstagramVerification({
					onSuccess: async (object) => {
						if (object) {
							setLoading(false);
							setSuccess({
								title: "Request initiated for manual verification",
								message:
									"Hang tight. We will soon reach out to let you know about your verification status. You'll be redirected to your profile page now",
								showSuccessBox: true,
							});
							await sleep(4000);
							router.replace(`/profile/${user.attributes.username}`, undefined, { shallow: true });
						}
					},
					onError: (error) => {
						setLoading(false);
						console.log("getInstagramUsername Error:", error);
					},
				});
			}}
		>
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
					required
				/>
				<VerificationButton
					onClick={() => {
						setLoading(true);
						setInstagramUsername({
							onSuccess: async (object) => {
								setInstagramHandleSave(true);
								setLoading(false);
							},
							onError: (error) => {
								console.log("setInstagramUsername Error:", error);
								setLoading(false);
							},
						});
					}}
					verifiedStatus={instagramHandleSave}
					buttonText="Save"
					verifiedText="Saved"
				/>
			</div>

			{instagramHandle && instagramHandleSave && (
				<>
					<div className="p-10 bg-light-100 rounded-lg mt-8">
						<p className="text-3xl font-tertiary text-center">Musixverse Profile Verification</p>
						<p className="mt-6">
							<b>Real Name:</b> {user.attributes.name}{" "}
						</p>
						{artistStageName && (
							<p>
								<b>Stage Name:</b> {artistStageName}
							</p>
						)}
						<p>
							<b>Instagram Handle:</b> {instagramHandle ? "@" + instagramHandle : ""}
						</p>
						{artistStageName ? (
							<p
								className="mt-4"
								dangerouslySetInnerHTML={{ __html: stageNameDifferentTextMessage.replace(new RegExp("\r?\n", "g"), "<br />") }}
							></p>
						) : (
							<p className="mt-4" dangerouslySetInnerHTML={{ __html: stageNameSameTextMessage.replace(new RegExp("\r?\n", "g"), "<br />") }}></p>
						)}
					</div>

					<div className="mt-6">
						<p className="text-center">
							Click a picture of above text and send a DM to&nbsp;
							<Link href="https://www.instagram.com/musixverse/" passHref>
								<a target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-primary-300 hover:underline">
									@musixverse
								</a>
							</Link>
							&nbsp;on Instagram
						</p>
						<p className="text-[#777777] font-normal text-sm text-center">
							Please note that instagram verification can take up to five business days
						</p>
						<p className="text-[#777777] font-normal text-sm text-center mt-4">
							Use the&nbsp;
							<span className="text-primary-200 hover:underline cursor-pointer" onClick={() => prevStep()}>
								Twitter verification method
							</span>
							&nbsp;for instant verification
						</p>
						<p className="mt-8">
							<input id="confirm-instagram-verification-picture-sent" type="checkbox" className="cursor-pointer" required />
							&nbsp;&nbsp;
							<label htmlFor="confirm-instagram-verification-picture-sent" className="cursor-pointer">
								I confirm that the information above is accurate and I have sent a picture of the above text to @musixverse on Instagram.
							</label>
						</p>
					</div>
				</>
			)}

			<div className="w-full flex justify-center">
				<div className="w-3/5 flex justify-between mt-14">
					<button
						onClick={() => prevStep()}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 hover:bg-gray-200 text-primary-100"
					>
						Back to Twitter Verification
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
	);
};

export default InstagramManualVerification;
