import SongHeader from "../../components/SongInfo/SongHeader";
import SongDetails from "../../components/SongInfo/SongDetails";
import PurchaseInfo from "../../components/SongInfo/PurchaseInfo";
import SalesHistory from "../../components/SongInfo/SalesHistory";
import NewsLetter from "../../components/SongInfo/NewsLetter";
import Banner from "../../components/SongInfo/Banner";
import styles from "../../../styles/SongInfo/Home.module.css";

export default function songInfo() {
    //Fetch data over here using SSG and then pass data in the
    //components as props
    const onSale = true;
    return(
        <div className={styles["song-info__container"]}>
            {onSale? <Banner/>:null}
            <div  className={styles["song-info__header-container"]}>
                <SongHeader/>
                <SongDetails />
                <div className={styles["song-info__body-container"]}>
                    <PurchaseInfo/>
                    <SalesHistory/>
                </div>
            </div>
            <NewsLetter/>
        </div>
    );
}
