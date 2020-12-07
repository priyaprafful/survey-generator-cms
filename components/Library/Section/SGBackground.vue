<template>
  <section :class="classes">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        mainGradient: true,
        'border-b border-bluegray-2': this.border,
      };
    },
  },
};
</script>
