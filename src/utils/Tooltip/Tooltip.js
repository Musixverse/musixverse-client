import styles from "../../../styles/Tooltip/Tooltip.module.css";

export default function Tooltips(props) {
	const labelText = props.labelText;
	const message = props.message;
	const tooltipLocation = props.tooltipLocation;

	return (
		<button type="button" className={"btn btn-secondary "+styles["tooltip-button"]} data-tooltip={message} data-tooltip-location={tooltipLocation ? tooltipLocation : "top"}>
			{labelText}
		</button>
	);
}