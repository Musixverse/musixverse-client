import Image from "next/image";
import Link from "next/link";
import artist_mic from "../../../../public/assets/registeration/B_Artist.svg";
import collection_category from "../../../../public/assets/registeration/B_collector.svg";

export default function Register_sub({ artist }) {
    return (
        <Link href={artist ? "/register/artist" : "/register/collector"} passHref>
            <div className="flex justify-between items-start p-3 space-x-4 cursor-pointer bg-light-200 hover:bg-[#f0f0f0] rounded-xl">
                <div className="flex items-start space-x-3">
                    <Image src={artist ? artist_mic : collection_category} width={32} height={32} alt="artist_mic" />
                    <div className="pr-8 sm:pr-10">
                        <p className="mb-1 text-2xl leading-none sm:text-4xl font-tertiary">{artist ? "ARTIST" : "COLLECTOR"}</p>
                        <p className="text-[13px] sm:text-[15px] font-secondary leading-tight sm:max-w-[280px]">
                            {artist ? "An Artist can buy, browse & create any NFTs" : "A Collector can buy & browse NFTs but cannot create any NFTs"}
                        </p>
                    </div>
                </div>
                <button className="font-light text-[15px] sm:text-[18px] flex items-center justify-center p-4 rounded-xl bg-light-300 hover:bg-[#b3c4c2] cursor-pointer">
                    <i className="fa fa-arrow-right"></i>
                </button>
                {/* <div className="flex items-center justify-center p-4 rounded-xl bg-light-300 hover:bg-[#b3c4c2] cursor-pointer">
                    <Image src={arrow} width={18} height={18} alt="right arrow"></Image>
                </div> */}
            </div>
        </Link>
    );
}
