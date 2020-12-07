<template>
  <BaseSection gradient border flex-col class="flex w-full">
    <prismic-rich-text
      :field="slice.primary.section_title"
      class="text-center mb-16"
    />

    <div class="flex justify-between mt-8">
      <div
        v-for="(col, i) in slice.items"
        :key="col + i"
        class="w-1/3 mr-8 last:mr-0"
      >
        <div class="bg-lightblue-3 rounded-full w-12 h-12 mb-6" />
        <prismic-rich-text :field="col.title" class="rich-text mb-4 text-lg" />
        <prismic-rich-text
          :field="col.text"
          class="rich-text leading-relaxed"
        />
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PageThreeColumns',
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
