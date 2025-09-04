/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' },
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '13': '13px',
      },
      colors: {
        // Brand Colors
        purple: {
          primary: '#7C3AED',
          DEFAULT: '#7C3AED',
        },
        blue: {
          primary: '#232A4D',
          brand: '#339AF0',
        },
        // Grey Colors
        grey: {
          dark: '#4B4B57',
          light: '#7B7B8A',
          DEFAULT: '#8A8A8A',
          lighter: '#F3F3F3',
          border: '#E5E5E5',
          placeholder: '#A3A3B3',
        },
        // Background Colors
        background: {
          light: '#F7F7F9',
          white: '#FFFFFF',
          DEFAULT: '#F7F7F9',
        },
        // Status Colors
        status: {
          red: '#E45C4C',
          green: '#4CCB6D',
          orange: '#F6A84A',
        },
        // Semantic Colors
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#232A4D',
        },
        secondary: {
          DEFAULT: '#339AF0', // Primary Blue
        },
        error: {
          DEFAULT: '#E45C4C', // Red
        },
        success: {
          DEFAULT: '#4CCB6D', // Green
        },
        warning: {
          DEFAULT: '#F6A84A', // Orange
        },
      },
    },
  },
  plugins: [],
}
