<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(platformContent.heading)"
      :subheading="$prismic.asText(platformContent.subheading)"
    />
    <PlatformIntro :data="platformContent" />
    <PlatformOptions :data="platformContent" :posts="posts" />
  </div>
</template>

<script>
import PlatformIntro from '@/components/Platform/PlatformIntro.vue';
import PlatformOptions from '@/components/Platform/PlatformOptions.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/verktyget',
      en: '/platform',
    },
  },
  components: {
    PlatformIntro,
    PlatformOptions,
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
  head() {
    return {
      title: this.$t('head_title.platform') + ' — SurveyGenerator',
    };
  },
};
</script>
