<template>
  <div>
    <Hero :data="homepageContent" />
    <Benefits :data="homepageContent" />
    <Testimonials :data="homepageContent" />
    <Features :data="homepageContent" />
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue';
import Benefits from '@/components/Home/Benefits.vue';
import Testimonials from '@/components/Home/Testimonials.vue';
import Features from '@/components/Home/Features.vue';

export default {
  components: {
    Hero,
    Benefits,
    Testimonials,
    Features,
  },
  layout: 'home',
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
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: 'SurveyGenerator — ' + this.$t('head_title.homepage'),
    };
  },
};
</script>
