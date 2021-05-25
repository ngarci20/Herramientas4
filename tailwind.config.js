const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
    },
    colors: {
      yellow: '#FFC107',
      white: '#fff',
      gray: colors.coolGray,
      black: '#000'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
