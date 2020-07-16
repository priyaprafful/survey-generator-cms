<template>
  <Container>
    <div>
      <nuxt-link :to="localePath('nyheter')">
        back to list
      </nuxt-link>
    </div>

    <prismic-rich-text :field="post.data.title" />
    <prismic-rich-text :field="post.data.content" />
  </Container>
</template>

<script>
export default {
  name: 'Post',
  nuxtI18n: {
    paths: {
      sv: '/nyheter/:post',
      en: '/news/:post',
    },
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];
    const doc = await $prismic.api.getByUID('post', params.post, {
      lang: currentLocale.iso.toLowerCase(),
    });
    if (doc) {
      return {
        post: doc.results || doc,
        currentLocale,
      };
    } else {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  /* async asyncData({ $prismic, params, error, app }) {
    try {
      const currentLocale = app.i18n.locales.filter(
        (lang) => lang.code === app.i18n.locale
      )[0];

      // Query to get post content
      const post = (
        await $prismic.api.getByID('post', params.post, {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        document: post,
        currentLocale,
        formattedDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(post.date)),
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  }, */
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>
