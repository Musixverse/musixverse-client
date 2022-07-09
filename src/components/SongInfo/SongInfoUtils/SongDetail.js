import { useEffect } from "react";
import { useMoralisQuery } from "react-moralis";
import styles from "../../../../styles/SongInfo/SongDetails.module.css";

export default function SongDetail({ description, collaborators }) {
    const { data: collabora } = useMoralisQuery("UserInfo", (query) => query.equalTo("userId", collaborators[0].id), [collaborators]);

    /* TODO: 
        Write cloud function to get username and avatar based on id
        Add covert art artist avatar and username below the artwork
        Figure out sale history
    */

    return (
        <div className={styles["song-detail__song-details"]}>
            {/* <div className={styles['song-details__title']}> */}
            <h1 className="font-tertiary text-[36px]">SONG DETAILS</h1>
            {/* </div> */}
            {/* <div className={styles['song-details__subtitle']}> */}
            <h3 className="font-bold font-secondary text-[18px] pt-3">Track Background</h3>
            <p className="pb-5 font-secondary text-[15px] text-justify">{description}</p>
            {/* </div> */}

            {collaborators.length > 1 ? (
                <div className="mt-16">
                    <h1 className="font-tertiary text-[36px]">COLLABORATORS</h1>
                    {collaborators.map((collaborator, key) => {
                        return (
                            <div className="space-x-16">
                                {/* {" "}
                            {collaborator.avatar && (
                                <div className="absolute flex items-center h-full ml-2">
                                    <Image src={collaborator.avatar} height="30" width="30" className="rounded-full" />
                                </div>
                            )} */}
                                <span>{collaborator.name}</span>
                                <span>{collaborator.split}%</span>
                                <span>{collaborator.role}</span>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
