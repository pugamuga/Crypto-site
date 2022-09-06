/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
  },

  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
