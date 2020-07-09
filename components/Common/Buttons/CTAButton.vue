<template>
  <nuxt-link
    :to="localePath('boka-demo')"
    class="flex items-center bg-yellow rounded-lg font-bold"
    :class="{
      'py-3 px-6': header,
      'py-4 px-8': !header,
    }"
  >
    {{ text }}
    <ChevronRight v-if="!header" class="ml-2 chevron" />
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

<style lang="scss" scoped>
.chevron {
  width: 0.35rem;
}
</style>
