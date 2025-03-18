/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway: ['Raleway', 'sans-serif'],
      },
      colors:{
          customPurple: 'rgb(115, 64, 96)',
          customtextcolor :'rgb(77 ,77, 77)',
          nextbackbtn:'rgb(237, 182, 84)'
      }
    },
  },
  plugins: [],
}