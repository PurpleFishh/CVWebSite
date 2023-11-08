/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary' : '#76D676',
      'secondary' : '#D8F3E6',
      'accent' : '#A45179',
      'bg' : '#F1FFF8',
      'text' : '#1F0519',
      'java-lang' : '#EE8B60',
    },
    extend: {
      backgroundImage: {
        'bg-main' : "url('../src/resorce/BG_Main_image.svg')",
      }
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

