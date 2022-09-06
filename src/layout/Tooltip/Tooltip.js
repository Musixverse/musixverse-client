export default function Tooltip({ labelText, message, tooltipLocation }) {
	return (
		<button type="button" className={"tooltip-button"} data-tooltip={message} data-tooltip-location={tooltipLocation ? tooltipLocation : "top"}>
			{labelText}
		</button>
	);
}
