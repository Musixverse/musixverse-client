
import Image from "next/Image";
import arrow from "../../../../public/assets/registeration/arrow.svg";
import artist_mic from "../../../../public/assets/registeration/artist_mic.svg";
import collection_category from "../../../../public/assets/registeration/collector.svg";


export default function Register_sub({artist}) {
    return(
        <div className="flex bg-light-100 space-x-4 rounded-md p-3">
            <Image src={artist?artist_mic:collection_category} width={50} height={50} alt="artist_mic" /> 
            <div className="pr-16">
                <p className="text-4xl font-tertiary">{artist ? 'ARTIST' : 'COLLECTOR'}</p>
                <p className="text-[15px] font-secondary max-w-[250px]">{artist? 'An Artist can Buy & Browse NFTs but cannot Sale any':'A Collector can Buy & Browse NFTs and also Sell any NFT'}</p> 
            </div>
            <div className="flex justify-center items-center p-4 rounded-md bg-light-300">
                <Image src={arrow} width={20} height={20} alt="right arrow"></Image>
            </div>
        </div>
    )
}