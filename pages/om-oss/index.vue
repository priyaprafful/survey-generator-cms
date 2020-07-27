<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(aboutContent.heading)"
      :subheading="$prismic.asText(aboutContent.subheading)"
    />
    <AboutIntro :data="aboutContent" />
    <CTA />
  </div>
</template>

<script>
import AboutIntro from '@/components/About/AboutIntro.vue';
import CTA from '@/components/Common/CTA.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/om-oss',
      en: '/about',
    },
  },
  components: {
    AboutIntro,
    CTA,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
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
