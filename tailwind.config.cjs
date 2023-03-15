/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoFlow: {
        'dense': 'dense',
      },
    },
  },
  variants: {
    gridAutoFlow: ['responsive'],
  },
  plugins: [],
}
