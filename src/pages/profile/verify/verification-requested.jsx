import { useMoralis, useMoralisCloudFunction } from "react-moralis";

const VerificationRequested = () => {
	const { user } = useMoralis();
	const { data: artistVerificationInfo } = useMoralisCloudFunction("getVerificationInfo");

	return (
		<div className="flex flex-col p-40 pb-32 items-center">
			<p className="text-4xl font-semibold text-center">Artist Verification</p>
			<div className="w-2/3 mt-10 p-14 bg-light-300 justify-center rounded-xl">
				<div className="p-10 bg-light-100 rounded-lg">
					<p className="text-4xl font-tertiary text-center">Verification Pending...</p>
					<p className="mt-16">
						<b>Stage Name:</b> {user.attributes.name}
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
							<b>Song Link:</b> {artistVerificationInfo.songLink}
						</p>
					)}

					<p className="text-[#777777] font-normal text-sm text-center mt-16">Please note that profile verification can take up to 24 hours</p>
				</div>
			</div>
		</div>
	);
};

export default VerificationRequested;