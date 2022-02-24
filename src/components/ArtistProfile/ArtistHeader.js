import Image from "next/image";
import styles from "../../../styles/ArtistProfile/ArtistHeader.module.css";
import metaData from "../../../metaData";
import CustomButton from "../../Layouts/CustomButton";
import Stats from "./ArtistProfileUtils/Stats";
import share from "../../../public/assets/SHARE.svg";
import artistProfile from "../../../public/Artist_Profile.png";
import mxv_tick from "../../../public/assets/mxv_tick.svg";

export default function ArtistHeader(){
    return(
        <div className={styles['artist-banner__container']} >
        
            {/* Left Image section */}
            <div className={styles['artist-banner__section1']}>
                <div className={styles['section1__artist-image']}>
                    <Image src={artistProfile} width={210} height={210} alt="artist profile"></Image>
                </div>
                <div className={styles['section1__social-icons']}>
                    <a href={metaData.Links.spotify}><Image src="https://img.icons8.com/ios-filled/50/000000/spotify.png" width={25} height={25} alt="spotify" /></a>
    				<a href={metaData.Links.appleMusic}><Image src="https://img.icons8.com/ios-filled/50/000000/apple-music.png" width={25} height={25} alt="apple-music" /></a>
					<a href={metaData.Links.amazonMusic}><Image src="https://img.icons8.com/color/48/000000/amazon.png" width={25} height={25} alt="amazon-music" /></a>
					<a href={metaData.Links.youtubeMusic}><Image src="https://img.icons8.com/bubbles/50/000000/youtube-music.png" width={25} height={25} alt="youtube-music" /></a>
                </div>
                <div className={styles['section1__buttons']}>
                    <CustomButton green={true}>Follow</CustomButton>
                    <button><Image src={share} width={21} height={21} alt="share button"></Image></button>
                </div>
            </div>

            
            {/* Right Details section */}
            <div className={styles['artist-banner__section2']}>
                <div className={styles['section2__artist-name']}>
                    <p className="font-tertiary pt-3 text-5xl w-[12rem]">{metaData.artistName}
                    &nbsp;<Image src={mxv_tick} width={21} height={21} alt="mxv_verified"></Image></p>
                    {/* Stats component */}
                    <Stats />
                </div>
                <div className={styles['section2__artist-about_us']}>
                    <h4 className="font-bold text-[18px] pt-3">About</h4>
                    <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione</p>
                    <p className={"text-[15px] pt-3 "+styles['about_us']}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique?</p>
                    <button className="text-primary-200 hover:text-primary-300 text-[14px] pt-3">Read More</button>
                </div>
                <div className={styles['section2__artist-footer']}>
                    <div className="space-x-5">
                        <span>United Arab Emirates</span>
                        <span>Joined Nov, 2020</span>
                    </div>
                    <div>  
                        <button className="w-[38px] h-[38px] text-center rounded-full bg-light-200 hover:bg-[#dedede]"><i className="fas fa-ellipsis-v text-dark-100 text-sm"></i></button>
                    </div>
                </div>
            </div>
        </div>    
    );
}