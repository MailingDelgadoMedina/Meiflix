module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here

      'nflb':'#000',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
    },
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}