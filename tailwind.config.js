module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#6cc027",
                    200: "#5ab510",
                    300: "#479e00",
                },
                light: {
                    100: "#f0eae9",
                },
                dark: {
                    100: "#0a1117",
                },
            },
        },
    },
    plugins: [],
};
