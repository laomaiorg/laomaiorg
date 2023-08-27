const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './hugo_stats.json',
    './layouts/**/*.{html,js,svg}',
    './assets/**/*.{html,js,svg}'
  ],
	darkMode: 'class',
	theme: {
    extend: {
      keyframes: {
        'text-shimmer': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'text-shimmer': 'text-shimmer 5s ease-out infinite alternate',
      },
      screens: {
        'lsm': '400px',
        // 'md': '800px',
        // => @media (min-width: 800px) { ... }
      },
      colors: {
        lmd: {
          50: '#F8F9F4',
          100: '#DADBD6',
          200: '#BCBDB8',
          300: '#A8A9A4',
          400: '#949590',
          500: '#767772',
          600: '#62635E',
          700: '#4E4F4A',
          800: '#3A3B36',
          900: '#262722',
        },
        lmh: {
          900: '#8B0E3A'
        },
        lmr: {
          900: 'rgb(214,180,92,0.2)',
          700: 'rgb(232,223,196)',
          500: 'rgb(255,251,232)',
        },
      },
      fontFamily: {
        'Hubot': 'Hubot',
        'MonteCarlo': 'MonteCarlo',
      }
    },
  },
	plugins: [typography],
};
