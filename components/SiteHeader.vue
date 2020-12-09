<template>
  <header :class="header">
    <div v-if="menu" class="max-w-screen-xl m-auto text-sm font-medium px-12">
      <div class="flex items-center justify-between">
        <!-- LEFT -->
        <nav>
          <ul>
            <li class="flex w-48">
              <!-- <nuxt-link
                :to="altLangs[0].lang === 'en' ? './' : '/en'"
                class="w-full no-border"
              >
                <img
                  v-if="home"
                  src="@/assets/svg/sg-logo.svg"
                  alt="SurveyGenerator"
                />
                <img
                  v-else
                  src="@/assets/svg/sg-logo-white.svg"
                  alt="SurveyGenerator"
                />
              </nuxt-link> -->
            </li>
          </ul>
        </nav>

        <!-- CENTER -->
        <nav>
          <ul class="flex">
            <li
              v-for="menuLink in menu.menu_links"
              :key="menuLink.id"
              class="flex items-center"
            >
              <prismic-link
                :field="menuLink.link"
                class="py-8 mx-4 border-b-4 border-transparent transition duration-200"
                :class="{
                  'hover:border-lightblue-9': home,
                  'hover:border-white': !home
                }"
              >
                {{ $prismic.asText(menuLink.label) }}
              </prismic-link>
            </li>
          </ul>
        </nav>

        <!-- RIGHT -->
        <nav>
          <ul class="flex">
            <li class="flex items-center">
              <prismic-link
                :field="menu.login_link"
                class="py-8 mx-4 border-b-4 border-transparent transition duration-200"
                :class="{
                  'hover:border-lightblue-9': home,
                  'hover:border-white': !home
                }"
              >
                {{ $prismic.asText(menu.login_label) }}
              </prismic-link>
            </li>
            <li class="flex items-center">
              <BaseButton
                v-if="menu.cta_label[0]"
                color="yellow-light"
                :chevron="false"
                :label="menu.cta_label[0].text"
                :to="menu.cta_link"
                class="no-border"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/Library/BaseButton.vue';

export default {
  name: 'SiteHeader',
  components: {
    BaseButton
  },
  props: {
    home: {
      type: Boolean,
      default: null
    },
    menu: {
      type: Object,
      default: null
    },
    altLangs: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    scrollPosition: 0
  }),
  computed: {
    header() {
      return {
        'sticky top-0 border-b transition duration-500 z-50': true,
        'bg-bluegray-1': this.home,
        'bg-blue-9 text-white border-white': !this.home,
        'border-transparent': this.home && this.scrollPosition < 100,
        'border-bluegray-2': this.home && this.scrollPosition >= 100
      };
    }
  },
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
    }
  }
};
</script>

<style scoped lang="scss">
.nuxt-link-active:not(.no-border) {
  border-bottom: 4px solid #ffffff;
}
</style>
