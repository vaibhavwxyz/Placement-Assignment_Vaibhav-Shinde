/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
