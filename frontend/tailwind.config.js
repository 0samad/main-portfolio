/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1a1a',
          light: '#ffffff',
        },
        accent: {
          blue: '#3b82f6',
        },
        neutral: {
          gray: '#64748b',
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}