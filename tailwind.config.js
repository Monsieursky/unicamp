/** @type {import('tailwindcss').Config} */
export default {
  content: ["./html/**/*.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


