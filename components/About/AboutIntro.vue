<template>
  <Wrapper>
    <Container>
      <div class="inline-flex leading-loose">
        <Block half class="inline-flex flex-col">
          <prismic-rich-text :field="data.section_title" class="mb-6" />
          <prismic-rich-text :field="data.section_content" />
        </Block>

        <Block
          half
          class="inline-flex flex-col relative"
          style="height: max-content;"
        >
          <div class="dots" />
          <prismic-image
            :field="data.section_image"
            class="object-cover z-10 jaja"
          />
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
.dots {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#aad7ed 1px, transparent 2px);
  background-size: calc(10 * 1px) calc(10 * 1px);
  margin-right: 40px;
  margin-top: 40px;
}

.jaja {
  clip-path: polygon(5% 10%, 100% 0%, 100% 75%, 5% 100%, 100% 100%, 0% 100%);
  margin-left: 40px;
  margin-bottom: 40px;
}
</style>
