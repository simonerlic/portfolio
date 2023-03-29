/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'	
	],
	theme: {
		extend: {
			fontFamily: {
				'harmonia': ['Harmonia Sans', 'sans-serif'],
				'harmonia-regular': ['Harmonia Sans Regular', 'sans-serif'],
			},
			colors: {
				'theme-start': '#473B7B',
				'theme-via': '#3584A7',
				'theme-end': '#30D2BE',
			},

		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
