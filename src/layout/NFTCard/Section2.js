import CollaboratorImage from "./CollaboratorImage";
import styles from "../../../styles/NFTCard/Section2.module.css";

export default function Section2({ collaboratorList, numberOfCopies, localTokenId, lastPrice }) {
    // const likeBtn = useRef();
    // let likeCount = props.likeCount;

    // const handleLikeClick = () => {
    //     const likeCounter = likeBtn.current.children[1];
    //     const isLiked = likeBtn.current.classList.contains("text-red-500");

    //     if (!isLiked) {
    //         likeBtn.current.classList.add("text-red-500");
    //         likeCounter.textContent = ++likeCount;
    //         // NOTE: Make a call to Increment the likes on the moralis server also!
    //     } else {
    //         likeBtn.current.classList.remove("text-red-500");
    //         likeCounter.textContent = --likeCount;
    //         // NOTE: Make a call to Decrement the likes on the server!dzsf
    //     }
    // };

    return (
        <div className={styles["nft-card__description--section2"]}>
            {/* Like button */}
            {/* <button className="text-sm bg-transparent " ref={likeBtn} onClick={handleLikeClick}>
                <i className="mr-2 far fa-heart"></i>
                <span>{props.likeCount}</span>
            </button> */}

            {/* Collaborator Images */}
            <div className="flex items-end justify-between font-secondary text-[#1D1D1D] dark:text-light-200 text-xs">
                <div className="flex -space-x-2 items-end">
                    {collaboratorList.map((collaborator, index) => {
                        return <CollaboratorImage key={index} index={index} collaboratorList={collaboratorList} collaborator={collaborator} />;
                    })}
                </div>
                <span className="dark:text-light-300">
                    #{localTokenId} of&nbsp;{numberOfCopies}
                </span>
            </div>

            {/* Last price */}
            {/* <div className="flex items-center">
                <p className={styles["description__section2--lastprice"]}>Last</p>
                <div className="flex items-center">
                    <Image src={"/assets/Eth_logo.svg"} width={9} height={18} alt="ethereum logo" />
                    <span className="ml-1 text-xs font-bold">{lastPrice}</span>
                </div>
            </div> */}
        </div>
    );
}
