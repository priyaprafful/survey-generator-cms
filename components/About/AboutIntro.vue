<template>
  <Wrapper>
    <Container>
      <BlockWrapper
        v-for="(section, index) in data.sections"
        :key="index"
        :index="index"
      >
        <Block half :index="index">
          <prismic-rich-text
            v-if="section.title.length > 0"
            :field="section.title"
            class="mb-6"
          />
          <prismic-rich-text :field="section.content" class="rich-text" />
        </Block>

        <Block half :index="index">
          <Dots>
            <prismic-image
              :field="section.image"
              class="object-cover"
              :class="{
                'about-image-left': index % 2 !== 0,
                'about-image-right': !index % 2 !== 0,
              }"
            />
          </Dots>
        </Block>
      </BlockWrapper>
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
.about-image-right {
  clip-path: polygon(6% 6%, 100% 0%, 100% 90%, 0% 100%);
}

.about-image-left {
  clip-path: polygon(100% 0%, 90% 100%, 0% 100%, 6% 6%);
}
</style>
