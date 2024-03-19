import defaultMarkdown from './src/styles/markdown/createDefault.js';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			chubbo: ["Chubbo", "sans-serif"],
			barlow: ['Barlow', 'sans-serif'],
			code_mono: ['Source Code Pro', 'mono'],
		},
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		defaultMarkdown(),
	],
}
