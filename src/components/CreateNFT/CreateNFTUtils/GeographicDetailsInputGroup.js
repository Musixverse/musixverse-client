import InputDropdown from "./InputDropdown";
import RequiredAsterisk from "./RequiredAsterisk";

export default function GeographicDetailsInputGroup({ setLanguage, setLocation, language, location }) {
    const languageArray = ["Hindi", "English", "Punjabi"];
    const locationArray = ["India", "United States of America", "Germany", "France"];

    return (
        <div className="flex flex-col flex-1 space-y-2 sm:space-y-4">
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1 text-sm">
                        LANGUAGE
                        <RequiredAsterisk />
                    </p>
                    <InputDropdown optionsArray={languageArray} setChoice={setLanguage} initialValue={language}  />
                </div>
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1 text-sm">
                        LOCATION
                        <RequiredAsterisk />
                    </p>
                    <InputDropdown optionsArray={locationArray} setChoice={setLocation} initialValue={location} />
                </div>
            </div>
        </div>
    );
}
