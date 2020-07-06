<template>
  <header class="sticky top-0 bg-transparent z-50">
    <nav class="max-w-screen-xl m-auto py-8 px-12">
      <ul class="flex items-center justify-between">
        <li>
          <nuxt-link :to="localePath('/')">
            <img
              class="h-8"
              src="../assets/img/sg-logo-color.png"
              alt="SurveyGenerator"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('vara-kunder')">
            {{ $t('menu.customers') }}
          </nuxt-link>
          <nuxt-link :to="localePath('priser')">
            {{ $t('menu.pricing') }}
          </nuxt-link>
          <nuxt-link :to="localePath('nyheter')">
            {{ $t('menu.news') }}
          </nuxt-link>
          <nuxt-link :to="localePath('kontakt')">
            {{ $t('menu.contact') }}
          </nuxt-link>
          <nuxt-link :to="localePath('logga-in')">
            {{ $t('menu.login') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('boka-demo')" class="bg-yellow uppercase">
            {{ $t('menu.book_demo') }}
          </nuxt-link>
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

<style lang="sass" scoped>
/** nav
  padding-left: calc(5% + 18px)
  padding-right: calc(5% + 18px) **/
</style>
