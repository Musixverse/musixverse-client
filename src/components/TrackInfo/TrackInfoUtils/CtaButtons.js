import { useState, useContext } from "react";
import { useMoralis } from "react-moralis";
import AuthModalContext from "../../../../store/authModal-context";
import LoadingContext from "../../../../store/loading-context";
import { purchaseTrackNFT } from "../../../utils/smart-contract/functions";
import PurchaseSuccessModal from "./PurchaseSuccessModal";
import EditPriceModal from "./EditPriceModal";
import ToggleOnSaleButtons from "./ToggleOnSaleButtons";

export default function CtaButtons({ currentOwnerAddress, tokenId, price }) {
    const { user } = useMoralis();

    const [authModalOpen, setAuthModalOpen] = useContext(AuthModalContext);
    const [loading, setLoading] = useContext(LoadingContext);
    // Purchase success modal
    const [purchaseNFTSuccess, setPurchaseNFTSuccess] = useState(false);
    // Edit price modal
    const [editPriceModalOpen, setEditPriceModalOpen] = useState(false);
    // Edit price modal
    const [toggleOnSaleModalOpen, setToggleOnSaleModalOpen] = useState(false);

    const purchaseToken = async () => {
        if (user) {
            setLoading(true);
            await purchaseTrackNFT(tokenId, price);
            setLoading(false);
            setPurchaseNFTSuccess(true);
        } else {
            setAuthModalOpen(true);
        }
    };

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
                        <button
                            onClick={() => purchaseToken()}
                            className="rounded-lg px-8 py-2 mr-3 bg-primary-100 font-primary font-semibold text-lg text-light-100 hover:bg-primary-200"
                        >
                            Buy Now
                        </button>
                    )}
                </div>
                <button className="w-[38px] h-[38px] text-center rounded-full bg-light-200 hover:bg-[#dedede]">
                    <i className="fas fa-ellipsis-v text-dark-100 text-sm"></i>
                </button>
            </div>

            <PurchaseSuccessModal isOpen={purchaseNFTSuccess} />
            <EditPriceModal isOpen={editPriceModalOpen} setEditPriceModalOpen={setEditPriceModalOpen} tokenId={tokenId} currentPrice={price} />
        </>
    );
}
