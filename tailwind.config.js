/** @type {import('tailwindcss').Config} */ 3744;
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: "#1A252E",
          darkGunmetal: "#162027",
          darkShadeBlack: "#101920",
          greyBlue: "#273744",
          greyBlue1: "#1D2932",
          greyBlue2: "#1B2329",
          white: "#FFFFFF",
          violet: "#6833E4",
          purple: "#6833E4",
          grayishLavender: "#898299",
          lavenderBlue: "#C2A8FF",
          shadeLavenderBlue: "#E5DAFF",
          lavenderPurple: "#DDCFFF",
          darkPurple: "#625C71",
          lilacLuster: "#998EB2",
          blueGreen: "#111A21",
          midnightBlue: "#1B262F",
          periwinkle: "#CFBCFF",
          mauve: "#A89AFF",
          mintGreen: "#8EFFA0",
          coral: "#FF8080",
          grey: "#3C4043",
          grey1: "#595959",
        },
      },
      keyframes: {
        fadeRight: { "0%": { transform: "scale(1.1)" } },
      },
      animation: {
        fadeRight: "fadeRight 2s ease-in-out both",
        fadeRight1: "fadeRight 3s ease-in-out both",
        fadeRight2: "fadeRight 4s ease-in-out both",
      },
      backgroundImage: {
        "circuit-board": "url('/assets/images/circuit.svg')",
        sprinkle: "url('/assets/images/sprinkle-opacity-10.svg')",
      },
    },
  },
  plugins: [],
};
