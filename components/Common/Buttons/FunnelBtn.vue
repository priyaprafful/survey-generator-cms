<template>
  <nuxt-link
    :to="localePath(navigateTo)"
    class="cta flex items-center bg-yellow rounded-lg font-bold text-blue-darker"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'FunnelBtn',
  props: {
    text: {
      type: String,
      default: null,
    },
    header: {
      type: Boolean,
      default: false,
    },
    navigateTo: {
      type: String,
      default: null,
    },
  },
};
</script>
