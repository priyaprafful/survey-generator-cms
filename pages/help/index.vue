<template>
  <Wrapper>
    <p>Hjälpen</p>
  </Wrapper>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalp',
      en: '/help',
    },
  },
  /* async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const quoteContent = (
        await $prismic.api.getSingle('get_quote', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        quoteContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  }, */
  head() {
    return {
      title: this.$t('menu.help') + ' — SurveyGenerator',
    };
  },
};
</script>
