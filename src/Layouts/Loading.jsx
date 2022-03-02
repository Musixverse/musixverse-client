import styles from "../../styles/Loading.module.css";

export default function Loading() {
    return (
        <div className={styles["loading_container"]}>
            <div className={styles["loading_container_box"]}>
                <div className={styles["loadingSpinner"]}></div>
            </div>
        </div>
    );
}
