import NFTCard from "../../layout/NFTCard/NFTCard";
import Pager from "./ArtistProfileUtils/Pager";

export default function NFTs() {
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
        }
    ];
    const nftCards = nftData.map((nft, idx)=>{
        return (
            <NFTCard 
                key={idx}
                songName= {nft.songName}
                songId= {nft.songId}
                nftPrice= {nft.nftPrice} 
                likeCount= {nft.likeCount}
                lastPrice= {nft.lastPrice}
                isVerified= {nft.isVerified}
                artistName= {nft.artistName}
            />
        );
    });
    return (
        // <div className="z-0 grid grid-cols-5 my-11 gap-11">
        //     <NFTCard />
        //     <NFTCard />
        //     <NFTCard />
        //     <NFTCard />
        //     <NFTCard />
        //     <NFTCard />
        // </div>
        <>
            <div className="grid grid-cols-5 my-11 gap-11">
                {nftCards}
            </div>
            <Pager/>
        </>
    );
}
