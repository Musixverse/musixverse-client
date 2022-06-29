import Image from "next/image";

export default function Notartist() {
    return (
        <div className="pt-8 min-h-screen flex flex-col justify-center items-center">
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-100">
                <Image src="/assets/create-nft/astronaut.png" alt="Not an artist" width={50} height={50} />
            </div>
            <p className="font-tertiary text-4xl sm:text-5xl mt-6">OOPS! Something&apos;s not right</p>
            <p className="font-secondary text-sm sm:text-base text-center">
                You don&apos;t have an Artist account. To create an NFT, you <br /> need to switch to an Artist profile.
            </p>
            <div className="flex gap-4 mt-20">
                <button className="px-8 py-3 mt-6 font-semibold text-black text-xs bg-light-300 hover:bg-search-300 font-primary rounded-xl dark:bg-dark-100 dark:text-white">
                    Back
                </button>
                <button className="px-8 py-3 mt-6 font-semibold text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">
                    Switch to an artist profile &nbsp; -&gt;
                </button>
            </div>
        </div>
    );
}
