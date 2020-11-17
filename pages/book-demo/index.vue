<template>
  <Wrapper>
    <Booking :data="bookingContent" />
    <Brands />
  </Wrapper>
</template>

<script>
import Booking from '@/components/Booking/Booking.vue';
import Brands from '@/components/Booking/Brands.vue';

export default {
  components: {
    Booking,
    Brands,
  },
  layout: 'exclusive',
  nuxtI18n: {
    paths: {
      sv: '/boka-demo',
      en: '/book-demo',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const bookingContent = (
        await $prismic.api.getSingle('book_demo', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        bookingContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: this.$t('head_title.book_demo') + ' — SurveyGenerator',
    };
  },
};
</script>
