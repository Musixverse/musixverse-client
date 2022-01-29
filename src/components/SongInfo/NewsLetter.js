import styles from "../../../styles/SongInfo/NewsLetter.module.css";

export default function NewsLetter(){
    return(
        <div className={styles['news-letter']}>
            <div className={styles['news-letter__container']}>
                <p className="font-medium mb-2">Stay in the loop</p>
                <p className="text-sm mb-6">
                    Join our mailing list to stay in the loop with our newest future realeases,
                    <br/>
                    NFT drops and tips and tickets for navigating through Musixverse.
                </p>
                {/* SIGN UP */}
                <input 
                    className={styles['news-letter__email--input']}
                    type="email" 
                    spellCheck={false} 
                    placeholder="Your email address"
                ></input>
                <button 
                    type="button" 
                    className={styles['news-letter__email--button']}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}