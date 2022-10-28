const { Fragment, useState, useEffect } = require("react");
const { Transition } = require("@headlessui/react");

export default function TrackBackgroundModal({ isOpen, onClose, trackBackground, setTrackBackground }) {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);

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
						<div className="max-w-[48rem] sm:w-full w-11/12 p-4 pl-10 pb-12 bg-white dark:bg-dark-600 rounded-lg">
							<div className="w-full flex justify-end">
								<div
									onClick={() => closeModal()}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark"></i>
								</div>
							</div>

							<div className="w-full flex justify-center space-x-4 pr-6">
								<div className="w-full">
									<div className="text-lg font-semibold text-start">Track Background</div>
									<p className="text-[#777777] mt-1 font-normal text-xs">
										The background field in Musixverse (MXV) helps artists connect with their fans on a deeper level. You can write about
										the whole ideation process and the journey behind creating this awesome piece of music. Your fans will really be
										interested in hearing this from you! Please try to be as descriptive as possible.
									</p>
									<textarea
										value={trackBackground ?? ""}
										onChange={(e) => {
											setTrackBackground(e.target.value);
										}}
										className={
											"mt-8 dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-500 dark:focus:border-primary-500 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-500 font-normal resize-none"
										}
										name="trackBackground"
										rows="8"
										required
									></textarea>

									<div className="flex mt-6 w-full space-x-4 justify-center">
										<button
											type="button"
											onClick={() => closeModal()}
											className="sm:w-1/3 w-2/3 bg-light-200 dark:bg-dark-800 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-light-100 rounded-lg flex justify-center items-center p-4 text-sm"
										>
											<div className="flex justify-center items-center w-full">
												<i className="fas fa-save text-lg"></i>
												<span className="ml-4">Save</span>
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
