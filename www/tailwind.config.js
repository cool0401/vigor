module.exports = {
  purge: [
    './components/**/*.tsx',
    './components/**/*.jsx',
    './pages/**/*.tsx',
    './pages/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0bd156',
        'second-color': '#05090a',
        'emerald-750': '#37bb65',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  variants: {},
  plugins: [],
}
