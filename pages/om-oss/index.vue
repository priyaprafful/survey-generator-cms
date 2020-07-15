<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(aboutContent.heading)"
      :subheading="$prismic.asText(aboutContent.subheading)"
    />
  </div>
</template>

<script>
export default {
  name: 'OmOss',
  nuxtI18n: {
    paths: {
      sv: '/om-oss',
      en: '/about',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const aboutContent = (
        await $prismic.api.getSingle('about', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        aboutContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
