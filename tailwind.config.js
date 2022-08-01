// /* eslint-disable @typescript-eslint/no-var-requires */
// const { fontFamily } = require('tailwindcss/defaultTheme');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {},
//   plugins: [
//     require('daisyui'),
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/forms')
//     ],
//   daisyui: {
//     styled: true,
//     themes: ['dark'],
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: '',
//     darkTheme: 'dark',
//   },
// };

module.exports = {
	content: [
        './src/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dark'],
	},
};