import SongDetails from "../../components/SongInfo/SongDetails";
import PurchaseInfo from "../../components/SongInfo/PurchaseInfo";

export default function songInfo() {
    return(
        <div  className="flex flex-col justify-center items-center bg-light-200">
            <SongDetails />
            <PurchaseInfo/>

        </div>
    );
}
