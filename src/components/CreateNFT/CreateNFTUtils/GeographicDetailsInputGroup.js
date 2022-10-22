import CountriesDropdown from "../../Settings/SettingsUtils/CountriesDropdown";
import StatesDropdown from "../../Settings/SettingsUtils/StatesDropdown";
import CitiesDropdown from "../../Settings/SettingsUtils/CitiesDropdown";
import InputDropdown from "./InputDropdown";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import Tooltip from "../../../layout/Tooltip/Tooltip";
import { languageArray } from "../../../constants";

export default function GeographicDetailsInputGroup({
	language,
	setLanguage,
	countryOfOrigin,
	setCountryOfOrigin,
	stateOfOrigin,
	setStateOfOrigin,
	location,
	setLocation,
}) {
	return (
		<div className="flex flex-col flex-1 space-y-2 sm:space-y-4">
			<div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						LANGUAGE
						<RequiredAsterisk />
					</p>
					<InputDropdown optionsArray={languageArray} setChoice={setLanguage} initialValue={language} />
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						COUNTRY OF ORIGIN
						<Tooltip
							labelText={<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i>}
							message={
								"Fans like to discover artists located near them, but we value your privacy and therefore store your location information only if you give consent."
							}
							tooltipLocation={"bottom"}
						/>
					</p>
					<CountriesDropdown
						setChoice={setCountryOfOrigin}
						initialValue={countryOfOrigin}
						onReset={() => {
							setStateOfOrigin(null);
							setLocation(null);
						}}
					/>
				</div>
			</div>

			<div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					{countryOfOrigin && countryOfOrigin.isoCode && (
						<>
							<p className="mb-1 text-sm">STATE</p>
							<StatesDropdown
								setChoice={setStateOfOrigin}
								initialValue={stateOfOrigin}
								country={countryOfOrigin}
								onReset={() => {
									setLocation(null);
								}}
							/>
						</>
					)}
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					{countryOfOrigin && countryOfOrigin.isoCode && stateOfOrigin && stateOfOrigin.isoCode && (
						<>
							<p className="mb-1 text-sm">LOCATION</p>
							<CitiesDropdown setChoice={setLocation} initialValue={location} country={countryOfOrigin} state={stateOfOrigin} />
						</>
					)}
				</div>
			</div>
		</div>
	);
}
