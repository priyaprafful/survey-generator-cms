/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      body: ['HelveticaNowText, sans-serif'],
    },
    extend: {
      colors: {
        bluegray: {
          '1': '#FAF9FD',
          '2': '#798ea8',
        },
        blue: {
          '1': '#43A8D8',
          '2': '#3D97C3',
          '3': '#3886AE',
          '4': '#327498',
          '5': '#2D6383',
          '6': '#27526E',
          '7': '#214159',
          '8': '#1C2F43',
          '9': '#161E2E',
        },
        yellow: {
          '1': '#FFDE5C',
          '2': '#735C00',
        },
      },
      boxShadow: {
        post: '0 5px 10px rgba(132, 153, 255, 0.25)',
      },
      height: {
        almost: 'calc(-16rem + 100vh)',
        almost3: '0.60rem',
      },
      inset: {
        '3': '3rem',
      },
      zIndex: {
        n1: '-1',
      },
    },
  },
  variants: {
    padding: ['responsive', 'first', 'last'],
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
