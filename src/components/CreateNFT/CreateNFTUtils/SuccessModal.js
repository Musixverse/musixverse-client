import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import successLogo from "/public/assets/success-failure-modals/success.svg";
import SuccessConfetti from "../../../layout/Confetti/SuccessConfetti";

const SuccessModal = ({ isOpen, setOpen }) => {
	const router = useRouter();
	const { user } = useMoralis();

	return (
		<>
			<Modal
				isOpen={isOpen}
				image={
					<div className="mx-auto flex items-center relative justify-center h-24 w-24">
						<Image src={successLogo} layout="fill" alt="Success" />
					</div>
				}
				title={"Successfully created NFT!"}
				content={
					<div>
						Yay! Your NFT was created successfully. <br /> It might take a few seconds to reflect back on your profile.
					</div>
				}
				onClose={() => {
					setOpen(false);
					router.push(`/profile/${user.attributes.username}`);
				}}
			></Modal>
			{isOpen && <SuccessConfetti />}
		</>
	);
};

export default SuccessModal;
