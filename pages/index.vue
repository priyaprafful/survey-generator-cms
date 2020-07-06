<template>
  <section class="flex h-almost">
    <Block half left class="flex flex-col justify-center">
      <h1 class="mb-6">
        {{ $prismic.asText(homepageContent.headline) }}
      </h1>
      <p class="text-lg leading-relaxed">
        {{ $prismic.asText(homepageContent.description) }}
      </p>

      <button>
        {{ $t('menu.book_demo') }}
      </button>
    </Block>

    <Block half right class="flex items-center justify-center">
      <div class="testy"></div>
      <img class="w-1/2" :src="image" alt="SurveyGenerator" />
    </Block>
  </section>
</template>

<script>
import Block from '~/components/Block.vue';

export default {
  name: 'Home',
  components: {
    Block,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const homepageContent = (
        await $prismic.api.getSingle('home', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        homepageContent,
        image: homepageContent.image.url,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>

<style lang="sass" scoped>
.testy
  z-index: -1
  position: absolute
  top: 0
  right: 0
  width: 100%
  height: 100%
  overflow: hidden
  transform: skewY(-30deg)
  transform-origin: 0
  background: linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%)
</style>
