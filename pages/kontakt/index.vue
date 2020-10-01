<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(contactContent.heading)"
      :subheading="$prismic.asText(contactContent.subheading)"
    />
    <ContactInfo :data="contactContent" />
    <About :data="contactContent" />
    <Team :data="contactContent" />
  </div>
</template>

<script>
import ContactInfo from '@/components/Contact/ContactInfo.vue';
import About from '@/components/Contact/About.vue';
import Team from '@/components/Contact/Team.vue';

export default {
  name: 'Kontakt',
  nuxtI18n: {
    paths: {
      sv: '/kontakt',
      en: '/contact',
    },
  },
  components: {
    ContactInfo,
    About,
    Team,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      const contactContent = (
        await $prismic.api.getSingle('contact', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        contactContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: this.$t('head_title.contact') + ' — SurveyGenerator',
    };
  },
};
</script>
