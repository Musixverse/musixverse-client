import { useState, useContext } from "react";
import Modal from "../../../layout/Modal/Modal";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import ReportFilterDropdown from "../../../layout/ReportFilterDropdown";
import { reportNftFilters } from "../../../config/constants";
import StatusContext from "../../../../store/status-context";

const NftReportModal = ({ isOpen, setOpen, tokenId }) => {
	const { user } = useMoralis();
	const [reason, setReason] = useState(reportNftFilters[0]);
	const [, , setSuccess, setError] = useContext(StatusContext);

	const { fetch: reportNft } = useMoralisCloudFunction("reportNft", { tokenId: tokenId, reason: reason }, { autoFetch: false });

	const reportTrackNft = () => {
		if (user && reason) {
			reportNft({
				onSuccess: async (object) => {
					if (object) {
						setSuccess((prevState) => ({
							...prevState,
							title: "Track NFT Reported",
							message: "You report has been recorded. We will review this report soon and take appropriate action.",
							showSuccessBox: true,
						}));
					}
				},
				onError: (error) => {
					console.log("reportNft Error:", error);
				},
			});
		} else {
			setError((prevState) => ({
				...prevState,
				title: "Report Failed",
				message: "There was a problem in submitting your report. Please try again",
				showErrorBox: true,
			}));
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-6xl">
					<label htmlFor="create-nft-form-submit" className="flex justify-center items-center w-14 h-14 border-2 rounded-full border-red-600">
						<i className="fa-solid fa-flag text-2xl text-red-600"></i>
					</label>
				</div>
			}
			title={<div className="text-lg">Are you sure you want to report this NFT?</div>}
			content={
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 font-primary text-sm text-left">Choose a category</p>
					<ReportFilterDropdown optionsArray={reportNftFilters} initialValue={reportNftFilters[0]} reason={reason} setReason={setReason} />
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
			buttons={[
				{
					role: "custom",
					onClick: () => {
						reportTrackNft();
						setOpen(false);
					},
					toClose: true,
					classes: "flex items-center px-4 py-2 mr-2 mb-2 text-sm font-primary font-bold rounded-md bg-red-600 hover:bg-red-700 text-light-100",
					label: (
						<>
							Report NFT
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

export default NftReportModal;
