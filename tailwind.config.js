module.exports = {
    mode: 'jit',
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            padding:{
                'responsive': 'clamp(75px, calc(4.6875rem + ((1vw - 10.28px) * 12.3318)), 185px)',
                // 'responsive':'clamp(100px, calc(6.25rem + ((1vw - 10.24px) * 12.2768)), 210px)',
            },
            margin:{
                'responsive': 'clamp(75px, calc(4.6875rem + ((1vw - 10.28px) * 12.3318)), 185px)',
                // 'responsive':'clamp(100px, calc(6.25rem + ((1vw - 10.24px) * 12.2768)), 210px)',
            },
            colors: {
                primary: {
                    100: "#5AB510",
                    200: "#479E00",
                    300: "#1E7F2D",
                    400: "#10631D",
                },
                light: {
                    100: "#FFFFFF",
                    200: "#F6F6F7",
                    300: "#D7E0DF",
                },
                dark: {
                    100: "#1D1D1D",
                    200: "#131313",
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
                replace1: ["Lato", "sans-serif"],
                replace2: ["Open Sans", "sans-serif"],
                replace3: ["Inter", "sans-serif"],
            },
            fontSize: {
                pricing: "clamp(1.75rem, 1.6456rem + 0.4453vw, 2.18rem)",
            },
        },
    },
    plugins: [],
};
