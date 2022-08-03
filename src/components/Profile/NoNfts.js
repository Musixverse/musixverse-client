import Image from "next/image";
import Link from "next/link";

export default function NoNfts(){
    return(
        <div className="flex flex-col items-center justify-center w-full p-12 rounded-xl dark:bg-dark-100 bg-light-100">
            <div className="mb-5 rounded-full flex items-center justify-center w-[120px] h-[120px] bg-dark-200">
                <Image src={"/assets/profile/no-nfts.svg"} width={70} height={42} alt="music jazz"/>
            </div>
            <div className="flex flex-col items-center space-y-3">
                <p className="font-secondary">You don&apos;t have any items to display</p>

                {/* If artist then render create nft other wise buy nft */}
                <Link href={"/create-nft"} passHref>
                    <button className="py-2 font-medium text-center px-14 hover:bg-primary-200 bg-primary-100 rounded-3xl text-light-100">Create NFTs</button>
                </Link>
            </div>
        </div>
    );
}