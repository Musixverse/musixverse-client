import DisplayCollaborator from "./TrackInfoUtils/DisplayCollaborator";

export default function Collaborators({ bandId, collaborators, collaboratorUsers }) {
	return (
		<>
			<h1 className="font-tertiary text-4xl mt-12 mb-2">{bandId ? "BAND MEMBERS" : "COLLABORATORS"}</h1>
			<div className="w-full grid grid-flow-col auto-cols-max mt-2 gap-8 pb-4 overflow-scroll">
				{collaborators.map((collaborator, index) => {
					return <DisplayCollaborator key={index} collaborator={collaborator} collaboratorUsers={collaboratorUsers} />;
				})}
			</div>
		</>
	);
}
