import DisplayCollaborator from "./DisplayCollaborator";
import styles from "../../../../styles/TrackInfo/TrackDetails.module.css";

export default function TrackDetail({ description, collaborators, collaboratorUsers }) {
	return (
		<div className={styles["track-detail__track-details"]}>
			{/* <div className={styles['track-details__title']}> */}
			<h1 className="font-tertiary text-4xl">SONG DETAILS</h1>
			{/* </div> */}
			{/* <div className={styles['track-details__subtitle']}> */}
			<h3 className="font-bold font-secondary text-lg pt-3">Track Background</h3>
			<p className="pr-2 font-secondary text-base text-justify max-h-[130px] overflow-y-scroll">{description}</p>
			{/* </div> */}

			<div className="mt-12">
				<h1 className="font-tertiary text-4xl">COLLABORATORS</h1>
				{collaborators.map((collaborator, index) => {
					return <DisplayCollaborator key={index} collaborator={collaborator} collaboratorUsers={collaboratorUsers} />;
				})}
			</div>
		</div>
	);
}
