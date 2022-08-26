import Image from "next/image";
import PlusIcon from "../../../../public/assets/profile/plus-icon.png";

export default function NoRecords(){
    return(
        <div className="w-full mt-4">
            <div className="flex flex-col items-center justify-center h-[20vh] bg-white dark:bg-dark-100 rounded-xl">
                <Image src={PlusIcon} alt="Music Icon" width={100} height={100} />
                <p className="font-secondary text-sm text-center text-gray-600">No item to display!</p>
                <p className="font-secondary text-sm text-center text-gray-600">Add NFTs to be featured on your profile</p>
            </div>
        </div>
    )
}