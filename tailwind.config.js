/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Global font
        spartan: ["League Spartan", "sans-serif"], // Secondary font
      },
      colors: {
        secondary: "#172B85",
        accent: "#FABE2C",
        gray: "#00000080",
        lightGray: "#F5F7F9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        dashNav: "calc(100% - 350px)",
      },
    },
  },
  plugins: [],
};
