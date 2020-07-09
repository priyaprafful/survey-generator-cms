<template>
  <div>
    <PageTitle
      title="Integritetspolicy"
      description="Etiam condimentum dapibus dictum."
    />
  </div>
</template>

<script>
export default {
  name: 'Integritetspolicy',
  nuxtI18n: {
    paths: {
      sv: '/integritetspolicy',
      en: '/privacy-policy',
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
