<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(privacyContent.heading)"
      :subheading="$prismic.asText(privacyContent.subheading)"
    />

    <Container>
      <article class="max-w-screen-sm m-auto flex flex-col article">
        <time
          :datetime="privacyContent.last_updated"
          class="font-medium text-sm mb-6"
        >
          Senast uppdaterad:

          {{
            new Date(privacyContent.last_updated).toLocaleDateString(
              $i18n.locale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )
          }}
        </time>

        <div
          v-for="(section, index) in privacyContent.sections"
          :key="index"
          class="mb-6 leading-loose"
        >
          <prismic-rich-text
            v-if="section.section_title"
            :field="section.section_title"
            class="privacy-content mb-4"
          />
          <prismic-rich-text
            :field="section.section_content"
            class="privacy-content"
          />
        </div>
      </article>
    </Container>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/integritetspolicy',
      en: '/privacy-policy',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const privacyContent = (
        await $prismic.api.getSingle('privacy-policy', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        privacyContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>

<style>
.privacy-content {
  display: flex;
  flex-direction: column;
}

.privacy-content p,
.privacy-content h3,
.privacy-content li {
  margin-bottom: 0.75rem;
}

.privacy-content h2 {
  font-size: 1.5rem;
}

.privacy-content h3 {
  font-size: 1.125rem;
}

.privacy-content h4 {
  font-size: 1rem;
  font-family: 'Gilroy';
  font-weight: bolder;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.privacy-content li {
  font-size: 0.875rem;
  list-style-type: square;
  list-style-position: inside;
}
</style>
