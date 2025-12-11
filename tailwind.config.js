/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        // Professional color scheme for tourism
        primary: {
          DEFAULT: '#0ea5e9', // Sky Blue - trustworthy and calming
          light: '#38bdf8',
          dark: '#0284c7',
        },
        secondary: {
          DEFAULT: '#f97316', // Orange - energetic and inviting
          light: '#fb923c',
          dark: '#ea580c',
        },
        accent: {
          DEFAULT: '#8b5cf6', // Purple accent
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        light: '#f9fafb', // gray-50
        dark: {
          DEFAULT: '#111827', // gray-900
          card: '#1f2937', // gray-800
          lighter: '#374151', // gray-700
        }
      }
    },
  },
  plugins: [],
}
