import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styleDark from "./MultiSelectStyles/DarkStyles";
import styleLight from "./MultiSelectStyles/LightStyles";
import filterStyleLight from "../../MxCatalog/Utils/CatalogUtils/TagsStyleLight";
import { useTheme } from "next-themes";
import styles from "../../../../styles/CreateNFT/MultiSelect.module.css";
import { tagsAvailable } from "../../../constants";

export default function TagsMultiSelect({ tags, setTags, dropdownType, setAppliedFilter }) {
	const { theme } = useTheme();
	const animatedComponents = makeAnimated();

	const handleValueSelection = (selectedOption) => {
		if (dropdownType) {
			setAppliedFilter({ type: dropdownType, selectedChoice: selectedOption });
			return;
		}
		setTags(selectedOption);
	};
	let stylesToApply;
	if (dropdownType) {
		stylesToApply = filterStyleLight;
	} else {
		stylesToApply = styleLight;
		if (theme === "dark") stylesToApply = styleDark;
	}
	return (
		<Select
			maxMenuHeight={180}
			placeholder={dropdownType ? "Select Here" : ""}
			classNamePrefix={styles["input-field"]}
			className="w-full"
			components={animatedComponents}
			isMulti={true}
			isOptionDisabled={() => {
				if (dropdownType) return tags.length >= 4;
				return tags.length >= 5;
			}}
			isSearchable={false}
			styles={stylesToApply}
			closeMenuOnSelect={false}
			options={tagsAvailable}
			defaultValue={tags === "" ? [] : tags}
			onChange={handleValueSelection}
		/>
	);
}
