<template>
  <footer class="bg-yellow-2 text-yellow-3 text-sm py-16 px-12">
    <div class="max-w-screen-xl m-auto">
      <div class="flex justify-center mb-6">
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="flex items-center font-bold"
        >
          <BalloonBubble
            v-if="$i18n.locale !== locale.code"
            class="w-3 h-3 mr-2"
          />
          <span v-if="$i18n.locale !== locale.code">{{ locale.name }}</span>
        </nuxt-link>
      </div>

      <ul class="flex justify-center mb-4">
        <li class="li-middle">
          <nuxt-link :to="localePath('om-oss')" class="py-2 px-4">
            {{ $t('menu.about') }}
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
    </div>
  </footer>
</template>

<script>
import BalloonBubble from '@/components/Common/SVG/BalloonBubble.vue';
import Facebook from '@/components/Common/SVG/Facebook.vue';
import Twitter from '@/components/Common/SVG/Twitter.vue';
import LinkedIn from '@/components/Common/SVG/LinkedIn.vue';

export default {
  name: 'Footer',
  components: {
    BalloonBubble,
    Facebook,
    Twitter,
    LinkedIn,
  },
};
</script>
