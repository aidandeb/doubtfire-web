/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  important: true,
  theme: {
    extend: {
      colors: {
        'formatif-blue': '#3939ff',
      },
    },
  },
  plugins: [],
};
