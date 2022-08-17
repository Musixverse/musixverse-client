export default function Tooltip({ labelText, message, tooltipLocation }) {
	return (
		<button
			type="button"
			className={"btn btn-secondary tooltip-button"}
			data-tooltip={message}
			data-tooltip-location={tooltipLocation ? tooltipLocation : "top"}
		>
			{labelText}
		</button>
	);
}
