import styles from "../../../../styles/ArtistRegisteration/Register.module.css";

export default function RightSection(props){
    return(
        <div className={styles['register__container--right-section']}>
            {props.children}
        </div>
    );
}