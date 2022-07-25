import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styleDark from "./MultiSelectStyles/DarkStyles";
import styleLight from "./MultiSelectStyles/LightStyles";
import { useTheme } from "next-themes";
import styles from "../../../../styles/CreateNFT/MultiSelect.module.css";

export default function TagsMultiSelect({ tags, setTags }) {
	const { theme } = useTheme();
	const animatedComponents = makeAnimated();

	const tagsAvailable = [
		{ value: "Aggressive", label: "Aggressive" },
		{ value: "Alternative", label: "Alternative" },
		{ value: "Angry", label: "Angry" },
		{ value: "Beautiful", label: "Beautiful" },
		{ value: "Calm", label: "Calm" },
		{ value: "Cheerful", label: "Cheerful" },
		{ value: "Chill", label: "Chill" },
		{ value: "Cool", label: "Cool" },
		{ value: "Country", label: "Country" },
		{ value: "Dance", label: "Dance" },
		{ value: "Delicate", label: "Delicate" },
		{ value: "Depressing", label: "Depressing" },
		{ value: "Dreamy", label: "Dreamy" },
		{ value: "Electronic", label: "Electronic" },
		{ value: "Exciting", label: "Exciting" },
		{ value: "Fierce", label: "Fierce" },
		{ value: "Folk", label: "Folk" },
		{ value: "Fun", label: "Fun" },
		{ value: "Gloomy", label: "Gloomy" },
		{ value: "Happy", label: "Happy" },
		{ value: "Hostile", label: "Hostile" },
		{ value: "Humorous", label: "Humorous" },
		{ value: "Indie", label: "Indie" },
		{ value: "Jazz", label: "Jazz" },
		{ value: "Joyful", label: "Joyful" },
		{ value: "Love", label: "Love" },
		{ value: "Lyrical", label: "Lyrical" },
		{ value: "Merry", label: "Merry" },
		{ value: "Metal", label: "Metal" },
		{ value: "Miserable", label: "Miserable" },
		{ value: "Oldies", label: "Oldies" },
		{ value: "Patriotic", label: "Patriotic" },
		{ value: "Peaceful", label: "Peaceful" },
		{ value: "Pop", label: "Pop" },
		{ value: "Quiet", label: "Quiet" },
		{ value: "Rebellious", label: "Rebellious" },
		{ value: "Relaxed", label: "Relaxed" },
		{ value: "Rock", label: "Rock" },
		{ value: "Sad", label: "Sad" },
		{ value: "Sadness", label: "Sadness" },
		{ value: "Satisfying", label: "Satisfying" },
		{ value: "Silly", label: "Silly" },
		{ value: "Sleepy", label: "Sleepy" },
		{ value: "Soft", label: "Soft" },
		{ value: "Somber", label: "Somber" },
		{ value: "Soothing", label: "Soothing" },
		{ value: "Sorrow", label: "Sorrow" },
		{ value: "Soul", label: "Soul" },
		{ value: "Tense", label: "Tense" },
		{ value: "Tragic", label: "Tragic" },
		{ value: "80s", label: "80s" },
		{ value: "90s", label: "90s" },
	];

	const handleValueSelection = (selectedOption) => {
		setTags(selectedOption);
	};

	return (
		<Select
			maxMenuHeight={180}
			placeholder=""
			classNamePrefix={styles["input-field"]}
			components={animatedComponents}
			isMulti={true}
			isOptionDisabled={() => tags.length >= 5}
			isSearchable
			styles={theme === "dark" ? styleDark : styleLight}
			closeMenuOnSelect={false}
			options={tagsAvailable}
			defaultValue={tags}
			onChange={handleValueSelection}
		/>
	);
}
