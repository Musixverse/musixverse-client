export default function ArtistIntro({artistName, isBand}){
    return (
        <div className="flex flex-col items-center p-5 rounded-3xl bg-light-300 dark:bg-[#2d2d2d] w-[300px] sm:w-[340px] lg:w-[380px]">
            <div className="flex flex-col items-center mt-3">
                <h3 className="font-medium text-[#868686] text-xs lg:text-lg 2xl:text-xl">{isBand? "Band":"Artist"}</h3>
                <h1 className="text-lg font-semibold 2xl:text-2xl">{artistName}</h1>
            </div>
            <div className="relative w-full mt-4 overflow-hidden lg:mt-7">
                {/* <div className="absolute z-0 bottom-2 lg:bottom-0 left-[50%] translate-x-[-50%] dark:bg-primary-400 w-[150px] h-[35px]"></div> */}
                <div className="py-4 lg:py-6 backdrop-blur-[30px] backdrop-brightness-110 dark:backdrop-blur-[40px] dark:backdrop-brightness-150 rounded-xl z-10 flex justify-center">
                    <h3 className="text-lg font-semibold">Coming Soon</h3>
                </div>
            </div>
        </div>
    );
}