import Image from "next/image";
import styles from "../../../styles/CFB/CFB2.module.css";

export default function CFB2(){
    return(
        <div className={styles['cfb2__container']}>
           <div>
               <h2>What is Required?</h2>
                <h1>ALTERNATE SOURCES OF INCOME</h1>
                <p>To help artists sustain their art and stay motivated</p>
                <h1>BETTER WAYS OF CONNECTING WITH FANS</h1>
                <p>To help artists build a sticky audience and help fans establish 
                a direct connection with artists&apos;</p>
                <h1>BETTER WAYS OF GETTING DISCOVERED</h1>
                <p>To help artists get discovered quicker and not drown in the 
                ever-expanding ocean of music</p>
           </div>
           <div>
               {/* Image */}
           </div>
        </div>
    );
}