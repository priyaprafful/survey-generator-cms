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
    size: {
      type: String,
      default: '1/2',
      validator(value) {
        return ['full', '1/2', '1/3', '2/3'].includes(value) !== -1;
      },
    },
    rowReverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [`w-${this.size}`]: true,
        'first:mr-8 last:ml-8': this.index % 2 === 0,
        'first:ml-8 last:mr-8': this.index % 2 !== 0,
      };
    },
  },
};
</script>
