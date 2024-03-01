module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_4c": "#0000004c", "900_3f": "#0000003f" },
        blue_gray: {
          100: "#cfcfcf",
          700: "#296763",
          800: "#224957",
          900: "#2c2c2c",
          "100_01": "#d9d9d9",
        },
        teal: { 900: "#093545" },
        gray: { 300: "#e5e5e5" },
        white: { A700: "#ffffff" },
        green: { A400: "#20df7f" },
      },
      boxShadow: {
        bs1: "inset 0px 4px  4px 0px #0000003f",
        bs: "0px 4px  4px 0px #0000004c",
      },
      fontFamily: { lexenddeca: "Lexend Deca", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
