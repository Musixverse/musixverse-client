import { useState, useContext } from "react";
import { useMoralis } from "react-moralis";
import AuthModalContext from "../../../../store/authModal-context";
import EditPriceModal from "./EditPriceModal";
import ToggleOnSaleButtons from "./ToggleOnSaleButtons";
import PurchaseButton from "./PurchaseButton";

export default function CtaButtons({ currentOwnerAddress, tokenId, price }) {
	const { user } = useMoralis();

	const [, setAuthModalOpen] = useContext(AuthModalContext);
	// Edit price modal
	const [editPriceModalOpen, setEditPriceModalOpen] = useState(false);
	// Edit price modal
	const [toggleOnSaleModalOpen, setToggleOnSaleModalOpen] = useState(false);

	const editPrice = async () => {
		if (user) {
			setEditPriceModalOpen(true);
		} else {
			setAuthModalOpen(true);
		}
	};

	const toggleOnSale = async () => {
		if (user) {
			setToggleOnSaleModalOpen(true);
		} else {
			setAuthModalOpen(true);
		}
	};

	return (
		<>
			<div className="bg-light-100 w-full rounded-lg p-2 flex justify-between items-center dark:bg-dark-200 ">
				<div>
					{user && user.attributes.ethAddress == currentOwnerAddress ? (
						<>
							<button
								onClick={() => editPrice()}
								className="rounded-lg px-8 py-2 mr-3 bg-primary-100 font-primary font-semibold text-lg text-light-100 hover:bg-primary-200"
							>
								Edit Price
							</button>
							<ToggleOnSaleButtons
								tokenId={tokenId}
								toggleOnSale={toggleOnSale}
								toggleOnSaleModalOpen={toggleOnSaleModalOpen}
								setToggleOnSaleModalOpen={setToggleOnSaleModalOpen}
							/>
						</>
					) : (
						<PurchaseButton tokenId={tokenId} price={price} />
					)}
				</div>

				<button className="w-[38px] h-[38px] text-center rounded-full bg-light-200 hover:bg-[#dedede] dark:bg-dark-100">
					<i className="fas fa-ellipsis-v text-sm text-dark-100 dark:text-light-100"></i>
				</button>
			</div>

			<EditPriceModal isOpen={editPriceModalOpen} setEditPriceModalOpen={setEditPriceModalOpen} tokenId={tokenId} currentPrice={price} />
		</>
	);
}
