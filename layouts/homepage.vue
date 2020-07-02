<template>
  <div class="font-body">
    <Header />
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import FooterPrismic from '~/components/FooterPrismic.vue';

export default {
  components: {
    Header,
    FooterPrismic,
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic);
  },
};
</script>
