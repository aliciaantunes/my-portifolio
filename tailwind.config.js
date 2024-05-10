/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,jsx}"],
  theme: {
    extend: {
      width: {
        '1700': '1700px',
      },
      height: {
        '720': '720px',
      }
    },
  },
  plugins: [],
};
