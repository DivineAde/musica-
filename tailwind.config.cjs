/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},
      'mxl': {'min': '1200px'},
      'mlg': {'min': '991px'},
      'mmd': {'min': '767px'},
      'msm': {'min': '550px'},
      'mxsm': {'min': '375px'},
    }
  },
  plugins: [],
}
