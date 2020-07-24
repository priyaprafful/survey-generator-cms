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
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="localePath(link.path)"
          class="py-2 px-4"
        >
          <span v-if="$i18n.locale === 'sv'">{{ link.labelSv }}</span>
          <span v-if="$i18n.locale === 'en'">{{ link.labelEn }}</span>
        </nuxt-link>
      </ul>

      <ul class="flex justify-center mb-4">
        <li class="py-2 px-4"><Facebook class="h-4 w-4" /></li>
        <li class="py-2 px-4"><Twitter class="h-4 w-4" /></li>
        <li class="py-2 px-4"><LinkedIn class="h-4 w-4" /></li>
      </ul>

      <div class="flex justify-center">
        <p>
          © 2000 - {{ new Date().getFullYear() }} |
          {{ $prismic.asText($store.state.miscellaneous.company_name) }},
          {{ $prismic.asText($store.state.miscellaneous.address) }}
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
  data: () => ({
    links: [
      {
        path: 'om-oss',
        labelSv: 'Om oss',
        labelEn: 'About us',
      },
      {
        path: 'nyheter',
        labelSv: 'Nyheter',
        labelEn: 'News',
      },
      {
        path: 'kontakt',
        labelSv: 'Kontakt',
        labelEn: 'Contact',
      },
      {
        path: 'integritetspolicy',
        labelSv: 'Integritetspolicy',
        labelEn: 'Privacy policy',
      },
    ],
  }),
};
</script>
