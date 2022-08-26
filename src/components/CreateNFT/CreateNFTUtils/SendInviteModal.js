import { useContext } from "react";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import Modal from "../../../layout/Modal/Modal";

const SendInviteModal = ({ isOpen, setOpen, invitedArtistEmail, onEmailChange, nftDraftMetadata }) => {
	const [loading, setLoading] = useContext(LoadingContext);
	const [, , setSuccess] = useContext(StatusContext);

	const router = useRouter();
	const { draft } = router.query;
	// Save Draft Feature
	const { fetch: saveNftCreationDraft } = useMoralisCloudFunction("saveNftDraft", { metadata: nftDraftMetadata, draftId: draft }, { autoFetch: false });
	const saveNftDraft = async () => {
		await saveNftCreationDraft({
			onSuccess: async (object) => {},
			onError: (error) => {
				console.log("fetchMatchingUsers Error:", error);
			},
		});
	};

	const { fetch: sendInviteEmail } = useMoralisCloudFunction("sendInviteEmail", { email: invitedArtistEmail }, { autoFetch: false });
	const sendInvitationEmail = async () => {
		setLoading(true);
		await sendInviteEmail({
			onSuccess: async (object) => {
				setLoading(false);
				await saveNftDraft();
				setSuccess((prevState) => ({
					...prevState,
					title: "Invite sent successfully!",
					message: `An invitation email has been sent to ${invitedArtistEmail}. A draft of your NFT has also been saved. We will notify you once your friend/collaborator joins Musixverse.`,
					showSuccessBox: true,
				}));
			},
			onError: (error) => {
				setLoading(false);
				console.log("fetchMatchingUsers Error:", error);
			},
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		await sendInvitationEmail();
		setOpen(false);
	};

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-5xl">
					<i className="fa-solid fa-paper-plane"></i>
				</div>
			}
			title={"Send email invite"}
			content={
				<div>
					<form onSubmit={onFormSubmit}>
						<div>Enter your friend&apos;s/collaborator&apos;s email to send an invite</div>
						<input
							className="mt-2 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
							type="email"
							placeholder="Email"
							autoComplete="off"
							value={invitedArtistEmail}
							onChange={(e) => onEmailChange(e.target.value)}
							required
						/>
						<div className="flex justify-end">
							<button
								type="submit"
								className="flex items-center mt-10 -mb-6 px-6 py-3 text-sm font-primary font-bold rounded-md bg-primary-100 hover:bg-primary-200 text-light-100"
							>
								Send Invite
								<span className="ml-3 text-lg">
									<i className="fa-solid fa-arrow-right-long"></i>
								</span>
							</button>
						</div>
					</form>
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
		></Modal>
	);
};

export default SendInviteModal;
