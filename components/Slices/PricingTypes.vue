<template>
  <BaseSection gradient border>
    <div class="inline-flex items-center">
      <div class="w-1/2 shadow-card rounded-lg">
        <div class="p-10 rounded-t-lg bg-bluegray-2">
          <prismic-rich-text
            :field="slice.primary.first_title"
            class="text-center text-lg"
          />
        </div>
        <div class="p-10 rounded-b-lg bg-white">
          <prismic-rich-text
            :field="slice.primary.first_content"
            class="rich-text"
          />
        </div>
      </div>

      <div class="w-1/2 shadow-card rounded-lg">
        <div class="p-10 bg-lightblue-4 rounded-tr-lg">
          <prismic-rich-text
            :field="slice.primary.second_title"
            class="text-center text-lg"
          />
        </div>
        <div class="p-10 text-white bg-blue-7 rounded-br-lg">
          <prismic-rich-text
            :field="slice.primary.second_content"
            class="rich-text"
          />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PricingTypes',
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
