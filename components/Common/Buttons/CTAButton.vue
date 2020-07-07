<template>
  <nuxt-link
    :to="localePath('boka-demo')"
    class="bg-yellow rounded-lg font-bold"
    :class="{
      'py-3 px-6': header,
      'py-4 px-8': !header,
    }"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'CTAButton',
  props: {
    text: {
      type: String,
      default: null,
    },
    header: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
