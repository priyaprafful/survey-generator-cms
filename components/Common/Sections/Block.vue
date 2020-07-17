<template>
  <div
    :class="{
      'w-1/2': half,
      'w-1/3': third,
      'w-2/3': twothird,
      'first:mr-8 last:ml-8': !rowReverse,
      'first:ml-8 last:mr-8': rowReverse,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    half: {
      type: Boolean,
      default: null,
    },
    third: {
      type: Boolean,
      default: null,
    },
    twothird: {
      type: Boolean,
      default: null,
    },
    rowReverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
