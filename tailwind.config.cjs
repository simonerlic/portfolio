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
				'Berkelely Mono': ['Berkeley Mono', 'monospace'],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'slight': "#000000a0",
			'slighter': "#00000070",
			'slightest': "#00000030",
			'porcelain': "#f8fbf8",
			'silk': "#dddcd6",
			'greenish': "#c8d5bb",
			'slateish': "#80989b"
		},
	},
	plugins: []
}
