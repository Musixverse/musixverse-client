import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import Image from "next/image";
import Link from "next/link";
import Modal from "../../../layout/Modal/Modal";
import LoadingContext from "../../../../store/loading-context";

export default function FollowersModal({ isOpen, setOpen, username, isBand }) {
	const router = useRouter();
	const [followers, setFollowers] = useState([]);
	const [, setLoading] = useContext(LoadingContext);

	const { user, Moralis } = useMoralis();

	const { fetch: fetchFollowers } = useMoralisCloudFunction("fetchFollowers", { username: username }, { autoFetch: false });
	const { fetch: fetchBandFollowers } = useMoralisCloudFunction("fetchBandFollowers", { username: username }, { autoFetch: false });

	const removeFollower = async (followerUsername) => {
		setLoading({
			status: true,
			title: "Removing Follower...",
		});
		await Moralis.Cloud.run("removeFollower", { username: followerUsername }).then(async () => {
			await fetchFollowers({
				onSuccess: (data) => {
					setFollowers(data);
				},
				onError: (error) => {
					console.log("fetchFollowers Error:", error);
				},
			});
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
		});
	};

	useEffect(() => {
		if (isOpen) {
			if (isBand) {
				fetchBandFollowers({
					onSuccess: (data) => {
						setFollowers(data);
					},
					onError: (error) => {
						console.log("fetchBandFollowers Error:", error);
					},
				});
			} else {
				fetchFollowers({
					onSuccess: (data) => {
						setFollowers(data);
					},
					onError: (error) => {
						console.log("fetchFollowers Error:", error);
					},
				});
			}
		}
	}, [isOpen, isBand, fetchFollowers, fetchBandFollowers]);

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="relative flex items-center justify-center w-24 h-24 mx-auto text-6xl">
					<label className="flex items-center justify-center border-2 rounded-full w-14 h-14 border-primary-600">
						<i className="text-2xl fa-solid fa-users text-primary-600"></i>
					</label>
				</div>
			}
			title={"Followers"}
			content={
				<div className="flex flex-col space-y-1 max-h-[400px] overflow-y-scroll px-2">
					{followers && followers.length > 0 ? (
						followers.map((follower) => {
							return (
								<div key={follower.username} className="flex p-2 rounded hover:bg-light-200 dark:hover:bg-dark-800">
									<Link href={`/profile/${follower.username}`} passHref>
										<a className="flex w-full cursor-pointer text-start">
											<Image src={follower.avatar} className="rounded" height={50} width={50} alt="NFT Artwork" />
											<div className="flex justify-between w-full">
												<div className="flex flex-col place-content-between">
													<p className="ml-4 text-sm font-semibold">{follower.name}</p>
													<p className="items-end ml-4 text-xs">@{follower.username}</p>
												</div>
											</div>
										</a>
									</Link>

									{user && username === user.attributes.username && !isBand && (
										<div className="self-center pl-2">
											<div
												onClick={() => removeFollower(follower.username)}
												className="flex items-center justify-center px-3 py-1 transition-all duration-200 rounded cursor-pointer bg-zinc-500/20 hover:bg-error-600/60"
											>
												Remove
											</div>
										</div>
									)}
								</div>
							);
						})
					) : (
						<div>No followers to show</div>
					)}
				</div>
			}
			onClose={() => {
				setOpen(false);
				{
					!isBand
						? router.push(`/profile/${username}`, undefined, { shallow: true })
						: router.push(`/profile/band/${username}`, undefined, { shallow: true });
				}
			}}
		></Modal>
	);
}
