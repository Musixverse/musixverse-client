import Image from "next/image";
import styles from "../../../styles/SongInfo/SongHeader.module.css";
import Button from "../../layouts/Button";
import metaData from "../../../metaData";

export default function SongHeader() {
    return (
        <>
            {/* songHeader parent div */}
            <div className={styles['songHeader']}>
                <div className={styles['songHeader__container']}>
                {/* Image section */}
                    <div className={styles['songHeader__container--songImage']}>
                        <Image src={metaData.songImage} alt="songImage" width={580} height={580} />
                    </div>
                {/* Song Details section */}
                    <div className={styles['songHeader__container--songDetail']}>
                        <div>{metaData.artistName}</div>
                        <div>{metaData.songName}</div>
                        <div><audio src="#"></audio></div>
                        <div>
                            <h4 className="font-bold">Description</h4>
                            <p>{metaData.Hashes.descHash}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-row space-x-5">
                                <div className="text-left">
                                    <h4 className="font-bold">Genres</h4>
                                    <p>{metaData.createTime}</p>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold">Lyrics</h4>
                                    <p>Available&nbsp;<span className="align-sub"><Image src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-basic-outline-kmg-design.png" width={20} height={20} alt="right arrow" /></span></p>
                                </div>
                            </div>
                            {/* Connect to Metamask Button */}
                            <div>
                                <Button green={true}><Image src="https://img.icons8.com/fluency/48/000000/fox.png" width={20} height={20} alt="metamask"/> &nbsp;Connect Metamask to Buy</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}