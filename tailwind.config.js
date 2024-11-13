/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        compact: 'SF Compact Text',
        neue: 'Helvetica Neue',
        pro: 'SF Pro Display'
      }
    },
  },
  plugins: [],
}

