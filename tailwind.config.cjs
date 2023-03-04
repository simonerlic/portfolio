/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'harmonia': ['Harmonia Sans', 'sans-serif'],
				'harmonia-regular': ['Harmonia Sans Regular', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
