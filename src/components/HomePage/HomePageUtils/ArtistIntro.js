export default function ArtistIntro(){
    return (
        <div className="p-5 flex flex-col items-center rounded-xl bg-light-100 dark:bg-[#2d2d2dfb]">
            <div className="px-16 py-8">
                <p>Artist</p>
                <h1>Harry Arora</h1>
            </div>

            <div className="relative w-full">
                <div className="backdrop-blur-[40px] w-full backdrop-brightness-[1.75] p-3 rounded-2xl flex items-center justify-between z-20"><p>Coming Soon</p></div>
                <div className="absolute z-[-1] w-full h-9 bg-primary-600 rounded-xl top-5 md:top-[45%]"></div>
            </div>
        </div>
    );
}