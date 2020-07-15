<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(loginContent.heading)"
      :subheading="$prismic.asText(loginContent.subheading)"
    />
  </div>
</template>

<script>
export default {
  name: 'LoggaIn',
  nuxtI18n: {
    paths: {
      sv: '/logga-in',
      en: '/login',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const loginContent = (
        await $prismic.api.getSingle('login', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        loginContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
