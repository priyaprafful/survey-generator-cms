<template>
  <div>
    <Header homepage />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Common/Header.vue';
import Footer from '~/components/Common/Footer.vue';

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
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMisc', $prismic);
  },
};
</script>
