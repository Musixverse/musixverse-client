const { Fragment, useState, useEffect } = require("react");
const { Transition } = require("@headlessui/react");
import Image from "next/future/image";
import { shimmer } from "../../../utils/Shimmer";
import { useTheme } from "next-themes";
import CustomButton from "@/layout/CustomButton";

export default function ShareAssetImageModal({ isOpen, setOpen, assetImage }) {
	const { theme } = useTheme();

	useEffect(() => {
		if (!isOpen) {
			document.documentElement.style.overflow = "auto";
		} else {
			document.documentElement.style.overflow = "hidden";
		}
	}, [isOpen]);

	const handleChange = () => {
		setOpen(!isOpen);
	};

	const closeModal = () => {
		handleChange();
	};

	const downloadImage = (base64Image) => {
		const link = document.createElement("a");
		link.href = base64Image;
		link.download = "image.png";
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	return (
		<>
			<Transition show={isOpen}>
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
						className="w-screen h-screen left-0 top-0 bg-black/80 backdrop-blur-sm fixed"
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
						<div className="w-fit h-full flex flex-col justify-center items-center p-8 py-20">
							<div className="relative self-end -top-3 right-8">
								<div
									onClick={() => closeModal()}
									style={{ zIndex: "10" }}
									className="absolute self-end w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer bg-light-100 hover:bg-light-400 dark:bg-dark-400 dark:hover:bg-dark-600"
								>
									<i className="fa-solid fa-xmark text-sm"></i>
								</div>
							</div>
							<Image
								src={assetImage}
								alt="asset image"
								width="1080"
								height="1920"
								className="rounded-2xl"
								placeholder="blur"
								blurDataURL={shimmer(1080, 1920, theme)}
								style={{
									maxWidth: "100%",
									height: "auto",
									width: "auto",
									maxHeight: "100%",
									objectFit: "cover",
									overflow: "hidden",
								}}
							/>
							<div className="flex items-center justify-center w-full mt-4">
								<CustomButton
									type="button"
									onClick={() => {
										downloadImage(assetImage);
										setOpen(false);
									}}
									green={true}
									classes="text-sm px-8 py-3"
								>
									Download asset <i className="ml-3 fas fa-download"></i>
								</CustomButton>
							</div>
						</div>
					</div>
				</Transition.Child>
			</Transition>
		</>
	);
}
