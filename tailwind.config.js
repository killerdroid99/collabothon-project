/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#f5f5f5",
				secondary: "#d9d9d9",
				accent: "#F9A826",
			},
		},
	},
	plugins: [],
};
