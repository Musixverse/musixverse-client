const { Fragment, useState, useEffect } = require("react");
const { Transition } = require("@headlessui/react");
import Image from "next/image";

// Inspiration from- https://gist.github.com/clqu/32883b5bc2146bdc545a261b49c3c5eb
export default function Modal({
	isOpen = "",
	image = "",
	title = "",
	titleClasses = "",
	content = "",
	buttons = [],
	classes = "max-w-[32rem] md:max-w-[40rem] lg:max-w-[48rem]",
	onClose = "",
	onConfirm = "",
	onDiscard = "",
	setOpen,
	memberImage,
	fullName,
	role,
	socialLinks,
	description,
	children,
}) {
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
					<div style={{ zIndex: "50" }} className="flex left-0 top-0 justify-center items-center h-full w-full fixed">
						<div className={`sm:w-full w-11/12 p-4 pb-8 bg-white dark:bg-dark-600 rounded-lg ${classes ? classes : "max-w-[32rem]"}`}>
							<div className="w-full flex justify-end items-center">
								<div
									onClick={() => setOpen(false)}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark"></i>
								</div>
							</div>
							<div className="px-4">
								<div className="sm:flex sm:items-start">
									<div className="relative flex items-center justify-center flex-shrink-0 mx-auto overflow-hidden bg-red-100 rounded-full sm:mx-0 h-24 w-24">
										<Image src={memberImage} alt="member" objectFit="cover" layout="fill" priority></Image>
									</div>
									<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<p className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">{fullName}</p>
										<div className="mt-1 text-sm text-black dark:text-light-100">
											<p>
												{title}, {role}
											</p>
										</div>
										<div className="mt-2">
											<p className="text-sm text-gray-500 dark:text-light-200">{description}</p>
										</div>
										<div className="flex items-center justify-center sm:justify-start mt-5 space-x-3">
											<p className="text-sm text-black dark:text-light-100">Know him more: </p>
											<div className="flex items-center space-x-3">
												<a className="outline-none" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
													<i className="fa fa-twitter hover:text-primary-600" aria-hidden="true"></i>
												</a>
												<a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
													<i className="fa fa-linkedin hover:text-primary-600" aria-hidden="true"></i>
												</a>
												<a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
													<i className="fa fa-github hover:text-primary-600" aria-hidden="true"></i>
												</a>
											</div>
										</div>
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
