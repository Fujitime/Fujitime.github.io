/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        orange : "#f97316",
        dark : "#0f172a",
        secondary :'#475569',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
