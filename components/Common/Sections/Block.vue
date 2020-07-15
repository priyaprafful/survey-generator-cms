<template>
  <div
    class="first:pr-8 last:pl-8"
    :class="{ 'w-1/2': half, 'w-1/3': third, 'w-2/3': twothird }"
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
  },
};
</script>
