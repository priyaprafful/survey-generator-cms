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

        <prismic-rich-text :field="post.data.post_description" />
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
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>

<style>
.article a {
  background: linear-gradient(to bottom, #bbdff1 0%, #43a8d8 100%);
  color: inherit;
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 3px 3px;
  text-decoration: none;
  transition: background-size 0.5s, color 0.5s;
}

.article a:hover {
  background-size: 3px 50px;
  color: #fff;
}
</style>
