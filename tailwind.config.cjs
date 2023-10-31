/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'dmserif': ["'DMSerif'", 'serif'],
				'youngserif': ['YoungSerif', 'serif'],
				'outfit': ['Outfit', 'sans-serif'],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'sabu': "#c8d5bb",
			'yanagi': "#47585c",
			'nezu': "#47585c",
			'roiro': "#2b2b2b"
		},
	},
	plugins: [],
}
