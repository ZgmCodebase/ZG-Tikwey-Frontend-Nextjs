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
                priColor: "rgba(0, 150, 199, 1)",
                priColorDk: "",
                secColor: "rgba(191, 225, 240, 1)",
                secColorDk: "",
                sucColor: "",
                sucColorDk: "",
                accColor: "#6085B5",
                accColorDk: "",
                bgColor: "#1E1E1E",
                bgColorDk: "",
                whiteColor: "rgba(255, 255, 255, 1)"
            },
            fontSize: {
                size1: "16px",
                size1Mob: "12px",
                size2: "18px",
                size2Mob: "12px",
                size3: "20px",
                size3Mob: "16px",
                size4: "22px",
                size5: "32px",
                size5Mob: "22px",
                size5Mob2: "18px",
                size6: "40px",
                size7: "60px",
                size7Mob: "30px",
                size8: "64px",
                size8Mob: "20px",
                size9: "48px",
                size9Mob: "20px",
                size10: "24px",
                size10Mob: "14px",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
