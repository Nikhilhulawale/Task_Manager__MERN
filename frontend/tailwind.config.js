/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // v4 मध्ये extend नाही — थेट लिहायचं
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#2172f0",
    },
    screens: {
      "3xl": "1920px",
    }
  },
  plugins: [],
};
