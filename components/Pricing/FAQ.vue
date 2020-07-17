<template>
  <Container>
    <div class="grid grid-cols-4 gap-10">
      <div v-for="(faq, index) in data.faqs" :key="index">
        <prismic-rich-text :field="faq.question" class="font-bold mb-4" />
        <prismic-rich-text :field="faq.answer" />
      </div>
    </div>
  </Container>
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
