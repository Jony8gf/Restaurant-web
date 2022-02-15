module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        'darkmode': {
          DEFAULT: '#1d2521'
        },
      },
      borderWidth: {
        DEFAULT: '1px',
        '0-1': '0.1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}
