let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './hugo_stats.json'
  ],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements;
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
  },
  safelist: [],
});

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [tailwind, ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss, autoprefixer] : [])],
};
