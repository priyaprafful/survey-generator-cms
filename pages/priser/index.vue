<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(pricingContent.heading)"
      :subheading="$prismic.asText(pricingContent.subheading)"
    />
  </div>
</template>

<script>
export default {
  name: 'Priser',
  nuxtI18n: {
    paths: {
      sv: '/priser',
      en: '/pricing',
    },
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
