<template>
  <header class="sticky top-0 bg-transparent z-50">
    <nav class="max-w-screen-xl m-auto py-4 px-12">
      <ul class="flex items-center justify-between">
        <li>
          <nuxt-link :to="localePath('/')">
            <img
              class="h-8 logo"
              src="../assets/img/sg-logo-color.png"
              alt="SurveyGenerator"
            />
          </nuxt-link>
        </li>
        <li class="flex li-middle">
          <nuxt-link :to="localePath('tjanster')" class="py-2 px-4">
            {{ $t('menu.services') }}
          </nuxt-link>
          <nuxt-link :to="localePath('vara-kunder')" class="py-2 px-4">
            {{ $t('menu.customers') }}
          </nuxt-link>
          <nuxt-link :to="localePath('priser')" class="py-2 px-4">
            {{ $t('menu.pricing') }}
          </nuxt-link>
          <nuxt-link :to="localePath('nyheter')" class="py-2 px-4">
            {{ $t('menu.news') }}
          </nuxt-link>
          <nuxt-link :to="localePath('kontakt')" class="py-2 px-4">
            {{ $t('menu.contact') }}
          </nuxt-link>
        </li>
        <li class="flex items-center">
          <nuxt-link :to="localePath('logga-in')" class="py-2 px-4">
            {{ $t('menu.login') }}
          </nuxt-link>
          <CTAButton header :text="$t('menu.book_demo')" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.logo {
  transition: filter 0.2s;
  &:hover {
    filter: opacity(80%);
    transition: filter 0.2s;
  }
}

.li-middle {
  .nuxt-link-active {
    font-weight: bold;
  }
}
</style>
