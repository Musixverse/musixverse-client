import styles from "../../../../styles/ArtistRegisteration/Artist.module.css";

export default function LeftSection(props){
    return(
        <div className={styles['register__container--left-section']}>
            {props.children}
        </div>
    );
}