/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pizzariaRed: "#e63946",
        pizzariaGreen: "#2a9d8f",
        woodBrown: "#d4a373",
        neutralBackground: "#faf3e0",
        chalkboard: "#333333",
      },
      fontFamily: {
        pizzaria: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [],
};
