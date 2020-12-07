<template>
  <section class="border-b border-bluegray-2">
    <div class="flex justify-center min-h-almost max-w-screen-xl m-auto p-12">
      <div class="flex flex-col justify-center w-1/2 mr-8">
        <h1
          class="text-5xl leading-hero mb-6 bg-gradient-to-r from-blue-7 to-blue-1 bg-clip-text text-transparent"
        >
          {{ $prismic.asText(slice.primary.title) }}
        </h1>
        <p class="leading-relaxed mb-8">
          {{ $prismic.asText(slice.primary.description) }}
        </p>

        <div class="flex items-center">
          <BaseButton
            color="yellow-light"
            size="large"
            :label="slice.primary.first_cta_text"
            :to="slice.primary.first_cta_link"
            class="mr-2"
          />
          <BaseButton
            color="transparent"
            size="large"
            :label="slice.primary.second_cta_text"
            :to="slice.primary.second_cta_link"
          />
        </div>
      </div>

      <div class="flex relative w-1/2 ml-8">
        <div
          v-if="slice.primary.hero_triangle"
          class="triangle absolute top-0 left-0 right-0 bottom-0"
        />
        <div class="flex justify-end w-full z-10">
          <prismic-image :field="slice.primary.hero" class="w-3/4" />
        </div>
      </div>
    </div>

    <div class="max-w-screen-xl m-auto px-12 pb-24">
      <div class="flex justify-between items-end">
        <div v-for="(img, i) in slice.items" :key="i">
          <prismic-image
            :field="img.company"
            :class="i === 0 ? 'h-9 w-40' : 'h-16'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/Library/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>

<style scoped>
.triangle {
  background-image: radial-gradient(#aad7ed 1.5px, #eef7fb 1.5px);
  background-size: calc(25px) calc(25px);
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
}
</style>
