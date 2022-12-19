import { useState, useContext } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useRouter } from "next/router";
import CustomButton from "../../../layout/CustomButton";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import AuthModalContext from "../../../../store/authModal-context";
import { purchaseTrackNFT } from "../../../utils/smart-contract/functions";
import PurchaseSuccessModal from "./PurchaseSuccessModal";
import { ethers } from "ethers";

const PurchaseButton = ({ tokenId, trackId, price }) => {
	const { user } = useMoralis();
	const router = useRouter();
	const { ref } = router.query;
	const { fetch: fetchAddressFromUsername } = useMoralisCloudFunction("fetchAddressFromUsername", { username: ref }, { autoFetch: false });

	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	// Purchase success modal
	const [purchaseNFTSuccess, setPurchaseNFTSuccess] = useState(false);

	const purchaseToken = async () => {
		if (user && !user.attributes.emailVerified) {
			router.push("/register/confirm-email");
		} else if (user && user.attributes.emailVerified) {
			setLoading({
				status: true,
				title: "Please sign the transaction in your wallet...",
			});
			try {
				if (ref) {
					await fetchAddressFromUsername({
						onSuccess: async (referrerAddress) => {
							await purchaseTrackNFT(tokenId, trackId, referrerAddress, price);
							await fetch(`/api/revalidate-track?path=${window.location.pathname}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
							await fetch(
								`/api/revalidate-profile?path=/profile/${user.attributes.username}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`
							);
							setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
							setPurchaseNFTSuccess(true);
						},
						onError: (error) => {
							console.log("purchaseReferredTrackNFT fetchAddressFromUsername Error:", error);
							if (error.message && error.message == "Cannot read properties of undefined (reading 'ethAddress')") {
								setError({
									title: "Incorrect referral link",
									message: "A user with the username provided in the link does not exist.",
									showErrorBox: true,
								});
							}
							setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						},
					});
				} else {
					await purchaseTrackNFT(tokenId, trackId, ethers.constants.AddressZero, price);
					await fetch(`/api/revalidate-track?path=${window.location.pathname}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
					await fetch(`/api/revalidate-profile?path=/profile/${user.attributes.username}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					setPurchaseNFTSuccess(true);
				}
			} catch (err) {
				console.error(err);
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				if (err.title && err.title === "User is not connected to the same wallet") {
					setError({
						title: err.title,
						message: err.message,
						showErrorBox: true,
					});
				}
				if (err.message && err.message.includes("insufficient funds")) {
					setError({
						title: "Insufficient funds",
						message: "Please get enough funds in your wallet for this transaction",
						showErrorBox: true,
					});
				}
				if (err.data && err.data.message.includes("insufficient funds")) {
					setError({
						title: "Insufficient funds",
						message: "Please get enough funds in your wallet for this transaction",
						showErrorBox: true,
					});
				}
			}
		} else {
			setAuthModalOpen(true);
		}
	};

	return (
		<>
			<CustomButton green={true} onClick={() => purchaseToken()}>
				Buy Now
			</CustomButton>
			<PurchaseSuccessModal isOpen={purchaseNFTSuccess} setOpen={setPurchaseNFTSuccess} />
		</>
	);
};

export default PurchaseButton;
