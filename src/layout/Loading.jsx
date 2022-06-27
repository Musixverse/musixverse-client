import { useContext } from "react";
import LoadingContext from "../../store/loading-context";
import styles from "../../styles/Loading.module.css";

export default function Loading() {
    const [isLoading] = useContext(LoadingContext);

    return (
        isLoading && (
            <div className={styles["loading_container"]}>
                <div className={styles["loading_container_box"]}>
                    <div className={styles["loadingSpinner"]}></div>
                </div>
            </div>
        )
    );
}
