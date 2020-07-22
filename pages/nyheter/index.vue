<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(newsContent.heading)"
      :subheading="$prismic.asText(newsContent.subheading)"
    />

    <News :data="newsContent" :posts="posts" />
  </div>
</template>

<script>
import News from '@/components/News/News.vue';

export default {
  name: 'Nyheter',
  nuxtI18n: {
    paths: {
      sv: '/nyheter',
      en: '/news',
    },
  },
  components: {
    News,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        {
          orderings: '[my.post.date desc]',
          lang: currentLocale.iso.toLowerCase(),
        }
      );

      const newsContent = (
        await $prismic.api.getSingle('news', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        posts: blogPosts.results,
        newsContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>
