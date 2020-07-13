<template>
  <section class="bg-bgMain">
    <Container class="py-24">
      <div class="flex mb-12">
        <Block
          v-for="(testimonial, index) in data.testimonials"
          :key="index"
          half
          class="leading-7"
        >
          <img
            :src="testimonial.company_logo.url"
            :alt="testimonial.company_logo.alt"
            class="w-12 h-12 mb-8"
          />

          <blockquote class="relative mb-6">
            <Quote
              class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 w-6 z-neg-1"
            />
            <p class="font-medium text-lg">
              {{ $prismic.asText(testimonial.company_quote) }}
            </p>
          </blockquote>

          <p>
            {{ $prismic.asText(testimonial.employee_name) }}
          </p>
          <p class="text-blue-test2">
            {{ $prismic.asText(testimonial.employee_role) }},
            {{ $prismic.asText(testimonial.company_name) }}
          </p>
        </Block>
      </div>

      <div class="flex justify-center">
        <FunnelBtn text="Våra kunder" navigate-to="vara-kunder" />
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
