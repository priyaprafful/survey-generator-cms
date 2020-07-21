<template>
  <nuxt-link
    :to="localePath(to)"
    class="inline-flex items-center whitespace-no-wrap font-medium text-blue-6"
  >
    {{ text }}
    <ChevronRight class="ml-3 h-3 w-3 text-blue-6" />
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
    to: {
      type: String,
      default: '/',
    },
  },
};
</script>
