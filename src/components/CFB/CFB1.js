import Image from "next/image";

export default function CFB1(){
    return(
        <div className={styles['cfb1__container']}>
           <p>MXV COMMUNITY FEEDBACK BOARD</p>
           <p>We invite you to be a part of our Community Feedback Board- a group of select 
           individuals with exclusive access to Musixverse and its features before anyone else.
            In return, we will ask you to provide feedback about the platform as we continue to 
            build and improve it</p>
            <div>
                <div>
                    <p>The Problem with Music Industry</p>
                    <p>In today’s digital world, creating and releasing music is easier than ever 
                    but making money off it is as difficult as it has ever been.</p>
                </div>
                <div>
                    <div>
                        <h1>ROYALITIES</h1>
                        <p>Distributed are few and far between, often coming in small balances at 
                        fixed intervals.</p>
                    </div>
                    <div>
                        <h1>LOW REVENUW SHARE</h1>
                        <p>Average share of revenue that goes to artists for the music they created 
                        is a paltry 12% of total revenue generated</p>
                    </div>
                    <div>
                        <h1>NEW ARTIST DISCOVERY</h1>
                        <p>Is increasingly difficult with hundreds of new artists releasing music every 
                        single day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}