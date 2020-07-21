<template>
  <component
    :is="global ? 'a' : 'nuxt-link'"
    :to="global ? null : localePath(to)"
    :href="global ? to : localePath(to)"
    class="inline-flex items-center justify-center px-5 py-3 whitespace-no-wrap shadow border border-transparent leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out"
    :class="{
      'bg-white hover:bg-bluegray-3 text-blue-9': white,
      'bg-blue-4 hover:bg-blue-3 text-white': !white,
    }"
  >
    {{ text }}
    <ChevronRight v-if="chevron" class="ml-3 h-3 w-3" />
  </component>
</template>

<script>
export default {
  name: 'MainBtn',
  props: {
    text: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: '/',
    },
    global: {
      type: Boolean,
      default: false,
    },
    chevron: {
      type: Boolean,
      default: true,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
