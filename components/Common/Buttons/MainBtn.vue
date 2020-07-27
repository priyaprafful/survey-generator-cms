<template>
  <component
    :is="global ? 'a' : 'nuxt-link'"
    :to="global ? null : localePath(to)"
    :href="global ? to : localePath(to)"
    class="group inline-flex items-center whitespace-no-wrap border border-transparent leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out"
    :class="{
      'bg-white hover:bg-bluegray-3 text-blue-9 shadow': white,
      'bg-blue-4 hover:bg-blue-3 text-white shadow': !white && !funnel,
      'bg-transparent text-blue-6': funnel,
      'justify-center px-5 py-3': !leftAligned,
      'justify-start px-0 py-3 ': leftAligned,
    }"
  >
    <span>{{ text }}</span>
    <ChevronRight
      v-if="chevron"
      class="h-3 w-3 ml-3 transition-spacing group-hover:ml-4 duration-150"
    />
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
    funnel: {
      type: Boolean,
      default: false,
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
    leftAligned: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
