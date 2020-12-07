<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(customersContent.heading)"
      :subheading="$prismic.asText(customersContent.subheading)"
    />
    <CustomersIntro :data="customersContent" />
    <CustomersPosts :data="customersContent" :posts="posts" />
  </div>
</template>

<script>
import CustomersIntro from '@/components/Customers/CustomersIntro.vue';
import CustomersPosts from '@/components/Customers/CustomersPosts/CustomersPosts.vue';

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
    CustomersPosts,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get posts content to preview
      const customersPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'customers_post'),
        {
          orderings: '[document.last_publication_date desc]',
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
        posts: customersPosts.results,
        customersContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: this.$t('head_title.customers') + ' — SurveyGenerator',
    };
  },
};
</script>
