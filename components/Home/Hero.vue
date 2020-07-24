<template>
  <section class="mainGradient overflow-hidden">
    <div class="flex justify-center h-almost max-w-screen-xl m-auto p-12">
      <div class="flex">
        <Block half class="flex flex-col justify-center relative">
          <div class="z-10">
            <h1 class="text-5xl leading-tight mb-6 gradientText">
              {{ $prismic.asText(data.headline) }}
            </h1>
            <p class="text-lg leading-relaxed mb-8">
              {{ $prismic.asText(data.description) }}
            </p>

            <div class="flex items-center">
              <CTABtn />

              <FunnelBtn
                :text="$('menu.get_quote')"
                :to="'/boka-demo'"
                class="py-2 px-4"
              />
            </div>
          </div>

          <svg
            fill="none"
            viewBox="0 0 404 384"
            width="404"
            height="384"
            class="absolute bottom-0 right-1/2 transform -translate-x-32 text-gray-200 fill-current"
          >
            <defs>
              <pattern
                id="shape1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="inherit"></rect>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#shape1)"></rect>
          </svg>
        </Block>

        <Block half class="flex flex-col items-end justify-center relative">
          <Platform class="w-3/4 z-10" />

          <svg
            fill="none"
            viewBox="0 0 404 384"
            width="404"
            height="384"
            class="absolute top-0 left-1/2 transform translate-x-32 text-gray-200 fill-current"
          >
            <defs>
              <pattern
                id="shape2"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="inherit"></rect>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#shape2)"></rect>
          </svg>
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
.gradientText {
  background: linear-gradient(to right, hsl(212, 63%, 23%), hsl(199, 66%, 55%));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
