<template>
  <header
    class="sticky top-0 border-b border-transparent z-50 transition ease-in duration-500"
    :class="{
      'bg-mainBg': homepage,
      'border-blue-darker': homepage && scrollPosition >= 100,
      'bg-blue-darker text-white border-b border-white': !homepage,
    }"
  >
    <nav class="max-w-screen-xl m-auto text-sm font-medium px-12">
      <ul class="flex items-center justify-between">
        <li class="flex logo">
          <nuxt-link :to="localePath('/')">
            <img src="../assets/img/sg-logo-color.png" alt="SurveyGenerator" />
          </nuxt-link>
        </li>
        <li class="flex center-nav">
          <nuxt-link :to="localePath('tjanster')">
            {{ $t('menu.services') }}
          </nuxt-link>
          <nuxt-link :to="localePath('vara-kunder')">
            {{ $t('menu.customers') }}
          </nuxt-link>
          <nuxt-link :to="localePath('priser')">
            {{ $t('menu.pricing') }}
          </nuxt-link>
          <nuxt-link :to="localePath('nyheter')">
            {{ $t('menu.news') }}
          </nuxt-link>
          <nuxt-link :to="localePath('kontakt')">
            {{ $t('menu.contact') }}
          </nuxt-link>
        </li>
        <li class="flex items-center">
          <nuxt-link :to="localePath('logga-in')">
            {{ $t('menu.login') }}
          </nuxt-link>
          <CTAButton header :text="$t('menu.book_demo')" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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

<style lang="scss" scoped>
.logo {
  width: 200px;

  img {
    transition: filter 0.2s;

    &:hover {
      filter: opacity(80%);
      transition: filter 0.2s;
    }
  }
}

li:not(.logo) {
  a:not(.cta) {
    padding: 2.25rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid transparent;
  }
  .nuxt-link-active:not(.cta) {
    border-bottom: 2px solid #fff;
  }
}
</style>
