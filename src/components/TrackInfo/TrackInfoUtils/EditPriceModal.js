import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";

const EditPriceModal = ({ isOpen, setEditPriceModalOpen }) => {
    const router = useRouter();

    return (
        <Modal
            isOpen={isOpen}
            image={
                <div className="mx-auto flex items-center relative justify-center h-24 w-24 text-5xl text-primary-100">
                    <i className="fas fa-edit"></i>
                </div>
            }
            title={"Edit the price of your NFT"}
            content={<div>The price you set here will be displayed to other collectors who want to buy this NFT.</div>}
            onClose={() => {
                setEditPriceModalOpen(false);
                // router.reload(window.location.pathname);
            }}
        ></Modal>
    );
};

export default EditPriceModal;
