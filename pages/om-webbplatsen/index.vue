<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(cookieContent.heading)"
      :subheading="$prismic.asText(cookieContent.subheading)"
    />

    <Container>
      <article class="max-w-screen-sm m-auto flex flex-col article">
        <time
          :datetime="cookieContent.last_updated"
          class="font-medium text-sm mb-6"
        >
          Senast uppdaterad:

          {{
            new Date(cookieContent.last_updated).toLocaleDateString(
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
          v-for="(section, index) in cookieContent.sections"
          :key="index"
          class="mb-6 leading-loose"
        >
          <prismic-rich-text
            v-if="section.section_title"
            :field="section.section_title"
            class="policy-content mb-4"
          />
          <prismic-rich-text
            :field="section.section_content"
            class="policy-content rich-text"
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
      sv: '/om-webbplatsen',
      en: '/cookie-policy',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const cookieContent = (
        await $prismic.api.getSingle('cookie-policy', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        cookieContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
