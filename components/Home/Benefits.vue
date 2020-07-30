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
          <Dots :index="index">
            <prismic-image :field="benefit.image" />
          </Dots>
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
