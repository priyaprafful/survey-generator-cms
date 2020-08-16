<template>
  <!-- <div
    class="iconcircle flex items-center justify-center bg-white rounded-full p-5 w-16 h-16 shadow-post mb-6"
  >
    <slot></slot>
  </div> -->
  <div
    class="iconcircle flex items-center justify-center p-2 w-12 h-12 mb-8 relative"
  >
    <div :class="{ circle: circle, square: square, triangle: triangle }" />
    <div class="z-10">
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
.iconcircle {
  min-width: 3rem;
  min-height: 3rem;
}

.circle {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #dbf5fe;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
}

.square {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #dbf5fe;
  height: 2rem;
  width: 2rem;
  border-radius: 4px;
}
</style>
