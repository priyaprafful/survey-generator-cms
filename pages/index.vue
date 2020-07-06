<template>
  <section class="flex">
    <div>
      <h1>
        {{ $prismic.asText(homepageContent.headline) }}
      </h1>
      <p>
        {{ $prismic.asText(homepageContent.description) }}
      </p>
    </div>

    <div>
      <img class="w-1/2" :src="image" alt="SurveyGenerator" />
    </div>
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
        await $prismic.api.getSingle('home', {
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
