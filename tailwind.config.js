/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#181C14",
        bgCard: "#3C3D37",
        accent1: "#697565",
        accent2: "#ECDFCC",
        textLight: "#ffffff"
      }
    },
  },
  plugins: [],
}
