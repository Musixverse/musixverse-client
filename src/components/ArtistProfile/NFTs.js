import { useState } from "react";
import NFTCard from "../../layout/NFTCard/NFTCard";
import Pager from "./ArtistProfileUtils/Pager";

export default function NFTs() {
    //0-based indexing
    const [currentPage, setCurrentPage] = useState(0);

    //Fetch data from moralis using SSR(preffered)
    const nftData = [
        {
            songName: "Meridian", 
            songId: 65, 
            nftPrice: 0.3, 
            likeCount: 2, 
            lastPrice: 2, 
            isVerified: true, 
            artistName: "Monster KNY"
        },
        {
            songName: "Meridian", 
            songId: 65, 
            nftPrice: 0.3, 
            likeCount: 2, 
            lastPrice: 2, 
            isVerified: true, 
            artistName: "Monster KNY"
        },
        {
            songName: "Meridian", 
            songId: 65, 
            nftPrice: 0.3, 
            likeCount: 2, 
            lastPrice: 2, 
            isVerified: true, 
            artistName: "Monster KNY"
        },
        {
            songName: "Waka Waka", 
            songId: 65, 
            nftPrice: 0.3, 
            likeCount: 2, 
            lastPrice: 2, 
            isVerified: true, 
            artistName: "Monster KNY"
        },
        {
            songName: "Meridian", 
            songId: 65, 
            nftPrice: 0.3, 
            likeCount: 2, 
            lastPrice: 2, 
            isVerified: true, 
            artistName: "Monster KNY"
        },
        {
            songName: "Meridian", 
            songId: 65, 
            nftPrice: 0.3, 
            likeCount: 2, 
            lastPrice: 2, 
            isVerified: true, 
            artistName: "Monster KNY"
        }
    ];

    const n = nftData.length;
    const tempArray = [];
    const nftCards = [];
    for(let i = 0; i < n; i++){
        let nft = nftData[i];
        tempArray.push(
            <NFTCard 
                key={i}
                songName= {nft.songName}
                songId= {nft.songId}
                nftPrice= {nft.nftPrice} 
                likeCount= {nft.likeCount}
                lastPrice= {nft.lastPrice}
                isVerified= {nft.isVerified}
                artistName= {nft.artistName}
            />
        );
        if(i%3 === 2 || i == n-1){
            nftCards.push(tempArray);
            tempArray = [];
        }
    }
    
    return (
        <>
            <div className="grid grid-cols-5 my-11 gap-11">
                {nftCards[currentPage]}
            </div>
            <Pager onPageChange={setCurrentPage} maxPages={nftCards.length}/>
        </>
    );
}
