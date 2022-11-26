import { useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";

const SendUsADM = ({
	nextStep,
	prevStep,
	songLink,
	setSongLink,
	isRealNameDifferent,
	realNameDifferentTextMessage,
	realNameSameTextMessage,
	setVerificationRequestSubmittedModalOpen,
}) => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	const songLinkRef = useRef(null);

	const { fetch: setArtistSongLink } = useMoralisCloudFunction(
		"setArtistSongLink",
		{ userId: user ? user.id : null, songLink: songLink },
		{ autoFetch: false }
	);
	const { fetch: getArtistSongLink } = useMoralisCloudFunction("getArtistSongLink");
	const { fetch: requestForVerification } = useMoralisCloudFunction("requestForVerification", { autoFetch: false });

	useEffect(() => {
		if (user) {
			getArtistSongLink({
				onSuccess: async (object) => {
					setSongLink(object);
				},
				onError: (error) => {
					console.log("getArtistSongLink Error:", error);
				},
			});
		}
	}, [user, getArtistSongLink]);

	return (
		<div>
			<Head>
				<title>Musixverse | Artist Profile Verification</title>
				<meta name="description" content="The NFT Marketplace for Musicians and Fans" />
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</Head>

			<form
				onSubmit={async (e) => {
					e.preventDefault();
					setLoading({
						status: true,
					});
					if (songLinkRef.current.value === "") {
						setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						setError({
							title: "Song link is missing",
							message: "Please provide a link to any of your song",
							showErrorBox: true,
						});
						songLinkRef.current.focus();
						return;
					} else {
						await setArtistSongLink({
							onSuccess: async (object) => {
								await requestForVerification({
									onSuccess: async (object) => {
										if (object) {
											setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
											setVerificationRequestSubmittedModalOpen(true);
										}
									},
									onError: (error) => {
										setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
										console.log("requestForVerification Error:", error);
									},
								});
							},
							onError: (error) => {
								console.log("setArtistSongLink Error:", error);
								setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
							},
						});
					}
				}}
			>
				<p className="text-4xl font-tertiary">4. Song link</p>
				<p className="text-[#777777] font-normal text-sm mb-2">
					Please provide a link to any of your song (Eg. Spotify link, Amazon Music link, YouTube link, etc.)
				</p>
				<input
					className="w-1/2 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
					id="songLink"
					name="songLink"
					type="url"
					placeholder="Please enter a song link"
					autoComplete="off"
					ref={songLinkRef}
					value={songLink}
					onChange={(e) => {
						setSongLink(e.target.value);
					}}
					required
				/>

				<p className="text-4xl font-tertiary mt-16">5. Send us a DM</p>
				<p className="text-[#777777] font-normal text-sm">This is required to verify that you are a real person</p>

				<p className="text-xl font-semibold font-primary mt-4">DM us on Twitter</p>
				<div className="flex w-fit mt-1">
					<Link href="https://twitter.com/messages/compose?recipient_id=1473961193618378753&ref_src=twsrc%5Etfw" passHref>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="twitter-dm-button"
							data-size="large"
							data-text={isRealNameDifferent ? realNameDifferentTextMessage : realNameSameTextMessage}
							data-screen-name="musixverse"
							data-show-count="false"
						></a>
					</Link>
				</div>

				<div className="w-1/4 flex justify-center items-center text-[#777777] text-sm my-4">or</div>

				<p className="text-xl font-semibold font-primary">DM us on Instagram</p>
				<button
					onClick={() => {
						if (songLinkRef.current.value === "") {
							setError({
								title: "Song link is missing",
								message: "Please provide a link to any of your song",
								showErrorBox: true,
							});
							songLinkRef.current.focus();
							return;
						}
						nextStep();
					}}
					className="instagram text-light-200 text-[12.5px] px-4 py-1 rounded-2xl mt-1"
				>
					<i className="fab fa-instagram fa-lg mr-2"></i>Message @musixverse
				</button>

				<p className="text-[#777777] font-normal text-sm mt-16 text-center">Please click the submit button only after you have sent the DM</p>

				<div className="w-full flex justify-center">
					<div className="w-2/5 flex justify-between mt-10">
						<button
							onClick={() => prevStep()}
							type="button"
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
		</div>
	);
};

export default SendUsADM;
