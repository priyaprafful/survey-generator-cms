<template>
  <div>
    <PageHeader heading="Verktyget" subheading="Tillval" />
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/verktyget/tillval',
      en: '/platform/options',
    },
  },
  /* async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const platformContent = (
        await $prismic.api.getSingle('platform', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        platformContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  }, */
};
</script>
