<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(pricingContent.heading)"
      :subheading="$prismic.asText(pricingContent.subheading)"
    />
    <PricingIntro :data="pricingContent" />
    <SurveyTypes :data="pricingContent" />
    <PlansCards :data="pricingContent" />
    <PlansTable :data="pricingContent" />
    <FAQ :data="pricingContent" />
  </div>
</template>

<script>
import PricingIntro from '@/components/Pricing/PricingIntro.vue';
import SurveyTypes from '@/components/Pricing/SurveyTypes.vue';
import PlansCards from '@/components/Pricing/PlansCards.vue';
import PlansTable from '@/components/Pricing/PlansTable.vue';
import FAQ from '@/components/Pricing/FAQ.vue';

export default {
  name: 'Priser',
  nuxtI18n: {
    paths: {
      sv: '/priser',
      en: '/pricing',
    },
  },
  components: {
    PricingIntro,
    SurveyTypes,
    PlansCards,
    PlansTable,
    FAQ,
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
