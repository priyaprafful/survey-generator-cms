<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(customersContent.heading)"
      :subheading="$prismic.asText(customersContent.subheading)"
    />
    <CustomersIntro />
    <Container>
      <div class="flex flex-wrap">
        <article
          v-for="post in posts"
          :key="post.id"
          :post="post"
          class="flex flex-col w-1/2"
        >
          <StoryWidget :post="post" />
        </article>
      </div>
    </Container>
  </div>
</template>

<script>
import CustomersIntro from '@/components/Customers/CustomersIntro.vue';
import StoryWidget from '@/components/Customers/StoryWidget.vue';

export default {
  name: 'Kunder',
  nuxtI18n: {
    paths: {
      sv: '/kunder',
      en: '/customers',
    },
  },
  components: {
    CustomersIntro,
    StoryWidget,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get posts content to preview
      const customerPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'customer_story'),
        {
          orderings: '[my.post.date desc]',
          lang: currentLocale.iso.toLowerCase(),
        }
      );

      const customersContent = (
        await $prismic.api.getSingle('customers', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        posts: customerPosts.results,
        customersContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
