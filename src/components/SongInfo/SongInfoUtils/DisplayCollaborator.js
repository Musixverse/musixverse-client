import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";

const DisplayCollaborator = ({ collaborator }) => {
    const [collaboratorInfo, setCollaboratorInfo] = useState("");

    const { fetch: fetchCollaborator } = useMoralisCloudFunction(
        "fetchCollaborator",
        { id: collaborator.id },
        {
            autoFetch: false,
        }
    );

    useEffect(() => {
        fetchCollaborator({
            onSuccess: async (object) => {
                setCollaboratorInfo(object[0]);
            },
            onError: (error) => {
                console.log("fetchCollaborator Error:", error);
            },
        });
    }, [collaborator]);

    return (
        <Link href={`/profile/${collaboratorInfo.username}`} className="cursor-pointer">
            <a target="_blank" rel="noopener noreferrer">
                <div className="flex items-end mb-2 font-secondary text-sm">
                    {collaboratorInfo.userInfo && <Image src={collaboratorInfo.userInfo[0].avatar} height="30" width="30" className="rounded-full" />}
                    <span className="ml-2">
                        {collaborator.name}
                        <i className="ml-2 mr-2 fa-solid fa-arrow-right-long text-[10px]"></i>
                    </span>
                    <span>{collaborator.role}</span>
                    {/* <span className="ml-3">(Split: {collaborator.split}%)</span> */}
                </div>
            </a>
        </Link>
    );
};

export default DisplayCollaborator;
