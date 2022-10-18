import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";
import Image from "next/image";
import successLogo from "/public/assets/success-failure-modals/trade-success.svg";
import SuccessConfetti from "../../../layout/Confetti/SuccessConfetti";

const UpdateCommentSuccessModal = ({ isOpen }) => {
	const router = useRouter();

	return (
		<>
			<Modal
				isOpen={isOpen}
				image={
					<div className="mx-auto flex items-center relative justify-center h-24 w-24">
						<Image src={successLogo} layout="fill" alt="Success!" />
					</div>
				}
				title={"Comment posted sucessfully!"}
				content={
					<div>
						Yay! The comment was posted successfully. <br /> It might take a few seconds to reflect back on the page.
					</div>
				}
				onClose={() => {
					router.reload(window.location.pathname);
				}}
			></Modal>
			{isOpen && <SuccessConfetti />}
		</>
	);
};

export default UpdateCommentSuccessModal;
