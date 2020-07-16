<template>
  <nuxt-link
    :to="localePath(navigateTo)"
    class="inline-flex items-center rounded-full bg-blue-7 border border-white py-1 px-4"
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
    navigateTo: {
      type: String,
      default: null,
    },
  },
};
</script>
