import { useState, useContext } from "react";
import { useMoralis } from "react-moralis";
import AuthModalContext from "../../../../store/authModal-context";
import dynamic from "next/dynamic";
const EditPriceModal = dynamic(() => import("./EditPriceModal"));
const NftReportModal = dynamic(() => import("./NftReportModal"));
import ToggleOnSaleButtons from "./ToggleOnSaleButtons";
import PurchaseButton from "./PurchaseButton";
import CustomButton from "../../../layout/CustomButton";
import ShareTrackNftModal from "./ShareTrackNftModal";

export default function CtaButtons({ currentOwnerAddress, tokenId, trackId, price, onSale, activity, artistName, title }) {
	const { user } = useMoralis();

	const [, setAuthModalOpen] = useContext(AuthModalContext);
	// Edit price modal
	const [editPriceModalOpen, setEditPriceModalOpen] = useState(false);
	// Edit price modal
	const [toggleOnSaleModalOpen, setToggleOnSaleModalOpen] = useState(false);
	// NFT report modal
	const [isNftReportModalOpen, setNftReportModalOpen] = useState(false);

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

	/*******************************
	 *******  SHARE BUTTON  ********
	 *******************************/
	const [isShareTrackNftModalOpen, setShareTrackNftModalOpen] = useState(false);

	return (
		<>
			<div className="bg-light-100 w-full rounded-lg p-2 flex justify-between items-center dark:bg-dark-800 ">
				<div className="flex">
					{user && user.attributes.ethAddress == currentOwnerAddress && activity.tokenActivity ? (
						<>
							<button
								onClick={() => editPrice()}
								className="rounded-lg px-8 py-2 mr-3 bg-primary-500 font-primary font-semibold text-lg text-light-100 hover:bg-primary-600"
							>
								Edit Price
							</button>
							<ToggleOnSaleButtons
								tokenId={tokenId}
								toggleOnSale={toggleOnSale}
								toggleOnSaleModalOpen={toggleOnSaleModalOpen}
								setToggleOnSaleModalOpen={setToggleOnSaleModalOpen}
								onSale={onSale}
							/>
						</>
					) : user && user.attributes.ethAddress == currentOwnerAddress ? (
						<CustomButton type="button" green={true} onClick={() => setShareTrackNftModalOpen(true)}>
							<div className="flex justify-center items-center space-x-2">
								<i className="fa-solid fa-share-nodes text-lg"></i>
								<span>Share</span>
							</div>
						</CustomButton>
					) : onSale || onSale === null ? (
						<PurchaseButton tokenId={tokenId} trackId={trackId} price={price} />
					) : (
						<span className="text-sm sm:ml-2">
							This NFT is currently not on the marketplace for sale. Other copies of this NFT (if any) may be available for sale.
						</span>
					)}
				</div>

				<button className="w-[38px] h-[38px] text-center rounded-full bg-light-200 hover:bg-[#dedede] dark:bg-dark-600 relative group">
					<i className="fas fa-ellipsis-v text-sm text-dark-600 dark:text-light-100"></i>

					<ul className="absolute pt-10 bg-transparent hidden right-0 top-0 z-10 text-sm font-medium text-left list-none border-none rounded-lg min-w-[250px] group-hover:block">
						<ul className="rounded-xl shadow-lg bg-light-100 dark:bg-dark-600">
							<li
								onClick={() => {
									if (user) {
										setNftReportModalOpen(true);
									} else {
										setAuthModalOpen(true);
									}
								}}
							>
								<div className="flex items-center w-full rounded-lg px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-800">
									<i className="fa-solid fa-flag text-md"></i>
									<span className="ml-2">Report NFT</span>
								</div>
							</li>
						</ul>
					</ul>
				</button>
			</div>

			<EditPriceModal isOpen={editPriceModalOpen} setEditPriceModalOpen={setEditPriceModalOpen} tokenId={tokenId} currentPrice={price} />
			<NftReportModal isOpen={isNftReportModalOpen} setOpen={setNftReportModalOpen} tokenId={tokenId} />
			<ShareTrackNftModal
				isOpen={isShareTrackNftModalOpen}
				setOpen={setShareTrackNftModalOpen}
				artistName={artistName}
				title={title}
				setAuthModalOpen={setAuthModalOpen}
			/>
		</>
	);
}
