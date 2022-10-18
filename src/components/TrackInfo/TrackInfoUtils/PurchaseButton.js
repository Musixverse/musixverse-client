import { useState, useContext } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useRouter } from "next/router";
import CustomButton from "../../../layout/CustomButton";
import LoadingContext from "../../../../store/loading-context";
import AuthModalContext from "../../../../store/authModal-context";
import { purchaseTrackNFT, purchaseReferredTrackNFT } from "../../../utils/smart-contract/functions";
import PurchaseSuccessModal from "./PurchaseSuccessModal";

const PurchaseButton = ({ tokenId, price }) => {
	const { user } = useMoralis();
	const router = useRouter();
	const { ref } = router.query;
	const { fetch: fetchAddressFromUsername } = useMoralisCloudFunction("fetchAddressFromUsername", { username: ref }, { autoFetch: false });

	const [, setLoading] = useContext(LoadingContext);
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	// Purchase success modal
	const [purchaseNFTSuccess, setPurchaseNFTSuccess] = useState(false);

	const purchaseToken = async () => {
		if (user && !user.attributes.emailVerified) {
			router.push("/register/confirm-email", undefined, { shallow: true });
		} else if (user && user.attributes.emailVerified) {
			setLoading(true);
			try {
				if (ref) {
					await fetchAddressFromUsername({
						onSuccess: async (referrerAddress) => {
							await purchaseReferredTrackNFT(tokenId, referrerAddress, price);
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
					setLoading(false);
					setPurchaseNFTSuccess(true);
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
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
