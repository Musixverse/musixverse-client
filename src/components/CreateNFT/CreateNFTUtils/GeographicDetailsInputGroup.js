import { useState, useEffect } from "react";
import CountriesDropdown from "./CountriesDropdown";
import StatesDropdown from "./StatesDropdown";
import CitiesDropdown from "./CitiesDropdown";
import InputDropdown from "./InputDropdown";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import { languageArray } from "../../../constants";
import { Country, City, State } from "country-state-city";

export default function GeographicDetailsInputGroup({
	setLanguage,
	setLocation,
	location,
	language,
	countryOfOrigin,
	setCountryOfOrigin,
	stateOfOrigin,
	setStateOfOrigin,
}) {
	const countryOfOriginArray = Country.getAllCountries();
	const [stateArray, setStateArray] = useState(State.getStatesOfCountry(JSON.parse(countryOfOrigin).isoCode));
	const [locationArray, setLocationArray] = useState(City.getCitiesOfState(JSON.parse(countryOfOrigin).isoCode, JSON.parse(stateOfOrigin).isoCode));

	useEffect(() => {
		setStateArray(State.getStatesOfCountry(JSON.parse(countryOfOrigin).isoCode));
	}, [countryOfOrigin]);

	useEffect(() => {
		setLocationArray(City.getCitiesOfState(JSON.parse(countryOfOrigin).isoCode, JSON.parse(stateOfOrigin).isoCode));
	}, [stateOfOrigin, countryOfOrigin]);

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
						<RequiredAsterisk />
					</p>
					{countryOfOriginArray && (
						<CountriesDropdown optionsArray={countryOfOriginArray} setChoice={setCountryOfOrigin} initialValue={countryOfOrigin} />
					)}
				</div>
			</div>

			<div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						STATE
						<RequiredAsterisk />
					</p>
					<StatesDropdown optionsArray={stateArray} setChoice={setStateOfOrigin} initialValue={stateOfOrigin} countryOfOrigin={countryOfOrigin} />
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						LOCATION
						<RequiredAsterisk />
					</p>
					<CitiesDropdown optionsArray={locationArray} setChoice={setLocation} initialValue={location} />
				</div>
			</div>
		</div>
	);
}
