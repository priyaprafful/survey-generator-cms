<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(platformContent.heading)"
      :subheading="$prismic.asText(platformContent.subheading)"
    />
    <PlatformIntro />
    <PlatformOptions :data="platformContent" :posts="posts" />
    <PlatformPartners />
  </div>
</template>

<script>
import PlatformIntro from '@/components/Platform/PlatformIntro.vue';
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
    PlatformOptions,
    PlatformPartners,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      const optionPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'survey_tool_option'),
        {
          orderings: '[my.post.date desc]',
          lang: currentLocale.iso.toLowerCase(),
        }
      );

      const platformContent = (
        await $prismic.api.getSingle('platform', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        posts: optionPosts.results,
        platformContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
