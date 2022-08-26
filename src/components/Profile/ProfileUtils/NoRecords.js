import Image from "next/image";
import MusicIcon from "../../../../public/assets/profile/music-icon.png";

export default function NoRecords({artist}){
    return(
        <div className="w-full mt-4">
            <div className="flex flex-col items-center justify-center h-[20vh] bg-white dark:bg-dark-100 rounded-xl">
                <Image src={MusicIcon} alt="Music Icon" width={100} height={100} />
                <p className="font-secondary text-sm text-center text-gray-600">You Don&apos;t have any item to Display</p>
                <button className="px-8 py-3 mt-6 font-semibold text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">
                        {artist? `Create NFT` : `Start Exploring`}
                </button>
            </div>
        </div>
    )
}