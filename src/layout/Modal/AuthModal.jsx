const { Fragment, useState, useEffect } = require("react");
import { useTheme } from "next-themes";
import Image from "next/image";
import Router from "next/router";
import { useMoralis } from "react-moralis";
const { Transition } = require("@headlessui/react");
import { BLOCKCHAIN_NETWORK_ID } from "../../utils/smart-contract/constants";
import { addPolygonTestnetNetwork } from "../../utils/smart-contract/functions";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";

module.exports = ({ isOpen = "", onClose = "" }) => {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const { theme } = useTheme();

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

    const metamaskLogin = async () => {
        if (!isAuthenticated) {
            await addPolygonTestnetNetwork();
            await authenticate({ signingMessage: "Musixverse Authentication" })
                .then(function (user) {
                    if (user) {
                        closeModal();
                        Router.push("/library", undefined, { shallow: true });
                    }
                })
                .catch(function (error) {
                    console.log("Metamask authentication error:", error);
                });
        }
    };

    const walletconnectLogin = async () => {
        if (!isAuthenticated) {
            await authenticate({ provider: "walletconnect", signingMessage: "Musixverse Authentication", chainId: BLOCKCHAIN_NETWORK_ID })
                .then(function (user) {
                    if (user) {
                        closeModal();
                        Router.push("/library", undefined, { shallow: true });
                    }
                })
                .catch(function (error) {
                    console.log("Metamask authentication error:", error);
                });
        }
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
                    <div style={{ zIndex: "50" }} className="flex justify-center items-center h-full w-full fixed">
                        <div className="max-w-[48rem] sm:w-full w-11/12 p-4 pl-10 pb-12 bg-white dark:bg-dark-100 rounded-lg">
                            <div className="w-full flex justify-between">
                                <div className="w-full flex flex-col justify-start items-start">
                                    {theme === "light" ? (
                                        <Image src={logoBlack} alt="MXV Logo" width="80" height="80" />
                                    ) : (
                                        <Image src={logoWhite} alt="MXV Logo" width="80" height="80" />
                                    )}
                                </div>
                                <div
                                    onClick={() => closeModal()}
                                    className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>

                            <div className="w-full flex space-x-4 mt-4 pr-4">
                                <div className="w-2/5">
                                    <div className="text-xl font-semibold font-primary">Jump into Musixverse!</div>
                                    <p className="text-sm mt-4 pr-14">Select your wallet from the options to get started.</p>
                                    <p className="text-[10px] text-gray-400 mt-36 pr-14">
                                        Connecting your wallet is the simplest way to log in to the world of Web3!
                                    </p>
                                </div>
                                <div className="w-3/5 -mt-12">
                                    <div className="text-sm">Available Wallets</div>
                                    <div className="flex space-x-4 justify-between mt-6">
                                        <button
                                            onClick={() => metamaskLogin()}
                                            className="bg-light-200 hover:bg-light-300 dark:bg-dark-200 dark:hover:bg-[#000] rounded-lg flex items-center p-4 w-1/2 text-sm"
                                        >
                                            <Image src="/assets/metamask.png" alt="Metamask Logo" width="40" height="40" />
                                            <span className="ml-4">Metamask</span>
                                        </button>
                                        <button
                                            onClick={() => walletconnectLogin()}
                                            className="bg-light-200 hover:bg-light-300 dark:bg-dark-200 dark:hover:bg-[#000] rounded-lg flex items-center p-4 w-1/2 text-sm"
                                        >
                                            <Image src="/assets/walletconnect.png" alt="WalletConnect Logo" width="30" height="30" />
                                            <span className="ml-4">WalletConnect</span>
                                        </button>
                                    </div>
                                    <div className="flex space-x-4 justify-between mt-6">
                                        <button className="bg-light-200 dark:bg-dark-200 rounded-lg flex items-center p-4 w-1/2 text-sm">
                                            <Image src="/assets/magic.svg" alt="Magic Logo" width="35" height="35" />
                                            <span className="ml-4">Magic</span>
                                        </button>
                                        {/* Empty button to make layout consistent */}
                                        <button className="rounded-lg flex items-center p-4 w-1/2 text-sm"></button>
                                    </div>
                                    <div className="flex space-x-4 justify-between ml-1 mt-2">
                                        <p className="text-xs text-gray-400">Coming Soon!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </>
    );
};