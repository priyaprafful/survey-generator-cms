<template>
  <footer class="footer">
    Bitbull Srl - {{ $t('corporate.vat') }} 03526400043 -
    {{ $t('corporate.share_capital') }}

    <Switcher />

    <a href="https://prismic.io" target="_blank" rel="noopener">
      <img class="logo" src="../assets/img/prismic-logo.svg" alt="Prismic" />
    </a>
  </footer>
</template>

<script>
import Switcher from './Switcher.vue'

export default {
  name: 'FooterPrismic',
  components: {
    Switcher,
  },
}
</script>

<style lang="sass" scoped>
.footer
  padding: 40px 0
  max-width: 700px
  margin: 0 auto
  text-align: center
  border-top: 1px solid #DADADA

.logo
  width: 100px
</style>
