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
  name: 'MainBtn',
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
