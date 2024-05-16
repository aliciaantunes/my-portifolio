/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,jsx}"],
  theme: {
    extend: {
      width: {
        '1520': '1520px',
      },
      height: {
        '720': '720px',
      },
      animation: {

        typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        
        },
    },
  },
  plugins: [],
};
