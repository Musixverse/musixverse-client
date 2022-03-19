import Image from "next/image";
import Link from "next/link";
import artist_mic from "../../../../public/assets/registration/B_Artist.svg";
import collection_category from "../../../../public/assets/registration/B_collector.svg";

export default function Register_sub({ artist }) {
    return (
            <div className="flex items-start justify-between p-3 space-x-4 bg-light-200 hover:bg-light-100 rounded-xl">
                <div className="flex items-start space-x-3">
                    <Image src={artist ? artist_mic : collection_category} width={32} height={32} alt="artist_mic" />
                    <div className="pr-8 sm:pr-10">
                        <p className="mb-1 text-2xl leading-none sm:text-4xl font-tertiary">{artist ? "ARTIST" : "COLLECTOR"}</p>
                        <p className="text-[13px] sm:text-[15px] font-secondary leading-tight sm:max-w-[280px]">
                            {artist ? "An Artist can buy, browse & create any NFTs" : "A Collector can buy & browse NFTs but cannot create any NFTs"}
                        </p>
                    </div>
                </div>
                <Link href={artist ? "/register/artist/basic-details" : "/register/collector"} passHref>
                    <button className="font-light text-[15px] sm:text-[18px] flex items-center justify-center p-4 rounded-xl bg-light-300 hover:bg-[#b3c4c2] cursor-pointer">
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </Link>
            </div>
    );
}
