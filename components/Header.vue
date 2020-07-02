<template>
  <header class="bg-gray-500">
    <nuxt-link :to="localePath('/')">Home</nuxt-link>

    <p
      v-if="$store.state.menu === 'Please create a menu document'"
      class="logo"
    >
      {{ $store.state.menu }}
    </p>
    <nav>
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <!-- <prismic-link :field="menuLink.link">{{
            $prismic.asText(menuLink.label)
          }}</prismic-link> -->

          <nuxt-link :to="localePath(menuLink.link.uid)">
            {{ $prismic.asText(menuLink.label) }}
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
.footer
  padding: 40px 0
  max-width: 700px
  margin: 0 auto
  text-align: center
  border-top: 1px solid #DADADA

.logo
  width: 100px
</style>
