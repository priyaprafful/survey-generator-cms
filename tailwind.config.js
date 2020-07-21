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
        lightblue: {
          '1': '#EEF7FB',
          '2': '#DDEFF8',
          '3': '#CCE7F4',
          '4': '#BBDFF1',
          '5': '#AAD7ED',
          '6': '#98D0EA',
          '7': '#87C8E6',
          '8': '#76C0E3',
          '9': '#65B8DF',
        },
        bluegray: {
          '1': '#FAF9FD',
          '2': '#EAECF2',
          '3': '#DADEE8',
          '4': '#CAD1DD',
          '5': '#BAC4D3',
          '6': '#A9B6C8',
          '7': '#99A9BD',
          '8': '#899BB3',
          '9': '#798EA8',
        },
        yellow: {
          '1': '#FFE47B',
          '2': '#FFDE5C',
          '3': '#6C5600',
        },
        tangerine: {
          '1': '#ffad5c',
          '2': '#FF972E',
          '3': '#FF8100',
        },
      },
      boxShadow: {
        post: '0 5px 10px rgba(132, 153, 255, 0.25)',
        card: '0 5px 10px rgba(104, 125, 177, 0.15)',
      },
      height: {
        almost: 'calc(-16rem + 100vh)',
        '1/2-screen': '50vh',
      },
      inset: {
        '3': '3rem',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      zIndex: {
        n1: '-1',
      },
      gridTemplateColumns: {
        team: 'repeat(4, minmax(0, 12rem))',
      },
    },
  },
  variants: {
    padding: ['responsive', 'first', 'last'],
    margin: ['responsive', 'first', 'last', 'odd', 'even'],
    gridColumnStart: ['last'],
    gridColumnEnd: ['last'],
    flexDirection: ['last'],
    backgroundColor: ['hover', 'odd', 'even'],
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
