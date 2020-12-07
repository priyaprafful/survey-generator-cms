<template>
  <div>
    <!-- Vue tag to add header component -->
    <SiteHeader />
    <div class="container">
      <h1>Page not found</h1>
      <p>Sorry we were unable to find the page you are looking for.</p>
      <p>
        <nuxt-link to="/" style="text-decoration: underline;">
          Back to home
        </nuxt-link>
      </p>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter';

export default {
  name: 'NotFound',
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>
