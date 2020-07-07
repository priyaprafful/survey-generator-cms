<template>
  <div class="bg-mainBg">
    <section class="flex h-almost max-w-screen-xl m-auto px-12 relative">
      <Blob class="testy" />
      <Block half left class="flex flex-col justify-center z-10">
        <h1 class="text-5xl leading-tight mb-6">
          {{ $prismic.asText(homepageContent.headline) }}
        </h1>
        <p class="text-lg leading-relaxed mb-6">
          {{ $prismic.asText(homepageContent.description) }}
        </p>

        <CTAButton :text="$t('menu.book_demo')" />
      </Block>

      <Block half right class="flex items-center justify-center z-10">
        <img class="w-1/2" :src="image" alt="SurveyGenerator" />
      </Block>
    </section>
  </div>
</template>

<script>
import Blob from '@/assets/img/Blob.vue';

export default {
  name: 'Home',
  components: {
    Blob,
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

<style lang="scss" scoped>
.testy {
  position: absolute;
  left: calc(50% + 120px);
  top: -660px;
}

/** .testy
  z-index: -1
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  height: 100%
  width: 100%
  transform: skewY(30deg)
  transform-origin: top right
  overflow: visible
  background: #FAF9FD;

.bg-skew
  position: absolute
  z-index: 1;
  background: #FAF9FD;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transform: skewY(30deg)
  transform-origin: top right

.cnt
  transform: skewY(-30deg)
  transform-origin: top right **/
</style>
