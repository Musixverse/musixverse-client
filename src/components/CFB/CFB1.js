import Image from "next/image";
import styles from "../../../styles/CFB/CFB1.module.css";

export default function CFB1(){
    return(
        <div className={styles['cfb1__container']}>
           <p className="font-primary text-center font-semibold text-3xl text-primary-200">MXV COMMUNITY FEEDBACK BOARD</p>
           <p className="font-secondary text-xs max-w-xs sm:max-w-2xl text-center pt-6">
            We invite you to be a part of our Community Feedback Board- a group of select 
            individuals with exclusive access to Musixverse and its features before anyone else.
            In return, we will ask you to provide feedback about the platform as we continue to 
            build and improve it</p>
            <div className={styles['cfb1__card']}>
                <div className={styles['cfb1__card--innercard']}>
                    <p className="font-primary text-center font-semibold text-3xl">The Problem with Music Industry</p>
                    <p className="font-secondary text-sm max-w-xl text-center">
                    In today’s digital world, creating and releasing music is easier than ever 
                    but making money off it is as difficult as it has ever been.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-6 md:gap-none mt-6 justify-evenly">
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
            </div>
        </div>
    );
}