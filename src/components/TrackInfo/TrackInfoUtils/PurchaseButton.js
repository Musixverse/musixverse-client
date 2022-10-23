import { useState, useContext } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useRouter } from "next/router";
import CustomButton from "../../../layout/CustomButton";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import AuthModalContext from "../../../../store/authModal-context";
import { purchaseTrackNFT, purchaseReferredTrackNFT } from "../../../utils/smart-contract/functions";
import PurchaseSuccessModal from "./PurchaseSuccessModal";

const PurchaseButton = ({ tokenId, price }) => {
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
			setLoading(true);
			try {
				if (ref) {
					await fetchAddressFromUsername({
						onSuccess: async (referrerAddress) => {
							await purchaseReferredTrackNFT(tokenId, referrerAddress, price);
							await fetch(`/api/revalidate-track?path=${window.location.pathname}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
							await fetch(
								`/api/revalidate-profile?path=/profile/${user.attributes.username}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`
							);
							setLoading(false);
							setPurchaseNFTSuccess(true);
						},
						onError: (error) => {
							console.log("purchaseReferredTrackNFT fetchAddressFromUsername Error:", error);
							setLoading(false);
						},
					});
				} else {
					await purchaseTrackNFT(tokenId, price);
					await fetch(`/api/revalidate-track?path=${window.location.pathname}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
					await fetch(`/api/revalidate-profile?path=/profile/${user.attributes.username}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
					setLoading(false);
					setPurchaseNFTSuccess(true);
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				if (err.title === "User is not connected to the same wallet") {
					setError({
						title: err.title,
						message: err.message,
						showErrorBox: true,
					});
				}
				if (err.message.includes("insufficient funds")) {
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
