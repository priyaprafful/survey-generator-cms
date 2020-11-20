<template>
  <div>Vanliga frågor !!!</div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/vanliga-fragor',
      en: '/help/faq',
    },
  },
  head() {
    return {
      title: this.$t('menu.help') + ' — Survey Generator',
    };
  },
};
</script>
