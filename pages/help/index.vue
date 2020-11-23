<template>
  <SGBackground>
    <PageHeader
      :heading="$prismic.asText(helpContent.heading)"
      :subheading="$prismic.asText(helpContent.subheading)"
    />
    <HelpBoxes />
    <HelpCategories
      :categories="helpContent.category"
      :posts="category_posts"
    />
    <HelpFeaturedArticles />
    <HelpCTA />
  </SGBackground>
</template>

<script>
import HelpBoxes from '@/components/Help/HelpBoxes.vue';
import HelpCategories from '@/components/Help/HelpCategories.vue';
import HelpFeaturedArticles from '@/components/Help/HelpFeaturedArticles.vue';
import HelpCTA from '@/components/Help/HelpCTA.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen',
      en: '/help',
    },
  },
  components: {
    HelpBoxes,
    HelpCategories,
    HelpFeaturedArticles,
    HelpCTA,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get posts content to preview
      const categoryPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'help_category_post'),
        {
          orderings: '[document.last_publication_date desc]',
          lang: currentLocale.iso.toLowerCase(),
        }
      );

      const helpContent = (
        await $prismic.api.getSingle('help', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        category_posts: categoryPosts.results,
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
