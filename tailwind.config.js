/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Nabvar-bg':'rgba(0, 0, 0, 0.511)',
      },
      screens: {
        'navbar' : '800px' ,
      },
      transform: {
        'scale-x-[-1]': 'scaleX(-1)',
      },

    },
  },
  plugins: [

  ],
}


