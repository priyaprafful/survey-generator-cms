<template>
  <nuxt-link
    :to="localePath('boka-demo')"
    class="cta flex items-center bg-yellow rounded-lg font-bold text-blue-dark"
    :class="{
      'py-3 px-6': header,
      'py-4 px-8': !header,
    }"
  >
    {{ text }}
    <ChevronRight v-if="!header" class="ml-3 h-almost3" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'CTABtn',
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
