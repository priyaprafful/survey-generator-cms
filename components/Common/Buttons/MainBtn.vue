<template>
  <component
    :is="global ? 'a' : 'nuxt-link'"
    :to="global ? null : localePath(to)"
    :href="global ? to : localePath(to)"
    class="inline-flex items-center whitespace-no-wrap border border-transparent leading-normal font-medium rounded-md transition duration-150 ease-in-out"
    :class="{
      'justify-center px-5 py-3': !leftAligned,
      'justify-start px-0 py-3 ': leftAligned,
    }"
  >
    <span>{{ text }}</span>
    <ChevronRight v-if="chevron" class="h-3 w-3 ml-3" />
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
    leftAligned: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
