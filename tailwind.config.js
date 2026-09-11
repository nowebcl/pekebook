/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pekepurple: {
          50: '#f7f4fb',
          100: '#efe9f7',
          200: '#ded3ef',
          300: '#c5b1e3',
          400: '#a886cd',
          500: '#9065be',
          600: '#7e4ea9',
          700: '#693e8e',
          800: '#573573',
          900: '#482d5e',
        },
        peketurquoise: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#14b8a6',
          600: '#0d9488',
        }
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'soft-md': '0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 10px 25px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -3px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 35px -8px rgba(0, 0, 0, 0.12)',
        'app-nav': '0 -4px 20px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
