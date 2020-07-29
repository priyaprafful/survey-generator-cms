<template>
  <div
    class="flex leading-relaxed mb-24 last:mb-0"
    :class="{ 'flex-row-reverse': index % 2 !== 0 }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlockWrapper',
  props: {
    index: {
      type: [Number, String],
      default: null,
    },
  },
};
</script>
