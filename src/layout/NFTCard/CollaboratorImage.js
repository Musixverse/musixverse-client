import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useMoralisQuery } from "react-moralis";

const CollaboratorImage = ({ index, collaboratorList, collaborator }) => {
    const [collaboratorAvatar, setCollaboratorAvatar] = useState("");
    const collaboratorRef = useRef();

    const { fetch: fetchUserAvatar } = useMoralisQuery("UserInfo", (query) => query.equalTo("userId", collaboratorRef.current), [collaboratorRef.current], {
        autoFetch: false,
    });

    async function getCollaboratorAvatars() {
        if (collaborator.id) {
            collaboratorRef.current = collaborator.id;

            await fetchUserAvatar({
                onSuccess: (object) => {
                    if (object[0]) {
                        setCollaboratorAvatar(object[0].attributes.avatar);
                    }
                },
                onError: (error) => {
                    console.log("fetchUserAvatar error", error);
                },
            });
        }
    }

    useEffect(() => {
        getCollaboratorAvatars();
    }, [collaboratorRef.current]);

    return (
        <div className={`rounded-full flex items-end relative z-${10 * (collaboratorList.length - index)}`}>
            {collaboratorAvatar ? <Image priority src={collaboratorAvatar} height="30" width="30" className="rounded-full" /> : null}
        </div>
    );
};

export default CollaboratorImage;
