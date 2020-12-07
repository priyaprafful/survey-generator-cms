<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <prismic-rich-text
        :field="data.benefits_title"
        class="text-center mb-16"
      />

      <BlockWrapper
        v-for="(benefit, index) in data.benefits"
        :key="index"
        :index="index"
      >
        <Block half :index="index">
          <prismic-rich-text
            :field="benefit.title"
            class="mb-6 text-lg text-blue-1"
          />
          <prismic-rich-text :field="benefit.content" class="rich-text" />
        </Block>

        <Block half :index="index">
          <VueStyledShadows
            :position="index % 2 === 0 ? 'bottomLeft' : 'bottomRight'"
            color1="#aad7ed"
            pattern-size="2"
            bg-size="25"
            margin="40"
          >
            <prismic-image :field="benefit.image" />
          </VueStyledShadows>
        </Block>
      </BlockWrapper>
    </Container>
  </section>
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
