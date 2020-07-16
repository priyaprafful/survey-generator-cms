<template>
  <section class="bg-blue-darker text-white">
    <Container>
      <h2 class="mb-12">{{ $prismic.asText(data.benefits_title) }}</h2>
      <div class="flex">
        <Block v-for="(benefit, index) in data.benefits" :key="index" half>
          <prismic-rich-text :field="benefit.title" class="mb-4" />
          <prismic-rich-text :field="benefit.content" />
        </Block>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'Benefits',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
