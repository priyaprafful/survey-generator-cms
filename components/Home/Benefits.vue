<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <h2 class="text-center mb-16">
        {{ $prismic.asText(data.benefits_title) }}
      </h2>

      <BlockWrapper
        v-for="(benefit, index) in data.benefits"
        :key="index"
        :index="index"
        class="leading-relaxed"
      >
        <Block half :index="index">
          <prismic-rich-text
            :field="benefit.title"
            class="mb-4 text-lg text-blue-1"
          />
          <prismic-rich-text :field="benefit.content" class="rich-text" />
        </Block>

        <Block half :index="index">
          <div class="bg-blue-2 w-full h-full" />
        </Block>
      </BlockWrapper>
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
