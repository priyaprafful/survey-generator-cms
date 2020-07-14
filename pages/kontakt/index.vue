<template>
  <div>
    <PageTitle
      :title="$prismic.asText(contactContent.header)"
      :description="$prismic.asText(contactContent.subheader)"
    />
    <ContactInfo />
    <Team :data="contactContent" />
    <div>
      <p>Följ oss här</p>
      <p>LinkedIn</p>
      <p>Twitter</p>
      <p>Facebook</p>
    </div>
    <CTA />
  </div>
</template>

<script>
import ContactInfo from '@/components/Contact/ContactInfo.vue';
import Team from '@/components/Contact/Team.vue';
import CTA from '@/components/Common/CTA.vue';

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
    Team,
    CTA,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
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
};
</script>
