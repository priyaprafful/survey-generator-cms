<template>
  <header
    class="sticky top-0 border-b z-50 transition duration-500"
    :class="{
      'bg-mainBg': homepage,
      'bg-blue-darker text-white border-white': !homepage,
      'border-mainBg': homepage && scrollPosition < 100,
      'border-blue-darker': homepage && scrollPosition >= 100,
    }"
  >
    <nav class="max-w-screen-xl m-auto text-sm font-medium px-12">
      <ul class="flex items-center justify-between">
        <li class="flex logo">
          <nuxt-link :to="localePath('/')">
            <SGLogo v-if="homepage" />
            <SGLogoWhite v-else />
          </nuxt-link>
        </li>
        <li class="flex center-nav">
          <nuxt-link :to="localePath('verktyget')">
            {{ $t('menu.platform') }}
          </nuxt-link>
          <nuxt-link :to="localePath('kunder')">
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
          <CTABtn small :text="$t('menu.book_demo')" />
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

  svg {
    width: 100%;
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
    transition: border 0.2s;

    &:hover {
      border-bottom: 2px solid #a4e9fd;
      transition: border 0.2s;
    }
  }
  .nuxt-link-active:not(.cta) {
    border-bottom: 2px solid #fff;
  }
}
</style>
