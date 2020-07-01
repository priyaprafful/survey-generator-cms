<template>
  <section class="home">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>

    <div
      class="blog-avatar"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
    <!-- Template for page title -->
    <h1 class="blog-title">
      {{ $prismic.asText(homepageContent.headline) }}
    </h1>
    <!-- Template for page description -->
    <p class="blog-description">
      {{ $prismic.asText(homepageContent.description) }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const homepageContent = (
        await $prismic.api.getSingle('blog_home', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        homepageContent,
        image: homepageContent.image.url,
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

<style lang="sass" scoped>
.home
  max-width: 700px
  margin: auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    border-bottom: 1px solid #DADADA
</style>
