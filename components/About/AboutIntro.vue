<template>
  <Wrapper>
    <Container>
      <div class="inline-flex leading-loose">
        <Block half class="inline-flex flex-col">
          <prismic-rich-text :field="data.section_title" class="mb-6" />
          <prismic-rich-text :field="data.section_content" />
        </Block>

        <Block half>
          <Dots>
            <prismic-image
              :field="data.section_image"
              class="object-cover about-image"
            />
          </Dots>
        </Block>
      </div>
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

<style scoped>
.about-image {
  clip-path: polygon(6% 6%, 100% 0%, 100% 89%, 0% 100%);
}
</style>
