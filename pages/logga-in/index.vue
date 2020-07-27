<template>
  <div>
    <!-- <PageHeader
      :heading="$prismic.asText(loginContent.heading)"
      :subheading="$prismic.asText(loginContent.subheading)"
    /> -->
    <Container>
      <div class="flex">
        <Block onethird class="flex flex-col">
          <SGLogoNoText class="w-12 h-12 mx-auto mb-6" />

          <h2 class="mb-6">{{ $t('login.heading') }}</h2>

          <form>
            <div class="flex flex-col mb-6">
              <label for="email" class="text-sm font-medium mb-1">
                {{ $t('login.email') }}
              </label>
              <input
                id="email"
                type="email"
                required
                class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
              />
            </div>

            <div class="flex flex-col mb-6">
              <label for="password" class="text-sm font-medium mb-1">
                {{ $t('login.password') }}
              </label>
              <input
                id="password"
                type="password"
                required
                class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
              />
            </div>

            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-blue-2 transition duration-150 ease-in-out"
                />
                <label for="remember_me" class="ml-2 block text-sm leading-5">
                  {{ $t('login.remember_me') }}
                </label>
              </div>

              <div class="text-sm leading-5">
                <a href="#" class="font-medium text-blue-4">
                  {{ $t('login.forgot_pw') }}
                </a>
              </div>
            </div>

            <MainBtn :text="$t('login.sign_in')" class="w-full" />
          </form>
        </Block>

        <Block twothird class="relative bg-blue-9">
          <div class="abstract bg-blue-9" />
        </Block>
      </div>
    </Container>
  </div>
</template>

<script>
import SGLogoNoText from '@/components/Common/SVG/SGLogoNoText.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/logga-in',
      en: '/login',
    },
  },
  components: {
    SGLogoNoText,
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
