<template>
  <div class="bg-white">
    <Container>
      <article class="max-w-screen-sm m-auto leading-loose">
        <div class="mb-10">
          <nuxt-link
            :to="localePath('help')"
            class="inline-flex items-center text-blue-6 underline"
          >
            <svg-icon icon="chevron" class="transform rotate-180" />
            <span class="ml-3">Tillbaka till x</span>
          </nuxt-link>
        </div>

        <prismic-rich-text :field="post.data.title" class="text-sm mb-6" />
        <prismic-rich-text :field="post.data.content" class="rich-text" />
      </article>
    </Container>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/artiklar/:postArticle',
      en: '/help/articles/:postArticle',
    },
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];
    const result = await $prismic.api.getByUID(
      'help_article_post',
      params.postArticle,
      {
        lang: currentLocale.iso.toLowerCase(),
      }
    );

    if (result) {
      return {
        post: result.results || result,
        currentLocale,
      };
    } else {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
