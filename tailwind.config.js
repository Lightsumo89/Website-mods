/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				rainbow: {
					'0%': { filter: 'hue-rotate(0deg)' },
					'100%': { filter: 'hue-rotate(360deg)' },
				},
				'loop-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }

				}
			},
			animation: {
				rainbow: 'rainbow linear 3s infinite',
				'loop-scroll': 'loop-scroll 10s linear infinite',
			},
			colors: {
				'woody-brown': {
					DEFAULT: '#3C302C',
					50: '#E6DFDD',
					100: '#DDD4D1',
					200: '#CCBEBA',
					300: '#BBA8A2',
					400: '#AA928A',
					500: '#987C73',
					600: '#836860',
					700: '#6B564F',
					800: '#54433D',
					900: '#3C302C',
					950: '#2C2320'
				},
				purp: {
					DEFAULT: '#301A4B',
					50: '#DED1EF',
					100: '#D4C2EA',
					200: '#BEA3DF',
					300: '#A985D5',
					400: '#9367CA',
					500: '#7E48C0',
					600: '#6A3AA6',
					700: '#572F88',
					800: '#432569',
					900: '#301A4B',
					950: '#231336'
				},
				'fair-pink': {
					DEFAULT: '#FFEAEC',
					50: '#FFEAEC',
					100: '#FFCED3',
					200: '#FF96A0',
					300: '#FF5E6D',
					400: '#FF263A'
				},
				salmon: {
					DEFAULT: '#F39A9D',
					50: '#FEF5F5',
					100: '#FCE3E4',
					200: '#F7BEC0',
					300: '#F39A9D',
					400: '#ED686C',
					500: '#E7363C',
					600: '#CC181E',
					700: '#9A1217',
					800: '#680C0F',
					900: '#360608',
					950: '#1D0304'
				},
				glacier: {
					DEFAULT: '#6DB1BF',
					50: '#EDF5F7',
					100: '#DEEEF1',
					200: '#C2DEE4',
					300: '#A6CFD8',
					400: '#89C0CB',
					500: '#6DB1BF',
					600: '#4A99AA',
					700: '#397683',
					800: '#28535C',
					900: '#173035',
					950: '#0E1E21'
				}
			}
		}
	},
	plugins: []
};
