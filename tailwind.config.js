/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        sofia_sans_condensed: ['var(--font-sofia-sans-condensed)', 'sans-serif'],
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
};
