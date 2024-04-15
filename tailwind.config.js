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
        slideInFromBottom: 'slideInFromBottom 0.3s ease-in-out',
        slideInFromTop: 'slideInFromTop 0.3s ease-in-out',
      },
      // animation:{
      //   slideInFromTop: 'slideInFromTop 0.5s ease-in-out'
      // },

      // that is actual animation
      keyframes: {
        slideInFromBottom: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },

        slideInFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
    },
  },
}



