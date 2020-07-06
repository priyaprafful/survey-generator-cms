/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      body: ['TT Norms, sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          lighter: '#A4E9FD',
          light: '#43A8D8',
          default: '#258DBB',
          dark: '#161E2E',
        },
        yellow: {
          default: '#FFDE5C',
          dark: '#735C00',
        },
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'odd', 'even'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
