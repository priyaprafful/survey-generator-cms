<template>
  <svg class="icon" :class="{ md: !lg, lg: lg, 'icon-spin': spin }">
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

svg.icon-spin {
  animation: icon-spin 2s infinite linear;
}

@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
