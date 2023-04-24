/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      '2xl': {'max': '2535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1880px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }, 
    extend: {},
  },
  plugins: [require("daisyui")],
}
