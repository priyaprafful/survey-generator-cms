<template>
  <header
    class="sticky top-0 border-b z-50 transition duration-500"
    :class="{
      'bg-bluegray-1': homepage,
      'bg-blue-9 text-white border-white': !homepage,
      'border-bluegray-1': homepage && scrollPosition < 100,
      'border-bluegray-2': homepage && scrollPosition >= 100,
    }"
  >
    <Navigation :homepage="homepage" />
  </header>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: 'Header',
  components: {
    Navigation,
  },
  props: {
    homepage: {
      type: Boolean,
      default: null,
    },
  },
  data: () => ({
    scrollPosition: null,
  }),
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = document.scrollingElement.scrollTop;

      /* const width = window.matchMedia('(min-width: 768px)'); */
    },
  },
};
</script>
