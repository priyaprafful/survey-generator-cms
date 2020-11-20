<template>
  <header
    class="sticky top-0 border-b z-50 transition duration-500"
    :class="{
      'bg-bluegray-1': homepage || exclusive,
      'bg-blue-9 text-white border-white': !homepage && !exclusive,
      'border-transparent': (homepage || exclusive) && scrollPosition < 100,
      'border-bluegray-2': (homepage || exclusive) && scrollPosition >= 100,
    }"
  >
    <nav class="max-w-screen-xl m-auto text-sm font-medium px-12">
      <ul class="flex items-center justify-between">
        <li class="flex logo" :class="{ 'py-8': exclusive }">
          <nuxt-link :to="localePath('/')" class="w-full">
            <img
              v-if="homepage || exclusive"
              src="@/assets/svgs/sg-logo.svg"
              alt="SurveyGenerator"
            />
            <img
              v-else
              src="@/assets/svgs/sg-logo-white.svg"
              alt="SurveyGenerator"
            />
          </nuxt-link>
        </li>

        <li v-if="!exclusive" class="flex">
          <nuxt-link
            v-for="(link, index) in links"
            :key="index"
            :to="localePath(link.path)"
            class="py-8 mx-4 border-b-4 border-transparent transition duration-200"
            :class="{
              'hover:border-lightblue-9': homepage,
              'hover:border-white': !homepage,
            }"
          >
            <span v-if="$i18n.locale === 'sv'">{{ link.labelSv }}</span>
            <span v-if="$i18n.locale === 'en'">{{ link.labelEn }}</span>
          </nuxt-link>
        </li>

        <li v-if="!exclusive" class="flex items-center">
          <nuxt-link
            :to="localePath('login')"
            class="py-8 mx-4 border-b-4 border-transparent transition duration-200"
            :class="{
              'hover:border-lightblue-9': homepage,
              'hover:border-white': !homepage,
            }"
          >
            {{ $t('menu.login') }}
          </nuxt-link>
          <MainBtn :text="$t('menu.book_demo')" to="book-demo" cta no-chevron />
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
    exclusive: {
      type: Boolean,
      default: null,
    },
  },
  data: () => ({
    scrollPosition: null,
    links: [
      {
        path: 'platform',
        labelSv: 'Verktyget',
        labelEn: 'Platform',
      },
      {
        path: 'customers',
        labelSv: 'Kunder',
        labelEn: 'Customers',
      },
      {
        path: 'pricing',
        labelSv: 'Priser',
        labelEn: 'Pricing',
      },
      {
        path: 'news',
        labelSv: 'Nyheter',
        labelEn: 'News',
      },
      {
        path: 'contact',
        labelSv: 'Kontakt',
        labelEn: 'Contact',
      },
    ],
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

<style scoped lang="scss">
.logo {
  width: 200px;

  svg {
    width: 100%;
    transition: filter 0.2s;

    &:hover {
      filter: opacity(80%);
    }
  }
}

li:not(.logo) {
  .nuxt-link-active:not(.cta) {
    border-bottom: 4px solid #ffffff;
  }
}
</style>
