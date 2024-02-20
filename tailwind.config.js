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
        'bg-main' : "url('../src/resorce/BG_Main_Image.svg')",
        'bg-projects' : "url('../src/resorce/BG_Projects_Image.svg')",
        'bg-skills' : "url('../src/resorce/BG_Skills_Image.svg')",
      }
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif']
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'nav_bg_fit': '100vw',
    },
  },
  plugins: [],
}

