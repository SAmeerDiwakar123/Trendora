/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOlive: "#3B3B1A",
        oftGreen: '#E7EFC7',
        deepForest: '#1C352D',
      },
    },
  },
  plugins: [],
}