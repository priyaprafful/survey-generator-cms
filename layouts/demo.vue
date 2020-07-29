<template>
  <div>
    <Header demopage />
    <nuxt />
    <CTA />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Common/Header.vue';
import Footer from '~/components/Common/Footer.vue';
import CTA from '~/components/Common/CTA.vue';

export default {
  components: {
    Header,
    Footer,
    CTA,
  },
  head() {
    return {
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
