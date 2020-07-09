<template>
  <div
    :class="{ 'w-full': full, 'w-1/2': half, 'pr-12': left, 'pl-12': right }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    full: {
      type: Boolean,
      default: null,
    },
    half: {
      type: Boolean,
      default: null,
    },
    left: {
      type: Boolean,
      default: null,
    },
    right: {
      type: Boolean,
      default: null,
    },
  },
};
</script>
