/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#38bdf8',
					secondary: '#c084fc',
					accent: '#3b82f6',
					neutral: '#e7e5e4',
					'base-100': '#1f2937',
					info: '#f9a8d4',
					success: '#4ade80',
					warning: '#fcd34d',
					error: '#ef4444'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};
