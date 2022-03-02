import NFTCard from "../../Layouts/NFTCard/NFTCard";

export default function NFTs(){
    return (
        <div className="grid grid-cols-5 my-11 gap-11">
            <NFTCard/>
            <NFTCard/>
            <NFTCard/>
            <NFTCard/>
            <NFTCard/>
            <NFTCard/>
        </div>
    );
}