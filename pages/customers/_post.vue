<template>
  <div class="bg-white">
    <Container>
      <article class="max-w-screen-sm m-auto leading-loose">
        <div class="mb-10">
          <nuxt-link
            :to="localePath('customers')"
            class="inline-flex items-center text-blue-6 underline"
          >
            <svg-icon icon="chevron" class="transform rotate-180" />
            <span class="ml-3">Tillbaka till kunder</span>
          </nuxt-link>
        </div>

        <h2 class="mb-6">
          {{ $prismic.asText(post.data.company_name) }}
          <span v-if="post.data.company_type.length > 0">
            ― {{ $prismic.asText(post.data.company_type) }}
          </span>
        </h2>

        <div class="relative mb-6">
          <prismic-image
            :field="post.data.company_image"
            class="w-full h-64 object-cover"
          />

          <div
            class="absolute bottom-0 left-0 ml-2 mb-2 bg-white inline-flex h-20 w-20 p-3 shadow-card rounded"
          >
            <prismic-image :field="post.data.company_logo" class="w-full" />
          </div>
        </div>

        <prismic-rich-text :field="post.data.intro" class="mb-10" />

        <blockquote class="text-sm mb-10 border-l-4 border-bluegray-2 relative">
          <div class="flex mx-6">
            <img
              src="@/assets/svgs/quote.svg"
              alt="Quote"
              class="absolute top-0 left-0 ml-6 transform -translate-x-3 -translate-y-2 w-6"
            />
            <div class="z-10">
              <prismic-rich-text :field="post.data.quote" class="mb-2" />
              <prismic-rich-text
                :field="post.data.quote_name_and_role"
                class="font-semibold"
              />
            </div>
          </div>
        </blockquote>

        <div
          v-for="(content, index) in post.data.contents"
          :key="index"
          class="rich-text mb-10"
        >
          <prismic-rich-text :field="content.title" />
          <prismic-rich-text :field="content.description" />
        </div>
      </article>
    </Container>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/kunder/:post',
      en: '/customers/:post',
    },
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];
    const doc = await $prismic.api.getByUID('customers_post', params.post, {
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
      title:
        this.$prismic.asText(this.post.data.company_name) +
        ' — SurveyGenerator',
    };
  },
};
</script>
