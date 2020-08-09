<template>
  <div>
    <SvgSprite />
    <client-only>
      <Cookie />
    </client-only>
    <Header exclusive />
    <nuxt />
    <CTA />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Common/Header.vue';
import Footer from '~/components/Common/Footer.vue';
import CTA from '~/components/Common/CTA.vue';
import Cookie from '~/components/Common/Cookie.vue';
import SvgSprite from '~/components/Common/Icons/SvgSprite.vue';

export default {
  components: {
    Header,
    Footer,
    CTA,
    Cookie,
    SvgSprite,
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
