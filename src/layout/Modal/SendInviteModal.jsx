import { useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";
import Modal from "./Modal";
import { isEmailValid } from "../../utils/Validate";

const SendInviteModal = ({ isOpen, setOpen, onClose = "", invitedArtistEmail, onEmailChange }) => {
	const [, setLoading] = useContext(LoadingContext);
	const [, , setSuccess, setError] = useContext(StatusContext);

	const { fetch: sendInviteEmail } = useMoralisCloudFunction("sendInviteEmail", { email: invitedArtistEmail }, { autoFetch: false });
	const onFormSubmit = async (e) => {
		e.preventDefault();
		setLoading({
			status: true,
			title: "Sending Invite...",
		});

		// EMAIL CHECK
		const emailCheck = await isEmailValid(invitedArtistEmail);
		if (emailCheck.status === false) {
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			setError({
				title: emailCheck.title || "Invalid email entered",
				message: emailCheck.message,
				showErrorBox: true,
			});
			return;
		}

		await sendInviteEmail({
			onSuccess: async (object) => {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				setSuccess((prevState) => ({
					...prevState,
					title: "Invite sent successfully!",
					message: `An invitation email has been sent to ${invitedArtistEmail}. We will notify you once your friend/band member joins Musixverse.`,
					showSuccessBox: true,
				}));
				onClose();
			},
			onError: (error) => {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				console.log("sendInviteEmail Error:", error);
			},
		});
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
							className="mt-2 dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
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
								className="flex items-center mt-10 -mb-6 px-6 py-3 text-sm font-primary font-bold rounded-md bg-primary-500 hover:bg-primary-600 text-light-100"
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
