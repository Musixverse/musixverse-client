import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import Link from "next/link";

const InstagramVerificationRequested = () => {
	const { user } = useMoralis();
	const { data: instagramHandle } = useMoralisCloudFunction("getInstagramUsername");

	return (
		<div className="flex flex-col p-40 pb-32 items-center">
			<p className="text-4xl font-semibold text-center">Artist Verification</p>
			<div className="w-2/3 mt-10 p-14 bg-light-300 justify-center rounded-xl">
				<div className="p-10 bg-light-100 rounded-lg">
					<p className="text-3xl font-tertiary text-center">Instagram Verification Pending...</p>
					<p className="mt-6">
						<b>Real Name:</b> {user.attributes.name}
					</p>
					<p>
						<b>Instagram Handle:</b> {instagramHandle ? "@" + instagramHandle : ""}
					</p>

					<div className="mt-16">
						<p className="text-[#777777] font-normal text-sm text-center">
							Please note that instagram verification can take up to five business days
						</p>
						<p className="text-[#777777] font-normal text-sm text-center mt-4">
							Use the&nbsp;
							<Link href="/profile/verify?step=2" passHref>
								<span className="text-primary-200 hover:underline cursor-pointer">Twitter verification method</span>
							</Link>
							&nbsp;for instant verification
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstagramVerificationRequested;
