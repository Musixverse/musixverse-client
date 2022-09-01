const filterStyleLight = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: '#383838',
            fontWeight: "600",
        }
    },
    //Seleted value styling
    multiValue: (style) => {
        return {
            ...style,
            borderRadius: "18px",
            backgroundColor: "transparent",
            color: "#383838",
            border: "1px solid #323232",
            padding: "1px 5px",
            marginBottom: "3px",
            width: "fit-content"
        };
    },
    //Selected Value remove button styling
    multiValueRemove: (base) => ({
        ...base,
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0)",
        },
    }),
    //Selected Value text styling
    multiValueLabel: (base) => ({
        ...base,
        color: "374151",
        fontWeight: "600",
        maxWidth: "50px",
    }),
    // Menu options styling
    option: (base) => ({
        ...base,
        fontFamily: "Roboto",
        cursor: "pointer !important",
        fontSize: "0.95em",
        fontWeight: "600",
        backgroundColor: "transparent",
        padding: "6px 15px",
        "&:hover": {
            backgroundColor: "#F6F6F7",
        },
    }),
    // Main Dropdown Styling
    control: (base, state) => ({
        ...base,
        fontFamily: "Roboto",
        fontSize: "0.85rem",
        fontWeight: "500",
        background: "#d9d9d9",
        color: "#383838 !important",
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 2,
        paddingBottom: 2,
        borderWidth: 2,
        borderRadius: state.isFocused ? "6px 6px" : 6,
        borderColor: "transparent",
        boxShadow: state.isFocused ? null : null,
        cursor: "pointer !important",
        "&:hover": {
            borderColor: "#6cc027",
        },
    }),
    //Dropdown Indicators
    dropdownIndicator: (base) => ({
        ...base,
        color: "#6cc027",
        "&:hover": {
            color: "#6cc027",
            cursor: "pointer !important",
        },
    }),
    clearIndicator: (base) => ({
        ...base,
        color: "#6cc027",
        "&:hover": {
            color: "#6cc027",
            cursor: "pointer !important",
        },
    }),
    //Dropdown menu
    menu: (base) => ({
        ...base,
        marginTop: 7,
        fontFamily: "Poppins",
        backgroundColor: "#D7E0DF",
        borderRadius: "6px !important",
        "&:hover": {
            borderRadius: "6px",
            cursor: "pointer !important",
        },
    }),
    menuList: (base) => ({
        ...base,
        fontSize: "0.95rem",
        color: "#374151",
        borderRadius: "6px !important",
        "&:hover": {
            color: "#111827",
            cursor: "pointer !important",
        },
    }),
};

export default filterStyleLight;