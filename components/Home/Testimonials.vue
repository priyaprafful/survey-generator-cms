<template>
  <section class="bg-bgMain">
    <div class="flex justify-center max-w-screen-xl m-auto p-12">
      <div v-for="(testimonial, index) in data.testimonials" :key="index">
        <img :src="testimonial.company_logo.url" class="w-12 h-12" />
        <p>{{ $prismic.asText(testimonial.company_quote) }}</p>
        <p>
          {{ $prismic.asText(testimonial.company_employee_name) }}
          {{ $prismic.asText(testimonial.company_employee_title) }}
          {{ $prismic.asText(testimonial.company_name) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
