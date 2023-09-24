/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        main: "#191826",
        secondary: "#FCFAF9",
        "buy-card": "#FA7453",
      },
      fontFamily: {
        "ibm-plex": ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('/src/assets/images/png/bg-main-mobile.png')",
        "pattern-one": "url('/src/assets/images/svg/bg-pattern-1.svg')",
        "pattern-two": "url('/src/assets/images/svg/bg-pattern-2.svg')",
        "icon-ios": "url('/src/assets/images/svg/icon-apple.svg')",
        "icon-android": "url('/src/assets/images/svg/icon-android.svg')",
      },
    },
  },
  plugins: [],
};
