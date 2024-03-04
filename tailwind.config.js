/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Madimi One', sans-serif",
        signature:"'Great Vibes', cursive"

      },
    },
  },
  plugins: [require("daisyui")],
}

