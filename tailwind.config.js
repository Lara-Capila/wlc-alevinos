/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: {
          50: '#83D1FF',
          100: '#6ECAFF',
          200: '#45BBFF',
          300: '#1DACFF',
          400: '#009AF3',
          500: '#0080CA',
          600: '#005C92',
          700: '#00395A',
          800: '#001522',
        },
        yellow: {
          50: '#FFEDD5',
          100: '#FFE4C0',
          200: '#FFD397',
          300: '#FFC16F',
          400: '#FFB046',
          500: '#FF9E1D',
          600: '#E48200',
          700: '#AC6200',
          800: '#744200',
          900: '#3C2200',
        },
        dark: {
          50: '#949494',
          100: '#8A8A8A',
          200: '#757575',
          300: '#616161',
          400: '#4C4C4C',
          500: '#383838',
          600: '#1C1C1C',
          700: '#000000',
        },
      },
    },
  },
  plugins: [],
};
