import styles from "../../../styles/Loading/LoadingDark.module.css";

export default function Loading() {
	return (
		<div className={styles["loading_section_container"]}>
			<div className={styles["loading_container_box"]}>
				<div className={styles["loadingSpinner"]}></div>
			</div>
		</div>
	);
}
