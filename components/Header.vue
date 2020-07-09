<template>
  <header id="header" class="sticky top-0 z-50 transition ease-in duration-500">
    <nav class="max-w-screen-xl m-auto py-4 px-12">
      <ul class="flex items-center justify-between">
        <li>
          <nuxt-link :to="localePath('/')">
            <img
              class="h-8 logo"
              src="../assets/img/sg-logo-color.png"
              alt="SurveyGenerator"
            />
          </nuxt-link>
        </li>
        <li class="flex li-middle">
          <nuxt-link :to="localePath('tjanster')" class="py-2 px-4">
            {{ $t('menu.services') }} {{ scrollPosition }}
          </nuxt-link>
          <nuxt-link :to="localePath('vara-kunder')" class="py-2 px-4">
            {{ $t('menu.customers') }}
          </nuxt-link>
          <nuxt-link :to="localePath('priser')" class="py-2 px-4">
            {{ $t('menu.pricing') }}
          </nuxt-link>
          <nuxt-link :to="localePath('nyheter')" class="py-2 px-4">
            {{ $t('menu.news') }}
          </nuxt-link>
          <nuxt-link :to="localePath('kontakt')" class="py-2 px-4">
            {{ $t('menu.contact') }}
          </nuxt-link>
        </li>
        <li class="flex items-center">
          <nuxt-link :to="localePath('logga-in')" class="py-2 px-4">
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
      const width = window.matchMedia('(min-width: 768px)');

      this.$nextTick(function () {
        window.addEventListener('scroll', function () {
          const header = document.getElementById('header');

          if (document.scrollingElement.scrollTop >= 150 && width.matches) {
            header.classList.add('bg-mainBg');
            header.classList.remove('bg-transparent');
          } else {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-mainBg');
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  transition: filter 0.2s;
  &:hover {
    filter: opacity(80%);
    transition: filter 0.2s;
  }
}

.li-middle {
  .nuxt-link-active {
    font-weight: bold;
  }
}
</style>
