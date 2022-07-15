import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LoadingContext from "../../../../store/loading-context";
import { updatePrice } from "../../../utils/smart-contract/functions";
import Modal from "../../../layout/Modal/Modal";
import EditPriceSuccessModal from "./EditPriceSuccessModal";

const EditPriceModal = ({ isOpen, setEditPriceModalOpen, tokenId, currentPrice }) => {
    const router = useRouter();
    const [loading, setLoading] = useContext(LoadingContext);

    const [maticUSD, setMaticUSD] = useState("");
    const [maticINR, setMaticINR] = useState("");
    const [updatedMaticUSD, setUpdatedMaticUSD] = useState("");
    const [updatedMaticINR, setUpdatedMaticINR] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState(0);

    const [editPriceSuccess, setEditPriceSuccess] = useState(false);

    async function fetchMaticUSD() {
        const COINBASE_BASE_URL = "https://api.coinbase.com/v2";
        const res = await fetch(`${COINBASE_BASE_URL}/prices/MATIC-USD/buy`);
        const result = await res.json();
        setMaticUSD((result.data.amount * currentPrice).toFixed(2));
        setUpdatedMaticUSD((result.data.amount * updatedPrice).toFixed(2));
    }

    async function fetchMaticINR() {
        const COINBASE_BASE_URL = "https://api.coinbase.com/v2";
        const res = await fetch(`${COINBASE_BASE_URL}/prices/MATIC-INR/buy`);
        const result = await res.json();
        setMaticINR((result.data.amount * currentPrice).toFixed(0));
        setUpdatedMaticINR((result.data.amount * updatedPrice).toFixed(2));
    }

    useEffect(async () => {
        fetchMaticUSD();
        fetchMaticINR();
    }, [currentPrice, updatedPrice]);

    let truncatednftPrice = currentPrice;
    if (currentPrice >= 1000000) {
        truncatednftPrice = Number((currentPrice / 1000000).toFixed(2)) + " M";
    } else if (currentPrice >= 1000) {
        truncatednftPrice = Number((currentPrice / 1000).toFixed(2)) + " K";
    }

    let truncatedmaticUSDPrice = maticUSD;
    if (maticUSD >= 1000000) {
        truncatedmaticUSDPrice = Number((maticUSD / 1000000).toFixed(2)) + " M";
    } else if (maticUSD >= 1000) {
        truncatedmaticUSDPrice = Number((maticUSD / 1000).toFixed(2)) + " K";
    }

    let truncatedmaticINRPrice = maticINR;
    if (maticINR >= 1000000) {
        truncatedmaticINRPrice = Number((maticINR / 1000000).toFixed(2)) + " M";
    } else if (maticINR >= 1000) {
        truncatedmaticINRPrice = Number((maticINR / 1000).toFixed(2)) + " K";
    }

    let truncatedUpdatedmaticUSDPrice = updatedMaticUSD;
    if (updatedMaticUSD >= 1000000) {
        truncatedUpdatedmaticUSDPrice = Number((updatedMaticUSD / 1000000).toFixed(2)) + " M";
    } else if (updatedMaticUSD >= 1000) {
        truncatedUpdatedmaticUSDPrice = Number((updatedMaticUSD / 1000).toFixed(2)) + " K";
    }

    let truncatedUpdatedmaticINRPrice = updatedMaticINR;
    if (updatedMaticINR >= 1000000) {
        truncatedUpdatedmaticINRPrice = Number((updatedMaticINR / 1000000).toFixed(2)) + " M";
    } else if (updatedMaticINR >= 1000) {
        truncatedUpdatedmaticINRPrice = Number((updatedMaticINR / 1000).toFixed(2)) + " K";
    }

    const setNewPrice = async (e) => {
        e.preventDefault();

        setLoading(true);
        await updatePrice(tokenId, updatedPrice);
        setLoading(false);
        setEditPriceModalOpen(false);
        setEditPriceSuccess(true);
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                image={
                    <div className="mx-auto flex items-center relative justify-center h-24 w-24 text-5xl text-primary-100">
                        <i className="fas fa-edit"></i>
                    </div>
                }
                title={"Edit the price of your NFT"}
                content={
                    <div>
                        <form onSubmit={setNewPrice}>
                            <p className="text-sm text-start mb-1">New Price</p>
                            <input
                                type="number"
                                step={0.1}
                                min={0}
                                value={updatedPrice}
                                onChange={(e) => {
                                    setUpdatedPrice(e.target.value);
                                }}
                                placeholder="Enter new price"
                                className="w-full px-2 py-2 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-100 focus:dark:border-primary-100 dark:bg-[#323232] dark:border-[#323232]"
                                required
                            ></input>
                            <p className="text-[#777777] mt-1 font-normal text-xs">Price of the NFT will be updated to this value if you submit</p>

                            <div className="flex items-center justify-center mt-10">
                                <div className="text-lg font-semibold mr-4">Current Price:</div>
                                <div className="flex">
                                    <Image src={"/assets/matic-logo.svg"} width={20} height={20} alt="matic" />
                                    <p className="mx-2 font-bold text-lg font-primary">{truncatednftPrice}</p>
                                </div>
                                <p className="text-xs font-primary">
                                    (approx. ₹{truncatedmaticINRPrice} or ${truncatedmaticUSDPrice})
                                </p>
                            </div>

                            <div className="flex items-center justify-center mt-4 mb-4">
                                <i className="fa-solid fa-angles-down"></i>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="text-lg font-semibold mr-4">New Price:</div>
                                <div className="flex">
                                    <Image src={"/assets/matic-logo.svg"} width={20} height={20} alt="matic" />
                                    <p className="mx-2 font-bold text-lg font-primary">{updatedPrice ? updatedPrice : 0}</p>
                                </div>
                                <p className="text-xs font-primary">
                                    (approx. ₹{truncatedUpdatedmaticINRPrice} or ${truncatedUpdatedmaticUSDPrice})
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="rounded-lg px-8 py-2 mt-14 bg-primary-100 font-primary font-semibold text-lg text-light-100 hover:bg-primary-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                }
                onClose={() => {
                    setEditPriceModalOpen(false);
                }}
            ></Modal>
            <EditPriceSuccessModal isOpen={editPriceSuccess} />
        </>
    );
};

export default EditPriceModal;
