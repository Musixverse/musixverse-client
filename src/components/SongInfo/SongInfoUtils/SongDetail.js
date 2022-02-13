import styles from "../../../../styles/SongInfo/SongDetails.module.css";
import metaData from "../../../../metaData";

export default function SongDetail(){
    return(
        <div className={styles['song-detail__song-details']}>
            {/* <div className={styles['song-details__title']}> */}
                <h1 className="font-tertiary text-[36px] font-semibold">SONG DETAILS</h1>
            {/* </div> */}
            {/* <div className={styles['song-details__subtitle']}> */}
                <h3 className="font-bold font-secondary text-[18px] pt-1">Notes from Owner</h3>
                <p className="pb-5 font-secondary text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/* </div> */}
            {/* <div className={styles['song-details__artist-notes']}> */}
                <p className="font-secondary text-[15px]">
                    {metaData.Hashes.descHash}
                </p>
            {/* </div> */}
        </div>
    );
}