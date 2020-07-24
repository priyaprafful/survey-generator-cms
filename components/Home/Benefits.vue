<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <h2 class="text-center mb-16">
        {{ $prismic.asText(data.benefits_title) }}
      </h2>
      <div
        v-for="(benefit, index) in data.benefits"
        :key="index"
        class="flex mb-16 last:mb-0"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      >
        <Block half :row-reverse="index % 2 !== 0">
          <prismic-rich-text :field="benefit.title" class="mb-4" />
          <prismic-rich-text :field="benefit.content" />
        </Block>

        <Block half :row-reverse="index % 2 !== 0">
          <div class="bg-blue-2 w-full h-full" />
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
