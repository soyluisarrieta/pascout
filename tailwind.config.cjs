/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      screens: {
        xl: '1024px'
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '0rem'
      }
    },

    extend: {
      fontFamily: {
        primary: ['Mona sans', 'system-ui', 'sans-serif'],
        secondary: ['Satoshi', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
