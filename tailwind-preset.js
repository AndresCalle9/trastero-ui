/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        text: "#1A1A1A",
        accent: {
          DEFAULT: "#E8A33D",
          2: "#2E6E5C",
        },
      },
      fontFamily: {
        heading: ["var(--font-rubik)", "Rubik", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
};
