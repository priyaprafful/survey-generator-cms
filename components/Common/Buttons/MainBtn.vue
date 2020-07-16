<template>
  <a :href="navigateTo" class="inline-block bg-blue-7 text-white p-6">
    <slot></slot>
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'MainBtn',
  props: {
    text: {
      type: String,
      default: null,
    },
    navigateTo: {
      type: String,
      default: null,
    },
  },
};
</script>
