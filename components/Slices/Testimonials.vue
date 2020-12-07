<template>
  <BaseSection gradient border flex-col>
    <prismic-rich-text
      :field="slice.primary.section_title"
      class="text-center mb-16"
    />

    <div class="flex leading-relaxed">
      <div
        v-for="(testimonial, i) in slice.items"
        :key="i"
        class="w-1/2"
        :class="{ 'mr-8': i % 2 === 0, 'ml-8': i % 2 !== 0 }"
      >
        <prismic-image
          :field="testimonial.company_logo"
          class="w-12 h-12 mb-8"
        />

        <blockquote class="relative mb-6">
          <QuoteIcon
            class="absolute top-0 left-0 transform text-lightblue-3 fill-current -translate-x-3 -translate-y-2 w-6"
          />
          <prismic-rich-text
            :field="testimonial.company_quote"
            class="relative font-medium text-lg z-10"
          />
        </blockquote>

        <prismic-rich-text :field="testimonial.employee_name" />

        <p class="text-blue-4">
          {{ $prismic.asText(testimonial.employee_role) }},
          {{ $prismic.asText(testimonial.company) }}
        </p>
      </div>
    </div>

    <div class="flex justify-center mt-20">
      {{ slice.primary.testimonial_cta }}
      <BaseButton
        size="large"
        :label="slice.primary.testimonial_cta_text[0].text"
        :to="slice.primary.testimonial_cta_url"
      />
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';
import BaseButton from '@/components/Library/BaseButton.vue';
import QuoteIcon from '~/assets/svg/quote.svg?inline';

export default {
  components: {
    BaseSection,
    BaseButton,
    QuoteIcon
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>
