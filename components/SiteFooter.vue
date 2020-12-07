<template>
  <footer>
    <BaseSection yellow>
      <div class="m-auto text-sm">
        <ul v-if="altLangs" class="flex justify-center mb-6">
          <li v-for="altLang in altLangs" :key="altLang.id">
            <nuxt-link
              :to="$prismic.linkResolver(altLang)"
              class="group flex items-center font-bold py-2 px-4"
            >
              <BubbleIcon class="w-3 text-yellow-4 fill-current" />
              <span class="ml-2 group-hover:underline">
                <span v-if="altLang.lang === 'sv'">Svenska</span>
                <span v-if="altLang.lang === 'en'">English</span>
              </span>
            </nuxt-link>
          </li>
        </ul>

        <ul v-if="content" class="flex justify-center mb-6">
          <li v-for="menuLink in content.menu_links" :key="menuLink.id">
            <prismic-link
              :field="menuLink.link"
              class="py-2 px-4 hover:underline"
            >
              {{ $prismic.asText(menuLink.label) }}
            </prismic-link>
          </li>
        </ul>

        <div v-if="content" class="flex justify-center">
          <p>
            © 2000 - {{ new Date().getFullYear() }} |
            {{ $prismic.asText(content.address) }}
          </p>
        </div>
      </div>
    </BaseSection>
  </footer>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';
import BubbleIcon from '~/assets/svg/bubble.svg?inline';

export default {
  name: 'SiteFooter',
  components: {
    BaseSection,
    BubbleIcon
  },
  props: {
    altLangs: {
      type: Array,
      default: null
    },
    content: {
      type: Object,
      default: null
    }
  }
};
</script>
