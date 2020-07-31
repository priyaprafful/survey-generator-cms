<template>
  <div>
    <Header homepage />
    <nuxt />
    <CTA />
    <client-only>
      <Cookie />
    </client-only>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Common/Header.vue';
import Footer from '~/components/Common/Footer.vue';
import CTA from '~/components/Common/CTA.vue';
import Cookie from '~/components/Common/Cookie.vue';

export default {
  components: {
    Header,
    Footer,
    CTA,
    Cookie,
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
