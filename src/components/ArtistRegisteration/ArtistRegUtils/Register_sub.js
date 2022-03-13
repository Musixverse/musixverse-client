
import Image from "next/Image";
import arrow from "../../../../public/assets/registeration/arrow.svg";
import artist_mic from "../../../../public/assets/registeration/B_Artist.svg";
import collection_category from "../../../../public/assets/registeration/B_collector.svg";


export default function Register_sub({artist}) {
    return(
        <div className="flex items-start p-3 space-x-4 bg-light-200 rounded-xl">
            <Image src={artist?artist_mic:collection_category} width={32} height={32} alt="artist_mic" /> 
            <div className="pr-16">
                <p className="mb-1 text-4xl leading-none font-tertiary">{artist ? 'ARTIST' : 'COLLECTOR'}</p>
                <p className="text-[15px] font-secondary leading-tight max-w-[250px]">{artist? 'An Artist can buy, browse & create any NFTs':'A Collector can buy & browse NFTs but cannot create any NFTs'}</p> 
            </div>
            <div className="flex items-center justify-center p-4 rounded-xl bg-light-300 hover:bg-[#b3c4c2] cursor-pointer">
                <Image src={arrow} width={18} height={18} alt="right arrow"></Image>
            </div>
        </div>
    )
}