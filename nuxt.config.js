// Load environment variables declared in .env into env.process
require('dotenv').config();

export default {
  vue: {
    config: {
      devtools: true,
    },
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */

  head: {
    title: 'SurveyGenerator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Enkätundersökningar för organisationer och företag',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', href: '/favicon.ico' },
    ],
    bodyAttrs: {
      class: ['font-body', 'bg-bluegray-1'],
    },
  },
  resourceHints: true,
  /*
   ** Customize the progress-bar color
   */
  loading: process.env.NODE_ENV !== 'production',
  /*
   ** Layout and page transitions
   ** See https://nuxtjs.org/api/configuration-transition/
   */
  layoutTransition: {
    name: 'page',
    mode: 'out-in',
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/common.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/common.js',
    '~/plugins/vue-masonry.js',
    '~/plugins/vue-particles.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Svenska',
            code: 'sv',
            iso: 'sv-SE',
            file: 'sv.json',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-GB',
            file: 'en.json',
          },
        ],
        seo: true,
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'assets/langs/',
        defaultLocale: 'sv',
      },
    ],
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic',
  ],
  prismic: {
    endpoint: process.env.PRISMIC_URL,
    apiOptions: {
      accessToken: process.env.PRISMIC_API_KEY,
    },
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
  },
  generate: {
    fallback: true, // Netlify reads a 404.html, Nuxt will load as an SPA
  },
};
