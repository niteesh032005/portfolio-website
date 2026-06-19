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
        background: '#0f172a', // slate-950
        surface: '#1e293b', // slate-800
        primary: '#6366f1', // indigo-500
        primaryHover: '#4f46e5', // indigo-600
        textMain: '#f8fafc', // slate-50
        textMuted: '#94a3b8', // slate-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
