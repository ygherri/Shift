/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#192F48',
      },
      fontFamily: {
        "canada-type-gibson": ['"canada-type-gibson"', "sans-serif"],
        "canada-type-gibson-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { style: "italic" },
        ],
        "canada-type-gibson-medium": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "500" },
        ],
        "canada-type-gibson-medium-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "500", style: "italic" },
        ],
        "canada-type-gibson-semibold": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "600" },
        ],
        "canada-type-gibson-semibold-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "600", style: "italic" },
        ],
        "canada-type-gibson-bold": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "700" },
        ],
        "canada-type-gibson-bold-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "700", style: "italic" },
        ],
      },
      
    },
  },
  plugins: [],
}

