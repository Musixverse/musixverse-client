import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";

const ToggleOnSaleModal = ({ isOpen, setToggleOnSaleModalOpen }) => {
    const router = useRouter();

    return (
        <Modal
            isOpen={isOpen}
            image={
                <div className="mx-auto flex items-center relative justify-center h-24 w-24 text-5xl text-primary-100">
                    <i class="fa-solid fa-sliders"></i>
                </div>
            }
            title={"Toggle the availability of your NFT on Musixverse"}
            content={
                <div>
                    If you take your NFT off the market, other collectors will not be able to purchase it from you. The NFT will still be visible on the
                    Musixverse Marketplace.
                </div>
            }
            onClose={() => {
                setToggleOnSaleModalOpen(false);
                // router.reload(window.location.pathname);
            }}
        ></Modal>
    );
};

export default ToggleOnSaleModal;
