<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '2',
      validator(value) {
        return ['1', '2'].includes(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        'max-w-screen-xl m-auto': true,
        'py-12 px-12': this.size === '1',
        'py-24 px-12': this.size === '2',
      };
    },
  },
};
</script>
