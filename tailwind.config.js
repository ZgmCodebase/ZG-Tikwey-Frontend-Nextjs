/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                warrior: ["Great-Warrior", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                textColor: "rgba(0, 0, 0, 1)",
                priColor: "#D9D9D9",
                priColorDk: "",
                secColor: "",
                secColorDk: "",
                sucColor: "",
                sucColorDk: "",
                accColor: "",
                accColorDk: "",
                bgColor: "#1E1E1E",
                bgColorDk: "",
            },
            fontSize: {
                size1: "16px",
                size1Mob: "12px",
                size2: "18px",
                size2Mob: "14px",
                size3: "20px",
                size3Mob: "16px",
                size4: "22px",
                size5: "32px",
                size5Mob: "22px",
                size5Mob2: "18px",
                size6: "40px",
                size7: "60px",
                size7Mob: "30px",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
