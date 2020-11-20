<template>
  <div>Artiklar !!!</div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      sv: '/hjalpen/artiklar',
      en: '/help/articles',
    },
  },
  head() {
    return {
      title: this.$t('menu.help') + ' — Survey Generator',
    };
  },
};
</script>
