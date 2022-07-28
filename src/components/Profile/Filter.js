import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import Dropdown from "./ProfileUtils/Dropdown";
import styles from "../../../styles/Profile/Filter.module.css";

export default function Filter() {
	const [currentlyActive, setCurrentlyActive] = useState(1);
	const { theme } = useTheme();

	const handleFilterChange = (e) => {
		const selectedCategory = e.target.textContent;

		if (selectedCategory == "All Records") setCurrentlyActive(1);
		else if (selectedCategory == "For Sale") setCurrentlyActive(2);
		else setCurrentlyActive(3);
	};

	return (
		<div className={"dark:bg-dark-100 " + styles["filter-card"]}>
			{/* Left Section */}
			<div className={styles["filter-card__left-section"]}>
				<Image src={theme === "light" ? "/assets/record_b.svg" : "/assets/record_w.svg"} alt="vinyl disc" height={30} width={30}></Image>
				<div className="flex-grow ml-4">
					<h4 className={styles["filter-card__left-section--heading"]}>RECORDS</h4>
					{/* Horizontal separator */}
					<div className="my-1 flex-grow border-t-[2px] border-[#818181]"></div>
					{/* Owned NFTs Category Filters */}
					<div className="text-[#818181]">
						<span
							className={"text-sm cursor-pointer " + (currentlyActive == 1 ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")}
							onClick={handleFilterChange}
						>
							All Records
						</span>
						<span
							className={
								"mx-4 text-sm cursor-pointer " + (currentlyActive == 2 ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")
							}
							onClick={handleFilterChange}
						>
							For Sale
						</span>
						<span
							className={"text-sm cursor-pointer " + (currentlyActive == 3 ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")}
							onClick={handleFilterChange}
						>
							Collections
						</span>
					</div>
				</div>
			</div>
			{/* Right Section */}
			<div className={"dark:border-dark-200 dark:bg-dark-200 dark:hover:border-primary-100 " + styles["filter-card__right-section"]}>
				<p className={"dark:text-light-100 " + styles["filter-card__right-section--sort-by"]}>Sort By:</p>
				<Dropdown />
			</div>
		</div>
	);
}
