import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import NFTCard from "./NFTCard";
import multipleNft from "../../../public/assets/nftcard/nftcards.svg";
import Image from "next/image";
import HorizontalRuler from "../HorizontalRuler";
// import { truncatePrice } from "../../utils/GetMarketPrice";

export default function NftCopiesModal({modalValues, showNftCopiesModal, setShowNftCopiesModal}){
    const nftCopies = [{price: 0.5}, {price: 0.489}, {price: 50}]
    // const truncatednftPrice = truncatePrice(price);
    return(
        <Transition.Root show={showNftCopiesModal} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 top-0 left-0 z-50 w-screen h-screen overflow-y-auto"
					onClose={() => setShowNftCopiesModal(false)}
				>
					<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						{/* Background Grey Area */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform shadow-xl rounded-2xl bg-none sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
								<div className="p-10 dark:bg-dark-100 dark:backdrop-blur-[7px] backdrop-blur-[7px] bg-[rgba(255,255,255,0.9)]">
									<div>
										<div className="text-center sm:text-left">
                                            <div className="flex w-full">
                                                <NFTCard {...modalValues}/>
                                                <div className="flex flex-col flex-1 ml-5">
                                                    {/* Close Modal Button */}
                                                    <div
                                                        onClick={() => setShowNftCopiesModal(false)}
                                                        className="flex items-center self-end justify-center w-8 h-8 mb-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-zinc-500/20 "
                                                    >
                                                        <i className="fa-solid fa-xmark"></i>
                                                    </div>
                                                    {/* Top section */}
                                                    <div className="flex justify-between w-full">
                                                        <div className="flex flex-col">
                                                            <p className="font-secondary text-[#868686]">{modalValues.artistName}</p>
                                                            <p className="font-secondary font-bold text-[#363636]">{modalValues.trackName}{' #'}{modalValues.tokenId}</p>
                                                        </div>
                                                        <div className="flex items-center px-4 py-2 font-bold cursor-default rounded-xl hover:bg-light-200 bg-light-100 text-dark-100">
                                                            <Image src={multipleNft} objectFit="contain" alt="multiple nft cards" />
                                                            <span className="ml-2 text-sm">x{modalValues.numberOfCopies}{' Copies'}</span>
                                                        </div>
                                                    </div>
                                                    {/* NFT Copies section */}
                                                    <div className="mt-7 ">
                                                        {nftCopies.map((elem, idx)=>{
                                                            return(
                                                                <React.Fragment key={idx}>
                                                                    <div className="flex justify-between w-full">
                                                                        <p className="font-bold font-secondary">
                                                                            {idx+1}{'. '}
                                                                            {modalValues.trackName}
                                                                            {' #'}{modalValues.tokenId}
                                                                        </p>
                                                                        <div className="flex items-center justify-end font-semibold">
                                                                            <Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
                                                                            <span className="ml-1 sm:text-lg">{elem.price}</span>
                                                                        </div>
                                                                    </div>
                                                                    <HorizontalRuler/>
                                                                </React.Fragment>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
    );
}