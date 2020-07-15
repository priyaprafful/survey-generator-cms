<template>
  <div>
    <PageHeader
      heading="Verktyget"
      subheading="Etiam condimentum dapibus dictum."
    />
  </div>
</template>

<script>
export default {
  name: 'Verktyget',
  nuxtI18n: {
    paths: {
      sv: '/verktyget',
      en: '/platform',
    },
  },
  /* async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const contactUs = (
        await $prismic.api.getSingle('contact', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        contactUs,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  }, */
};
</script>
