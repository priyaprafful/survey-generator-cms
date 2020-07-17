<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(pricingContent.heading)"
      :subheading="$prismic.asText(pricingContent.subheading)"
    />
    <Intro />
    <SurveyTypes />
    <Plans :data="pricingContent" />
  </div>
</template>

<script>
import Intro from '@/components/Pricing/Intro.vue';
import SurveyTypes from '@/components/Pricing/SurveyTypes.vue';
import Plans from '@/components/Pricing/Plans.vue';

export default {
  name: 'Priser',
  nuxtI18n: {
    paths: {
      sv: '/priser',
      en: '/pricing',
    },
  },
  components: {
    Intro,
    SurveyTypes,
    Plans,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const pricingContent = (
        await $prismic.api.getSingle('pricing', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        pricingContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
