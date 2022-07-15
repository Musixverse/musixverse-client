import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";
import Image from "next/image";
import successLogo from "/public/assets/success-failure-modals/trade-success.svg";

const PurchaseSuccessModal = ({ isOpen }) => {
    const router = useRouter();

    return (
        <Modal
            isOpen={isOpen}
            image={
                <div className="mx-auto flex items-center relative justify-center h-24 w-24">
                    <Image src={successLogo} layout="fill" alt="Success!" />
                </div>
            }
            title={"Successfully purchased NFT!"}
            content={
                <div>
                    Yay! You successfully purchased this NFT. <br /> It might take a few seconds to reflect back on your profile.
                </div>
            }
            onClose={() => {
                router.reload(window.location.pathname);
            }}
        ></Modal>
    );
};

export default PurchaseSuccessModal;
