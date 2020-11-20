<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(helpContent.heading)"
      :subheading="$prismic.asText(helpContent.subheading)"
    />
    <HelpBoxes />
  </div>
</template>

<script>
import HelpBoxes from '@/components/Help/HelpBoxes.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen',
      en: '/help',
    },
  },
  components: {
    HelpBoxes,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const helpContent = (
        await $prismic.api.getSingle('help', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        helpContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: this.$t('menu.help') + ' — Survey Generator',
    };
  },
};
</script>
