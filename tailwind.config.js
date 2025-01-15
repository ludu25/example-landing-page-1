/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',   // Include pages directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Include components directory
    './app/**/*.{js,ts,jsx,tsx}',     // Include app directory if using Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};