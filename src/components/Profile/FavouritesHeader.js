import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../../../styles/Profile/Filter.module.css";

export default function FavouritesHeader() {
	const { theme } = useTheme();

	return (
		<div className={"dark:bg-dark-100 " + styles["filter-card"]}>
			{/* Left Section */}
			<div className={styles["filter-card__left-section"]}>
				<Image src={theme === "light" ? "/assets/record_b.svg" : "/assets/record_w.svg"} alt="vinyl disc" height={30} width={30}></Image>
				<div className="flex-grow ml-4">
					<h4 className={styles["filter-card__left-section--heading"]}>FAVOURITES</h4>
					{/* Horizontal separator */}
					<div className="my-1 flex-grow border-t-[2px] border-[#818181]"></div>
				</div>
			</div>
		</div>
	);
}
