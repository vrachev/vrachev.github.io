/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			chubbo: ["Chubbo", "sans-serif"],
		},
		extend: {
			maxWidth: {
				'sm': '24rem', // Adjust the value to whatever you need
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
