<template>
  <component
    :is="global ? 'a' : 'nuxt-link'"
    :to="global ? null : localePath(to)"
    :href="global ? to : localePath(to)"
    class="main-btn inline-flex items-center whitespace-no-wrap border border-transparent leading-normal font-medium rounded-md transition duration-150 ease-in-out"
    :class="{
      'justify-center px-5 py-3': !leftAligned,
      'justify-start px-0 py-3 ': leftAligned,
    }"
  >
    <span class="mr-3">{{ text }}</span>
    <svg-icon v-if="chevron" icon="chevron" sm class="HoverArrow" />
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

<style lang="scss" scoped>
.HoverArrow {
  position: relative;
  top: 1px;
  transform: translateX(0);
  transition: all 150ms;
}

.main-btn {
  &:hover {
    .HoverArrow {
      transform: translateX(3px);
    }
  }
}
</style>
