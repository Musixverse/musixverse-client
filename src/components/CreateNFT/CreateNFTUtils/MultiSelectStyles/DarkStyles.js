const styleDark = {
    //Seleted value styling
    multiValue: (style) => {
        return {
            ...style,
            borderRadius: "18px",
            backgroundColor: "#323232",
            color: "#fff",
            border: "1px solid #7a7a7a",
            padding: "1px 5px",
            marginBottom: "3px",
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
        color: "white",
        maxWidth: "74px",
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
            backgroundColor: "#131313",
        },
    }),
    // Main Dropdown Styling
    control: (base, state) => ({
        ...base,
        fontFamily: "Poppins",
        fontSize: "0.85rem",
        fontWeight: "300",
        background: "#323232",
        paddingLeft: 3,
        paddingRight: 10,
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
        backgroundColor: "#1d1d1d",
        borderRadius: "6px !important",
        "&:hover": {
            borderRadius: "6px",
            cursor: "pointer !important",
        },
    }),
    menuList: (base) => ({
        ...base,
        fontSize: "0.95rem",
        color: "#fff",
        borderRadius: "6px !important",
        "&:hover": {
            cursor: "pointer !important",
        },
    }),
};

export default styleDark;