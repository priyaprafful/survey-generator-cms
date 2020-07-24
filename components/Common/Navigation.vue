<template>
  <nav class="max-w-screen-xl m-auto text-sm font-medium px-12">
    <ul class="flex items-center justify-between">
      <li class="flex logo">
        <nuxt-link :to="localePath('/')">
          <SGLogo v-if="homepage" />
          <SGLogoWhite v-else />
        </nuxt-link>
      </li>

      <li class="flex">
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="localePath(link.path)"
        >
          <span v-if="$i18n.locale === 'sv'">{{ link.labelSv }}</span>
          <span v-if="$i18n.locale === 'en'">{{ link.labelEn }}</span>
        </nuxt-link>
      </li>

      <Navigation />

      <li class="flex items-center">
        <nuxt-link :to="localePath('logga-in')">
          {{ $t('menu.login') }}
        </nuxt-link>
        <CTABtn small />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    homepage: {
      type: Boolean,
      default: null,
    },
  },
  data: () => ({
    links: [
      {
        path: 'verktyget',
        labelSv: 'Verktyget',
        labelEn: 'Platform',
      },
      {
        path: 'kunder',
        labelSv: 'Kunder',
        labelEn: 'Customers',
      },
      {
        path: 'priser',
        labelSv: 'Priser',
        labelEn: 'Pricing',
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
    ],
  }),
};
</script>

<style lang="scss" scoped>
.logo {
  width: 200px;

  svg {
    width: 100%;
    transition: filter 0.2s;

    &:hover {
      filter: opacity(80%);
      transition: filter 0.2s;
    }
  }
}

li:not(.logo) {
  a:not(.cta) {
    padding: 2.25rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid transparent;
    transition: border 0.2s;

    &:hover {
      border-bottom: 2px solid #43a8d8;
      transition: border 0.2s;
    }
  }
  .nuxt-link-active:not(.cta) {
    border-bottom: 2px solid #ffffff;
  }
}
</style>
