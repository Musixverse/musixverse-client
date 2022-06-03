import Image from "next/image";
import styles from "../../../styles/CFB/CFB1.module.css";

export default function CFB1(){
    const scrollToRef = () => {
        window.scrollTo(0, 400);  
    } 
    return(
        <div className={styles['cfb1__container']}>
            <button className={styles['cfb-banner__circle-dropdown']} onClick={scrollToRef}>
                <img src="/assets/CFB/circle_dropdown.png" className="z-[5]" width={50} height={50} alt="circle dropdown" />       
            </button>
           <p className="text-3xl font-semibold text-center font-primary text-primary-200">MXV COMMUNITY FEEDBACK BOARD</p>
           <p className="max-w-xs pt-6 text-xs text-center font-secondary sm:max-w-2xl">
            We invite you to be a part of our Community Feedback Board- a group of select 
            individuals with exclusive access to Musixverse and its features before anyone else.
            In return, we will ask you to provide feedback about the platform as we continue to 
            build and improve it</p>
            {/* <div className={styles['cfb1__card']}>
                <div className={styles['cfb1__card--innercard']}>
                    <p className="text-3xl font-semibold text-center font-primary">The Problem with Music Industry</p>
                    <p className="max-w-xl text-sm text-center font-secondary">
                    In today’s digital world, creating and releasing music is easier than ever 
                    but making money off it is as difficult as it has ever been.</p>
                </div>
                <div className="flex flex-col gap-8 mt-6 md:flex-row md:gap-6 md:gap-none justify-evenly">
                    <div className={styles['cfb1__card--innercard2']}>
                        <h1>ROYALITIES</h1>
                        <p>Distributed are few and far between, often coming in small balances at 
                        fixed intervals.</p>
                    </div>
                    <div className={styles['cfb1__card--innercard2']}>
                        <h1>LOW REVENUW SHARE</h1>
                        <p>Average share of revenue that goes to artists for the music they created 
                        is a paltry 12% of total revenue generated</p>
                    </div>
                    <div className={styles['cfb1__card--innercard2']}>
                        <h1>NEW ARTIST DISCOVERY</h1>
                        <p>Is increasingly difficult with hundreds of new artists releasing music every 
                        single day.</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}