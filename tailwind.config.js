/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            100: '#E6F3FF',
            300: '#80BFFF',
            500: '#1A8CFF',
            600: '#0077FF',
            700: '#0066CC',
            900: '#003366',
          },
          neutral: {
            100: '#F5F5F5',
            300: '#D4D4D4',
            500: '#737373',
            700: '#404040',
            900: '#171717',
          },
        },
      },
    },
    plugins: [],
  }