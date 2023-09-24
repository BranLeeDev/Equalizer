/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        main: "#191826",
        secondary: "#FCFAF9",
      },
      fontFamily: {
        "ibm-plex": ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
