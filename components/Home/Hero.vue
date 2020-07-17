<template>
  <section class="mainGradient">
    <div class="flex justify-center h-almost max-w-screen-xl m-auto p-12">
      <div class="flex">
        <Block half class="flex flex-col justify-center">
          <h1 class="text-5xl leading-tight mb-6 testy">
            {{ $prismic.asText(data.headline) }}
          </h1>
          <p class="text-lg leading-relaxed mb-8">
            {{ $prismic.asText(data.description) }}
          </p>

          <div class="flex items-center">
            <CTABtn :text="$t('menu.book_demo')" />
            <nuxt-link
              :to="localePath('kontakt')"
              class="flex items-center py-2 px-4"
            >
              {{ $t('common.contact_us') }}
              <ChevronRight class="ml-3 h-3 w-3" />
            </nuxt-link>
          </div>
        </Block>

        <Block half class="flex flex-col items-end justify-center">
          <Platform class="w-3/4" />
        </Block>
      </div>
    </div>

    <div class="max-w-screen-xl m-auto p-12">
      <div class="flex justify-between">
        <SEB class="h-8" />
        <SACO class="h-8" />
        <AssaAbloy class="h-8" />
        <SwedishMatch class="h-8" />
      </div>
    </div>
  </section>
</template>

<script>
import Platform from '@/components/Common/SVG/Platform.vue';
import SEB from '@/components/Common/SVG/SEB.vue';
import SACO from '@/components/Common/SVG/SACO.vue';
import AssaAbloy from '@/components/Common/SVG/AssaAbloy.vue';
import SwedishMatch from '@/components/Common/SVG/SwedishMatch.vue';

export default {
  name: 'Home',
  components: {
    Platform,
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

<style>
.testy {
  background: linear-gradient(to right, hsl(212, 63%, 23%), hsl(199, 66%, 55%));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
