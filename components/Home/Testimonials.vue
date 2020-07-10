<template>
  <section class="bg-bgMain">
    <div class="flex justify-center max-w-screen-xl m-auto p-12">
      <div>
        <img
          :src="data.testimonial_logo.url"
          :alt="data.testimonial_logo.alt"
          class="w-12 h-12"
        />
        <p>{{ $prismic.asText(data.testimonial_quote) }}</p>
        <p>
          {{ $prismic.asText(data.testimonial_employee_name) }}
          {{ $prismic.asText(data.testimonial_employee_role) }}
          {{ $prismic.asText(data.testimonial_company) }}
        </p>
        <button class="bg-gray-500">Våra kunder</button>
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
