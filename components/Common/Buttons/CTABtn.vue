<template>
  <nuxt-link
    :to="localePath('boka-demo')"
    class="cta inline-flex items-center whitespace-no-wrap bg-yellow-2 hover:bg-yellow-1 rounded-md font-medium text-blue-7 transition duration-150 ease-in-out"
    :class="{
      'py-3 px-5': small,
      'py-4 px-6 shadow': !small,
    }"
  >
    <span class="mr-3">{{ $t('menu.book_demo') }}</span>
    <svg-icon v-if="!small" icon="chevron" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'CTABtn',
  props: {
    text: {
      type: String,
      default: null,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
