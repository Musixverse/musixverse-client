import PurchaseInfo from "../../components/SongInfo/PurchaseInfo";
import SalesHistory from "../../components/SongInfo/SalesHistory";

export default function songInfo() {
    return(
        <div  className="flex flex-row h-screen justify-center items-center bg-light-200">
            <div className="flex w-full justify-center">
                <PurchaseInfo/>
                <SalesHistory/>
            </div>
        </div>
    );
}
