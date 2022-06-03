import styles from "../../../styles/HomePage/section3.module.css";

export default function HomePage_section2(){
    const scrollToRef = () => {
        window.scrollTo(0, 1700);  
    } 
    return(
        <div className={styles['HomePage_section2__container']}>
            <div className={"dark:bg-dark-100 "+styles['section2__card']}>
                <div className={styles['section2__card--innercard']}>
                    <p  className="text-xl font-semibold text-center font-primary md:text-3xl">What is required?</p>
                </div>
                <div className="flex flex-col gap-8 mt-8 md:flex-row md:gap-6 md:gap-none justify-evenly">
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
            <button onClick={scrollToRef}>
                <img src="/assets/homepage/circle_dropdown2.png" className={styles['section2__circle-dropdown']} width={50} height={50} alt="circle dropdown" />       
            </button>
        </div>
    );
}