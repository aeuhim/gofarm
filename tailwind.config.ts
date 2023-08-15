import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        taupe: {
          50: '#fbf9f6',
          100: '#f3ede4',
          200: '#e6d8c9',
          300: '#d9c3af',
          400: '#ccae94',
          500: '#8b8275',
          600: '#7e7367',
          700: '#675a4e',
          800: '#50433a',
          900: '#392c25',
          950: '#23160f',
        },
      },
    },
  },
  plugins: [],
}
export default config
