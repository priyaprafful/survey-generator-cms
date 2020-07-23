<template>
  <Wrapper>
    <Container>
      <div class="flex">
        <Block half class="leading-loose">
          <prismic-rich-text :field="data.section_title" class="mb-6" />
          <prismic-rich-text :field="data.section_content" />
        </Block>

        <Block half>
          <prismic-image
            :field="data.section_image"
            class="object-cover rounded"
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
