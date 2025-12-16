/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009688',
        'primary-dark': '#0A1F44',
        'white-soft': '#F2FBF9',
        'white-accent': '#CDF8F4',
        'black-corp': '#2E2E2E',
        error: '#FF6B5E',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
