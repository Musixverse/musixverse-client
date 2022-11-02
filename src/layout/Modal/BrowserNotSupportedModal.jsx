import { useContext } from "react";
import Link from "next/link";
import Modal from "./Modal";
import BrowserNotSupportedContext from "../../../store/browserNotSupported-context";

const BrowserNotSupportedModal = () => {
	const [isBrowserNotSupportedModalOpen, setBrowserNotSupportedModalOpen] = useContext(BrowserNotSupportedContext);

	return (
		<>
			<Modal
				isOpen={isBrowserNotSupportedModalOpen}
				image={
					<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-6xl">
						<label htmlFor="create-nft-form-submit" className="flex justify-center items-center w-14 h-14 border-2 rounded-full border-info-300">
							<i className="fa-solid fa-info text-2xl text-info-300"></i>
						</label>
					</div>
				}
				title={"Browser not supported"}
				content={
					<div className="text-base">
						We recommend using&nbsp;
						<Link href="https://brave.com/en-in/download/" passHref>
							<a target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 hover:underline">
								Brave Browser
							</a>
						</Link>
						,&nbsp;
						<Link href="https://www.google.com/chrome/" passHref>
							<a target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 hover:underline">
								Google Chrome
							</a>
						</Link>
						,&nbsp;or&nbsp;
						<Link href="https://www.mozilla.org/en-US/firefox/new/" passHref>
							<a target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 hover:underline">
								Firefox
							</a>
						</Link>
						&nbsp;for the best experience
					</div>
				}
				onClose={() => {
					setBrowserNotSupportedModalOpen(false);
				}}
			></Modal>
		</>
	);
};

export default BrowserNotSupportedModal;
