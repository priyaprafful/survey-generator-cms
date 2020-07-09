<template>
  <section class="bg-mainBg">
    <div
      class="flex flex-col justify-center h-almost max-w-screen-xl m-auto p-12 relative"
    >
      <Blob class="testy" />
      <div class="flex">
        <Block half left class="flex flex-col items-start justify-center">
          <h1 class="text-5xl leading-tight mb-6">
            {{ $prismic.asText(data.headline) }}
          </h1>
          <p class="text-lg leading-relaxed mb-8">
            {{ $prismic.asText(data.description) }}
          </p>

          <div class="flex items-center">
            <CTAButton :text="$t('menu.book_demo')" />
            <nuxt-link :to="localePath('kontakt')" class="py-2 px-4">
              Kontakta oss
            </nuxt-link>
          </div>
        </Block>

        <Block half right class="flex items-center justify-center">
          <Platform class="w-1/2" />
        </Block>
      </div>
    </div>

    <div class="flex justify-around max-w-screen-xl m-auto p-12">
      <SEB class="h-8" />
      <SACO class="h-8" />
      <AssaAbloy class="h-8" />
      <SwedishMatch class="h-8" />
    </div>
  </section>
</template>

<script>
import Platform from '@/components/Common/SVG/Platform.vue';
import Blob from '@/components/Common/SVG/Blob.vue';
import SEB from '@/components/Common/SVG/SEB.vue';
import SACO from '@/components/Common/SVG/SACO.vue';
import AssaAbloy from '@/components/Common/SVG/AssaAbloy.vue';
import SwedishMatch from '@/components/Common/SVG/SwedishMatch.vue';

export default {
  name: 'Home',
  components: {
    Platform,
    Blob,
    SEB,
    SACO,
    AssaAbloy,
    SwedishMatch,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.testy {
  display: none;
  position: absolute;
  left: calc(50% + 130px);
  top: -640px;
}
</style>
