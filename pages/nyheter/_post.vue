<template>
  <div>
    <div class="bg-white">
      <Container>
        <article class="max-w-screen-sm m-auto leading-loose">
          <div class="mb-10">
            <nuxt-link
              :to="localePath('nyheter')"
              class="inline-flex items-center text-blue-6 underline"
            >
              <ChevronRight class="mr-3 h-3 w-3 transform rotate-180" />
              Tillbaka till nyheter
            </nuxt-link>
          </div>

          <prismic-rich-text :field="post.data.title" class="text-sm mb-6" />
          <prismic-rich-text :field="post.data.content" class="article" />
        </article>
      </Container>
    </div>

    <CTA />
  </div>
</template>

<script>
import CTA from '@/components/Common/CTA.vue';

export default {
  name: 'Post',
  nuxtI18n: {
    paths: {
      sv: '/nyheter/:post',
      en: '/news/:post',
    },
  },
  components: {
    CTA,
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
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>

<style>
.article .block-img img {
  margin: auto;
}
</style>
