import { useRef } from "react";
import Image from "next/image";

export default function NFTCard(props){
    const likeBtn = useRef();

    let artistName = "Monster KNY";
    if(artistName.length > 7)
        artistName = artistName.substring(0, 7)+"...";
    const songName = "Meridian";
    const songId = 65;
    const nftPrice = 0.3;
    const likeCount = 2;

    const handleLikeClick = ()=>{
        const likeCounter = likeBtn.current.children[1];
        const isLiked = likeBtn.current.classList.contains('text-red-500');

        if(!isLiked){
            likeBtn.current.classList.add('text-red-500');
            // Increment likes
            likeCounter.textContent = ++likeCount;
        }
        else{
            likeBtn.current.classList.remove('text-red-500');
            // decrement likes
            likeCounter.textContent = --likeCount;
        }
    };

    return(
        <div className="cursor-pointer rounded-xl flex flex-col overflow-hidden max-w-[256px]">
            {/* NFT Image */}
            {/* <div className={classBg}> */}
                <Image src={"/assets/nft_bg.jpg"} alt="nft image" height={256} width={256}></Image>
            {/* </div> */}
            {/* NFT Details */}
            <div className="bg-light-100 p-3">
                <div className="flex justify-between">
                    <div>
                        <p className="font-secondary">
                            {artistName}
                            <Image src={"/assets/mxv_tick.svg"} width={17} height={17} alt='MXV verified'></Image>
                        </p>
                        <h6 className="text-xl font-secondary font-bold">
                            {songName}
                            <span className="ml-1">{"#"+`${songId}`}</span>
                        </h6>
                    </div>
                    <div className="text-nav-light">
                        <p className="font-secondary text-right">Price</p>
                        <div className="flex items-center font-bold">
                            <Image src={"/assets/Eth_logo.svg"} width={12.5} height={25} alt="ethereum logo"/>
                            <span className="ml-1 text-lg">{nftPrice}</span>
                        </div>
                    </div>
                </div>
                <button className="mt-2 text-lg bg-transparent " ref={likeBtn} onClick={handleLikeClick}>
                    <i className="far fa-heart mr-1"></i>
                    <span>{likeCount}</span>
                </button>
            </div>
        </div>
    );
}