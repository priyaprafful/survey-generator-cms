<template>
  <div>
    <SiteHeader home :menu="menuContent" :alt-langs="altLangs" />
    <BaseSlices :slices="slices.body" />
    <SiteCTA :content="ctaContent" />
    <SiteFooter :alt-langs="altLangs" :content="footerContent" />
    <client-only>
      <SiteCookies :content="cookiesContent" />
    </client-only>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter';
import SiteCTA from '~/components/SiteCTA';
import SiteCookies from '~/components/SiteCookies';
import BaseSlices from '~/components/Library/BaseSlices.vue';

export default {
  name: 'Home',
  components: {
    SiteHeader,
    SiteFooter,
    SiteCTA,
    SiteCookies,
    BaseSlices
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

      // Query to get the home page content
      const result = await $prismic.api.getSingle('homepage', lang);
      const menuContent = (await $prismic.api.getSingle('top_menu', lang)).data;
      const footerContent = (await $prismic.api.getSingle('footer_menu', lang))
        .data;
      const ctaContent = (await $prismic.api.getSingle('cta', lang)).data;
      const cookiesContent = (await $prismic.api.getSingle('cookies', lang))
        .data;

      return {
        // Page content, set slices as variable
        slices: result.data,

        // Menu
        altLangs: result.alternate_languages,
        menuContent,
        footerContent,
        ctaContent,
        cookiesContent
      };
    } catch (e) {
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
