/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28194b",
        secondary: "#7D49F8",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
