require('dotenv').config();

export default {
  vue: {
    config: {
      devtools: true
    }
  },

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
    title: 'Survey Generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Placeholder' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: process.env.NODE_ENV !== 'production',

  /*
   ** Global CSS
   */
  css: ['@/assets/css/common.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/prismicLinks', ssr: false }],

  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  modules: ['@nuxtjs/prismic', '@nuxtjs/svg'],

  prismic: {
    endpoint: process.env.PRISMIC_URL,
    apiOptions: {
      routes: [
        {
          type: 'post',
          path: '/:lang/:category/:uid',
          resolvers: {
            category: 'category' // id of the content relationship in the post mask
          }
        }
      ]
    },
    disableGenerator: false
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
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias.vue = 'vue/dist/vue.common';
    }
  },

  generate: {
    fallback: true // Netlify reads a 404.html, Nuxt will load as an SPA
  }
};
