import { useState, useEffect, useContext } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import Link from "next/link";
import ConnectionButton from "../../../layout/ConnectionButton";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";

const InstagramVerification = ({
	prevStep,
	artistRealName,
	realNameDifferentTextMessage,
	realNameSameTextMessage,
	songLink,
	setVerificationRequestSubmittedModalOpen,
}) => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);

	const [instagramHandle, setInstagramHandle] = useState("");
	const [instagramHandleSave, setInstagramHandleSave] = useState(false);

	const { fetch: setArtistSongLink } = useMoralisCloudFunction(
		"setArtistSongLink",
		{ userId: user ? user.id : null, songLink: songLink },
		{ autoFetch: false }
	);
	const { fetch: setInstagramUsername } = useMoralisCloudFunction("setInstagramUsername", { instagramHandle: instagramHandle }, { autoFetch: false });
	const { fetch: getInstagramUsername } = useMoralisCloudFunction("getInstagramUsername");
	const { fetch: requestForVerification } = useMoralisCloudFunction("requestForVerification", { autoFetch: false });

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
				await setArtistSongLink({
					onSuccess: async (object) => {
						setLoading(false);
					},
					onError: (error) => {
						console.log("setArtistSongLink Error:", error);
						setLoading(false);
					},
				});
				await requestForVerification({
					onSuccess: async (object) => {
						if (object) {
							setLoading(false);
							setVerificationRequestSubmittedModalOpen(true);
						}
					},
					onError: (error) => {
						setLoading(false);
						console.log("requestForVerification Error:", error);
					},
				});
			}}
		>
			<p className="text-4xl font-tertiary mb-2">Instagram Verification</p>

			<p className="text-sm font-semibold font-secondary mt-6">Instagram Handle</p>

			<div className="w-2/3 flex mt-1">
				<span className="absolute ml-3 mt-2">@</span>
				<input
					className="mr-4 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full pl-8 pr-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
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
				<ConnectionButton
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
					connectionStatus={instagramHandleSave}
					buttonText="Save"
					verifiedText="Saved"
				/>
			</div>

			{instagramHandle && instagramHandleSave && (
				<>
					<div className="p-10 bg-light-100 dark:bg-dark-600 rounded-lg mt-8">
						<p className="text-3xl font-tertiary text-center">Musixverse Profile Verification</p>
						<p className="mt-10">
							<b>Stage Name:</b> {user ? user.attributes.name : null}
						</p>
						{artistRealName && (
							<p>
								<b>Real Name:</b> {artistRealName}
							</p>
						)}
						<p>
							<b>Instagram Handle:</b> {instagramHandle ? "@" + instagramHandle : ""}
						</p>
						{artistRealName ? (
							<p
								className="mt-8"
								dangerouslySetInnerHTML={{ __html: realNameDifferentTextMessage.replace(new RegExp("\r?\n", "g"), "<br />") }}
							></p>
						) : (
							<p className="mt-8" dangerouslySetInnerHTML={{ __html: realNameSameTextMessage.replace(new RegExp("\r?\n", "g"), "<br />") }}></p>
						)}
					</div>

					<div className="mt-16">
						<p className="text-center">
							Click a picture of above text and send a DM to&nbsp;
							<Link href="https://www.instagram.com/musixverse/" passHref>
								<a target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 hover:underline">
									@musixverse
								</a>
							</Link>
							&nbsp;on Instagram
						</p>
						<p className="mt-16">
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
				<div className="w-2/5 flex justify-between mt-14">
					<button
						onClick={() => prevStep()}
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 dark:bg-[#323232] hover:bg-gray-200 text-primary-500"
					>
						Back
					</button>
					<button
						type="submit"
						className="flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-600 hover:bg-primary-700 text-light-100"
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default InstagramVerification;
