import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import styleDark from "./MultiSelectStyles/DarkStyles";
import styleLight from "./MultiSelectStyles/LightStyles";
import { useTheme } from "next-themes";
import styles from "../../../../styles/CreateNFT/MultiSelect.module.css";

export default function MultiSelect(){
    const [selectedValue, setSelectedValue] = useState([]);
    const {theme} = useTheme();
    const animatedComponents = makeAnimated();
    const instrumentsUsed = [
		{ value: "Acoustic Guitar", label: "Acoustic Guitar" },
		{ value: "Drums", label: "Drums" },
		{ value: "Violin", label: "Violin" },
		{ value: "Piano", label: "Piano" },
		{ value: "Flute", label: "Flute" },
		{ value: "Electric Guitar", label: "Electric Guitar" },
		{ value: "Keyboard", label: "Keyboard" },
		{ value: "Xylophone", label: "Xylophone" },
		{ value: "Saxophone", label: "Saxophone" },
		{ value: "Tamberine", label: "Tamberine" },
		{ value: "Sitar", label: "Sitar" },
	];

    const handleValueSelection = (selectedOption) => {
        //Note: On form submission, we need to extract the value from js objects in the arrays...
        setSelectedValue(selectedOption);
    }

    console.log("Vlaue: ", selectedValue);

    return(
        <Select
            maxMenuHeight={180}
            placeholder=""
            classNamePrefix={styles['input-field']}
            components={animatedComponents}
            isMulti={true}
            // isOptionDisabled={(option, test) => props.instrumentsUsed.length >= 5}
            isSearchable
            styles={theme === 'dark'? styleDark:styleLight}
            closeMenuOnSelect={false}
            options={instrumentsUsed}
            onChange={handleValueSelection}
        />
    );
}