/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], //update this to include paths to all component files
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

