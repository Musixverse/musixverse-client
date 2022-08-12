import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";
import Image from "next/image";
import successLogo from "/public/assets/success-failure-modals/trade-success.svg";

const ToggleOnSaleSuccessModal = ({ isOpen, onSale }) => {
    const router = useRouter();

    return (
        <Modal
            isOpen={isOpen}
            image={
                <div className="mx-auto flex items-center relative justify-center h-24 w-24">
                    <Image src={successLogo} layout="fill" alt="Success" />
                </div>
            }
            title={onSale ? "Your NFT is taken down from Sale." : "Your NFT is up for Sale!"}
            content={
                <div>
                    {onSale ? (
                        <>
                            This NFT is taken down from the Musixverse Marketplace successfully. Nobody will be able to purchase it. It is safe in your hands
                            now.
                        </>
                    ) : (
                        <>
                            Yay! This NFT is up for grabs. <br /> Collectors will be on their way to purchase it.
                        </>
                    )}
                </div>
            }
            onClose={() => {
                router.reload(window.location.pathname);
            }}
        ></Modal>
    );
};

export default ToggleOnSaleSuccessModal;
