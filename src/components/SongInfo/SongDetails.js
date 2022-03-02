import Image from "next/image";
import styles from "../../../styles/SongInfo/SongDetails.module.css";
import metaData from "../../../metaData";
import SongDetail from "./SongInfoUtils/SongDetail";

export default function SongDetails() {
	return (
			<div className={"dark:bg-dark-100 dark:border-dark-100 "+styles['song-detail__container']} >
				<SongDetail/>


				{/* OTHER DETAILS */}
				<div className={styles['song-info__other-details']}>
					{/* <div className={styles['other-details__title']}> */}
						<h1 className="font-tertiary font-semibold text-[36px]">OTHER DETAILS</h1>
					{/* </div> */}
					{/* Secction 1 */}
					<div className={styles['other-details__section1']}>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Genres</h4>
							<p>{metaData.Characteristics.genre}</p>
						</div>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Intrument Used</h4>
							<p>{metaData.Characteristics.instruments}</p>
						</div>
						<div className="text-left">
						    <h4 className="font-bold font-secondary text-[16px]">sampling</h4>
							<p>No</p>
						</div>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Lyrics</h4>
							<button>Available &nbsp;<span className="align-sub"><Image src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-basic-outline-kmg-design.png" width={20} height={20} alt="right arrow" /></span></button>
						</div>
					</div>
					<div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>
				 
					{/* Section 2 */}
					<div className={styles['other-details__section2']}>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Contact Address</h4>
							<p>{metaData.artistAddress}</p>
						</div>
						<div className="text-left pl-8">
							<h4 className="font-bold font-secondary text-[16px]">Token ID</h4>
							<p>187372</p>
						</div>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Token Standard</h4>
							<p>ERC-1176</p>
						</div>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Blockchain</h4>
							<p>Ethereum</p>
						</div>
						<div className="text-left">
							<h4 className="font-bold font-secondary text-[16px]">Created on</h4>
							<p>{metaData.createDate}</p>
						</div>
					</div>
					<div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>
					
					{/* Section 3 */}
					<div className={styles['other-details__section3']}>
						<div className="pt-3">
								<h4 className="font-bold font-secondary text-[18px]">{metaData.artistName}</h4>
								<button>Go to artist profile page &nbsp;<span className="align-sub"><Image src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-basic-outline-kmg-design.png" width={20} height={20} alt="right arrow" /></span></button>
						</div>
					</div>

					{/* Section 4 */}
					<div className={styles['other-details__Icons']}>
					    <a href="#"><Image src="https://img.icons8.com/ios-filled/50/000000/meta.png" width={20} height={20} alt="meta" /></a>
						<a href="#"><Image src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" width={20} height={20} alt="twitter" /></a>
					</div>
					
					{/* Section 5 */}
					<div className={"dark:bg-dark-200 "+styles['other-details__footer']}>
						<h4 className="font-secondary text-[18px]">Listen on</h4>
						<div className={styles['footer__icons']}>
							<a href={metaData.Links.spotify}><Image src="https://img.icons8.com/ios-filled/50/000000/spotify.png" width={25} height={25} alt="spotify" /></a>
    						<a href={metaData.Links.appleMusic}><Image src="https://img.icons8.com/ios-filled/50/000000/apple-music.png" width={25} height={25} alt="apple-music" /></a>
							<a href={metaData.Links.amazonMusic}><Image src="https://img.icons8.com/color/48/000000/amazon.png" width={25} height={25} alt="amazon-music" /></a>
							<a href={metaData.Links.youtubeMusic}><Image src="https://img.icons8.com/bubbles/50/000000/youtube-music.png" width={25} height={25} alt="youtube-music" /></a>
						</div>
					</div>
				</div>
			</div>
	);
};
