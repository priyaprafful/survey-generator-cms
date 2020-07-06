<template>
  <div>
    <Header />
    <nuxt class="max-w-screen-xl m-auto px-12" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
