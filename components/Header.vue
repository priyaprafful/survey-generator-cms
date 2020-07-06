<template>
  <header class="flex items-center bg-gray-500 h-24">
    <nav class="flex items-center">
      <nuxt-link :to="localePath('/')">
        <img class="h-8" src="../assets/img/sg-logo-color.svg" alt="Prismic" />
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
