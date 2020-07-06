<template>
  <header class="sticky top-0 flex items-center bg-gray-500">
    <nav
      class="flex items-center justify-between w-full max-w-screen-xl m-auto py-8 px-12"
    >
      <nuxt-link :to="localePath('/')">
        <img
          class="h-8"
          src="../assets/img/sg-logo-color.png"
          alt="SurveyGenerator"
        />
      </nuxt-link>
      <ul class="flex">
        <li>
          <nuxt-link :to="localePath('vara-kunder')">
            {{ $t('menu.customers') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('priser')">
            {{ $t('menu.pricing') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('nyheter')">
            {{ $t('menu.news') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('kontakt')">
            {{ $t('menu.contact') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('logga-in')">
            {{ $t('menu.login') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('boka-demo')">
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
