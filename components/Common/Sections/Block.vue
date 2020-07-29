<template>
  <div
    :class="{
      'w-full': full,
      'w-1/2': half,
      'w-1/3': onethird,
      'w-2/3': twothird,
      'first:mr-8 last:ml-8': !index % 2 !== 0,
      'first:ml-8 last:mr-8': index % 2 !== 0,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    index: {
      type: [Number, String],
      default: null,
    },
    full: {
      type: Boolean,
      default: null,
    },
    half: {
      type: Boolean,
      default: null,
    },
    onethird: {
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
