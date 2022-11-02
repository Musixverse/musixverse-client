const { Fragment, useState, useEffect } = require("react");
const { Transition } = require("@headlessui/react");
import Image from "next/future/image";
import { useTheme } from "next-themes";
import { shimmer } from "../../../utils/Shimmer";

export default function CoverArtModal({ isOpen = "", onClose = "", image = "", children }) {
	const { theme } = useTheme();
	let [isModalOpen, setIsModalOpen] = useState(isOpen);

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

	const handleChange = () => {
		setIsModalOpen(!isModalOpen);
	};

	const closeModal = () => {
		handleChange();
		onClose();
	};

	return (
		<>
			<div onClick={() => handleChange()}>{children}</div>

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
					<div
						style={{ zIndex: "50" }}
						onClick={() => handleChange()}
						className="w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-sm fixed"
					/>
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
					<div style={{ zIndex: "60" }} className="h-full w-full flex left-0 top-0 justify-center items-center fixed">
						<div className="w-fit h-full flex flex-col justify-center items-center p-8">
							<div className="relative self-end -top-3 right-4">
								<div
									onClick={() => closeModal()}
									style={{ zIndex: "10" }}
									className="absolute self-end w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer bg-light-100 hover:bg-light-400 dark:bg-dark-400 dark:hover:bg-dark-600"
								>
									<i className="fa-solid fa-xmark text-sm"></i>
								</div>
							</div>
							<Image
								src={image}
								className="rounded-2xl"
								alt="track cover art image"
								width="800"
								height="800"
								placeholder="blur"
								blurDataURL={shimmer(800, 800, theme)}
								style={{
									maxWidth: "100%",
									height: "auto",
								}}
							/>
						</div>
					</div>
				</Transition.Child>
			</Transition>
		</>
	);
}
