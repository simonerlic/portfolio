/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'dmserif': ["'DMSerif'", 'serif'],
				'youngserif': ['YoungSerif', 'serif'],
				'outfit': ['Outfit', 'sans-serif'],
				'outfit-medium': ['Outfit-Medium', 'sans-serif'],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'slight': "#000000a0",
			'slighter': "#00000070",
			'porcelain': "#f8fbf8",
			'silk': "#dddcd6",
			'greenish': "#c8d5bb",
		},
	},
	plugins: []
}
