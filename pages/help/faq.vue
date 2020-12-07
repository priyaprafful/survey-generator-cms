<template>
  <div>
    Vanliga frågor !!!
    <dl>
      <div
        v-for="(faq, index) in helpContent.faqs"
        :key="index"
        class="mt-8 border-t border-bluegray-3 pt-6 md:grid md:grid-cols-12 md:gap-8"
      >
        <dt class="font-medium md:col-span-5">
          <prismic-rich-text :field="faq.question" />
        </dt>
        <dd class="mt-2 md:mt-0 md:col-span-7">
          <prismic-rich-text
            :field="faq.answer"
            class="faq rich-text text-blue-5 leading-relaxed"
          />
        </dd>
      </div>
    </dl>

    <HelpCTA />
  </div>
</template>

<script>
import HelpCTA from '@/components/Help/HelpCTA.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/vanliga-fragor',
      en: '/help/faq',
    },
  },
  components: {
    HelpCTA,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const helpContent = (
        await $prismic.api.getSingle('help', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        helpContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: this.$t('menu.help') + ' — Survey Generator',
    };
  },
};
</script>

<style>
.faq li {
  list-style-type: square;
  list-style-position: inside;
  margin-bottom: 1rem;
}

.faq li:last-child {
  margin-bottom: 0;
}
</style>
