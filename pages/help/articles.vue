<template>
  <div>
    <p>Artiklar !!!</p>
    <div v-for="(post, i) in posts" :key="i">
      {{ post }}
    </div>
    <HelpCTA />
  </div>
</template>

<script>
import HelpCTA from '@/components/Help/HelpCTA.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/artiklar',
      en: '/help/articles',
    },
  },
  components: {
    HelpCTA,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get posts content to preview
      const helpArticlePosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'help_article_post'),
        {
          orderings: '[document.last_publication_date desc]',
          lang: currentLocale.iso.toLowerCase(),
        }
      );

      // Returns data to be used in template
      return {
        posts: helpArticlePosts.results,
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
