import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { meta_description } from "@/config/constants";

const VerificationRequested = () => {
	const { user } = useMoralis();
	const { data: artistVerificationInfo } = useMoralisCloudFunction("getVerificationInfo");

	const router = useRouter();
	useEffect(() => {
		if (user && user.attributes.isArtistVerified) {
			router.push(`/profile/${user.attributes.username}`);
			return;
		}
		if (user && !user.attributes.isArtist) {
			router.push(`/profile/${user.attributes.username}`);
		}
	}, [user]);

	return (
		<>
			<Head>
				<title>Musixverse | Verification Requested</title>
				<meta name="description" content={meta_description} />
			</Head>

			<div className="flex flex-col py-40 md:px-40 px-4 pb-32 items-center">
				<p className="text-4xl font-semibold text-center">Artist Verification</p>

				<div className="w-full md:w-2/3 mt-10 p-8 md:p-14 bg-light-300 dark:bg-dark-500 justify-center rounded-xl">
					<div className="p-10 bg-light-100 dark:bg-dark-700 rounded-lg">
						<p className="text-4xl font-tertiary text-center">Verification Pending...</p>
						<p className="mt-16">
							<b>Stage Name:</b> {user ? user.attributes.name : null}
						</p>
						{artistVerificationInfo && artistVerificationInfo.artistRealName && (
							<p>
								<b>Real Name:</b> {artistVerificationInfo.artistRealName}
							</p>
						)}
						{artistVerificationInfo && artistVerificationInfo.instagramHandle && (
							<p>
								<b>Instagram Handle:</b> {artistVerificationInfo.instagramHandle ? "@" + artistVerificationInfo.instagramHandle : ""}
							</p>
						)}
						{artistVerificationInfo && artistVerificationInfo.songLink && (
							<p>
								<b>Song Link:</b>&nbsp;
								<a
									href={artistVerificationInfo.songLink}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline hover:text-primary-400"
								>
									{artistVerificationInfo.songLink}
								</a>
							</p>
						)}

						<p className="text-[#777777] font-normal text-sm text-center mt-16">Please note that profile verification can take up to 24 hours</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default VerificationRequested;
