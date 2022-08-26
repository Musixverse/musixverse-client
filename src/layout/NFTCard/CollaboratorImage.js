import Image from "next/image";
import { useMoralisCloudFunction } from "react-moralis";

const CollaboratorImage = ({ collaborator }) => {
	const { data: collaboratorAvatar } = useMoralisCloudFunction("fetchUserAvatarFromAddress", { address: collaborator.address });

	return (
		<div className={`rounded-full flex items-end relative`}>
			{collaboratorAvatar ? <Image priority src={collaboratorAvatar} height="30" width="30" alt="collaborator's avatar" className="rounded-full" /> : null}
		</div>
	);
};

export default CollaboratorImage;
