<template>
  <Wrapper class="overflow-hidden relative">
    <Container>
      <div class="flex">
        <Block
          v-for="(testimonial, index) in data.testimonials"
          :key="index"
          half
          class="flex leading-7"
        >
          <div class="z-10">
            <prismic-image
              :field="testimonial.company_logo"
              class="w-12 h-12 mb-8"
            />

            <blockquote class="relative mb-6">
              <img
                src="@/assets/icons/quote.svg"
                alt="Quote"
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
          </div>

          <svg
            fill="none"
            viewBox="0 0 404 384"
            width="404"
            height="384"
            class="absolute top-1/2 -translate-y-1/2 transform text-gray-200 fill-current"
            :class="{
              'right-3/4 -translate-x-32': index === 0,
              'left-3/4 translate-x-32': index === 1,
            }"
          >
            <defs>
              <pattern
                :id="index === 0 ? 'shape3' : 'shape4'"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="inherit"></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              :fill="index === 0 ? 'url(#shape3)' : 'url(#shape4)'"
            ></rect>
          </svg>
        </Block>
      </div>

      <div class="flex justify-center mt-16">
        <MainBtn
          text="Våra kunder"
          to="kunder"
          class="bg-blue-4 hover:bg-blue-3 text-white"
        />
      </div>
    </Container>
  </Wrapper>
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
