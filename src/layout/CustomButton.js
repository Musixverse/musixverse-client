import styles from "../../styles/CustomButton/CustomButton.module.css";

export default function CustomButton({ green, onClick, children }) {
	return (
		<button onClick={() => onClick()} className={green ? styles["button--green"] : styles["button--white"]}>
			{children}
		</button>
	);
}
