import styles from "../../../styles/ToggleButton/ToggleButton.module.css";

export default function ToggleButton() {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.round} ${styles.slider}`}></span>
        </label>
    );
}
