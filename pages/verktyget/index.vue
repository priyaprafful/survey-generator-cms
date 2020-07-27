<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(platformContent.heading)"
      :subheading="$prismic.asText(platformContent.subheading)"
    />
    <PlatformIntro />
    <PlatformDemo />
    <PlatformOptions />
    <PlatformPartners />
  </div>
</template>

<script>
import PlatformIntro from '@/components/Platform/PlatformIntro.vue';
import PlatformDemo from '@/components/Platform/PlatformDemo.vue';
import PlatformOptions from '@/components/Platform/PlatformOptions.vue';
import PlatformPartners from '@/components/Platform/PlatformPartners.vue';

export default {
  name: 'Verktyget',
  nuxtI18n: {
    paths: {
      sv: '/verktyget',
      en: '/platform',
    },
  },
  components: {
    PlatformIntro,
    PlatformDemo,
    PlatformOptions,
    PlatformPartners,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const platformContent = (
        await $prismic.api.getSingle('platform', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        platformContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
