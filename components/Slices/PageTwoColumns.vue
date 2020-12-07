<template>
  <BaseSection gradient border flex-col class="flex w-full">
    <prismic-rich-text
      :field="slice.primary.section_title"
      class="text-center mb-16"
    />

    <div v-for="(col, i) in slice.items" :key="col + i" :class="block(i)">
      <div class="w-1/2" :class="{ 'mr-8': i % 2 === 0, 'ml-8': i % 2 !== 0 }">
        <prismic-rich-text
          :field="col.column_title"
          class="rich-text mb-4 text-lg"
        />
        <prismic-rich-text
          :field="col.column_text"
          class="rich-text leading-relaxed"
        />
      </div>

      <div class="w-1/2" :class="{ 'ml-8': i % 2 === 0, 'mr-8': i % 2 !== 0 }">
        <prismic-image :field="col.column_image" />
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PageTwoColumns',
  components: {
    BaseSection
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  },
  methods: {
    block(index) {
      return {
        'flex mb-24 last:mb-0': true,
        'flex-row-reverse': index % 2 !== 0
      };
    }
  }
};
</script>
