/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        "F5F5F5" : '#F5F5F5',
        "575757" : '#575757',
        "DCDCDC" : '#DCDCDC',
        "060D38" : '#060D38',
        "071320" : '#071320',
        "21F5E6" : '#21F5E6',
        "ECECEC" : '#ECECEC'
      }
    },
  },
  plugins: [],
}
