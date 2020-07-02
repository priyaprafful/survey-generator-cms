<template>
  <div>
    <h1 class="blog-title">
      {{ $prismic.asText(contactUs.header) }}
    </h1>
    <!-- Template for page description -->
    <p class="blog-description">
      {{ $prismic.asText(contactUs.subheader) }}
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'kontakta-oss',
  nuxtI18n: {
    paths: {
      sv: '/kontakta-oss',
      en: '/contact-us',
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
