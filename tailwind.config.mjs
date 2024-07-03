/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#101728', // background
				secondary: '#9340FF', // purple
				accent: '#FF3C5F', // red
				'ball-outer': '#1F41BB',
			},
		},
	},
	plugins: [],
};
