<template>
  <BaseSection blue>
    <div
      class="flex leading-relaxed"
      :class="{ 'flex-row-reverse': slice.primary.reverse }"
    >
      <div
        class="w-1/2"
        :class="{
          'mr-8': !slice.primary.reverse,
          'ml-8': slice.primary.reverse
        }"
      >
        <prismic-rich-text
          :field="slice.primary.title"
          class="rich-text mb-4 text-lg"
        />
        <prismic-rich-text
          :field="slice.primary.description"
          class="rich-text leading-relaxed mb-8"
        />

        <BaseButton
          v-if="slice.primary.button_label[0]"
          anchor
          size="small"
          :label="slice.primary.button_label[0].text"
          :to="slice.primary.button_url"
          color="blue-light"
        />
      </div>

      <div
        class="w-1/2"
        :class="{
          'ml-8': !slice.primary.reverse,
          'mr-8': slice.primary.reverse
        }"
      >
        <prismic-image :field="slice.primary.image" />
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';
import BaseButton from '@/components/Library/BaseButton.vue';

export default {
  name: 'Showcase',
  components: {
    BaseSection,
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
