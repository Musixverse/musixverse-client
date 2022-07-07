import styles from "../../../../styles/SongInfo/SongDetails.module.css";

export default function SongDetail({ description }) {
    return (
        <div className={styles["song-detail__song-details"]}>
            {/* <div className={styles['song-details__title']}> */}
            <h1 className="font-tertiary text-[36px]">SONG DETAILS</h1>
            {/* </div> */}
            {/* <div className={styles['song-details__subtitle']}> */}
            <h3 className="font-bold font-secondary text-[18px] pt-3">Track Background</h3>
            <p className="pb-5 font-secondary text-[15px] text-justify">{description}</p>
            {/* </div> */}
        </div>
    );
}
