<template>
  <Wrapper>
    <Container>
      <h2 class="mb-16 text-center">Om oss</h2>

      <BlockWrapper
        v-for="(section, index) in data.about"
        :key="index"
        :index="index"
      >
        <Block half :index="index">
          <prismic-rich-text
            v-if="section.title.length > 0"
            :field="section.title"
            class="text-lg text-blue-4 mb-6"
          />
          <prismic-rich-text :field="section.content" class="rich-text" />
        </Block>

        <Block half :index="index">
          <VueStyledShadows
            :position="index % 2 === 0 ? 'bottomLeft' : 'bottomRight'"
            color1="#aad7ed"
            pattern-size="2"
            bg-size="25"
            margin="40"
          >
            <prismic-image
              :field="section.image"
              class="object-cover"
              :class="{
                'about-image-left': index % 2 !== 0,
                'about-image-right': index % 2 === 0,
              }"
            />
          </VueStyledShadows>
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
  mounted() {
    this.parallax();
  },
  methods: {
    parallax() {
      this.$gsap.utils.toArray('.vue-styled-shadows img').forEach((elem) => {
        this.$gsap.to(elem, {
          y: -25,
          scrollTrigger: {
            trigger: elem,
            start: 'top 75%',
            end: 'bottom',
            scrub: true,
            // markers: process.env.NODE_ENV !== 'production',
          },
        });
      });
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
