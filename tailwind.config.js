/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f7f7f7", // tertiary color
          200: "#e6e6ff", // darker / bolder shade lal tertiary color
          600: "#2b00ff", // primary main color
          800: "#1a0099", // darker / bolder shade lal primary
        },
      },
    },
  },
  plugins: [],
};
