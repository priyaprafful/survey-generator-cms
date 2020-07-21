<template>
  <component
    :is="global ? 'a' : 'nuxt-link'"
    :to="global ? null : localePath(navigateTo)"
    :href="global ? navigateTo : localePath(navigateTo)"
    class="inline-flex items-center justify-center px-5 py-3 shadow border border-transparent leading-6 font-medium rounded-md text-white bg-blue-4 hover:bg-blue-3 focus:outline-none focus:border-blue-7 transition duration-150 ease-in-out"
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
    navigateTo: {
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
  },
};
</script>
