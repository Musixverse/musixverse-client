import Image from "next/image";
import styles from "../../../styles/HomePage/section2.module.css";

export default function HomePage_section2(){
    return(
        <div className={styles['HomePage_section2__container']}>
            <div className={styles['section2__card']}>
                <div className={styles['section2__card--innercard']}>
                    <p  className="font-primary text-center font-semibold text-3xl">What is required?</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-6 md:gap-none mt-8 justify-evenly">
                    <div className={styles['section2__card--innercard2']}>
                        <h1>ALTERNATE SURCES OF INCOME</h1>
                        <p>To help artists sustain their art and stay motivated</p>
                    </div>
                    <div className={styles['section2__card--innercard2']}>
                        <h1>BETTER WAYS OF CONNECTING WITH FANS</h1>
                        <p>To help artists build a sticky audience and help fans establish a direct connection with artist</p>
                    </div>
                    <div className={styles['section2__card--innercard2']}>
                        <h1>BETTER WAYS OF GETTIN DISCOVERED</h1>
                        <p>To help artists get discovered quicker and not drown in the ever-expanding ocean of music</p>
                    </div>
                </div>
            </div>
        </div>
    );
}