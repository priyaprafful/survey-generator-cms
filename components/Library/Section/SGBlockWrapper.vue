<template>
  <div :class="classes">
    <slot />
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
  computed: {
    classes() {
      return {
        'flex leading-relaxed mb-24 last:mb-0': true,
        'flex-row-reverse': this.index % 2 !== 0,
      };
    },
  },
};
</script>
