import Image from "next/image";
import { useTheme } from "next-themes";
import Dropdown from "./ProfileUtils/Dropdown";
import styles from "../../../styles/Profile/Filter.module.css";

export default function Filter({ currentlyActive, setCurrentlyActive, setSortingFilter }) {
	const { theme } = useTheme();

	const handleFilterChange = (e) => {
		const selectedCategory = e.target.textContent;

		if (selectedCategory == "All Tracks") setCurrentlyActive("All Tracks");
		else if (selectedCategory == "New Releases") setCurrentlyActive("New Releases");
		else if (selectedCategory == "Sold Out") setCurrentlyActive("Sold Out");
		else if (selectedCategory == "Creations") setCurrentlyActive("Creations");
	};

	return (
		<div className={"dark:bg-dark-100 " + styles["filter-card"]}>
			{/* Left Section */}
			<div className={styles["filter-card__left-section"]}>
				<Image src={theme === "light" ? "/assets/record_b.svg" : "/assets/record_w.svg"} alt="vinyl disc" height={30} width={30}></Image>
				<div className="flex-grow ml-4">
					<h4 className={styles["filter-card__left-section--heading"]}>TRACKS</h4>
					{/* Horizontal separator */}
					<div className="my-1 flex-grow border-t-[2px] border-[#818181]"></div>
					{/* Owned NFTs Category Filters */}
					<div className="space-x-4 text-[#818181]">
						<span
							className={
								"text-sm cursor-pointer " +
								(currentlyActive == "All Tracks" ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")
							}
							onClick={handleFilterChange}
						>
							All Tracks
						</span>
						<span
							className={
								"text-sm cursor-pointer " +
								(currentlyActive == "New Releases" ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")
							}
							onClick={handleFilterChange}
						>
							New Releases
						</span>
						<span
							className={
								"text-sm cursor-pointer " + (currentlyActive == "Sold Out" ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")
							}
							onClick={handleFilterChange}
						>
							Sold Out
						</span>
						<span
							className={
								"text-sm cursor-pointer " + (currentlyActive == "Creations" ? "text-dark-100 font-semibold dark:text-light-100" : "font-medium")
							}
							onClick={handleFilterChange}
						>
							Creations
						</span>
					</div>
				</div>
			</div>
			{/* Right Section */}
			<div className={"dark:border-dark-200 dark:bg-dark-200 dark:hover:border-primary-100 " + styles["filter-card__right-section"]}>
				<p className={"dark:text-light-100 " + styles["filter-card__right-section--sort-by"]}>Sort By:</p>
				<Dropdown setSortingFilter={setSortingFilter} />
			</div>
		</div>
	);
}
