<template>
  <div class="outer-container">
    <SvgSprite />
    <client-only>
      <Cookie />
    </client-only>
    <div class="back">
      <nuxt-link to="/">back to list</nuxt-link>
    </div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/" style="text-decoration: underline">
      Return to home
    </nuxt-link>
  </div>
</template>

<script>
import Cookie from '~/components/Common/Cookie.vue';
import SvgSprite from '~/components/Common/Icons/SvgSprite.vue';

export default {
  components: {
    Cookie,
    SvgSprite,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
