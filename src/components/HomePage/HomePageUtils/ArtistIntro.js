export default function ArtistIntro({artistName, isBand}){
    return (
        <div className="flex flex-col items-center p-5 rounded-3xl bg-light-100 dark:bg-[#2d2d2dfb] w-[380px]">
            <div className="flex flex-col items-center mt-3">
                <h3 className="font-medium text-[#868686] text-xs lg:text-lg 2xl:text-xl">{isBand? "Band":"Artist"}</h3>
                <h1 className="text-lg font-semibold 2xl:text-2xl">{artistName}</h1>
            </div>
            <div className="relative w-full mt-7">
                <div className="absolute z-0 bottom-0 left-[50%] translate-x-[-50%] bg-primary-400 w-[150px] h-[35px]"></div>
                <div className="py-6 backdrop-blur-[40px] backdrop-brightness-150 rounded-xl z-10 flex justify-center">
                    <h3 className="text-lg font-semibold">Coming Soon</h3>
                </div>
            </div>
        </div>
    );
}