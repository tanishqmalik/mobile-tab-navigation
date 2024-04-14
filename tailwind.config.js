/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        'C6DCE5': '#C6DCE5', '3D3D4E': '#3D3D4E','282E32': '#282E32' , '2A2A32': '#2A2A32' , '0F0F0F': '#0F0F0F', '272727': '#272727','202125': '#202125', '303135': '#303135', '171717': '#171717','212121': '#212121'
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
}
