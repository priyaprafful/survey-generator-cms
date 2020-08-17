<template>
  <div class="iconwrapper flex items-center mb-8 relative">
    <div
      class="iconshape"
      :class="{ circle: circle, square: square, triangle: triangle }"
    />
    <div class="z-10 w-10 h-10 ml-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    circle: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    triangle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.iconwrapper svg {
  width: 100%;
  height: 100%;
}

.iconshape {
  position: absolute;
  top: 0.5rem;
  left: 0;
  background: #dbf5fe;
  height: 2.5rem;
  width: 2.5rem;
}

.circle {
  border-radius: 9999px;
}

.square {
  border-radius: 4px;
}
</style>
