/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "900px",
        xl: "1280px",
        "2xl": "1600px",
      },
      fontFamily: {
        en: ["var(--font-en)"],
        en2: ["var(--font-en2)"],
      },
      colors: {
        black: "#000",
        white: "#fff",
        gray: "#ccc",
        primary: "#00ff00",
        secondary: "#ff0000",
        accent: "#0000ff",
      },
    },
  },
  plugins: [],
};
