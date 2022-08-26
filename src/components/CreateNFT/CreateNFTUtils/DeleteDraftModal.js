const { Fragment, useState, useEffect } = require("react");
import Image from "next/image";
const { Transition } = require("@headlessui/react");
import { useMoralis, useMoralisCloudFunction } from "react-moralis";

export default function DeleteDraftModal({ isOpen = "", onClose = "", draftToDelete = "", deleteDraft = "" }) {
	const { user } = useMoralis();

	const [isModalOpen, setIsModalOpen] = useState(isOpen);
	const { data: selectedDraft } = useMoralisCloudFunction("getDraftNftData", { objectId: draftToDelete });

	useEffect(() => {
		setIsModalOpen(isModalOpen);
		if (!isModalOpen) {
			document.documentElement.style.overflow = "auto";
		} else {
			document.documentElement.style.overflow = "hidden";
		}
	}, [isModalOpen]);

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		console.log("selectedDraft", selectedDraft);
	}, [selectedDraft]);

	const handleChange = () => {
		setIsModalOpen(!isModalOpen);
	};

	const closeModal = () => {
		handleChange();
		onClose();
	};

	return (
		<>
			<Transition show={isModalOpen}>
				<Transition.Child
					as={Fragment}
					enter="transition-all duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all duration-200"
					leaveTo="opacity-0"
					leaveFrom="opacity-100"
				>
					<div style={{ zIndex: "50" }} onClick={() => handleChange()} className="w-full h-full left-0 top-0 bg-black/50 backdrop-blur fixed" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="transition-all duration-200"
					enterFrom="opacity-0 scale-75"
					enterTo="opacity-100 scale-100"
					leave="transition-all duration-200"
					leaveTo="opacity-0 scale-75"
					leaveFrom="opacity-100 scale-100"
				>
					<div style={{ zIndex: "50" }} className="flex left-0 top-0 justify-center items-center h-full w-full fixed">
						<div className="max-w-[40rem] sm:w-full w-11/12 p-4 pl-10 pb-12 bg-white dark:bg-dark-100 rounded-lg">
							<div className="w-full flex justify-end">
								<div
									onClick={() => closeModal()}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark"></i>
								</div>
							</div>

							<div className="w-full flex justify-center space-x-4 mt-4">
								<div className="w-4/5">
									<div className="text-base font-semibold text-center mt-8">Are you sure you want to delete this draft?</div>

									<div className="flex mt-12 space-x-8 justify-center">
										{selectedDraft && selectedDraft.attributes.artwork.uri ? (
											<Image
												src={selectedDraft.attributes.artwork.uri}
												className="group-hover:scale-110 group-hover:duration-500 duration-500 rounded-md"
												alt="nft cover art"
												height={120}
												width={120}
												priority
											/>
										) : (
											<div className="flex">
												<div className="rounded-md bg-light-300 h-28 w-28"></div>
											</div>
										)}
										<div className="grid content-between">
											<p className="text-sm">{user && user.attributes.name}</p>
											<p className="text-2xl font-semibold flex">{selectedDraft && selectedDraft.attributes.title}</p>
										</div>
									</div>

									<div className="flex flex-row mt-12 w-full space-x-4">
										<button
											onClick={() => closeModal()}
											className="w-full bg-light-200 dark:bg-dark-200 hover:bg-gray-200 rounded-lg flex justify-center items-center p-4 text-sm"
										>
											<div className="flex justify-center items-center w-full">
												<i className="fa-solid fa-xmark text-lg"></i>
												<span className="ml-4">Cancel</span>
											</div>
										</button>
										<button
											onClick={() => {
												deleteDraft();
											}}
											className="w-full bg-light-200 dark:bg-dark-200 hover:bg-error-200 dark:hover:bg-error-200 hover:text-light-100 rounded-lg flex justify-center items-center p-4 text-sm"
										>
											<div className="flex justify-center items-center w-full">
												<i className="fa-solid fa-trash text-lg"></i>
												<span className="ml-4">Delete</span>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Transition.Child>
			</Transition>
		</>
	);
}
