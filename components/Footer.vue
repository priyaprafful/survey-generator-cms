<template>
  <footer class="bg-yellow text-yellow-dark text-sm py-20 px-12">
    <div class="max-w-screen-xl m-auto">
      <div class="flex justify-center mb-6">
        <img
          class="w-32"
          src="../assets/img/sg-logo-color.png"
          alt="SurveyGenerator"
        />
      </div>

      <ul class="flex justify-center mb-4">
        <li class="li-middle">
          <nuxt-link :to="localePath('tjanster')" class="py-2 px-4">
            {{ $t('menu.services') }}
          </nuxt-link>
          <nuxt-link :to="localePath('nyheter')" class="py-2 px-4">
            {{ $t('menu.news') }}
          </nuxt-link>
          <nuxt-link :to="localePath('kontakt')" class="py-2 px-4">
            {{ $t('menu.contact') }}
          </nuxt-link>
          <nuxt-link :to="localePath('integritetspolicy')" class="py-2 px-4">
            {{ $t('menu.privacy_policy') }}
          </nuxt-link>
        </li>
      </ul>

      <ul class="flex justify-center mb-4">
        <li class="py-2 px-4"><Facebook class="h-4 w-4" /></li>
        <li class="py-2 px-4"><Twitter class="h-4 w-4" /></li>
        <li class="py-2 px-4"><LinkedIn class="h-4 w-4" /></li>
      </ul>

      <div class="flex justify-center">
        <p>
          © 2000 - {{ new Date().getFullYear() }} |
          {{ $prismic.asText($store.state.contact_information.address) }}
        </p>
      </div>

      <ul class="flex justify-center">
        <li
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="lang__item"
        >
          <span v-if="$i18n.locale === locale.code">{{ locale.code }}</span>
          <n-link
            v-else
            :to="switchLocalePath(locale.code)"
            :title="locale.name"
            exact
          >
            {{ locale.code }}
          </n-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Facebook from '@/components/Common/SVG/Facebook.vue';
import Twitter from '@/components/Common/SVG/Twitter.vue';
import LinkedIn from '@/components/Common/SVG/LinkedIn.vue';

export default {
  name: 'Footer',
  components: {
    Facebook,
    Twitter,
    LinkedIn,
  },
};
</script>
