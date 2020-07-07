<template>
  <button class="bg-yellow p-4 rounded-full">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CTAButton',
  props: {
    text: {
      type: String,
      default: null,
    },
  },
};
</script>
