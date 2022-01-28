module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                light: {
                    100: "#FFFFFF",
                    200: "#F6F6F7",
                    300: "#D7E0DF",
                },
                dark: {
                    100: "#1D1D1D",
                    200: "#131313",
                },
                primary: {
                    100: "#5AB510",
                    200: "#479E00",
                    300: "#1E7F2D",
                },
                secondary: {
                    100: "#479E00",
                    200: "#1E7F2D",
                    300: "#10631D",
                },
                warning: {
                    100: "#FFC000",
                    200: "#FFAA01",
                },
                error: {
                    100: "#EF5757",
                    200: "#D60202",
                    300: "#A60000",
                },
                nav: {
                    light: "rgba(255, 255, 255, 0.4)",
                    dark: "rgba(19, 19, 19, 0.4)",
                },
                search: {
                    100: "#E8E8E8",
                    200: "#292929",
                    300: "#B2B2B2",
                },
            },
            fontFamily: {
                primary: ["Poppins", "sans-serif"],
                secondary: ["Roboto", "sans-serif"],
                tertiary: ["Bebas Neue", "cursive"],
            },
        },
    },
    plugins: [],
};
