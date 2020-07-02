<template>
  <header class="bg-gray-500">
    <nuxt-link :to="localePath('/')">Home</nuxt-link>
    <nav>
      <ul>
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
          <nuxt-link :to="localePath('logga-in')">
            {{ $t('menu.login') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('kontakt')">
            {{ $t('menu.contact') }}
          </nuxt-link>
        </li>
        <li>
          Boka demo
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
.footer
  padding: 40px 0
  max-width: 700px
  margin: 0 auto
  text-align: center
  border-top: 1px solid #DADADA

.logo
  width: 100px
</style>
