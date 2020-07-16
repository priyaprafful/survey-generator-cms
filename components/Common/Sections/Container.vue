<template>
  <div class="max-w-screen-xl m-auto py-24 px-12">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    full: {
      type: Boolean,
      default: null,
    },
    half: {
      type: Boolean,
      default: null,
    },
  },
};
</script>
