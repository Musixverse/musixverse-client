import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";

const SaveDraftSuccessModal = ({ isOpen, setOpen }) => {
	const router = useRouter();

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-6xl">
					<i className="fa-brands fa-firstdraft"></i>
				</div>
			}
			title={"Your draft has been saved!"}
			content={
				<div>
					You can come back later and continue where you left off.
					<br />
					To see your draft, please click the button below.
				</div>
			}
			onClose={() => {
				setOpen(false);
				router.replace("/create-nft").then(() => router.reload());
			}}
			buttons={[
				{
					role: "custom",
					onClick: () => {
						setOpen(false);
						router.replace("/create-nft").then(() => router.reload());
					},
					toClose: true,
					classes:
						"flex items-center px-4 py-3 mr-2 mb-2 text-sm font-primary font-bold rounded-md bg-primary-100 hover:bg-primary-200 text-light-100",
					label: (
						<>
							View Draft
							<span className="ml-8 text-xl">
								<i className="fa-solid fa-arrow-right-long"></i>
							</span>
						</>
					),
				},
			]}
		></Modal>
	);
};

export default SaveDraftSuccessModal;
