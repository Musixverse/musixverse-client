import Banner from "../../components/ArtistProfile/Banner";
import ArtistHeader from "../../components/ArtistProfile/ArtistHeader";
import Filter from "../../components/ArtistProfile/Filter";

export default function artistProfile(){
    return (
        <div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200">
            <Banner />
            <div className="w-full max-w-[1920px] px-16 xl:px-20 2xl:px-36">
                <ArtistHeader/>
                <Filter/>
            </div>
        </div>
    );
}