<template>
  <Wrapper>
    <Container>
      <prismic-rich-text :field="data.faq_title" class="text-center mb-16" />

      <dl>
        <div
          v-for="(faq, index) in data.faqs"
          :key="index"
          class="mt-8 border-t border-bluegray-3 pt-6 md:grid md:grid-cols-12 md:gap-8"
        >
          <dt class="font-medium md:col-span-5">
            <prismic-rich-text :field="faq.question" />
          </dt>
          <dd class="mt-2 md:mt-0 md:col-span-7">
            <prismic-rich-text
              :field="faq.answer"
              class="faq rich-text text-blue-4 leading-relaxed"
            />
          </dd>
        </div>
      </dl>
    </Container>
  </Wrapper>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
.faq li {
  list-style-type: square;
  list-style-position: inside;
  margin-bottom: 1rem;
}

.faq li:last-child {
  margin-bottom: 0;
}
</style>
