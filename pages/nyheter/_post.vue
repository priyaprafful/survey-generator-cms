<template>
  <div class="bg-white">
    <Container>
      <article class="max-w-screen-sm m-auto leading-loose">
        <div class="mb-10">
          <nuxt-link
            :to="localePath('nyheter')"
            class="inline-flex items-center text-blue-6 underline"
          >
            <svg-icon icon="chevron" class="transform rotate-180" />
            <span class="ml-3">Tillbaka till nyheter</span>
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
  head() {
    return {
      title: this.$prismic.asText(this.post.data.title) + ' — SurveyGenerator',
    };
  },
};
</script>
