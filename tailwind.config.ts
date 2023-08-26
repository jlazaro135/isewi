import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import sfTypography from '@storefront-ui/typography';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  plugins: [sfTypography],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e9f7fc',
          100: '#d2eff9',
          200: '#a6dff2',
          300: '#79cfec',
          400: '#4dbfe5',
          500: '#20afdf',
          600: '#1a8cb3',
          700: '#136986',
          800: '#0d4659',
          900: '#06232d',
        }
      },
    },
  },
};