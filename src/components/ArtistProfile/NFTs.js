import NFTCard from "../../Layouts/NFTCard/NFTCard";
import Pager from "./ArtistProfileUtils/Pager";

export default function NFTs() {
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
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
            </div>
            <Pager/>
        </>
    );
}
