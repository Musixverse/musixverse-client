import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { useMoralis } from "react-moralis";
import Modal from "../../../layout/Modal/Modal";
import { bytesToMegaBytes } from "../../../utils/Convert";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import { updateCommentOnToken } from "../../../utils/smart-contract/functions";
import UpdateCommentSuccessModal from "./UpdateCommentSuccessModal";

const UnlockableContentModal = ({ isOpen, setOpen, tokenId, selectedUnlockableItemIndex, selectedUnlockableItem }) => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	const [comment, setComment] = useState("");
	const [updateCommentSuccess, setUpdateCommentSuccess] = useState(false);

	const postComment = async (e) => {
		e.preventDefault();

		if (user.attributes.authMethod == "magicLink") {
			setLoading({
				status: true,
				title: "Please wait while your comment is updating...",
			});
		} else {
			setLoading({
				status: true,
				title: "Please sign the transaction in your wallet...",
			});
		}
		try {
			await updateCommentOnToken(tokenId, comment);
			setOpen(false);
			setComment("");
			await fetch(`/api/revalidate-track?path=${window.location.pathname}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			setUpdateCommentSuccess(true);
		} catch (err) {
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			setOpen(false);
			if (err.message && err.message.startsWith("underlying network changed")) {
				await postComment(e);
			}
			if (err.title === "User is not connected to the same wallet") {
				setError({
					title: err.title,
					message: err.message,
					showErrorBox: true,
				});
			}
		}
	};

	return (
		<>
			<Modal
				isOpen={isOpen}
				classes="max-w-[48rem]"
				image={
					<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-5xl text-primary-500">
						<i className="fa-solid fa-lock-open"></i>
					</div>
				}
				title={selectedUnlockableItem && selectedUnlockableItemIndex === 0 ? selectedUnlockableItem.name : selectedUnlockableItem.unlockableHeading}
				content={
					<div className={"text-justify whitespace-pre-wrap " + (selectedUnlockableItemIndex !== 3 && "max-h-[500px] overflow-y-scroll pr-4")}>
						{selectedUnlockableItemIndex === 0 ? (
							selectedUnlockableItem && selectedUnlockableItem.unlockableItemText
						) : selectedUnlockableItemIndex === 3 ? (
							<>
								<form onSubmit={postComment}>
									<textarea
										className="mt-2 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full p-3 text-base border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
										type="text"
										placeholder="Type your comment..."
										autoComplete="off"
										rows="6"
										value={comment}
										onChange={(e) => setComment(e.target.value)}
										required
									/>
									<div className="flex justify-end">
										<button
											type="submit"
											className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-primary-500 hover:bg-primary-600 text-light-100"
										>
											Post
											<span className="ml-3 text-lg">
												<i className="fa-solid fa-arrow-right-long"></i>
											</span>
										</button>
									</div>
								</form>
							</>
						) : selectedUnlockableItemIndex === 4 ? (
							<>
								{selectedUnlockableItem.unlockableItemData && selectedUnlockableItem.unlockableItemData.length > 0 && (
									<div className="selected-unlockable-content-div">
										{selectedUnlockableItem.unlockableItemData.map((item, index) => {
											return (
												<div key={item.file.name} className="flex">
													<div className="selected-unlockable-content-item">
														<Link href={item.ipfsUrl} passHref>
															<a target="_blank" rel="noopener noreferrer" className="-mb-1 relative w-[100px] h-[100px]">
																<Image
																	src={item.ipfsUrl}
																	alt="unlockable image"
																	className="object-contain rounded"
																	fill
																	quality={50}
																/>
															</a>
														</Link>
														<span className="selected-unlockable-content-span">
															{item.file && item.file.name && item.file.name}
														</span>
														{item.file.size && (
															<>
																({bytesToMegaBytes(item.file.size)}
																&nbsp;MB)
															</>
														)}
													</div>
												</div>
											);
										})}
									</div>
								)}
							</>
						) : selectedUnlockableItemIndex === 5 ? (
							<>
								{selectedUnlockableItem.unlockableItemData && selectedUnlockableItem.unlockableItemData.length > 0 && (
									<div className="selected-unlockable-content-div">
										{selectedUnlockableItem.unlockableItemData.map((item, index) => {
											return (
												<div key={item.file.name} className="flex">
													<div className="selected-unlockable-content-item">
														<Link href={item.ipfsUrl} passHref>
															<a target="_blank" rel="noopener noreferrer">
																<i className="fa-solid fa-record-vinyl text-6xl"></i>
															</a>
														</Link>
														<span className="selected-unlockable-content-span">
															{item.file && item.file.name && item.file.name}
														</span>
														{item.file.size && (
															<>
																({bytesToMegaBytes(item.file.size)}
																&nbsp;MB)
															</>
														)}
													</div>
												</div>
											);
										})}
									</div>
								)}
							</>
						) : selectedUnlockableItemIndex === 6 ? (
							<>
								{selectedUnlockableItem.unlockableItemData && selectedUnlockableItem.unlockableItemData.length > 0 && (
									<div className="selected-unlockable-content-div">
										{selectedUnlockableItem.unlockableItemData.map((item, index) => {
											return (
												<div key={item.file.name} className="flex">
													<div className="selected-unlockable-content-item">
														<Link href={item.ipfsUrl} passHref>
															<a target="_blank" rel="noopener noreferrer" className="-mb-1">
																<Image src={"/assets/video.png"} height={60} width={60} alt="unlockable video" />
															</a>
														</Link>
														<span className="selected-unlockable-content-span">
															{item.file && item.file.name && item.file.name}
														</span>
														{item.file.size && (
															<>
																({bytesToMegaBytes(item.file.size)}
																&nbsp;MB)
															</>
														)}
													</div>
												</div>
											);
										})}
									</div>
								)}
							</>
						) : null}
					</div>
				}
				onClose={() => {
					setOpen(false);
				}}
			></Modal>
			<UpdateCommentSuccessModal isOpen={updateCommentSuccess} />
		</>
	);
};

export default UnlockableContentModal;
