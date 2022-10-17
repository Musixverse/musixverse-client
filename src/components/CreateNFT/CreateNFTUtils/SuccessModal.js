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
				// onConfirm={() => console.log("Button confirm")}
				// onDiscard={() => console.log("Button discard")}
				// buttons={[
				//     {
				//         role: "custom",
				//         onClick: () => console.log("custom test"),
				//         toClose: true,
				//         classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
				//         label: "Custom",
				//     },
				//     {
				//         role: "discard",
				//         toClose: true,
				//         classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
				//         label: "Discard",
				//     },
				//     {
				//         role: "confirm",
				//         toClose: false,
				//         classes: "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
				//         label: "Confirm",
				//     },
				// ]}
			></Modal>
			{isOpen && <SuccessConfetti />}
		</>
	);
};

export default SuccessModal;
