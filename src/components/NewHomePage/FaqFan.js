import { useState } from "react";
import styles from "../../../styles/Faq/Accordion.module.css";
import { Faq_Fan } from "./utils/FaqHomepageData";

export default function AboutArtist() {
	const [currentlyExpandedFan, setCurrentlyExpandedFan] = useState(0);

	const FaqFanAccordion = Faq_Fan.map((elem, idx) => {
		return (
			<div key={idx} className={"accordion-item " + styles["faq-item"]}>
				{/* FAQ Item Heading */}
				<button
					className={
						"relative flex items-center w-full px-5 py-4 text-sm sm:text-base text-left  transition border-b border-primary-500 rounded-none bg-transparent focus:outline-none dark:hover:text-primary-600 hover:text-primary-600 " +
						(idx === 0 ? "" : "collapsed") +
						(currentlyExpandedFan === idx ? " text-primary-600" : "text-gray-800 dark:text-light-200")
					}
					type="button"
					onClick={() => {
						if (currentlyExpandedFan !== idx) setCurrentlyExpandedFan(idx);
						else setCurrentlyExpandedFan(-1);
					}}
					data-bs-toggle="collapse"
					data-bs-target={"#" + elem.content_id}
					aria-expanded="true"
					aria-controls={elem.content_id}
				>
					{currentlyExpandedFan === idx ? (
						<span className="mr-3 text-primary-600 material-symbols-outlined">do_not_disturb_on</span>
					) : (
						<span className="mr-3 material-symbols-outlined text-primary-600">add_circle</span>
					)}
					{elem.heading}
				</button>
				{/* FAQ Item Content */}
				<div id={elem.content_id} className={"accordion-collapse collapse " + (idx === 0 ? "show" : "")} data-bs-parent="#accordionExample">
					<div className="pt-3 pr-4 text-sm pl-14 sm:pt-4 accordion-body font-secondary sm:text-base">{elem.body}</div>
				</div>
			</div>
		);
	});

	return (
		<div className="self-start w-full p-12 my-14 dark:bg-dark-600 bg-light-100 rounded-xl">
			{/* FAQ Category Heading */}
			{/* <h3 className="mb-5 text-lg text-center font-medium sm:text-3xl text-primary-600">About Musixverse</h3> */}
			<div className="w-full rounded-none accordion" id="accordionExample">
				{FaqFanAccordion}
			</div>
		</div>
	);
}