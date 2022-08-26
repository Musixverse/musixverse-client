import DisplayCollaborator from "./DisplayCollaborator";
import styles from "../../../../styles/TrackInfo/TrackDetails.module.css";

export default function TrackDetail({ description, collaborators }) {
	return (
		<div className={styles["track-detail__track-details"]}>
			{/* <div className={styles['track-details__title']}> */}
			<h1 className="font-tertiary text-[36px]">SONG DETAILS</h1>
			{/* </div> */}
			{/* <div className={styles['track-details__subtitle']}> */}
			<h3 className="font-bold font-secondary text-[18px] pt-3">Track Background</h3>
			<p className="pb-5 font-secondary text-[15px] text-justify">{description}</p>
			{/* </div> */}

			<div className="mt-16">
				<h1 className="font-tertiary text-[36px]">COLLABORATORS</h1>
				{collaborators.map((collaborator, key) => {
					return <DisplayCollaborator key={key} collaborator={collaborator} />;
				})}
			</div>
		</div>
	);
}
