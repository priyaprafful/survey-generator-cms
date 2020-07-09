<template>
  <PageTitle
    :title="$prismic.asText(contactUs.header)"
    :description="$prismic.asText(contactUs.subheader)"
  />
</template>

<script>
export default {
  name: 'Kontakt',
  nuxtI18n: {
    paths: {
      sv: '/kontakt',
      en: '/contact',
    },
  },
  async asyncData({ $prismic, error, app }) {
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
  },
};
</script>
