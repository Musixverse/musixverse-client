import DisplayCollaborator from "./DisplayCollaborator";
import styles from "../../../../styles/TrackInfo/TrackDetails.module.css";

export default function TrackDetail({ description, collaborators }) {
	return (
		<div className={styles["track-detail__track-details"]}>
			{/* <div className={styles['track-details__title']}> */}
			<h1 className="font-tertiary text-4xl">SONG DETAILS</h1>
			{/* </div> */}
			{/* <div className={styles['track-details__subtitle']}> */}
			<h3 className="font-bold font-secondary text-lg pt-3">Track Background</h3>
			<p className="pb-5 font-secondary text-base text-justify">{description}</p>
			{/* </div> */}

			<div className="mt-10 md:mt-16">
				<h1 className="font-tertiary text-4xl">COLLABORATORS</h1>
				{collaborators.map((collaborator, key) => {
					return <DisplayCollaborator key={key} collaborator={collaborator} />;
				})}
			</div>
		</div>
	);
}
