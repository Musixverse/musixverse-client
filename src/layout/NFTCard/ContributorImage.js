import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useMoralisQuery } from "react-moralis";

const ContributorImage = ({ index, contributorList, contributor }) => {
    const [contributorAvatar, setContributorAvatar] = useState("");
    const contributorRef = useRef();

    const { fetch: fetchUserAvatar } = useMoralisQuery("UserInfo", (query) => query.equalTo("userId", contributorRef.current), [contributorRef.current], {
        autoFetch: false,
    });

    async function getContributorAvatars() {
        if (contributor.id) {
            contributorRef.current = contributor.id;

            await fetchUserAvatar({
                onSuccess: (object) => {
                    if (object[0]) {
                        setContributorAvatar(object[0].attributes.avatar);
                    }
                },
                onError: (error) => {
                    console.log("fetchUserAvatar error", error);
                },
            });
        }
    }

    useEffect(() => {
        getContributorAvatars();
    }, [contributorRef.current]);

    return (
        <div className={`rounded-full flex items-end relative z-${10 * (contributorList.length - index)}`}>
            {contributorAvatar ? <Image priority src={contributorAvatar} height="30" width="30" className="rounded-full" /> : null}
        </div>
    );
};

export default ContributorImage;
