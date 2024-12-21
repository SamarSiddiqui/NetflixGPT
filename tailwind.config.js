/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      largerMobile: { max: "425px" },
      smallerTab: { max: "768px" },
      tablet: { max: "800px" },
      proTablet: { max: "995px" },
      laptop: { max: "1160px" },
    },
  },
  plugins: [],
};
