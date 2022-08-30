import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";

const ArtistProfileNotVerifiedModal = ({ isOpen, setOpen }) => {
	const router = useRouter();

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-6xl">
					<label htmlFor="create-nft-form-submit" className="flex justify-center items-center w-14 h-14 border-2 rounded-full border-error-200">
						<i className="fa-solid fa-exclamation text-2xl text-error-200"></i>
					</label>
				</div>
			}
			title={"Your artist profile is not verified!"}
			content={
				<div>
					You need to verify your profile to create NFTs on Musixverse.
					<br />
					Please click the button below to complete verification.
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
			buttons={[
				{
					role: "custom",
					onClick: () => {
						setOpen(false);
						router.push(`/profile/verify`, undefined, { shallow: true });
					},
					toClose: true,
					classes:
						"flex items-center px-4 py-3 mr-2 mb-2 text-sm font-primary font-bold rounded-md bg-primary-100 hover:bg-primary-200 text-light-100",
					label: (
						<>
							Verify Profile
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

export default ArtistProfileNotVerifiedModal;
