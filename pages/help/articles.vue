<template>
  <div>
    <p>Artiklar !!!</p>
    <HelpCTA />
  </div>
</template>

<script>
import HelpCTA from '@/components/Help/HelpCTA.vue';

export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/artiklar',
      en: '/help/articles',
    },
  },
  components: {
    HelpCTA,
  },
  head() {
    return {
      title: this.$t('menu.help') + ' — Survey Generator',
    };
  },
};
</script>
