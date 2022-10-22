import { useState, useContext } from "react";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import { toggleOnSale } from "../../../utils/smart-contract/functions";
import Modal from "../../../layout/Modal/Modal";
import ToggleOnSaleSuccessModal from "./ToggleOnSaleSuccessModal";

const ToggleOnSaleModal = ({ isOpen, setToggleOnSaleModalOpen, tokenId, onSale }) => {
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	const [toggleOnSaleSuccess, setToggleOnSaleSuccess] = useState(false);

	const toggleOnSaleAttribute = async (e) => {
		e.preventDefault();

		setLoading(true);
		try {
			await toggleOnSale(tokenId);
			setToggleOnSaleModalOpen(false);
			await fetch(`/api/revalidate-track?path=${window.location.pathname}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
			setLoading(false);
			setToggleOnSaleSuccess(true);
		} catch (err) {
			setLoading(false);
			setToggleOnSaleModalOpen(false);
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
				image={
					<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-5xl text-primary-100">
						<i className="fa-solid fa-sliders"></i>
					</div>
				}
				title={"Toggle the availability of your NFT on Musixverse"}
				content={
					<div>
						{onSale || onSale === null ? (
							<>
								If you take your NFT off the market, other collectors will not be able to purchase it from you. The NFT will still be visible on
								the Musixverse Marketplace.
							</>
						) : (
							<>Other collectors will be able to purchase this NFT once you click the button below.</>
						)}

						<form onSubmit={toggleOnSaleAttribute}>
							<button
								type="submit"
								className="rounded-lg px-12 py-2 mt-14 bg-primary-100 font-primary font-semibold text-lg text-light-100 hover:bg-primary-200"
							>
								Confirm
							</button>
						</form>
					</div>
				}
				onClose={() => {
					setToggleOnSaleModalOpen(false);
				}}
			></Modal>
			<ToggleOnSaleSuccessModal isOpen={toggleOnSaleSuccess} onSale={onSale} />
		</>
	);
};

export default ToggleOnSaleModal;
