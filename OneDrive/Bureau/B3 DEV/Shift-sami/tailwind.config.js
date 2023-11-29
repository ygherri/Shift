/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#192F48',
      },
      fontFamily: {
        'gibson': ['Gibson Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

