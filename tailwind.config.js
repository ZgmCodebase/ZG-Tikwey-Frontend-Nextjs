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
                textColor: "rgba(40, 40, 44, 1)",
                priColor: "rgba(3, 4, 94, 1)",
                priColorDk: "",
                secColor: "rgba(0, 150, 199, 1)",
                secColorDk: "",
                sucColor: "",
                sucColorDk: "",
                accColor: "#6085B5",
                accColorDk: "",
                bgColor1: "#FFFFFF",
                bgColor2: "rgba(255, 255, 255, 1)",
                bgColor2Dk: "",
                greyColor: "rgba(229, 229, 229, 1)",
                gradientStartColor: "#023E8A",
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
