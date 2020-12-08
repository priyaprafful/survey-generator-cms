<template>
  <div>
    <SiteHeader :menu="menuContent" />
    <p>POST!!!</p>
    <SiteFooter :alt-langs="altLangs" :content="footerContent" />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter';

export default {
  name: 'Post',
  components: {
    SiteHeader,
    SiteFooter
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Languages from API response
      const languages = $prismic.api.data.languages;

      // Setting Master language as default language option
      let lang = { lang: languages[0].id };

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        lang = { lang: params.lang };
      }

      // Query to get post content
      const post = await $prismic.api.getByUID('post', params.uid, lang);
      const menuContent = (await $prismic.api.getSingle('top_menu', lang)).data;
      const footerContent = (await $prismic.api.getSingle('footer_menu', lang))
        .data;

      return {
        document: post,
        altLangs: post.alternate_languages,
        menuContent,
        footerContent
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
      title: 'Survey Generator'
    };
  }
};
</script>
