import Image from "next/image";
import { useMoralisCloudFunction } from "react-moralis";

const CollaboratorImage = ({ index, collaboratorList, collaborator }) => {
    const { data: collaboratorAvatar } = useMoralisCloudFunction("fetchUserAvatarFromAddress", { address: collaborator.address });

    return (
        <div className={`rounded-full flex items-end relative z-${10 * (collaboratorList.length - index)}`}>
            {collaboratorAvatar ? <Image priority src={collaboratorAvatar} height="30" width="30" className="rounded-full" /> : null}
        </div>
    );
};

export default CollaboratorImage;
