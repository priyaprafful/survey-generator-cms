<template>
  <div class="bg-white">
    <Container>
      <article class="max-w-screen-sm m-auto leading-loose">
        <div class="mb-10">
          <nuxt-link
            :to="localePath('verktyget')"
            class="inline-flex items-center text-blue-6 underline"
          >
            <ChevronRight class="mr-3 h-3 w-3 transform rotate-180" />
            Tillbaka till verktyget
          </nuxt-link>
        </div>

        <prismic-rich-text
          :field="post.data.post_description"
          class="option rich-text"
        />
      </article>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Option',
  nuxtI18n: {
    paths: {
      sv: '/verktyget/:post',
      en: '/platform/:post',
    },
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];
    const doc = await $prismic.api.getByUID('survey_tool_option', params.post, {
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

<style>
.option h3 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}
</style>
