<template>
  <div class="page-content">
    <article class="post">
      <header class="post__header">
        <prismic-rich-text id="js-title-post" :field="post.data.title" />
        <time
          v-if="post.first_publication_date"
          class="post__date"
          :datetime="post.first_publication_date"
        >
          {{
            new Date(post.first_publication_date).toLocaleDateString(
              currentLocale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )
          }}
        </time>
      </header>

      <prismic-image
        v-if="post.data && post.data.image"
        :field="post.data.image"
        sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
      />

      <div class="post__content">
        <prismic-rich-text :field="post.data.content" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
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

<style></style>
