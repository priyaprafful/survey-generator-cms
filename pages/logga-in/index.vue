<template>
  <div>
    <PageHeader
      :heading="$prismic.asText(loginContent.heading)"
      :subheading="$prismic.asText(loginContent.subheading)"
    />
    <Container>
      <div class="flex">
        <Block third>
          <SGLogoNoText class="w-20 h-20" />
          <p>Sign in to your account</p>
          <p>Or contact us to for a free trial</p>
          <p>Email address</p>
          <input />
          <p>Password</p>
          <input />
          <input type="checkbox" />
          <p>Remember me</p>
          <p>Forgot your password?</p>
          <button>Sign in</button>
        </Block>
        <Block twothird class="relative">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </Block>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'LoggaIn',
  nuxtI18n: {
    paths: {
      sv: '/logga-in',
      en: '/login',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get blog home content
      const loginContent = (
        await $prismic.api.getSingle('login', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      // Returns data to be used in template
      return {
        loginContent,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
