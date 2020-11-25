<template>
  <div class="bg-white">
    <p>Kategoriii :)</p>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/:pageCategory',
      en: '/help/:pageCategory',
    },
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];
    const doc = await $prismic.api.getByUID(
      'help_category_page',
      params.pageCategory,
      {
        lang: currentLocale.iso.toLowerCase(),
      }
    );
    if (doc) {
      return {
        page: doc.results || doc,
        currentLocale,
      };
    } else {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
