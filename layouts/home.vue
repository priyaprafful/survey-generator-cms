<template>
  <div>
    <Header homepage />
    <nuxt />
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
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchContactInformation', $prismic);
  },
};
</script>
