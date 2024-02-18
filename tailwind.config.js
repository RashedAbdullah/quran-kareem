/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#043939",
        primaryHover: "#043333",
        secondary: "#64ccc5",
        textWhite: "#fff",
        textBlack: "#000",
      },
      fontFamily: {
        hafs: ["anotherHafs", "hafs"],
        amiri: ["Amiri"],
      },
    },
  },
  plugins: [],
};
