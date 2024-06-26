/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-50": "#fdf4ff",
        "primary-100": "#fae8ff",
        "primary-200": "#f5d0fe",
        "primary-300": "#f0abfc",
        "primary-400": "#e879f9",
        "primary-500": "#d946ef",
        "primary-600": "#c026d3",
        "primary-700": "#a21caf",
        "primary-800": "#86198f",
        "primary-900": "#701a75",
        "primary-950": "#4a044e",
      },
    },
  },
  plugins: [formsPlugin],
};
