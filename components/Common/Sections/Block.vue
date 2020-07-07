<template>
  <div :class="{ 'w-full': full, 'w-1/2': half, 'pr-6': left, 'pl-6': right }">
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
