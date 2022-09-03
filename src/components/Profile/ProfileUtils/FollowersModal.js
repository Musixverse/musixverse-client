import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import Image from "next/image";
import Link from "next/link";
import Modal from "../../../layout/Modal/Modal";
import LoadingContext from "../../../../store/loading-context";

export default function FollowersModal({ isOpen, setOpen, name, username }) {
	const router = useRouter();
	const [followers, setFollowers] = useState([]);
	const [, setLoading] = useContext(LoadingContext);

	const { user, Moralis } = useMoralis();

	const { fetch: fetchFollowers } = useMoralisCloudFunction("fetchFollowers", { username: username }, { autoFetch: false });

	const removeFollower = async (followerUsername) => {
		setLoading(true);
		await Moralis.Cloud.run("removeFollower", { username: followerUsername }).then(async () => {
			await fetchFollowers({
				onSuccess: (data) => {
					setFollowers(data);
				},
				onError: (error) => {
					console.log("fetchFollowers Error:", error);
				},
			});
			setLoading(false);
		});
	};

	useEffect(() => {
		if (isOpen) {
			fetchFollowers({
				onSuccess: (data) => {
					setFollowers(data);
				},
				onError: (error) => {
					console.log("fetchFollowers Error:", error);
				},
			});
		}
	}, [isOpen, fetchFollowers]);

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-6xl">
					<label className="flex justify-center items-center w-14 h-14 border-2 rounded-full border-primary-200">
						<i className="fa-solid fa-users text-2xl text-primary-200"></i>
					</label>
				</div>
			}
			title={<div>{name}&apos;s Followers</div>}
			content={
				<div className="flex flex-col space-y-1 max-h-[400px] overflow-y-scroll px-2">
					{followers && followers.length > 0 ? (
						followers.map((follower) => {
							return (
								<div key={follower.objectId} className="flex p-2 rounded hover:bg-light-200 dark:hover:bg-dark-200">
									<Link href={`/profile/${follower.username}`} passHref>
										<a target="_blank" rel="noopener noreferrer" className="w-full flex text-start cursor-pointer">
											<Image src={follower.avatar} className="rounded" height={50} width={50} alt="NFT Artwork" />
											<div className="w-full flex justify-between">
												<div className="flex flex-col place-content-between">
													<p className="ml-4 text-sm font-semibold">{follower.name}</p>
													<p className="ml-4 text-xs items-end">@{follower.username}</p>
												</div>
											</div>
										</a>
									</Link>
									{user && username === user.attributes.username && (
										<div className="self-center pl-2">
											<div
												onClick={() => removeFollower(follower.username)}
												className="py-1 px-3 flex justify-center items-center rounded transition-all duration-200 cursor-pointer bg-zinc-500/20 hover:bg-error-100/20"
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
				router.push(`/profile/${username}`, undefined, { shallow: true });
			}}
		></Modal>
	);
}
