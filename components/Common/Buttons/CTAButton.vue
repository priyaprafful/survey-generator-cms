<template>
  <nuxt-link
    :to="localePath('boka-demo')"
    class="bg-yellow rounded-full"
    :class="{
      'py-3 px-6 font-normal': header,
      'py-4 px-8 font-bold': !header,
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
