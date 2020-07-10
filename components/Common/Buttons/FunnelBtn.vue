<template>
  <nuxt-link
    :to="localePath(navigateTo)"
    class="flex items-center rounded-full border border-white py-1 px-4"
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
