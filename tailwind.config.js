/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // app directory
    './pages/**/*.{js,ts,jsx,tsx}',     // if you have pages directory
    './components/**/*.{js,ts,jsx,tsx}' // all components
  ],
  theme: { extend: {} },
  plugins: [],
};
