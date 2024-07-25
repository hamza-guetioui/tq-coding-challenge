/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-dark-blue": "#293264",
        "app-light-blue": "#4d5b9e",
        "app-lighter-blue": "#d6dbf5",
        "app-red": "#f8bcbc",
        "app-green": "#94d7a2",
        "app-white": "#fff",
      },
    },
  },
  plugins: [],
};
