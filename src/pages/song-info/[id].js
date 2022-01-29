import SongDetails from "../../components/SongInfo/SongDetails";
import PurchaseInfo from "../../components/SongInfo/PurchaseInfo";
import SalesHistory from "../../components/SongInfo/SalesHistory";
import { Fragment } from "react";
import NewsLetter from "../../components/SongInfo/NewsLetter";

export default function songInfo() {
    return(
        <Fragment>
            <div  className="flex flex-col justify-center items-center bg-light-200">
                <SongDetails />
                <div className="flex w-full justify-center mb-10">
                    <PurchaseInfo/>
                    <SalesHistory/>
                </div>
            </div>
            <NewsLetter/>
        </Fragment>
    );
}
