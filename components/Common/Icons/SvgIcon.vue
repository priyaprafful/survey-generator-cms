<template>
  <svg class="icon" :class="{ sm: sm, md: !sm && !lg, lg: lg }">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
svg.icon {
  fill: currentColor;
}

svg.sm {
  height: 0.65rem;
  width: 0.65rem;
  min-width: 0.65rem;
  min-height: 0.65rem;
}

svg.md {
  height: 0.75rem;
  width: 0.75rem;
  min-width: 0.75rem;
  min-height: 0.75rem;
}

svg.lg {
  height: 1rem;
  width: 1rem;
  min-width: 1rem;
  min-height: 1rem;
}
</style>
