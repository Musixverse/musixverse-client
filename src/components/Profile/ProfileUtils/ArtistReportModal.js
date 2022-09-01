import { useState } from "react";
import Modal from "../../../layout/Modal/Modal";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import FilterDropdown from "./ReportFilterDropdown";
import { reportProfileFilters } from "../../../constants";

const ArtistEmailVerificationSuccessModal = ({ isOpen, setOpen }) => {
	const router = useRouter();
	const { user } = useMoralis();
    const [currentFilterType, setCurrentFilterType] = useState(0);
    const [appliedFilter, setAppliedFilter] = useState(0);

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
			title={"Are you sure you want to report this artist?"}
			content={
                // main content of the modal
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm text-left">Choose a category</p>
					<FilterDropdown
						optionsArray={reportProfileFilters}
						initialValue={""}
						setChoice={setAppliedFilter}
						dropdownType={"ReportProfile"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			}
			onClose={() => {
				setOpen(false);
				router.push(`/profile/${user.attributes.username}`, undefined, { shallow: true });
			}}
			buttons={[
				{
					role: "custom",
					onClick: () => {
						setOpen(false);
						router.push(`/profile/${user.attributes.username}`, undefined, { shallow: true });
					},
					toClose: true,
					classes:
						"flex items-center px-4 py-3 mr-2 mb-2 text-sm font-primary font-bold rounded-md bg-red-600 hover:bg-red-700 text-light-100",
					label: (
						<>
							Report Profile
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

export default ArtistEmailVerificationSuccessModal;
