<template>
  <nuxt-link
    :to="localePath('boka-demo')"
    class="cta inline-flex items-center bg-yellow-1 rounded-lg font-bold text-blue-7"
    :class="{
      'py-3 px-6': small,
      'py-4 px-8': !small,
    }"
  >
    {{ text }}
    <ChevronRight v-if="!small" class="ml-3 h-almost3" />
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
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
