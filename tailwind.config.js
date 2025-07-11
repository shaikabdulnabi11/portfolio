/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#181C14",
        accent1: "#3C3D37",
        accent2: "#697565",
        textLight: "#ECDFCC",
      },
    },
  },
  plugins: [],
};
