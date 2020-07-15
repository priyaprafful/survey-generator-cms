<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(customersContent.heading)"
      :subheading="$prismic.asText(customersContent.subheading)"
    />
    <Intro />
  </div>
</template>

<script>
import Intro from '@/components/Customers/Intro.vue';

export default {
  name: 'Kunder',
  nuxtI18n: {
    paths: {
      sv: '/kunder',
      en: '/customers',
    },
  },
  components: {
    Intro,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const customersContent = (
        await $prismic.api.getSingle('customers', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        customersContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
