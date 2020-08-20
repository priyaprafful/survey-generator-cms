<template>
  <div class="flex relative">
    <div
      class="dots absolute top-0 left-0 right-0 bottom-0"
      :class="{
        'mr-10 mt-10': !index % 2 !== 0,
        'ml-10 mt-10': index % 2 !== 0,
      }"
    />
    <div
      class="w-full z-10"
      :class="{
        'ml-10 mb-10': !index % 2 !== 0,
        'mr-10 mb-10': index % 2 !== 0,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: [Number, String],
      default: null,
    },
  },
};
</script>

<style scoped>
.dots {
  background-image: radial-gradient(#aad7ed 1px, transparent 2px);
  background-size: calc(20 * 1px) calc(20 * 1px);
}
</style>
