import Image from "next/image";
import styles from "../../../styles/ArtistProfile/ArtistHeader.module.css";
import metaData from "../../../metaData";
import CustomButton from "../../Layouts/CustomButton";
import share from "../../../public/assets/SHARE.svg";

export default function ArtistHeader(){
    return(
        <div className={styles['artist-banner__container']} >
        
            {/* Left Image section */}
            <div className={styles['artist-banner__section1']}>
                <div className={styles['section1__artist-image']}>
                    <Image src="#" width={210} height={210} alt="artist profile"></Image>
                </div>
                <div className={styles['section1__social-icons']}>
                    <a href={metaData.Links.spotify}><Image src="https://img.icons8.com/ios-filled/50/000000/spotify.png" width={25} height={25} alt="spotify" /></a>
    				<a href={metaData.Links.appleMusic}><Image src="https://img.icons8.com/ios-filled/50/000000/apple-music.png" width={25} height={25} alt="apple-music" /></a>
					<a href={metaData.Links.amazonMusic}><Image src="https://img.icons8.com/color/48/000000/amazon.png" width={25} height={25} alt="amazon-music" /></a>
					<a href={metaData.Links.youtubeMusic}><Image src="https://img.icons8.com/bubbles/50/000000/youtube-music.png" width={25} height={25} alt="youtube-music" /></a>
                </div>
                <div className={styles['section1__buttons']}>
                    <CustomButton green={true}>Follow</CustomButton>
                    <button><Image src={share} width={38} height={38} alt="share button"></Image></button>
                </div>
            </div>

            
            {/* Right Details section */}
            <div className={styles['artist-banner__section2']}>
                <div className={styles['section2__artist-name']}>
                    <h1>{metaData.artistName}</h1>
                    <div className={styles['section2__artist-stats']}>
                        <span>535 Following</span>
                        <span>23 Followers</span>
                        <span>19 Tracks Released</span>
                    </div>
                </div>
                <div className={styles['section2__artist-about_us']}>
                    <h4>About</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione</p>
                    <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique?</p>
                </div>
                <div className={styles['section2__artist-footer']}>
                    <span>United Arab Emirates</span>
                    <span>Joined Nov, 2020</span>
                    <span><button className="w-[38px] h-[38px] text-center rounded-full bg-light-200 hover:bg-[#dedede]"><i className="fas fa-ellipsis-v text-dark-100 text-sm"></i></button></span>
                </div>
            </div>
        </div>    
    );
}