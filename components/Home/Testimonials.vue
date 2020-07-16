<template>
  <section class="bg-bgMain">
    <Container>
      <div class="flex mb-12">
        <Block
          v-for="(testimonial, index) in data.testimonials"
          :key="index"
          half
          class="leading-7"
        >
          <prismic-image
            :field="testimonial.company_logo"
            class="w-12 h-12 mb-8"
          />

          <blockquote class="relative mb-6">
            <Quote
              class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 w-6 z-n1"
            />
            <prismic-rich-text
              :field="testimonial.company_quote"
              class="font-medium text-lg"
            />
          </blockquote>

          <prismic-rich-text :field="testimonial.employee_name" />

          <p class="text-blue-4">
            {{ $prismic.asText(testimonial.employee_role) }},
            {{ $prismic.asText(testimonial.company_name) }}
          </p>
        </Block>
      </div>

      <div class="flex justify-center">
        <FunnelBtn text="Kunder" navigate-to="kunder" />
      </div>
    </Container>
  </section>
</template>

<script>
import Quote from '@/components/Common/SVG/Quote.vue';

export default {
  name: 'Testimonials',
  components: {
    Quote,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
