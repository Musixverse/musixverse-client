import Image from "next/image";
import { useRef } from "react";
import styles from "../../../styles/NFTCard/Section2.module.css";

export default function Section2(props){
    const likeBtn = useRef();
    let likeCount = props.likeCount;

    const handleLikeClick = ()=>{
        const likeCounter = likeBtn.current.children[1];
        const isLiked = likeBtn.current.classList.contains('text-red-500');

        if(!isLiked){
            likeBtn.current.classList.add('text-red-500');
            likeCounter.textContent = ++likeCount;
            // NOTE: Make a call to Increment the likes on the moralis server also!
        }
        else{
            likeBtn.current.classList.remove('text-red-500');
            likeCounter.textContent = --likeCount;
            // NOTE: Make a call to Decrement the likes on the server!
        }
    };

    return (
        <div className={styles['nft-card__description--section2']}>
            {/* Like button */}
            <button className="text-sm bg-transparent " ref={likeBtn} onClick={handleLikeClick}>
                <i className="mr-2 far fa-heart"></i>
                <span>{props.likeCount}</span>
            </button>
            {/* Last price */}
            <div className="flex items-center">
                <p className={styles['description__section2--lastprice']}>Last</p>
                <div className="flex items-center">
                    <Image src={"/assets/Eth_logo.svg"} width={9} height={18} alt="ethereum logo"/>
                    <span className="ml-1 text-xs font-bold">{props.lastPrice}</span>
                </div>
            </div>
        </div>
    );
}