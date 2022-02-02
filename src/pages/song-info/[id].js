import SongHeader from "../../components/SongInfo/SongHeader";
import SongDetails from "../../components/SongInfo/SongDetails";
import PurchaseInfo from "../../components/SongInfo/PurchaseInfo";
import SalesHistory from "../../components/SongInfo/SalesHistory";
import NewsLetter from "../../components/SongInfo/NewsLetter";
import Banner from "../../components/SongInfo/Banner";

export default function songInfo() {
    //Fetch data over here using SSG and then pass data in the
    //components as props
    const onSale = true;
    return(
        <div className="flex flex-col items-center justify-center">
            {onSale? <Banner/>:null}
            <div  className="flex flex-col justify-center items-center bg-light-200 dark:bg-dark-100 max-w-[1500px]">
                <SongHeader/>
                <SongDetails />
                <div className="flex w-full justify-center my-10 max-w-[1500px]">
                    <PurchaseInfo/>
                    <SalesHistory/>
                </div>
            </div>
            <NewsLetter/>
        </div>
    );
}
