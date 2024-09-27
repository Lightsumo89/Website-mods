/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}

