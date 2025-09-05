/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  safelist: ["text-purple", "text-primary", "text-purple-primary"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        purple: {
          DEFAULT: "#7C3AED",
          light: "#9F67FF",
          dark: "#6D28D9",
        },
        blue: {
          DEFAULT: "#232A4D",
          light: "#2D3A6D",
          dark: "#1A2038",
        },
        "blue-brand": "#339AF0",
        // Grey Colors
        grey: {
          DEFAULT: "#8A8A8A",
          dark: "#4B4B57",
          light: "#7B7B8A",
          lighter: "#F3F3F3",
          border: "#E5E5E5",
          placeholder: "#A3A3B3",
        },
        // Background Colors
        background: {
          DEFAULT: "#F7F7F9",
          light: "#F7F7F9",
          white: "#FFFFFF",
        },
        // Status Colors
        status: {
          red: "#E45C4C",
          green: "#4CCB6D",
          orange: "#F6A84A",
        },
        // Semantic Colors
        primary: {
          DEFAULT: "#7C3AED",
          dark: "#232A4D",
        },
        secondary: "#339AF0",
        error: "#E45C4C",
        success: "#4CCB6D",
        warning: "#F6A84A",
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 2rem))" },
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        13: "13px",
      },
    },
  },
  plugins: [],
};
