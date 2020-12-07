<template>
  <BaseSection gradient border flex-col class="flex w-full">
    <div class="text-center leading-loose mb-16">
      <prismic-rich-text :field="slice.primary.section_title" class="mb-6" />
      <prismic-rich-text
        :field="slice.primary.section_description"
        class="w-2/3 m-auto"
      />
    </div>

    <div class="grid grid-cols-2 gap-12">
      <div v-for="(item, index) in slice.items" :key="index" class="flex">
        <div class="bg-lightblue-3 rounded-full w-12 h-12 flex-shrink-0 mr-6" />

        <div class="flex flex-col">
          <prismic-rich-text :field="item.title" class="mb-2 text-lg" />
          <p class="leading-loose">{{ $prismic.asText(item.description) }}</p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PageSmallColumns',
  components: {
    BaseSection
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>
