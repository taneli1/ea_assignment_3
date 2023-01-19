/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#1DBB84",
      secondary: "#F8FF00",
      invisible: "rgb(255, 255, 255, 0)",
      gray: "#737373",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        ec: ["eczar"],
        bot: ["roboto"],
      },
      backgroundImage: {
        lines: "url('../src/assets/svg/lines.svg')",
      },
    },
  },
  plugins: [],
}
