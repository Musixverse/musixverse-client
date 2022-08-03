import Image from "next/image";
import { useTheme } from "next-themes";
import TrackNFTs from "../NewReleases/TrackNFTs";
import Filter from "./CatalogUtils/Filter";

export default function CatalogBody({currentSelection}){
    const {theme} = useTheme();
    let catalogType = "NEW RELEASES ON MUSIXVERSE MARKETPLACE";
    if(currentSelection === 2)
        catalogType = "EXPLORE THE MUSIXVERSE MARKETPLACE";
    else if(currentSelection === 3)
        catalogType = "TRENDING NFTs ON MUSIXVERSE MARKETPLACE";
        
    return(
        <div className="flex flex-col items-center w-full mt-[70px]">
            <div className="flex text-[#1d1d1d] mb-[70px] items-center space-x-2 text-4xl font-tertiary">
                <Image src={theme === "light" ? "/assets/record_b.svg" : "/assets/record_w.svg"} alt="vinyl disc" height={30} width={30}/>
                <p>{catalogType}</p> 
            </div>
            <div className="flex items-start justify-between w-full">
                <Filter/>
                <TrackNFTs/>
            </div>
        </div>
    );
}