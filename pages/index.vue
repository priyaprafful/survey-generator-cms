<template>
  <div class="bg-mainBg">
    <section
      class="flex flex-col justify-center h-almost max-w-screen-xl m-auto p-12 relative"
    >
      <Blob class="testy" />
      <div class="flex">
        <Block half left class="flex flex-col items-start justify-center z-10">
          <h1 class="text-5xl leading-tight mb-6">
            {{ $prismic.asText(homepageContent.headline) }}
          </h1>
          <p class="text-lg leading-relaxed mb-8">
            {{ $prismic.asText(homepageContent.description) }}
          </p>

          <div class="flex items-center">
            <CTAButton :text="$t('menu.book_demo')" />
            <nuxt-link :to="localePath('kontakt')" class="py-2 px-4">
              Kontakta oss
            </nuxt-link>
          </div>
        </Block>

        <Block half right class="flex items-center justify-center z-10">
          <img class="w-1/2" :src="image" alt="SurveyGenerator" />
        </Block>
      </div>

      <div class="flex justify-around absolute left-3 right-3 bottom-3">
        <SEB class="h-8" />
        <SACO class="h-8" />
        <AssaAbloy class="h-8" />
        <SwedishMatch class="h-8" />
      </div>
    </section>
  </div>
</template>

<script>
import Blob from '@/components/Common/SVG/Blob.vue';
import SEB from '@/components/Common/SVG/SEB.vue';
import SACO from '@/components/Common/SVG/SACO.vue';
import AssaAbloy from '@/components/Common/SVG/AssaAbloy.vue';
import SwedishMatch from '@/components/Common/SVG/SwedishMatch.vue';

export default {
  name: 'Home',
  components: {
    Blob,
    SEB,
    SACO,
    AssaAbloy,
    SwedishMatch,
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
  left: calc(50% + 130px);
  top: -640px;
}
</style>
