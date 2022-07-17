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
        { value: "Joyful", label: "Joyful" },
        { value: "Cheerful", label: "Cheerful" },
        { value: "Dance", label: "Dance" },
        { value: "Sleepy", label: "Sleepy" },
        { value: "Calm", label: "Calm" },
        { value: "Exciting", label: "Exciting" },
        { value: "Somber", label: "Somber" },
        { value: "Merry", label: "Merry" },
        { value: "Humorous", label: "Humorous" },
        { value: "Satisfying", label: "Satisfying" },
        { value: "Dreamy", label: "Dreamy" },
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
