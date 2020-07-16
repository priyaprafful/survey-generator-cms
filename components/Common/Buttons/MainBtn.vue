<template>
  <a
    :href="navigateTo"
    class="inline-flex items-center bg-blue-7 text-white py-4 px-6 rounded-lg"
  >
    <slot></slot>
    {{ text }}
  </a>
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

<style lang="scss" scoped>
svg {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
</style>
