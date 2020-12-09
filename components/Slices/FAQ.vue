<template>
  <BaseSection gradient flex-col>
    <prismic-rich-text :field="slice.primary.title" class="text-center mb-16" />

    <dl>
      <div
        v-for="(faq, index) in slice.items"
        :key="index"
        class="mt-8 border-t border-bluegray-3 pt-6 md:grid md:grid-cols-12 md:gap-8"
      >
        <dt class="font-medium md:col-span-5">
          <prismic-rich-text :field="faq.question" />
        </dt>
        <dd class="mt-2 md:mt-0 md:col-span-7">
          <prismic-rich-text
            :field="faq.answer"
            class="text-blue-4 leading-relaxed rich-text"
          />
        </dd>
      </div>
    </dl>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'Showcase',
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
